# 正则匹配的方法

## repalce 方法


### 语法

replace(reg,string|function(matchStr,$1,$2)=>{

})


### 使用


1. 字符串匹配替换

```javascript
const str = "my name is QY";

str.replace('name','mingzi')

str.replace(/name/i, "mingzi"); 
```

2. 正则匹配，获取匹配的内容（提取浏览器url中的参数名和参数值，生成一个key/value的对象）

```javascript

let params='e=utf-8&f=8&rsv_bp=1&tn=baidu&wd=js'

let obj={}
params.replace(/([^&=]+)=([^&=]*)/gi,function(rs,$1,$2){
obj[$1] = $2;

})

```


## match 方法