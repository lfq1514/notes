// class Foo {
//   setName(){
//     console.log(p1)
//   }
// }

// const p1={name:123}

// const f=new Foo()

// function addProps(target){
//   target.isTest=true
// }

// addProps(Foo)
// console.log('Foo.isTest',Foo.isTest)

class Father {
    privateMoney=100
    constructor(home){
        this.home=home
    }

    getFatherName(){
        console.log('getFaterNAme')
    }

}
Father.test1=111

class Child extends Father{
    constructor(){
       
    }


}

const c=new Child
// console.log('c',c)
