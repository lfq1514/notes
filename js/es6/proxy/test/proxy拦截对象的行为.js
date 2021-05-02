let obj={
  name:'zs',
  age:'99'
}
const handle={
  get(target,key,receiver){
    console.log('get,target,key',target,key,receiver)
    return target[key]
  },
  // set(target,key,value,receiver){
  //   console.log('拦截set行为',target,value,receiver)
  //    target[key]=value
  //    return false

  // },
  has(target,key){
    console.log('has',target,key)
    return true

  },
  deleteProperty(target,key){
    console.log('deleteProperty',target,key)
    delete target[key]
    return true

  },
  defineProperty(target,key,descriptor){
    console.log('defineProperty',target,key,descriptor)
    target[key]=descriptor.value
    return true
  }
}

let nb= new Proxy(obj,handle)
//取值
// nb.name
// console.log(nb.name)

//修改
// nb.name='nb'
// console.log('nb',nb)

//has 
// console.log('aaa' in nb)

//delete

// delete nb.name
// console.log('nb',nb,delete nb.name)

// defineProperty
Object.defineProperty(nb,'age',{
  configurable: true,
  enumerable: true,
    value: 10,
   
})
nb.age='111'
console.log('nb',nb)





