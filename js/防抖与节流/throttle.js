/**
 * 节流函数
 * 在一段时间内频繁触发,在执行后间隔一段时间,才进行下一次的执行
 * @param {*} fn
 */

 //时间戳版
 /**
  * 1.当触发事件的时候,取出当前的时间戳,减去之前的时间戳(初始值为0)
  * 2.默认第一次立即执行
  * 3.从第二次起,如果当前执行的时间与上一次执行的时间间隔大于设置值,则再次执行,否则不执行
  *
  *
  */
function throttle(fn,wait){
    let previous=0
    return function(){
        let now= Date.now()
        //默认第一次执行,从第二次起,如果当前执行的时间与上一次执行的时间间隔大于设定值,则再次执行,否则不执行
        if(now-previous>wait){
            fn.apply(this,arguments)
            previous=now
        }
    }
}

//定时器版
/**
 * 1.当触发事件的时候,我们设置一个定时器
 * 2.再触发事件的时候,如果定时器存在,就不执行
 * 3.直到定时器执行,清空定时器,然后执行函数
 *
 *
 */

function throttle(fn,wait){
    let timer
    return function(){
        if(!timer){
            timer=setTimeout(()=>{
                timer=null
                fn.apply(this,arguments)
            },wait)
        }
    }
}
