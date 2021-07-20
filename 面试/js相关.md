1. Event Loop 
   - js是单线程的，js的任务可以概括为两种，同步任务，异步任务，异步任务还可以分为宏任务，微任务
   - 微任务的优先级高于宏任务
       微任务：Promise.then, MutationObserver,Object.observe(被弃用了)
       宏任务：setTimeout, setInterval, setImmediate, I/O, UI rendering
  

2. script 标签的async defer 

2. 可以解释一下对闭包的理解吗？实际开发场景中的作用？
  闭包可以理解为是一个函数。只是这个函数引入了自由变量（我们把既不是函数参数，由不是函数内定义的变量定义为自由变量）
  闭包的两个作用：
  - 保护
  - 保存
  - 2.1 闭包里面没有返回引用的函数，而是返回了一个对象，对象的其中一个属性，指向这个引用函数，那么还属于闭包吗
  如果这个函数引入了自由变量，就属于闭包
  ```js
  //例如：
  function fn1(){
    function fn2(){}
    return {
      name:'test',
      fn:fn2
    }
  }
  ```

3. this的理解

4. 继承的实现方式

5. 原型，原型链
```js
Function.__proto__ === Function.prototype
Function.prototype===Object.__proto__
```
6. 执行上下文（AO，VO，作用域链）

7. 数据类型转化
  ```js
  //结果是多少，为什么
  console.log([]==[])
  ```
8. 深浅拷贝
- 浅拷贝
借用数组的方法
- 深拷贝
   - JSON.stringify
     - 缺点

9. 数据类型判
  - typeof
    - typeof null 为什么是一个object
  - instanceof
  - Object.prototype.toString()

10. es6
   - async,await
   - promise
   - Proxy
   - symbol
   - Map和Object的区别
   - let，const ，var，暂时性死区
   - es2020等最新的方法有了解过吗
11. js中的错误处理
   - try-catch
     try-catch 捕获不到异步任务中的错误

12. 节流防抖

13. promise

8. 函数柯里化

5. promise的理解
 - promise的实现
 - promise.all的实现



