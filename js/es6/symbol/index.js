//Symbol内置方法

/**
 * 1. Symbol.hasInstance
 * foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo) 静态方法
 * Symbol.hasInstance方法的返回值就是最后的判断结果
 */
class Dog {
    static [Symbol.hasInstance]() {
        return false
    }
}
let dog = new Dog()
// console.log(dog instanceof Dog)

/**
 * 2. Symbol.isConcatSpreadable
 * 属性等于一个布尔值
 * 该对象用于Array.prototype.concat()时，是否可以展开。
 */

let a=[1,2,3]
let b=[3,4,5]
a[Symbol.isConcatSpreadable]=false
// let res=a.concat(b)
// console.log(res)
b[Symbol.isConcatSpreadable]=false
// let res=a.concat(b)
// console.log(res)

/**
 * 3. Symbol.iterator
 * 指向该对象的默认遍历器方法
 * 调用Symbol.iterator方法，返回该对象的默认遍历器
 */
let obj={}
obj[Symbol.iterator]=function* (){
    yield 1;
    yield 1;
    yield 1;

}
for(key of obj) {
    // console.log(...obj)
}

/**
 * 4. Symbol.toPrimitive(toPrimitive详细的用法见  类型转化)
 * 指向一个方法
 * 该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值
 */

 let o={}
 o[Symbol.toPrimitive]=function(){
     return "ddd"
 }
// console.log(o+1)

/**
 * Symbol.toStringTag
 * 指向一个方法
 * 返回值会出现在toString方法返回的字符串之中，表示对象的类型。
 * 可以定制[object Object]或[object Array]中object后面的那个字符串。定制[object Object]或[object Array]中object后面的那个字符串。
 */

let c={}
c[Symbol.toStringTag]="111"
console.log(c.toString())



