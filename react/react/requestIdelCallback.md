# requestIdelCallback
在react16的filber架构中用到了requestIdelCallback的思想，所以我们主要围绕react对这个api的使用来做解释说明

##  requestIdelCallback的应用
requestIdelCallback会在浏览器的空闲时段内被调用（咋浏览器当前帧渲染完调用）
- 语法
```ts
var handle = window.requestIdleCallback(callback,options)
```
  - options 是指定的超时时间，如果浏览器比较繁忙，一直没有空余时间来执行requestIdleCallback的回调，那么在到了这个时间之后，就会强制执行这个回调（这样的话，可能会对浏览器性能造成影响）

## requestIdelCallback的应用的缺陷
引用原话：
```text
requestIdleCallback is called only 20 times per second - Chrome on my 6x2 core Linux machine, it's not really useful for UI work.
```
这句话的意思就是：
 requestIdleCallback 只能一秒调用回调 20 次，而现在的浏览器的刷新频率基本都达到了60帧/s，所以他并不适用于react中，再所以，react要自己去实现requestIdleCallback

## react是如何实现requestIdelCallback的
