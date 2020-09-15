### 简单请求,非简单请求

[详见阮一峰老师文章](http://www.ruanyifeng.com/blog/2016/04/cors.html)

#### 简单请求
只要同时满足以下两大条件，就属于简单请求。

1. 请求方法是以下三种方法之一

    - HEAD,GET,POST

2. HTTP的头信息不超出以下几种字段
    - Accept,Accept-Language,Content-Language,Last-Event-ID

    - Content-Type:
    只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

#### 非简单请求

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json

