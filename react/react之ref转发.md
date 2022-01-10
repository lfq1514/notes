# react 之 ref 转发

## 前言：

ref 用于访问在 render 方法中创建的 DOM 元素或者是 React 组件实例
ref 是不能作为自定义属性，向下传递的，如果要向下传递，就要通过 ref 转发的功能，即，React.forwardRef 来实现。

## 实践：

1. React.createRef

```tsx
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
    };
    this._ref = React.createRef();
  }

  componentDidMount() {
      //这里就可以获取到div的dom元素了
    console.log("ref===", this._ref.current);
  }
  render() {
    return (
      <div>
        <RefComponent ref={this._ref} />
      </div>
    );
  }
}
const RefComponent = React.forwardRef((props, ref) => {
  return <Child myRef={ref} />;
});

class Child extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {}

  render() {
    const myRef = this.props.myRef;
    return <div ref={myRef}>{JSON.stringify(this.props)}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
```


相关链接：

[Ref 使用的三种方式](https://zhuanlan.zhihu.com/p/64412949)
推荐使用最后一种。
