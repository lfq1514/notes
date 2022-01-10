# 为什么Hooks重渲染时是依赖于固定顺序调用

背景：
在react-hooks中，hooks的重新渲染是依赖于固定顺序调用的，下面我们从hooks设计角度，以及众多开发者提供的替代方案角度来研究一下这个问题


## hooks的设计角度- 支持custom hooks

自定义hooks是hooks的一大重要功能，他支持我们复用状态逻辑
[官方自定义hooks文档](https://react.docschina.org/docs/hooks-custom.html)

## 替代方案 - 限制一个组件调用多次 useState()
首先说明一下，hooks是允许在useState来维护一个对象格式的状态的，我们再从其他角度衡量一下利弊
利：
1. 限制一个组件调用多次 useState()，可以与class保持一致（class组件内只维护一份状态）
2. 组件内只有一个state状态，就不存在调用顺序的问题了
弊：
1. 一个组件内，如果只能调用一次useState的，那么我们上面提到的自定义hooks的功能，将无法实现。
## 替代方案- 命名冲突 - useState中传入一个唯一的标志key

用key来区分是能摆脱调用顺序的问题，但是引入了另外一个问题-->命名冲突的问题

1. 自定义hooks的时候，内部定义的状态与组件内的状态可能会冲突，试想：你在维护别人写的一个项目，别人有写了很多自定义的hooks，自定义hooks里有维护其他的state，同时，组件内维护了其他很多的state，你再定义新的state状态的时候，你还要考虑是否会和其他人定义的state冲突（脑瓜子嗡嗡的）

2. 如果用Symbol来做标志呢？

emm，讲道理是可以了，但是还是可能会有问题，如下：
```tsx
const s=Symbol()
const [name,setName]=useState(s)
const [age,setAge]=useState(s)
```


3. 实际中 Hooks 提案通过依赖顺序调用来解决这个问题：即使两个 Hooks 都用 name state 变量，它们也会彼此隔离，每次调用 useState() 都会获得独立的 「内存单元」。

## 其他问题- 
