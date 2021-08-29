# js数据类型检测
## 1. typeof
typeof一般常用语基本数据类型检测，在检测复杂类型的时候，会得不到预期的结果
```
typeof null          //"object"
typeof []            //"object"
typeof {}            //"object"
//----------------------------
typeof ""            //"string"
typeof 1             //"number"
typeof NAN           //"number"
typeof false         //"boolean"
typeof undefind      //"undefind"
typeof Symbol("aa")  //"symbol"
typeof function(){}  //"function"
```
typeof检测的底层原理是基于数据类型的值（二进制）进行检测
```
在 javascript 的最初版本中，使用的 32 位系统，为了性能考虑使用低位存储了变量的类型信息：
000：对象
001：整数
010：浮点数
100：字符串
110：布尔

有 2 个值比较特殊：
undefined：用 -（−2^30）表示。
null：对应机器码的 NULL 指针，一般是全零

typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待；
```
## 2. instanceof
作用：用来检测当前实例是否属于某一个类

注意：

- 1，由于我们可以肆意的修改原型的指向，所以检测出来的结果是不准的

- 2，不能检测基本类型

原理：检测构造函数的 prototype 属性是否出现在某个实例对象的原型链

```JavaScript
let arr = []
console.log(arr instanceof Array); //true（检测Array的prototype是否在arr的原型链上 ） arr.__proto__=Array.prototype
console.log(arr instanceof RegExp); //false
console.log(arr instanceof Object); //true  arr.__proto__.__proto__=Object.prototype


//修改原型指向
let arr=[]
let fn=function (){}
fn.prototype=Array.prototype
console.log(arr instanceof fn)   //true

//检测基本类型的时候
let num=1
console.log(num instanceof Number)   //false
```

## constructor

constructor可以随便改，所以也不准

```JavaScript
[].constructor===Array
Symbol().constructor===Symbol   //true
{}.constructor===Object  //true
false.constructor===Boolean  //true

let num=1
num.constructor===Number  //true
...

实际上 其本身上没有constructor属性，就到其原型上的查找（如数组arr=[],arr.__proto__.consctructor===Array）

```

## Object.prototype.toString

这是一个万能的检测类型的方法，可以检测任意类型的值，返回当前实例所属类的信息

```JavaScript
//跟着jquery学类型检测
function toType(obj){
    let class2type={}
    //实际上这里的toString就是Object.prototype.toString
    let toString=class2type.toString
    //---建立数据类型映射---
    ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"].forEach((type)=>{
        class2type[`object ${type}`]=type.toLowerCase();
    })
    //1，如果是undefined或者null，直接返回其相应的字符串
    if(obj==null){
        return obj+""
    }
    //2,如果是复杂类型用toString
    if(typeof obj==='object'||typeof obj==="function"){
        return class2type[toString.call(obj)]
    }else {//简单类型，还用typeof
        return typeof obj
    }
}
```
