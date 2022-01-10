
import {initMixin} from './init'
function Vue(options){

    this._init(options)

    
}
//拓展原型
initMixin(Vue)

export default Vue
