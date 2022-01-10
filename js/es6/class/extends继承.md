# class 之extends继承

extends是es6实现继承的方式。
子类可以继承父类上的普通的方法（即父类原型上的方法），也可以继承父类的静态方法

## extends 的两条继承链（假设子类B，父类A）

```js
class B extends A{

}
```

1. B.__proto__===A
即可以通过子类B访问父类A上的静态方法

2. B.prototype.__proto__=A.prototype
翻译一下就是，在子类B的实例中，可以访问到父类A上的普通方法（即A的原型上的方法）
（在子类中，可以通过this，或者super来调用父类上的普通方法，super在普通对象和构造函数中使用上是有区别的，稍后会提到super）


## super
在class 继承中，在子类的构造函数中必须调用super,否则就会报错

super既可以作为对象，也可以作为函数

- super作为函数
在子类中的构造函数中（constructor）使用super，super代表父类的构造函数，通过super()执行
- super作为对象
在子类的普通方法中，super是一个对象，代指父类的原型对象
