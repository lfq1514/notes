# this几种情况

## 总结

1. 元素的事件绑定，事件触发，方法执行，方法中的this一般都是当前元素
2. 函数执行，看前面是否有 “点”，谁“点”出来的this就是谁，没有的话，this就是window（严格模式下是undefined）
   + 匿名函数或者回调函数中的this，window居多
3. 构造函数体中的this是当前类的实例
4. 箭头函数中没有自己的this，this都是上下文中的的
5. 基于call，apply，bind中的this是改变后指定的this

##  从规范层的确定this
知识铺垫：
+ Reference：
Reference类型就是解析诸如delete，typeof以及赋值等操作行为
Reference 的构成，由三个组成部分，分别是base value, referenced name, strict reference
base value 就是属性所在的对象或者就是 EnvironmentRecord

+ GetValue
调用GetValue返回的将是具体的值，而不再是一个Reference

+ IsPropertyReference(ref)
ref的 base value 是一个对象，就返回true

如何确定this：

1. 计算MemberExpression的结果赋值给ref
2. 判断ref是不是Reference类型

+ 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)
+ 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)
+ 如果 ref 不是 Reference，那么 this 的值为 undefined
