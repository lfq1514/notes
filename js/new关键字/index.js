function _new(Fn,...args){

  const obj={}
//在ie浏览器下__proto__是受保护的，不允许直接访问
  // obj.__proto__=Fn.prototype

  const obj=Object.create(Fn.prototype)

  const res=Fn.apply(obj,args)


  if(res!==null&&(typeof res==='object'||typeof res==='function')){
    return res
  }

  return obj

}