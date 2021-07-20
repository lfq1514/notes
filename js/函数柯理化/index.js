function addNum(num1,num2,num3){
  return num1+num2+num3
}

function curry(fn){
  console.log('fn',fn.length)

  const paramsLength=fn.length

  let emptyArr=[]

  return function temp(...arg){

    emptyArr=[...emptyArr,...arg]

    if(emptyArr.length<paramsLength){

      return temp

    }else {

     return  fn.apply(null,emptyArr)
    }
  }

}

let f=curry(addNum)

const res=f(1)(2)(3)
console.log('res',res)

