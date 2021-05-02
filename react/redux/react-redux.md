# react-redux

## connect 
connect接收两个参数：mapStateToProps和mapDispatchToProps（当然，这两个参数名可以定义成你喜欢的任何名称）

1. mapStateToProps
mapStateToProps接收两个参数
格式如下：
mapStateToProps(state, [ownProps])
- 第一个参数是store中的全部状态，如果定义了参数，组件将会监听redux store的变化，只要store发生改变，函数就会被调用
- 该函数必须返回一个纯对象，这个对象会与组件的props合并
- 如果省略了这个参数，你的组件将不会监听store的变化
- 第二个参数，为传递到组件的props，而且只要组件接收到新的props，mapStateToProps也会被调用
```javascript

```

2. mapDispatchToProps
- mapDispatchToProps的参数可能是一个对象，也可能是一个函数
- 如果参数是一个对象：对象的属性值就是redux-actions
- 如果参数是一个函数，函数的参数就是dispatch函数，


