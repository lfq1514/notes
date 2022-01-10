let obj={
    fn(){
        console.log('111')
    }
}

let ooo={
    obj:{
     fn:function(){
         console.log('222',this)

     }
    }
}


ooo.obj.fn.call(obj)

