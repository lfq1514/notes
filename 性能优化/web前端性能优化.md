# 性能优化

## 资源加载时的优化(减少 http 请求)

1. 开启 Gzip 压缩，
2. 合理利用缓存（强缓存，协商缓存）
3. 在请求资源多的情况下，将资源放到不同的域下，规避浏览器同一域名下的请求限制
4. 异步加载资源（async,defer，preload，prefetch）
5. 压缩资源体积，大小(webpack)

## 渲染优化

1. 避免回流重绘
2. 采用 css 新技术，开启硬件加速（transform opacity animation）
3. 动画脱离标准流
4. script 放到最下面，css 放到页面顶部

## 体验优化

1. 骨架屏
2. 图片懒加载

## 渲染后的优化

1. 防抖，节流

## CRP 优化

1.  关键资源数量

2.  关键字节（关键资源大小）

[前端性能优化](https://zhuanlan.zhihu.com/p/113864878?from_voters_page=true)

tips:

### preload VS prefetch

preload 告诉浏览器当前页面我会用到这个资源，请尽快加载，优先级比 prefetch

prefetch 告诉浏览器这个资源我可能会用到，等页面加载完成后，有空了再加载
