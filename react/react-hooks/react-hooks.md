# react-hooks 的使用

1. Hook 是 React 16.8 的新增特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

2. Hook 允许我们按照代码的用途分离他们， 而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。

## react-hooks 使用规则

1. 只在最顶层使用 Hook

-   不要在循环，条件或嵌套函数中调用 Hook，确保总是在你的 React 函数的最顶层调用他们，遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。（Hooks 重渲染时是依赖于固定顺序调用的，）
    [为什么顺序调用对 React Hooks 很重要？](https://zhuanlan.zhihu.com/p/142383753)

2. 只在 React 函数中调用 Hook

## 常用钩子

### useReducer

-   如果 state 逻辑比较复杂的时候，或者下一个 state 依赖于之前的 state 的时候等

```javascript
function reducer(state, action) {
    switch (action.type) {
        case "inc":
            return { ...state, number: state.number + 1 };
        case "dec":
            return { ...state, number: state.number - 1 };
        default:
            return state;
    }
}
const initState = { number: 0 };
const [state, dispatch] = useReducer(reducer, initState);

const addNum = () => {
    dispatch({ type: "inc" });
};
```

### useState

-   useState 是基于 useReducer 实现的
    下面是自定义 useState 的实现

```javascript
//自定义useState

function useState(initState) {
    function reducer(state, action) {
        return action.payload;
    }
    const [state, dispatch] = useReducer(reducer, initState);
    const setState = (payload) => {
        dispatch({ payload });
    };
    return [state, setState];
}
```

-   useState 的使用

```javascript
 const [count, setCount] = useState(0);
 //count是依赖，setCount用来更新依赖状态

 const lazyHandle(){
    setTimeout(()=>{
      setCount(count+1)
    },3000)
 }

 //假设这里有一个点击的方法
 const onPress=()=>{
   setCount(count+1)
 }


```

-   -   如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：

```tsx
 const [obj,setObj]=useState(()=>{name:'as'}})
```

### useEffect

-   可以把 useEffect 看成是把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
-   useEffect 是在组件渲染的时候执行的，（包括初次渲染和再次渲染）
-   赋值给 useEffect 的函数会在组件渲染到屏幕之后执行
-   当你调用 useEffect 时，就是在告诉 React 在完成对 Dom 对更改后运行你对‘副作用’函数

#### 不需要清除的 effect

```javascript
useEffect(() => {
    updateUI();
});
```

#### 需要清除的 effect

使用场景: 比如说一些时间绑定，定时器等

1. 在 useEffect 中返回一个函数，React 将会在执行清除操作时调用它
2. effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次

```javascript
let time = 0;
useEffect(() => {
    const timer = setTimeOut(() => {
        time++;
    });
    return () => {
        clearTimeOut(timer);
    };
});
```

#### effect 性能优化

-   这里在 effect 中传入了第二个参数，effect 的执行函数依赖于第二个参数，在组件重新渲染的时候，会将上一次渲染的 count 和后一次的 count 进行比较，只有在不同的时候，才会再次执行 effect 的执行函数

```javascript
useEffect(() => {
    updateUI();
}, [count]);
```

-   如果第二个参数是一个空数组，那么就等价于之前的 componentDidMount 生命周期

```javascript
useEffect(() => {
    updateUI();
}, []);
```

#### 如何在 useEffect 中使用 await 和 async

由于 useEffect 的执行函数返回都只能是一个清除函数，或者什么都不返回。如果使用了 async await，因为 async 函数返回都是一个 promise，所以会报错

错误事例如下：

```js
useEffect(async () => {
    const a = await getList();
});
//此时就会报错
```

正确事例

```js
useEffect(() => {
    const getHttpsData = async () => {
        const res = await Promise.resolve([{ name: "1", age: 1 }]);
    };
    getHttpsData();
});
```

### useMemo

-   把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。
-   传入 useMemo 的函数会在渲染期间执行
-   useMemo 可以用来缓存值

-   应用场景

1. 用来缓存值，避免重新执行上下文

```javascript
const memoNum = useMemo(() => {
    return num1 + num2;
}, [num1, num2]);
//.current就是ref中的值
```

2. 减少不必要的 dom 循环

```js
const ListView = useMemo(() => {
    return userList.map((i, k) => {
        <View>
            <Text>{i.name}</Text>
            <Text>{i.age}</Text>
        </View>;
    });
}, userList);
//只有userList变化的时候才会重新执行
```

3. 避免子组件的不必要的渲染

```js
const ChildView = useMemo(() => {
    <Child total={total} />;
}, total);
//只有total更新的时候，才会重新渲染Child组件
```

### useCallBack

-   把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。避免渲染的时候每次创建新的函数
-   函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来
-   useCallback 的真正目的还是在于缓存了每次渲染时 inline callback 的实例，这样方便配合上子组件的 shouldComponentUpdate 或者 React.memo 起到减少不必要的渲染的作用。需要不断提醒自己注意的是，在大部分 callback 都会是 inline callback 的未来，React.memo 和 React.useCallback 一定记得需要配对使用，缺了一个都可能导致性能不升反“降”，毕竟无意义的浅比较也是要消耗那么一点点点的性能。

```javascript
const memoizeCallBack = useCallBack(() => {
    doSomething();
}, []);
```

使用场景

1. 传递一些回调函数给子组件的时候

```javascript
function CallBackPage(id) {
    const onConfirm = useCallBack(() => {
        console.log("xxxxxx");
    }, [id]);
    return <Child onConfirm={onConfirm} />;
}
//如果不优化，每次重新渲染的时候，都会生成一个新的onConfirm，导致Child重新渲染,记得要和react.memo配合使用
```

2. [创建的方法传递给自组件的时候，引起不必要的渲染](https://www.jianshu.com/p/259ce5befa4a)
3. [useCallBack 使用时的一些思考](https://zhuanlan.zhihu.com/p/56975681)
4. [聊聊 hooks useCallBack](https://zhuanlan.zhihu.com/p/56975681)

### useRef

-   useRef 不仅仅是常用来管理 DOM ref,还相当于 this，可以存放任何变量（由于函数式组件没有了 class 组件的 this，可以通过 useRef 来存放变量）

-   应用场景

1. 创建一个和函数组件关联的对象，函数组件不销毁，这个对象就会存在，和之前的 class 组件的 this 有类似之处

```javascript
import {useRef} from 'react'
function TestPage(){
  let timer=useRef(null)
  const [count,setCount]=useState(0)

 timer= setInterVal(()=>{
    setCount(count+1)
  },100)

  useEffect(()=>{
    return ()=>{
      timer&&clearInterval(timer)
    }
  })
  return (
    <View> <View>
  )
}
```

2. 用来获取 dom

```js
function PageOne() {
    const dom = useRef(null);
    return <View ref={dom}></View>;
}
//这里获取的dom有一个current，指向我们想要获取的dom
```

相关链接： 1.[useRef 和 createRef 的区别](https://blog.csdn.net/frontend_frank/article/details/104243286)

#### useRef 和 createRef 的区别

useRef 每次返回的是相同的引用，createRef 每次返回的是一个新的引用

### useLayoutEffect

-   useLayoutEffect 是同步执行的，是在渲染之前执行（而 useEffect 是异步执行，是在渲染之后执行的）
-   使用场景，如果是异步获取网络数据，并且想将数据同步到页面，而不是先显示默认初始值，再显示请求回来的数据（如果是使用 useEffect，则会有一个先显示初始值，再显示获取的的网络数据，会有数值闪跳的现象）

参考文章：

1. [解析 useEffect 和 useLayoutEffect](https://juejin.cn/post/6862624266723000328)

### useContext

```javascript

```

## 自定义 hooks

-   hook 是一种复用状态逻辑的方式，它不复用 state 本身
-   自定义 hook 更像是一种约定，而不是一种功能，如果函数的名字以 use 开头，并且调用了其他的 hook，就可以称之为一个自定义 hook

```javascript

useAjax(url){
  const [data,setData]=useState(null)
  function sendRequest(){
    fetch(url)
    .then((res)=>{
      setData(res)
    })
  }
  useEffect(sendRequest,[])
  return data
}


```

-   在 react-hooks 中实现 react 初次加载的声明周期

```javascript
function useFirstLoad() {
    const isFirst = useRef(false);
}
```

## redux 在 react-hooks 的使用

### useStore

useStore 有一个 getState 方法，这个方法可以获取 redux 的所有状态

```javascript
import { useStore } from "react-redux";
```

### useSelector

useSelector 的参数式一个回调函数，函数的参数是 store 中的所有状态，函数的返回值 就是 useSelector 回调的返回值

```javascript
import { useSelector } from "react-redux";
useSelector((state) => {
    //state就是store中的全部状态
});
```

### useDispatch

```javascript
import { useDispatch } from "react-redux";
```
