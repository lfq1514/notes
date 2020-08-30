### 本地存储

- HTML5中的web存储,实现了比cookie更好的本地存储
- localStorage用来实现长久保存,没有过期时间,需要手动清除
- sessionStorage 用于临时存储,关闭窗口或页签后会删除存储的数据
- 两者都是以key-value的形式存储数据的
- 如果要存储对象,直接存储的话,只会存储类型信息,需要转化成字符串再做存储

#### localStorage

```JavaScript
//保存数据
localStorage.setItem(key,value)
//获取数据
localStorage.getItem(key)
//删除某一个数据
localStorage.removeItem(key)
//删除所有数据
localStorage.clear();
//得到某一个索引的key
localStorage.key(index);

```


#### sessionStorage

- 应用场景:
    1. 敏感账号一次性登录

```JavaScript
//保存数据
sessionStorage.setItem(key,value)
//获取数据
sessionStorage.getItem(key)
//删除某一个数据
sessionStorage.removeItem(key)
//删除所有数据
sessionStorage.clear();
//得到某一个索引的key
sessionStorage.key(index);

```

