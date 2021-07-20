/**
 * before方法
 * 
 * 可以实现在函数执行之前被执行
 * 
 * 利用aop思想来实现
 */
Function.prototype.before=function(fn){
  return ()=>{
    fn()
    this()
  }
}
function say(){
  console.log('hello')
}

const fn=say.before(()=>{
  console.log('hello之前')
})

// fn()


//vue2中拦截了数组的个方法，也是用了aop的思想

const  nativePush=Array.prototype.push


function push(...arg){

  nativePush.call(this,...arg)

}

push([],1)


