# mobx

关联的知识点：
- mobx
- mobx-react
- 装饰器
- class 类

## 装饰器

1. 装饰器
- 以 @ 作为标识符，可以作用于类，也可以作用于类的属性.
- 装饰器本质就是编译时执行的函数。对类做了一层包装
- 一些主流框架，如 Angular 和 MobX 等开始使用它们来增加开发者体验

- 装饰器装饰类
    - 装饰类的时候，装饰器默认的参数是 类本身
        ```javascript
        //不带参数（装饰类的时候，默认的参数是类本身）
        @testable
        class Cat {}

        //装饰器函数
        function testable(target){
            target.isTest=true
        }

        //上面对代码在es5中是这个样子的
        testable(function Cat(){})
        //------------------------------------------------

        //带参数
        @testable(true)
        class Cat {}

        //装饰器函数
        function testable(isTest){
            return function(target){
                target.isTest=isTest
            }
        }

        ```
    - 装饰器装饰类的属性
         -  装饰器第一个参数是类的原型对象
         -  用法类似于 Object.defineProperty(Person.prototype, 'name', descriptor);
    ```javascript
    class Dog {
        @readonly
        run() {}
    }

   function readonly(target, name, descriptor){
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    descriptor.writable = false;
    return descriptor;
}
    ```

- 如果有多个装饰器装饰同一个类，那么执行的时候是"内层"开始执行

```javascript

//options是一个初始化对象
function init(options){
    return function (target){
        Object.keys(options).forEach((o)=>{
            target.o=options[o]
        })
    }
}
function addAge(age){
    return function (target){
        target.age=age
    }
}

@addAge(999)
@initHero({bv:Infinity,life:Infinity})
class Hero {

}
//这里的话就要先执行initHero，再执行addAge
```



## mobx是什么
mobx也是一个用来管理状态的，轻量级的库，相较于redux会更容易上手一点，对于react的一些中小型的比较适合

## mobx核心思想
工作原理：
1. mobx的工作原理非常简单，使用Object.defineProperty来拦截对数据的访问，一旦值发生变化，将会调用react的render方法来实现重新渲染视图的功能或者触发autorun等。
2. Mobx的核心原理是通过action触发state的变化，进而触发state的衍生对象（computed value & Reactions）。


![mobx](https://cn.mobx.js.org/flow.png)

1. State ( @observable )
    - 定义可观察的数据

2. Action (@ action)
    - mobx允许直接修改observable 观察过的状态，但是强烈建议通过action来改变状态
    - 异步方法也是通过action来执行，通过async ，await 

3. Computed Values（ @computed）
    - @computed
    - computed 是 根据现有的状态或其它计算值衍生出的值
    - 与vue中的computed的行为一致
    - 只有被使用到（比如说页面中的ui依赖computed的值），如果没有地方用到，即使computed依赖的状态改变，也不会重新计算值
    ```javascript


    ```
4. Reactions (@autorun ui更新等)
    - autorun
        - 总是先立即执行一次，如果里面的依赖值每次发生改变，都会自动执行（没有依赖，）
        - 和computed都区别在于，computed如果没有观察者，他都值就会被认为是不相关的，从而不会再次执行计算
        - autorun的使用情形：如打印日志
        - 传递给 autorun 的函数在调用后将接收一个参数，即当前 reaction(autorun)，可用于在执行期间清理 autorun。

## mobx怎么用

```javascript
class CommonStore {
    @observable carCount=2
    @observable carList=[]
    @observable defaultPrice=99

    //异步方法（通过async await）
    @action 
    initShopCar=async ()=>{
       const res=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const result={
                    count:2,
                    list:[
                        {shop:'apple',price:'10',unit:'元'},
                        {shop:'pear',price:'12',unit:'元'}
                        ]
                    }
                resolve(result)
            },1000)
        })
        this.carCount=res.count
        this.carList=res.list
    }
    //同步方法
    @action addShop=(shop)=>{
        this.carList.push(shop)
        this.carCount=this.carList.length
    }

    @computed get carPrice(){
        return this.defaultPrice*this.carCount
    }

}
const commonStore= new CommonStore()

export default commonStore


autorun(()=>{
    //这里每次defaultPrice发生改变，总会执行一次autorun
    console.log('price has been changed', commonStore.defaultPrice)
})




```


## mobx在react中怎么使用（mobx-react）


1. Provider/inject

- Provider

- inject


2. @observer
- observer 接收React组件作为参数，并将其转变为响应式组件
- 当可观察属性发生变化时，调用react组件的render方法重新渲染视图
- 当有多个装饰器与observer并用时，保证observer是最深处当装饰器
- 多个装饰器同时装饰一个对象当时候，是从里向外的


main.js 文件
```javascript
//从mobx-react中导出
import {Provider} from 'mobx-react'

//导入我们根据mobx写的store
import store from '../../store'

import App from '../container/App'

//在根组件中，通过Provider包裹

function layout(){
    render(){
        //这里提供store状态
        <Provider store={store}>
            <App/>
        <Provider>
    }
}

```
app.js文件
```javascript

@inject('store')
@observer
class App extends React.component{

    render(){
        const {carCount,carList}=this.props.store
        return (
            <div>{carCount}</div>
        )
    }

}
```


## mobx 在react hooks中的使用

1. 使用mobx，react-mobx，mobx-react-lite
2. mobx-react-lite 这个包给我们提供了一些自定义hooks，使得我们可以在组件中直接创建observables。


## mobx和redux之间的对比
1. 一个很重要的原因就是使用redux开发，代码量增多，复杂度增大，同时需要维护api，action，reducer（redux中修改一次状态，需要经过action，dispatch，reducer三个步骤）
2. mobx提供了更加细粒度的更新策略， mobx知道什么时候应该渲染页面，因此不需要手动设置shouldComponentUpdate来提高应用性能
3. Redux的编程范式是函数式的而Mobx是面向对象的；
4. 因此数据上来说Redux理想的是immutable的，每次都返回一个新的数据，而Mobx从始至终都是一份引用。因此Redux是支持数据回溯的；

[相关链接](https://zhuanlan.zhihu.com/p/36294638)
## 遇到的问题

1. mobx mobx-react版本高，引起的mobx数据更改，但是react未更新视图

当前 mobx 版本为^6.0.4 mobx-react版本为^7.0.5

解决方案
将mobx 版本降为^5.15.7，mobx-react 版本降为^6.3.0

2. 如果遇到其他渲染未更新的情况，参照[此链接](https://zhuanlan.zhihu.com/p/103674409)


