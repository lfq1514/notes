     class Subscribe {
        constructor(){
            this.callbacks=[]
            this.results=[]
        }
        //订阅
        on(cb){
           let hasOwn= this.callbacks.includes(cb)
           if(!hasOwn) this.callbacks.push(cb)
        }
        //发布
        emit(data){
            this.results.push(data)
            this.callbacks.forEach((cb)=>{
                cb(this.results)
            })
        }
    }

let s=new Subscribe()
function f1(res){
    console.log(res)
}
function f2(res){
    console.log(res)
}
function f3(res){
    console.log(res)
}
s.on(f1)
s.on(f1)
s.on(f2)
s.on(f3)
s.emit('今天发了一件事情')
s.emit('今天又发了一件事情')



