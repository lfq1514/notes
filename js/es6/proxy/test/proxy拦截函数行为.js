function nb_fn(){
  console.log('nb_fn')

}

let nb_proxy=new Proxy(nb_fn,{
  apply(target,ctx,args){
    console.log('fn_nb',target,ctx,args)
    return 'nb'
    

  }

})
let obj={name:'bn'}

// nb_proxy()
nb_proxy.bind(obj)('test')
// console.log(nb_proxy())
