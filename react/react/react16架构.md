# react 16 架构

react16架构可以分为三层

## Scheduler(调度器)
- 负责调度任务优先级
- 负责在浏览器空闲时，触发
## Reconciler(协调器)
- 负责找出变化的组件（过程可中断）
## Renderer(渲染器)
- 根据reconciler为虚拟dom打的标记，同步执行dom操作

