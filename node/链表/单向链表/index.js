//----------单向链表---------
//维护每一个节点（每个节点包含当前的节点，及下一个节点的指针）
class Node {
    
    //element 存储的是数据，next存储的是下一个节点的指针
    constructor(element,next){
        this.element=element
        this.next=next
    }
}
//数据结构主要是存储数据  添加add ，删除remove，获取get，设置set

//维护单向列表及列表长度
class LinkList {
    constructor(){
        this.head=null
        this.size=0
    }
    //查找节点
    _node(index){
        let current=this.head
      for(let i=0;i<index;i++){
          current=current.next
      }
      return current
    }

    //添加节点
    add(element){
        //添加节点的时候，让next指向下一个节点
       //把当前的头拿出来
        let head=this.head
        if(this.size==0){
            this.head=new Node(element,head)
        }else {
            //先找到上一个节点
            let prevNode=this._node(this.size-1)
             //这里不直接将node的next指为null，是考虑到将节点插入到两个节点之间的情况
            prevNode.next=new Node(element,prevNode.next)
        }
        this.size++
    }
    //插入节点

    set(index,element){
        if(index===0){
            this.head=new Node(element,head)
        }else {
             //先找到上一个节点
             let prevNode=this._node(index-1)
             //这里不直接将node的next指为null，是考虑到将节点插入到两个节点之间的情况
            prevNode.next=new Node(element,prevNode.next)

        }
    }
    //删除节点
    remove(index){

        if(index===0){
            this.head=this.head.next
        }else {
            let prevNode=this._node(index-1)
            prevNode.next=prevNode.next.next
        }
        this.size-- 
    }

    //递归实现
    // reverse(){
    //     function r(head){

    //         if(head==null||head.next==null){
    //             return head
    //         }
    //         let newHead=r(head.next)

    //         head.next.next=head

    //         head.next=null
    //         return newHead

    //     }

    //     return r(this.head)
    // }

    //循环实现
    reverse(){
        let head=this.head
        if(head==null||head.next==null)  return head
        let newHead=null
        while(head!==null){
            let temp=head.next
            head.next=newHead
            newHead=head
            head=temp
        }

        this.head=newHead
    }



}


let link=new LinkList()
link.add(0)
link.add(1)
link.add(2)
link.set(1,100)
console.dir(link,{depth:100})




