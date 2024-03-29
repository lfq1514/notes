//单例模式
/**
 * 保证每一个类只有一个实例
 * 单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏
览器中的 window 对象等。
 */
//1. 构造函数与获取单例的方法分离
function Super() {
    this.name = '超人'
}
Super.prototype.say = function () {
    console.log(this.name + "是世界上独一无二的超人")
}

//获取单例的方法
let getSuper = (function () {
    let man;
    return function(){
        if (!man) {
            man = new Super()
        }
        return man
    }
})()


//2.透明单例
let Peple=(function(){
    let p
    return function (name){
        this.name=name
        if(p){
            return p
        }else {
            //如果构造函数返回一个对象的话,外界的实例就是这个返回的对象
            return p=this
        }
    }
})()



