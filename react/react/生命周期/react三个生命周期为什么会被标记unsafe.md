# 不安全的生命周期

1. componentWillMount

react 升级为 fiber 架构后，组件更新采用异步可中断的方案，会导致 componentWillMount 多次执行。

2. componentWillReceivedProps

这个生命周期是否执行，在底层会判断 当前组件上次更新时的 props,以及 JSX 对象上的 props 属性是否相同，但是他们两个是不同的两个引用地址，所以父组件的每次重新渲染，都会触发 componentWillReceivedProps 的执行

3.
