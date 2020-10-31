// let f1=function(){
//     console.log(this)
// }

let obj={
    f1:function(){
        console.log(this)
    }
}

function F1(f1){
    f1()
}


F1(obj.f1)
