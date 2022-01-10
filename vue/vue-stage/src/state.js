import { observe } from "./ovserve/index"
import { isFunction, isObject } from "./utils"

export function initState(vm){
    //获取到选项
    const opts=vm.$options
    //数据的初始化优先级：props-->data-->computed-->watch

    if(opts.props){

    }
    if(opts.data){
        initData(vm)
    }

    if(opts.computed){
        initComputed()
    }

    if(opts.watch){
        initWatch()

    }
}

function initData(vm){
    //拿到数据，进行数据劫持
    let data=vm.$options.data
    //data可能是函数，也可能是对象
   
    if(isFunction(data)){
        //取函数的返回至，作为data数据
       data=data.call(vm)
       if(!isObject(data)){
        throw Error('function must return an object')
       }
    }else if(isObject(data)) {

    }else {
        throw new Error('data needs  a function or object')
    }
    //将data同时挂在vm的_data属性上
    vm._data=data
    //data校验成功之后，就要开始观测数据了
    observe(data)
}


