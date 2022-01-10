// class Student {
//     fullName: string;
//     constructor(public firstName:string, public middleInitial:string, public lastName:string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

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
interface BInter {
    studentName: string;
    studentAge: number;
}
class B {
    studentName: string;
    studentAge: number;
    test: string;
    constructor() {
        this.studentName = "zs";
        this.studentAge = 10;
    }
}

class A extends B {}
const a = new A();

function fn(x: boolean): void;
// Argument type isn't right
function fn(x: string): void;
// This overload signature is not compatible with its implementation signature.
function fn(x) {
    let a = !!x;
}

fn("1");

type Arrayish = { [n: symbol]: unknown };
type C = keyof Arrayish;
// type A = number
const arr = ["hello", "2", "3"] as const;
interface IdLabel {
    id: number /* some fields */;
}
interface NameLabel {
    name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}

let b = createLabel(2.8);
// let b: IdLabel

let c = createLabel(Math.random() ? "hello" : 42);
// let c: NameLabel | IdLabel

//  type type1_3="1"|"2"|"3"
//  type type0_9="0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"

//  type type0_39=`${type1_3}${type0_9}`|type0_9
