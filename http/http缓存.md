# http缓存

## 什么是http缓存

1. http缓存指的是: 当客户端向服务器请求资源时，会先抵达浏览器缓存，如果浏览器有“要请求资源”的副本，就可以直接从浏览器缓存中提取而不是从原始服务器中提取这个资源。
2. 常见的http缓存，只能缓存get请求响应的资源
3. http缓存都是从第二次请求开始

- 第一次请求资源时，服务器返回资源，并在respone header头中回传资源的缓存参数

- 第二次请求，浏览器判断这些请求参数，命中强缓存就直接返回200，否则就把请求参数添加到request header中，传给服务器，看是否命中协商缓存，命中，返回304，浏览器使用本地缓存，否则，服务器返回新的资源

## 强缓存

- 在缓存未失效的情况下，不请求服务器，直接使用缓存
- 强制缓存生效期间，http状态码为200，ctrl+F5可强制刷新请求
- 与强缓存相关的header属性有
  1. Pargma  http1.0中的，在http1.1中已被废弃
  2. Cache-Control，可设置的值有max-age，no-cache，(max-age是一个相对时间)
  3. Expires 设置的是一个绝对时间

- 浏览器判断缓存是否过期的步骤
  1. 查看是否有Cache-Control的max-age，有的话利用这个时间判断是否过去
  2. 没有的话，根据Expires判断是否过期

## 协商缓存

Etag与If-None-Match匹配，last-Modified与If-Modified-Since与匹配

1. 当浏览器第一次向服务器发送请求时，会在响应头中返回协商缓存的头属性：ETag和Last-Modified
2. 其中ETag返回的是一个hash值，Last-Modified返回的是GMT格式的最后修改时间
3. 然后浏览器在第二次发送请求的时候会在请求头中带上If-Not-Match或者If-Modified-Since（If-Not-Match就是第一次返回的Etag的值，If-Modified-Since就是Last-Modified的值）
4. 服务器在接收到这两个参数后会做比较，如果返回的是304状态码，则说明请求的资源没有修改，浏览器可以直接在缓存中取数据，否则，服务器会直接返回数据。

注意：如果同时发送If-Not-Match和If-Modified-Since字段，服务器值会比较If-Not-Match与服务器中Etag的值是否相同，内容一致，使用缓存，否则请求服务器数据

### ETag较Last-Modified的优势

ETag是为了解决几个Last-Modified难以解决的问题

1. 一些文件也许会周期性的更改（不改变内容，仅改变修改时间），这个时候，使用Etag就能甄别出文件内容未更改，避免重启请求资源
2. 时间精度上的问题，Last-Modified只能精确到s级，当文件在1s内被频繁修改时，Last-Modified是无法判断出文件是否修改的

总结：利用ETag能够更加准确的控制缓存，因为ETag是服务器自动生成的资源在服务器端的唯一标识符，资源每次变动，都会生成新的ETag值，last-Modified与ETag是一起使用的，但服务器会优秀验证ETag