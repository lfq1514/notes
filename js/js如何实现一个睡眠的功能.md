# js实现睡眠

在其他语言中有sleep这个功能，但是js没有提供，下面我们自己在js中实现一个sleep功能,本质原理就是让js同步执行一段空的代码，达到睡眠效果

```js

function sleep(delay){
  const start=Date.now()
   let current =start
  while(current-start<delay){
    current=Date.now()
  }
}


console.time()
sleep(2000)
console.timeEnd()
//在浏览器中执行的时间也基本上在2000左右，达到了我们睡眠的效果
```