/**
 * 迭代器(遍历器)
 * next方法  执行后返回当前数据结构 {value:xx,done:xx}
 * 遍历完数据结构,done为false时,结束遍历
 *
 */

const Promise = require("../promise/myPromise")

//模拟生成遍历器
function makeIterator(arr){
    let index=0
    return {
        next:function(){
            let value=arr[index]
            let done=index<arr.length?true:false
            index++
            return {
                value,
                done
            }
        }
    }
}
let i=makeIterator([1,2,3])
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())

/**
 * 生成器 (* yield)
 * 生成一个遍历器对象
 */

 function* gen(){
   yield "1"
   yield "2"
   yield "3"
 }
//  let g=gen()
//  console.log(g.next())
//  console.log(g.next())
//  console.log(g.next())



