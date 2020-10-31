### 处理get请求

```
const express=require('express')
//处理request请求头为content-type:application/json的格式
express.use(express.json())
//处理请求头为content-type：application/x-www-form-unlencoded
express.use(express.urlencoded())

```

express 4.x版本已经不需要body-parser插件来处理了，直接集成在express中

