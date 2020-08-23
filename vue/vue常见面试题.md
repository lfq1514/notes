### 常见面试题

#### 1.mvc和mvvm的理解

1. mvc是相交于传统前后台不分离的开发讲的，m代表model数据层，v代表视图层，c代表路由控制器。用户操作，会请求服务器路由，路由会调用相应的控制器，控制器获取数据，最后将数据返回给前端，页面进行重新渲染

2. mvvm 是后来针对前端的逻辑又进一步抽离成mvvm这样子的结构，model是从后台服务获取的数据，view是视图层，viewModel是中间层，用来实现数据的双向绑定，vue框架就是典型的mvvm结构。

3. 在vue中，通过Object.defineProperty，结合观察者模式，发布订阅模式，将数据转化为响应式的数据，实现数据变化，视图更新视图数据变化，数据随之更新。
    - 通过Object.defineProperty，给data中的数据添加get和set，以及给每一个依赖，添加具有发布订阅的功能。（也就是添加一个new Dep(),dep收集管理依赖的所有watcher，当依赖更新时，通知每一个watcher更新）

#### 2.vue的响应式变化原理

vue的响应式变化的核心原理，是通过Object.defineProperty来实现。具体的实现过程如下；

1. 在new Vue()的时候，先初始化状态(执行initState)

2. initState执行的时候，执行一系列初始化工作，initProps，initMethods，initData,initComputed,initWatch等，这里先着重看initData

3. initData的时候，会调用observe这个方法来观测数据，这里会执行new Observer()

4. new Observer()的时候，会根据数据时对象还是属性去分别执行不同的逻辑，对象的话执行this.walk,数组的话执行observeArray的逻辑（通过重写数组的方法实现数据劫持），这里继续将对象

5. 执行this.walk的时候，执行defineReactive，defineReactive也就是执行Object.defineProperty

6. 在Object.defineProperty的get执行的时候，执行dep.depend()收集watcher；在set执行的时候执行dep.notify()，通知watcher执行更新方法

#### 3.vue如何检测数组的变化

数组是通过改变数组原型上的方法来实现数据劫持的

1. vue中会拦截数组的方法（pop,push,shift,unshift,splice,sort,reverse,这里会改变原数组）,之后执行ob.dep.notify(),通知watcher执行更新的逻辑

2. 通过push,unshift,splice增加的元素，如果是对象，对转化为响应式的处理
