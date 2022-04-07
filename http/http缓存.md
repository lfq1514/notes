# http 缓存

## 什么是 http 缓存

1. http 缓存指的是: 当客户端向服务器请求资源时，会先抵达浏览器缓存，如果浏览器有“要请求资源”的副本，就可以直接从浏览器缓存中提取而不是从原始服务器中提取这个资源。
2. 常见的 http 缓存，只能缓存 get 请求响应的资源
3. http 缓存都是从第二次请求开始

-   第一次请求资源时，服务器返回资源，并在 respone header 头中回传资源的缓存参数

-   第二次请求，浏览器判断这些请求参数，命中强缓存就直接返回 200，否则就把请求参数添加到 request header 中，传给服务器，看是否命中协商缓存，命中，返回 304，浏览器使用本地缓存，否则，服务器返回新的资源

## 强缓存

-   在缓存未失效的情况下，不请求服务器，直接使用缓存
-   强制缓存生效期间，http 状态码为 200，ctrl+F5 可强制刷新请求
-   与强缓存相关的 header 属性有

    1. Pargma http1.0 中的，在 http1.1 中已被废弃
    2. Cache-Control，可设置的值有 max-age，no-cache，no-store(max-age 是一个相对时间)

        no-cache
        no-cache 使用 ETag/Last-Modified 响应头来告知客户端（浏览器、代理服务器）这个资源首先需要被检查是否在服务端修改过，在这之前不能被复用。这个意味着 no-cache 将会和服务器进行一次通讯，确保返回的资源没有修改过，如果没有修改过，才没有必要下载这个资源。反之，则需要重新下载。

        max-age=xxx:缓存的内容将在 xxx 秒后失效
        max-age=0
        max-age=0 表示不管 response 怎么设置，在重新获取资源之前，先检验 ETag/Last-Modified
        不管是 max-age=0 还是 no-cache，都会返回 304（资源无修改的情况下），

        no-store 才是真正的不进行缓存。

    3. Expires 设置的是一个绝对时间

-   浏览器判断缓存是否过期的步骤
    1. 查看是否有 Cache-Control 的 max-age，有的话利用这个时间判断是否过期
    2. 没有的话，根据 Expires 判断是否过期

## 协商缓存

Etag 与 If-None-Match 匹配，last-Modified 与 If-Modified-Since 与匹配

1. 当浏览器第一次向服务器发送请求时，会在响应头中返回协商缓存的头属性：ETag 和 Last-Modified
2. 其中 ETag 返回的是一个 hash 值，Last-Modified 返回的是 GMT 格式的最后修改时间
3. 然后浏览器在第二次发送请求的时候会在请求头中带上 If-None-Match 或者 If-Modified-Since（If-Not-Match 就是第一次返回的 Etag 的值，If-Modified-Since 就是 Last-Modified 的值）
4. 服务器在接收到这两个参数后会做比较，如果返回的是 304 状态码，则说明请求的资源没有修改，浏览器可以直接在缓存中取数据，否则，服务器会直接返回数据。

注意：如果同时发送 If-Not-Match 和 If-Modified-Since 字段，服务器值会比较 If-None-Match 与服务器中 Etag 的值是否相同，内容一致，使用缓存，否则请求服务器数据

### ETag 较 Last-Modified 的优势

ETag 是为了解决几个 Last-Modified 难以解决的问题

1. 一些文件也许会周期性的更改（不改变内容，仅改变修改时间），这个时候，使用 Etag 就能甄别出文件内容未更改，避免重启请求资源
2. 时间精度上的问题，Last-Modified 只能精确到 s 级，当文件在 1s 内被频繁修改时，Last-Modified 是无法判断出文件是否修改的

总结：利用 ETag 能够更加准确的控制缓存，因为 ETag 是服务器自动生成的资源在服务器端的唯一标识符，资源每次变动，都会生成新的 ETag 值，last-Modified 与 ETag 是一起使用的，但服务器会优秀验证 ETag
