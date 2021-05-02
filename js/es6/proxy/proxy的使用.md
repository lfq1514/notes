# proxy

## proxy是什么
proxy可以对对象进行拦截，并定制拦截行为（可以是对象，数组或者函数）
使用形式:
```javascript

let target={name:'zs',age:111}
let nb=new Proxy(target,handle)
```
- target是要拦截的对象
- handle是自己定义的拦截行为（支持多达13中拦截行为）
- proxy的方法，返回值为false或true只是表示了状态，实际上并没有阻止行为
- Reflect与proxy类似，拥有的13种静态方法，与proxy一一对应，方法执行之后返回的布尔值表示执行是否成功，与proxy配合使用如丝般顺滑



## proxy的13中行为


### 1. get

get方法用来自定义proxy拦截的对象的取值行为，如：
```javascript
let target={name:'zs'}
const handle={
  get(target,key){
    console.log('这里拦截了get行为')
    // target[key]
    //与Reflect配合
    return Reflect.get(target,key)

  }
}
let nb=new Proxy(target,handle)
//这里会触发get函数
nb.name

//会触发get行为
``` 
- get函数不仅可以拦截原来对象中存在的属性，不存在的属性也可以拦截到,针对上面事例，如果操作nb.age,get也可以拦截到

### 2. set

set函数可以拦截对象的设置行为，可以是修改属性，也可以是添加属性
- 前两个参数与set一致，第三个参数value是设置的值
- 返回值为boolean，严格模式下，返回false会报错（本人测试了一下，普通模式下，返回false和返回true的行为一致，貌似没什么影响）
```javascript
et target={name:'zs'}
const handle={
  get(target,key){
    console.log('这里拦截了get行为')
    //  target[key]
    return Reflect.get(target,key)
  },
  set(target,key,value){
    console.log('这里拦截了set行为',target,key)
    //  target[key]=value
    return Reflect.set(target,key)

  }
}
let nb=new Proxy(target,handle)
//修改
nb.name='nb'
//添加
nb.test='test'

```

### 3. has

- 判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。
- 返回一个布尔值 
```javascript

let obj={name:'zs'}
let nb_obj=new Proxy(obj,{
  has(target,key){
    return Reflect.has(target,key)
  }
})

//会触发has方法
'name' in nb_pbj
```


### 4. apply
- 拦截函数的行为
- 对函数对调用,apply,call操作，进行拦截，在bind对时候，不做拦截，bind返回对函数执行对时候，也会拦截到
- apply的参数
  - target：要拦截的函数
  - ctx： 要拦截函数的上下文对象
  - args：函数的参数

```javascript
function fn(){
  console.log('fn')

}
let fn_proxy=new Proxy(fn,{
  apply(target,ctx,args){

  }
})

```

### 5. deleteProperty
- deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除
- 注意： 如果在deleteProperty中执行了删除操作，但是返回的是false,并不能阻止删除操作，影响的仅仅是delete 返回的结果

```javascript

let obj={name:'zs'}
let nb=new Proxy(obj,{
  deleteProperty(target,key){
    // delete target[key]
    return Reflect.deleteProperty(target,key)

  }
})

delete obj.name
//这里可以删除，但是delete obj.name返回的是false
```



### 6. defineProperty
- defineProperty()方法拦截了Object.defineProperty()操作。
```javascript
let obj={name:'zs'}
let nb=new Proxy(obj,{
  defineProperty(target,key){
    delete target[key]
    return false
  }
})

Object.defineProperty(nb,'age',{
  configurable: true,
  enumerable: true,
  value: 10,
})
//这里会触发 defineProperty 方法
```

### 7. ownKeys

- 拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组
- 使用Object.keys()方法时，有三类属性会被ownKeys()方法自动过滤，不会返回。
    - 目标对象上不存在的属性
    - 属性名为 Symbol 值
    - 不可遍历（enumerable）的属性



