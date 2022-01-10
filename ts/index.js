// class Student {
//     fullName: string;
//     constructor(public firstName:string, public middleInitial:string, public lastName:string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = new Student("Jane", "M.", "User");
// console.log('user',user)
// class Des {
// }
// interface Lengthwise {
//     length: number;
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }
// loggingIdentity('111')
// interface Person {
//     name:string;
//     age:number
// }
// type Per<T>={
//     [P in keyof T]?:T[P];
// }
// type otherPerson=Per<Person>
// const p1:otherPerson={
// }
// interface Size {
//     size:number
// }
// function lengthAble<T extends Size>(a:T):T{
//     console.log(a.size)
//     return a
// }
// interface Len extends Size {
//     name:string
// }
// const a:Len={
//     name:'1111',
//     size:111
// }
// interface Fn {
//     (props:any):string,
//     name?:string
// }
// const f:Fn=()=>{return '111'}
// f.name='111'
// const a:string='2'
// const b:typeof a='111'
// function isObject(v:any):Boolean{
//     return typeof v==='object'&&v!==null
// }
// const isO:typeof isObject =()=>{
//     return false
// }
// interface Person {
//     name?: string;
//     age: number;
// }
// const t1: keyof Person = "name";
// type Keys = "a" | "b" | "c"
// type Obj =  {
//   [p in Keys]: string
// } // -> { a: string, b: string, c: string }
// const o:Obj={
//     a:'1',
//     b:'2',
//     c:'3',
//     }
var B = /** @class */ (function () {
    function B() {
        this.studentName = 'zs';
        this.studentAge = 10;
    }
    return B;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super.call(this) || this;
    }
    return A;
}(B));
console.log('A', A);
