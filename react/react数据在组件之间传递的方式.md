# react 数据在组件之间传递的方式

## 背景

在 react 项目开发中，我们会时不时的遇到数据传递的情况：

1. 将父组件的值，传递给子组件（甚至 sun 组件）
2. 将一个子组件的值，传递给另外一个子组件（前提是两个组件有共同的父节点）

## 实现方式

### 1. 父组件传递给子组件

我们常见的是场景是父组件传递给子组件
我们会通过 props 的方式传递，

```jsx
function Father() {
    return (
        <div>
            <Child num="11" />
        </div>
    );
}
function Child(props) {
    return <div>{props.num}</div>;
}
```

### 2. 父组件传递给孙组件(React.createContext)

-   我们也可以通过 props 的方式传递，但是如果传递到更深层级呢，通过 props 传递的方式就会显的代码冗余且复杂，不便于维护，也不便于日后查阅。
-   这个时候 context 就呼之欲出

-   先大概说一下 context 怎么用，其实很简单，要三步走

第一步：定制 context,根据我们的实际场景，定义 context 的类型（主要是为了区分不同的上下文，比如在电商行业，我们可能会在订单，购物车等不同场景下来传递组件）
tips:React.createContext 的参数式默认值，在使用的时候，如果没有提供就会使用这里的默认值

```tsx
// src/common/ReactContext.js
//购物车
const CarContext = React.createContext({num:0,money:0});
//商品
const ShopContext = React.createContext({total:0，sale:0});

export {
    CarContext,
    ShopContext
}
```

第二步：在父组件中，定义要传递的值
引入我们创建好的 context,然后使用 context.provider,这里我们定义的是 CarContext，那么我们的使用就是 CarContext.provider，如下

```tsx
// src/components/App.js

//引入我们创建好的context,
import { CarContext } from "../../common/ReactContext.js";

class Father extends React.components {
    constructor() {
        super();
        this.state = {
            num: 100,
            money: 20000,
        };
    }
    render() {
        const { num, money } = this.state;
        return (
            <div>
                <CarContext.Provider value={(num, money)}>
                    <Child />
                </CarContext.Provider>
            </div>
        );
    }
}
```

第三步,子组件接手传递过来的值

-   引入我们创建好的 context,然后使用 context.Consumer,这里我们的是 CarContext.Consumer，然后我们就能使用父组件传递过来的是 value 值了

-   这里我们是直接在子组件中使用的，如果你是要在更深层级使用，直接在你使用的地方，通过 context.Consumer，就能获取到上层组件传递过来的 value 值了（前提是你在上层组件定制了 Provider，并传递了 value）

```tsx
// src/components/Child.js
import { CarContext } from "../../common/ReactContext.js";
class Child extends React.components {
    render() {
        return (
            <div>
                <CarContext.Consumer>
                    {(context) => {
                        <div>
                            <div>{context.num}</div>
                            <div>{context.money}</div>
                        </div>;
                    }}
                </CarContext.Consumer>
            </div>
        );
    }
}
```
