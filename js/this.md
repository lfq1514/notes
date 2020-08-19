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
+ GetValue
调用GetValue返回的将是具体的值，而不再是一个Reference

如何确定this：

