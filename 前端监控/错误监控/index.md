# 错误监控的方法

1. error 事件

```js
window.addEventListener("error", () => {});
```

2. promise.catch

3. try-catch

4. unhandledrejection 事件

```js
window.addEventListener("unhandledrejection", (e) => {
    console.log("-----未捕获的错误------");
    console.log(e);
});
```
