### vue的MVVM原理

vue的MVVM实现了数据的响应式变化，具体的实现分为以下几步

1. vue中data数据渲染到页面上，vue将html结构转化为js语法，结合data中的数据，最后虚拟dom，之后挂在到页面上
    - ast语法树：用对象的形式来表示html语法
    - 虚拟dom
    - 模板编译

2. 将data中的数据转化为响应式数据，通过Object.defineProperty来实现劫持数据（给数据添加get和set方法），同时通过观察者模式结合发布订阅模式，在get的时候进行依赖收集，在set的时候，通知依赖更新