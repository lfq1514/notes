### vue的MVVM原理

vue的MVVM实现了数据的响应式变化，具体的实现分为以下几步

1. vue中data数据渲染到页面上，vue将html结构转化为js语法，结合data中的数据，最后生成虚拟dom，执行render函数,将虚拟dom转化为真实dom,挂载到页面上
    - ast语法树：用对象的形式来表示html语法
    - 虚拟dom  :用对像来表示一个dom树结构
    - 模板编译(指令编译,插值表达式的编译替换,)

2. 将data中的数据转化为响应式数据，通过Object.defineProperty来实现劫持数据（给数据添加get和set方法），同时通过观察者模式结合发布订阅模式，在get的时候进行依赖收集，在set的时候，通知依赖更新
3. 当input等表单元素内容发生变化时,获取输入元素,触发set方法,