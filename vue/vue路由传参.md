# vue路由传参的方式
## 1.params传参
```
//传递
  this.$router.push({
    name: 'billDetail',
    params: {
        billSn: billSn
    }
    })
//接收
在billDetail对于的组件中通过this.$route.params获取传递过来的参数
```
注意： 刷新后获得的参数会消失
## 2.query传参
```
//传递
 this.$router.push({
    name: 'billDetail',
    query: {
        billSn: billSn
    }
    })
//接收
在billDetail对于的组件中通过this.$route.query获取传递的参数
```
 注意：1. query传递的参数会拼接在url的路径上,如下：
    ```
    https://localhost:9527/#/bill/billDetail?billSn=2020070729
    ```
    2. 刷新后获得的参数不会消失

## 3.动态路由传参（我一般不这么传）
```
//传参
 this.$router.push({
    path: `/bill/billDetail/${billSn}`,
})

//这里还要注意在路由中做一些配置
{
     path: 'billDetail/:id',
     component: Describe
}
//接收
在billDetail对于的组件中通过this.$route.params获取传递过来的参数

```
总结：在params和query传参的时候，可以通过name来指定匹配的路由，也可以用过path来匹配指定的路由，依个人习惯来选择

