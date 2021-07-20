//时间戳的方式
export function throttle(fn,wait){
  let preTime=0
  return (...args)=>{
    let currentTime=+new Date()
    if(currentTime-preTime>wait){

      preTime=currentTime
      fn(args)
      
    }
  }
}

//定时器方式
// export function throttle(fn,wait){
//   let timer
//   return (...args)=>{

//   if(timer) return 
//   timer =  setTimeout(()=>{
//     timer=null
//       fn(args)
//     },wait)
//   }
// }

