#  react性能优化

## 编译阶段优化（webpack）


## 路由切换优化

1. 路由懒加载（预加载）

##  更新阶段优化

1. pureComponent

2. React.memo

3. immutable
pureComponent只能会数据进行浅比较，如果想要实现深比较，可以用immutable来实现数据结构的不可变


## 时间切片处理
1. requestAnimationFrame
  rAF回调函数会在浏览器每帧绘制之前执行
2. requestIdleCallback
   在浏览器空闲的时候执行

##  虚拟列表优化
react-tiny-virtual-list插件来实现
##  性能分析工具
- 谷歌插件 ：flameGraph

