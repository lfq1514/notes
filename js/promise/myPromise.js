
const PENDING="PENDING"
const REJECTED="REJECTED"
const RESOLVED="RESOLVED"
class Promise {
    constructor(executor){
        this.status=PENDING
        this.resolveCb=[]
        this.rejectCb=[]
        this.value=undefined
        this.reason=undefined
        let resolve=(value)=>{
            if(this.status===PENDING){
                this.value=value
                this.status=RESOLVED
                this.resolveCb.forEach((fn)=>fn())
            }
        }
        let reject=(reason)=>{
            if(this.status===PENDING){
                this.reason=reason
                this.status=REJECTED
                this.rejectCb.forEach((fn)=>fn())
            }
        }
        try {
              //默认这个函数会立即执行
        executor(resolve,reject)
        }catch (e){
            reject()
        }
    }

    then(onfulfilled,onrejected){
        if(this.status===RESOLVED){
            onfulfilled(this.value)
        }
        if(this.status===REJECTED){
            onrejected(this.reason)
        }
        if(this.status===PENDING){
            this.resolveCb.push(onfulfilled)
            this.rejectCb.push(onrejected)
        }



    }
}

module.exports=Promise