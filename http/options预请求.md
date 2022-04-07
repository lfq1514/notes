### 简单请求,非简单请求

[详见阮一峰老师文章](http://www.ruanyifeng.com/blog/2016/04/cors.html)

#### 简单请求

只要同时满足以下两大条件，就属于简单请求。

1. 请求方法是以下三种方法之一

    - HEAD,GET,POST

2. HTTP 的头信息不超出以下几种字段（设置了自定义的头部字段）

    - Accept,Accept-Language,Content-Language,Last-Event-ID， Content-Type

    - Content-Type:
      只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain

#### 非简单请求

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是 PUT 或 DELETE，或者 Content-Type 字段的类型是 application/json

非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为"预检"请求（options 请求）

#### options请求的目的：
咨询服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP方法和头信息字段。
