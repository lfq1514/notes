# class 之 extends 继承

extends 是 es6 实现继承的方式。
子类可以继承父类上的普通的方法（即父类原型上的方法），也可以继承父类的静态方法

## extends 的两条继承链（假设子类 B，父类 A）

```js
class B extends A {}
```

1. B.**proto**===A
   即可以通过子类 B 访问父类 A 上的静态方法

2. B.prototype.**proto**=A.prototype
   翻译一下就是，在子类 B 的实例中，可以访问到父类 A 上的普通方法（即 A 的原型上的方法）
   （在子类中，可以通过 this，或者 super 来调用父类上的普通方法，super 在普通对象和构造函数中使用上是有区别的，稍后会提到 super）

## super

在 class 继承中，在子类的构造函数中必须调用 super,否则就会报错

super 既可以作为对象，也可以作为函数

-   super 作为函数
    在子类中的构造函数中（constructor）使用 super，super 代表父类的构造函数，通过 super()执行
-   super 作为对象
    在子类的普通方法中，super 是一个对象，代指父类的原型对象

    ES6 规定，在子类普通方法中通过 super 调用父类的方法时，方法内部的 this 指向当前的子类实例。

## class 继承与构造函数继承有什么区别

1. class 的原型上的方法，是不可枚举的，构造函数的原型上的方法是可枚举的

2. 类 必须通过 new 来调用，而构造函数可以当做函数直接调用
