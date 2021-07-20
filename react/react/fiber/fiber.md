# filer学习

1. 帧的概念
目前大多数屏幕的刷新频率是60次/s（≈16.6ms），动画或者绘制，要求频率和设备的刷新频率保持一致，这样子才不会出现卡顿的情况

requestAnimationFrame
在每帧的渲染之前执行

requestIdleCallback
浏览器在每帧空余时间执行

2. 单链表
单链表是一种链式存取的数据结构
在fiber中很多地方都用单链表

generate性能较差（会有一些兼容上的问题），而且低版本浏览器的polyfill代码也比较冗余，所以react团队放弃了

 - 为什么使用链表
   因为链很方便中断和恢复
```js

class Update {
  constructor(payload,nextUpdate){
    this.payload=payload
    this.nextUpdate=nextUpdate
  }
}
//更新队列
class UpdateQueue {
   constructor(){
     this.baseState=null//原状态
     this.firstUpdate=null//第一个更新
     this.lastUpdate=null//最后一个更新

  }
  enqueueUpdate(update){
    if(this.firstUpdate==null){
      //刚开始建立链表的时候，让头指针（firstUpdate）和尾指针（lastUpdate）指向当前节点
      this.firstUpdate=this.lastUpdate=update
      
    }else {
      //让上一个节点的nextUpdate指向当前节点
      this.lastUpdate.nextUpdate=update
      //让尾指针指向当前节点
      this.lastUpdate=update
    }
  }
//获取老状态，遍历整个链表，进行更新
  forceUpdate(){
    let currentState=this.baseState||{}
    let currentUpdate=this.firstUpdate
    while(currentUpdate){
      let nextState=typeof currentUpdate.payload==='function'?currentUpdate.payload():currentUpdate.payload

      currentState={...currentState,...currentState}
      this.baseState=currentState
    }
    this.firstUpdate=this.lastUpdate=null //更新完成后清空链表
    return currentState
  }
}


//测试

let queue=new UpdateQueue()
queue.enqueueUpdate(new Update({name:'zs'}))
queue.enqueueUpdate(new Update({age:99}))
queue.enqueueUpdate(new Update((state)=>({age:state.age+1})))

queue.forceUpdate()

```


3. fiber之前是什么样的，为什么需要fiber
