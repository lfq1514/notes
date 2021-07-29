

//call和apply的区别
/**
 * 1,传参方式不一样，call接受单个参数的传参，apply接受数组形式的参数
 * 2，性能方面，当参数个数大于3个时，call的性能要略优于apply
 */

//----------------------call的实现原理-------------------------------

//call的特点：
/**
 * 1，改变this为传入的this;
 * 2,不指定this则指向window,
 * 3,可以传入参数，可以有返回值（返回值就是要执行的函数fn的返回值）
 * 4,参数是一个一个传参
*/
Function.prototype._call=function(context,...arg){
    //如果不传的话，默认是window
    context=context||window

    if(/^(object|function)&/i.test(typeof context)){
        context=Object(context)
    }
    context.fn=this
   let result= context.fn(...arg)
    delete context.fn
    return result

}
 // let p1={
//     name:'dfg',
//     age:123
// }

// function fn(a,b){
//     console.log(this.name)
//     console.log(a,b)
// }
// fn._call(p1,1,2)
// console.log(fn._call(p1,1,2))


//----------------------apply的实现原理-----------------------------

/**
 * apply接受数组形式的参数
 */
Function.prototype._apply=function(context,arr){
    this._call(context,...arr)
}
// let p1={
//     name:'dfg',
//     age:123
// }
// function fn(a,b){
//     console.log(this.name)
//     console.log(a,b)
// }
// fn._apply(p1,[1,2])
// console.log(fn._call(p1,1,2))

//----------------------bind的实现原理-------------------------------

/**
 * bind接受单个参数
 * 返回一个函数
 * 返回的函数可以传参
 */
Function.prototype._bind=function(context,...arg){
    let that=this
    return function (...args2){
        that._call(context,...arg,...args2)
    }

}
let p1={
    name:'dfg',
    age:123
}
function fn(a,b){
    console.log(this.name)
    console.log(a,b)
}
fn._bind(p1,1)(2)


