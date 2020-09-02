
# keep-alive的使用

## keep的作用

缓存不活动的实例(在切换到其他页面的时候,可以让当前页面不销毁)

## 使用

- 这里通过include来指定缓存指定的页面
- 需要在组件的script中指定name属性
- 可以通过vuex来记录跟踪要缓存页面的状态

```JavaScript
<keep-alive include="newsList">
    <router-view></router-view>
</keep-alive>

//在组件的页面中指定name属性
<script>
export default {
    name: "newsList",  //如果使用了keep-alive缓存该组件状态，则此组件必须有这个属性。
    data(){
        return {}
    }
</script>
```

## 使用场景

- 页面需要记录多个页签并在页面中显示,就需要使用keep-alive
