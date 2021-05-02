let arr=[1,2,3]

handle={
  get(target,key){
    console.log('get拦截',target,key)

  },
  set(target,key,value){
    console.log('set',target,key,value)

  }
}
let nb=new Proxy(arr,handle)
//触发get方法
console.log(nb[3])
//触发set方法
nb[3]=4