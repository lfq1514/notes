# get 和 post 请求的区别

## get 请求

-   参数放在 url 上，但是浏览器的限制
-   get 请求没有请求体
-   不安全

## post 请求

-   相对 get 请求安全一些
-   http 默认传递数据都是明文的

## options （跨域时出现），只有复杂

-   预检请求
-   跨域时出现
-   只有‘复杂’请求的时候才会出现（默认 get 和 post 都是简单请求，其他的是复杂请求）

-   get，post 请求中，如果自定义了 header 信息，就会变成复杂请求

-   预检请求的时候可以自己控制，（可以控制发送 options 的间隔时间，服务端可以控制）
