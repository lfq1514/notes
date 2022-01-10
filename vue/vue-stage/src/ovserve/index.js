import { isObject } from "../utils"

class Observer{
    //将对象中的所有属性进行劫持
    constructor(data){
        this.walk(data)
    }

    walk(data){
        Object.keys(data).forEach((key)=>{
            //将对象的所有属性定义为响应式数据
            defineReactive(data,key,data[key])

        })

    }
}

export function observe(data){
    if(!isObject(data)){
        throw new Error('data must be an object')
    }
   const ob= new Observer(data)
    
}

/**
 * vue2 会对所有的数据，进行响应式处理
 */
function defineReactive(data,key,value){
    //如果data数据是多层结构，递推处理
    observe(value)

    Object.defineProperty(data,key,{
        get(value){
            return value
        },
        set(newValue){
            //如果用户设置了一个新对象，这个心对象也要进行响应式处理
            observe(newValue) 
            value=newValue
        }
    })


}
