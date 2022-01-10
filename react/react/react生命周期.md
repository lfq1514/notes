# react 生命周期

react 生命周期会伴随 react 组件从创建到销毁整个过程，这里分为 react16 之前的生命周期及 16 之后到生命周期

## react16 之前到生命周期

react16 之前的生命周期可以根据阶段划分为几类

### 初始化

constructor

### 首次渲染阶段

-   componentWillMount
    react16 之后，这个生命周期已经被打上 unsafe，（UNSAFE_componentWillMount），
    因为 react16 升级了 react 结构，改用 fifber 结构，dom 的渲染变成可中断的渲染机制。所以可能会存在多次触发 componentWillMount。

-   render
    render 之后会生成虚拟 dom（16 会生成 fiber 节点），会进行 diff 算法

-   componentDidMount

在组件实例已经渲染到页面中之后执行

-   shouldComponentUpdate(nextProps, nextState)
    在每次接收到 props 或者 state 时执行，默认会返回 true，在这里可以做性能优化

### 更新阶段

## react16 新增的生命周期

1. getDerivedStateFromProps
    - 第一个参数是组件传进来的props，第二个参数是组件最新的state，返回值将于state进行合并。
    - 可以将 Props 中的属性映射到 state 中（取决于返回值）
    - 这个生命周期是一个静态方法（使用时在前面加上 static），在组件重新渲染之前执行
    - 这个方法必须要有返回值，返回值将合并到 State 状态中（并不会覆盖 state），如果返回 null，将不对 state 进行更新
    - 如果 getDerivedStateFromProps 和 废弃的willXXX生命周期 同时用的时候，废弃的willXXX生命周期不会生效

```js
 static getDerivedStateFromProps(nextProps,nextState){
   return {
     ...nextProps
   }
  }
```

2.

## react16 要废弃的生命周期

componentWillMount
componentWillUpdate
componentWillReceiveProps
componentWillUnmount
