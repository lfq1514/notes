
//----面试题1------
function Foo(){
  getName=function(){
    console.log(1)
  }
  return this
}


Foo.getName=function(){
  console.log(2)
}

Foo.prototype.getName=function(){
  console.log(3)
}

var getName=function(){
  console.log(4)
}

function getName(){
  console.log(5)
}



Foo.getName()   //  2

getName()   //  4

Foo().getName() // 1
//Foo执行的时候，会在全局添加一个getName属性（即window.getName()）

getName()   // 1 

new Foo.getName()  //2

new Foo().getName()//3

new new Foo().getName()  //3 ??


//js中的运算符优先级

/**
 * obj.xx 成员访问  19
 * new Fn()  带参数列表  19
 * new Fn   不带参数列表  18
 */


//----面试题2------


function Fn(){
  let a=1
  this.a=a
}

Fn.prototype.say=function(){
  this.a=2
}

Fn.prototype=new Fn

let f1=new Fn
Fn.prototype.b=function(){
  this.a=3
}

console.log(f1.a)     // 1
console.log(f1.prototype)  //undefined
console.log(f1.b)  // function(){this.a=3}
console.log(f1.hasOvnProperty('b')) //false
console.log('b' in f1)  //true
console.log(f1.console==Fn)   //true