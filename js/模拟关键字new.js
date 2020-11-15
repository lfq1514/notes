/**
 * 规定,_new方法,第一个传入的是构造函数,后面是参数
 */
function _new() {
    //1.新建一个空对象
    let o = new Object()
    //2.截取出第一个参数(即构造函数)
    let Constructor = [].shift.call(arguments)
    //3.建立对象和构造函数之间的指向关系(这样,o对象可以继承其构造函数原型上的属性和方法)
    o._proto_ = Constructor.prototype
    //4.改变this指向(因为shift会改变原来的数组,所以此时的arguments只包含了传入的擦书)
    Fn.call(o,arguments)
    //5.将对象返回
    return o
}