# react-hooks怎么进行项目代码优化

函数式组件在更新的时候，默认是会更新所有的子组件的（不管传的props是否改变），为了避免性能上的浪费，所以我们需要对其进行优化

1. useEffect
useEffect执行的时机是组件更新之后

2. React.memo

3. useMemo

4. useCallBack

useCallBack和React.memo结合来优化




