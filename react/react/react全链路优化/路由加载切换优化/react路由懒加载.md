# react 路由懒加载

## reac 路由懒加载的时候，需要用到 React.lazy 来异步加载组件,配合 React.Suspense 实现加载加载，主要是原理是让组件单独打包，在需要的时候去加载

```tsx
//魔法注释 会在编译的时候识别到，这里指定了webpackPrefetch：true，会让浏览器在空闲的时候加载这个组件
const lazyHome=React.lazy(()=>{import(
  /*webpackPrefetch:true */ 
  /*webpackChunkName: 'home' */ 
  './home.tsx')})
<React.Suspense callBack={<div>loading</div>}>
  <lazyHome/>
</React.Suspense>
```

## React.lazy 的实现

```tsx
function lazy(LoadComponent) {
  class LazyComponent extends React.component {
    state = { Com: null };
    componentDidMount() {
      LoadComponent().then((res) => {
        this.setState({Com:res.default})
      });
    }

    render(){
      const {Com}=this.state
      return Com&&<Com>
    }
  }
}
```
