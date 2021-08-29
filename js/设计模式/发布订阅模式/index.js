const { emit } = require("process")

class EventEmitter {
    constructor(){
        this.event={}
    }

    on(key,callback){
        //如果是其他类继承了EventEmitter，是没有event对象的，需要在对应的实例上添加event对象
        if(!this.event){
            this.event={}
        }
        if(!this.event[key]){
            this.event[key]=[callback]
        }else {
            this.event[key].push(callback)
        }
    }
    emit(key){

        if(!this.event[key]){
            throw new Error(`event ${key} is not register`)
        } else {
            this.event[key].forEach((item)=>{
                item()
            })
        }
       
    }

    off(key,callback){
       this.event[key]= this.event[key].filter((item)=>item!==callback&&item.l!==callback)
    }
//只执行一次（且在执行完callback回调之后解绑）
    once(key,callback){

        const fn=()=>{
            callback()
            this.off(key,fn)
        }
        //如果once注册之后，用off去解绑，需要在fn和callback之间建立关联，才能知道解绑的函数和绑定的函数是否一致
        fn.l=callback
        this.on(key,fn)
    }
}


const e1=new EventEmitter()

const fn1=()=>{console.log('111')}


e1.on('event1',fn1)
e1.on('event1',()=>{console.log('222')})

e1.emit('event1')
e1.off('event1',fn1)
e1.emit('event1')

