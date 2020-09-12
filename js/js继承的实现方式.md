### 中继承的几种实现方式

#### 1. 原型链继承

- 本质上是重写原型对象,用一个新类型的实例取代

- 缺点:
    1. 原型中包含引用类型的问题,继承之后的子类,创建的多个实例,会共享原型上的引用类型的值
    2. 不能向父类构造函数传递参数

```JavaScript

function Super(){
    this.mans=['teacher','doctor','student']
}

function Sub(){
}

//继承实现---
Sub.prototype=new Super()
//

```

#### 2. 借用构造函数

- 解决了原型中引用类型值的问题
- 可以向父类传参
- 问题:

1. 方法在构造函数中定义,每次创建实例都会创建一遍方法
2. 无法拿到父类原型上的方法

```JavaScript

//父类
function Super(){
    this.colors=['red','blue']
}
Super.prototype.sayHi=function(){}

//子类
function Sub(){
    //实现继承,但是无法拿到Super原型上的方法
    this.Super.call(this)
}
```

#### 3. 组合继承(伪经典继承)

- 结合原型链和构造函数,通过借用构造函数实现对实例属性的继承,通过原型链实现对原型属性和方法的继承

- 问题 :调用了两次父类构造函数(对于下面案例,执行了两次Super),这也就是为什么又称之为"伪经典继承"的原因

```JavaScript
function Super(){
    this.colors=['red','blue']
}
Super.prototype.sayHi=function(){}

//1.借用构造函数实现实例属性的继承
function Sub(){
    Super.call(this)
}

//2.通过原型链,实现原型上方法和属性的继承
Sub.prototype=new Super()

let sub1=new Sub()

```

#### 4. 原型式继承

- 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
- 缺点: 包含引用类型的属性值会共享,和原型链继承一样

```JavaScript

function createObj(o){
    function Fn(){}
    Fn.prototype=o
    return new Fn()
}
```

#### 5. 寄生式继承

- 创建一个仅用于封装继承过程的函数,该函数在内部以某种形式来做增强对象,最终返回对象
- 缺点:跟借用构造函数模式一样,每次创建对象都会创建一遍方法

```JavaScript
function createObj(o){
    var clone Object.create(o)
    clone.sayName=function(){
        console.log('hi')
    }
    return clone
}
```

#### 6. 寄生组合式继承(经典继承)

- 解决了伪经典继承中,构造函数执行两次的问题
- 问题:

1. 会覆盖Sub的protoType上定义的属性和方法

```JavaScript
function Super(){
    this.colors=['red','blue']
}
Super.prototype.sayHi=function(){}

//1. 借用构造函数实现实例属性的继承
function Sub(){
    Super.call(this)
}

//在这里定义的原型上的方法,会被下面执行步骤覆盖
//Sub.prototype.saySomething=function(){}

//2. 通过原型链实现原型属性和方法的继承

// Object.create,将传入的对象作为创建的对象的原型。如传进来的对象(obj1),创建新的对象(obj2),此时obj2._proto_=obj1

Sub.prototype=Object.create(Super.prototype)

let sub1=new Sub()

```

#### 7. ES6的继承

es6的class通过extend实现了继承

```JavaScript
class Super {
    constructor(name){
        this.tip="我能实现继承"
        this.name=name
    }
}

class Sub extends Super {
    constructor(name,age){
        super(name)
        this.age=age
    }
}

let sub1=new Sub("张三",12)

```
