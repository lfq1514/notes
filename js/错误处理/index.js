// try-catch 捕获同步代码

// function foo(a,b){
//   return a*b+c
// }
// console.log('index')
// try{
//   foo()
// }catch(e){
//   console.log('e',e)
// }

//2. try -catch 试图捕获异步代码
// function handleAsyncThing(){
//   setTimeout(()=>{
//     throw Error('你抓不到我，哈哈哈')
//   },0)
// }
// try{
//   handleAsyncThing()
// }catch(e){
//   console.log('e',e)
// }


//3. 错误优先处理方式
// function test(cb){

//   setTimeout(()=>{
//     try{
//       const res=(function(a,b){
//         return a+b+c
//       })(1,2)
//       // console.log('try')

//       cb(null,res)

//     }catch(e){
//       // console.log('e',e)
//       cb(e)
//     }
//   },0)
// }

// test((err,res)=>{
//   if(err){
//     console.log('err',err)
//   }else {
//     console.log('res',res)
//   }
// })

