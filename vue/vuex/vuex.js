
let Vue;

class Store {
    constructor(options={}){
        //核心,定义了响应式变化,数据更新,视图也更新
        this.s=new Vue({
            data(){
                return {
                    state:options.state
                }
            }
        })
        let getters=options.getters
        this.getters={}
        Object.keys(getters).forEach((getterName)=>{
            Object.defineProperty(this.getters,getterName,{
                get:()=>{
                    return getters[getterName](this.state)
                }
            })

        })
//获取同步的更新操作
        let mutations=options.mutations
        this.mutations={}
        Object.keys(mutations).forEach((mutationsName)=>{
            this.mutations[mutationsName]=(payload)=>{
                mutations[mutationsName](this.state,payload)
            }
        })

        let actions=options.actions

        this.actions={}
        Object.keys(actions).forEach((actionsName)=>{
            this.actions[actionsName]=(payload)=>{
                actions[actionsName](this,payload)
            }
        })

    }

    commit=(mutationName,payload)=>{
        this.mutations[mutationName](payload)

    }
    dispatch=(actionName,payload)=>{
        this.actions[actionName](payload)

    }
    get state(){
        return this.s.state

    }

}
//install的参数是Vue的构造函数
function install(_Vue){
    Vue=_Vue
   Vue.mixin({
       beforeCreate() {
           //给每个组件增加$store属性
           if(this.$options&&this.$options.store){
               this.$store=this.$options.store
           }else {
               //有可能单独创建一个实例,没有父亲,那就无法获取到store
            this.$store=this.$parent&&this.$parent.store
           }

       },

   })


}


export default {
    install,
    Store
}