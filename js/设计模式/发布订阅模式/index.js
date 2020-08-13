     class Subscribe {
        constructor(){
            this.callbacks=[]
        }
        //订阅
        on(cb){
           let hasOwn= this.callbacks.includes(cb)
           if(!hasOwn) this.callbacks.push(cb)
        }
        //发布
        emit(){
            this.callbacks.forEach((cb)=>{
                cb()
            })
        }
    }

let s=new Subscribe()
function f1(){
    console.log('1')
}
function f2(){
    console.log('2')
}
function f3(){
    console.log('3')
}
s.on(f1)
s.on(f1)
s.on(f2)
s.on(f3)
s.emit()



