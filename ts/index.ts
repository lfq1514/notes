enum Color {
    Blue,
    Green=3,
    Red
}

interface obj{
    color:'string',
    width?:'number',
    [propName:string]:any
}
// function fn1(name:string,age:number):void
// function fn1(name:number,age:string):void

// function fn1(name:any,age:any):void{

// }
// function fn(name:string,other:number=10,age?:string):void{

// }
// fn('sf',10,'1')
class Animal {
    private name: string;
    protected sex:string;
    constructor(theName: string) { this.name = theName; }
   
}

class Rhino extends Animal {
    public testSex=this.sex
    constructor(name:string) { 
        super(name); 

    }
    test(){
        this.sex
    }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Rhino("Goat");
console.log('animal',animal)
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; 


class GenericNumber<T> {
    zeroValue: number;
    name
    add: (x: T, y: T) => T;
    constructor(name:T){
        this.name=name

    }
}

const test=new GenericNumber<number>(1)

let arr=[1,2,3,null,undefined]
arr[0]=null

interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();







