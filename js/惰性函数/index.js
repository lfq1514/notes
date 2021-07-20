/**
 * 惰性函数的核心
 * 1，方法在第一次执行以后，重写了自己的方法，并且自己调用了一次（保证重写了的方法可以正常执行获取结果）
 * 重写的目的，就是每次函数重复执行的逻辑，不用每次调用函数的时候再次执行
 */
function getStyles(ele,attr){
  if(window.getComputedStyle){
    getStyles=function(ele,attr){
     return window.getComputedStyle(ele,attr)
    }

  }else {
    getStyles=function(ele,attr){
      return ele.currentStyle[atttr]
    }
  }
  return getStyles(ele,attr)
}