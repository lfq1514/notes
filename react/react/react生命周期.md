# react 生命周期

react 生命周期会伴随 react 组件从创建到销毁整个过程，这里分为 react16 之前的生命周期及 16 之后到生命周期

## react16 之前到生命周期

react16 之前的生命周期可以根据阶段划分为几类

### 初始化

constructor

### 首次渲染阶段

- componentWillMount

- render
  render 之后会生成虚拟 dom（16 会生成 fiber 节点），会进行 diff 算法

- componentDidMount

在组件实例已经渲染到页面中之后执行

- shouldComponentUpdate(nextProps, nextState)
  在每次接收到 props 或者 state 时执行，默认会返回 true，在这里可以做性能优化

### 更新阶段

## react16 新增的生命周期

1. getDerivedStateFromProps
   - 可以将 Props 中的属性映射到 state 中（取决于返回值）
   - 这个生命周期是一个静态方法（使用时在前面加上 static），在组件重新渲染之前执行
   - 这个方法必须要有返回值，返回值将合并到 State 状态中（并不会覆盖 state），如果返回 null，将不对 state 进行更新

```js
 static getDerivedStateFromProps(nextProps,preState){
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

