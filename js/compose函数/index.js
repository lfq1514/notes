function compose(...fns){
  //fns是需要处理的函数集合

  return (params)=>{
    if(fns.length===0) return params 
   return fns.reverse().reduce((pre,next)=>{
      
      return next(pre)
    },params)
  }
}

function add1(x){
  return x+1
}

function add2(x){
  return x+2
}
function add3(x){
  return x+3
}
const res=compose(add1,add3)
// res(1)
console.log(res(1))


//=============redux中的compose函数==================

function compose(...funcs){

  if(funcs.length===0){return arg=>arg}
  if(funcs.length===1){return funcs[0]}

  // return funcs.reduce((a,b)=>
  // (...args)=>a(b(...args))
  // )

  return func.reduce((pre,next)=>{
    return (...args)=>{
      return pre(next(args))
    }
  })
}
