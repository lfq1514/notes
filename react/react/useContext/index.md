# useContext

前言:

1. Context 是什么
2. useContext 是什么
3. useContext 怎么用，有什么应用场景
4. class 中 Context 的使用

## 1. Context 又是什么

Context 直意是上下文/环境的意思，
上下文我们可以理解为是一个可以承载数据的环境。我们可以从这个环境中把数据取出来使用，（以下的概念中环境===上下文）

接下来带着这三个问题继续：

-   1. Context 是怎么来的
-   2. 数据是怎么装到Context去的
-   3. 数据又是怎么从Context取出来的

这里我们先来解答问题 

### 问题 1: Context 是怎么来的

-   react 中提供了一个 api，React.createContext，来创建一个上下文，创建的时候可以初始化数据。

-   Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

```tsx
import { createContext } from "react";
const MyContext = createContext({ name: "zs", age: 14 });
```

### 问题 2：数据是怎么装进去的

创建的 context 会提供一个 Provider 属性，Provider 中可以通过 value 属性把数据装到我们的环境中

###  问题3： 数据是怎么取出来的

这个就是涉及到我们要讲的useContext，

函数式组件是通过useContext

类组件是通过 Context.Consumer



## 2. useContext 是什么

我们首先要了解一个概念，函数式组件里的 hooks，hooks 的规则，就是以 use 开头。所以 useContext 是我们 hooks 的一种。

接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value 属性 决定。



## 3. useContext 怎么用

useContext
具体怎么使用呢

```js
const MyContext = React.createContext({ list: [], detail: {} });
function Child() {
    const data = useContext(MyContext);
    return (
        <div>
            {data.name}:{data.age}
        </div>
    );
}
function Home() {
    <MyContext.Provider value={{ name: "zs", age: "14" }}>
        <Child />
    </MyContext.Provider>;
}
```

## 在 class 中怎么使用 Context

useContext 是函数式组件中，使用 Context 的方式，在 class 组件中，我们也有提供对应的方法，即 Context.Consumer

这里我们把 Child 函数式组件，改成 class 组件

```tsx
import { MyContext } from "./xxxx";

class Child extends React.Component {
    constructor() {}

    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(data) => {
                        return (
                            <div>
                                {data.name}:{data.age}
                            </div>
                        );
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
```
