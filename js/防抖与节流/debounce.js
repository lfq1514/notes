/**
 * 防抖函数
 *一个事件频繁的触发(如window的scroll,resize/mousedown,mousemove/keyup,keydown),会很影响性能
 *原理:事件多次触发,只会在指定时间内触发一次,如果再次触发,则重新计时
 */

function debounce(fn,await){
    let timer;
    return function(){
      clearTimeout(timer)
      timer= setTimeout(()=>{
        fn.apply(this)
      },await)
    }

}
