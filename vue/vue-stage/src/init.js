
import {initState} from './state'
export function initMixin(Vue){

    Vue.prototype._init=function(options){
        const vm=this
        //把用户的数据映射到vm实例上。
        vm.$options=options
        
        //对用户的数据进行初始化
        initState(vm)
    }
}
