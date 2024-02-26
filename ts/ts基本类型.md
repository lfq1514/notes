# ts 学习文档

[ts 泛型万文优质文章链接](https://mp.weixin.qq.com/s/iU42l3bIVGlZGnWs1DYNcg)
[你不知道的tsconfig.json](https://mp.weixin.qq.com/s?__biz=MzA3MjU5NjU2NA%3D%3D&chksm=88b348debfc4c1c8c475662b1348ccd39eb17468cf3f09f49d0a8c63be420f48cd0a23d841ef&idx=1&mid=2455504357&scene=21&sn=818274b04bb9e5e151df3c15e672b0f4#wechat_redirect)

## ts 基本类型

1. 字符串

```javascript
const name: string = "name";
```

2. 数字

```javascript
const age: number = 123;
```

3. 布尔

```javascript
const age: boolean = true;
```

4. 数组

-   有两种写法，同时要指定元素的类型，
-   指定元素的类型要一致

```javascript
//写法一(数组泛型的形式Array<元素类型>）
const students: Array<string> = ["zs", "ls", "ww"];
//写法二
const students: string[] = ["zs", "ls", "ww"];
```

5. 元组

-   表示一个已知元素数量和类型的数组
-   各元素的类型不必相同

```javascript
const type: [number, string] = [10, "zs"];
```

6. 枚举（enum）

-   enum 是对 javascript 标准数据类型的补充
-   默认情况下，从 0 开始为元素编号，也可以手动的指定成员的数值

```javascript
enum Color{Blue,Green,Blue}
//指定元素编号
enum Color{
  Blue=3,
  Green=5,
  Blue=6
  }
  //只给某些元素编号，指定元素（这里是Cat）之前的会默认从0开始编号，之后元素之后的会从当前元素开始以递增的方式编号
enum Animal{
  Dog,
  Cat=5,
  Duck
  }
  //编译之后的结果如下：
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 5] = "Cat";
    Animal[Animal["Duck"] = 6] = "Duck";
})(Animal || (Animal = {}));
```

7. any 和 unknown
   any

-   指定某一个元素为 any 类型后，可以为这个元素赋任何值，同时也可以有条件的避开一些类型检查（慎用 any，除非一些特殊情况）

```javascript
const type: [number, string] = [10, "zs"];

const num: any = 10;
const num: any = "10";
```

unknown

unknown 和 any 都是顶级类型，但是 unknown 在用的时候相对于 any 有一些限制，比如使用前必须限定其类型

```javascript
let a:any

let x=a*a//这里使用any定义了a，在运算的时候不会报错


let c:unknown

// let y=c*c //因为unknown类型未知，不能这么直接使用，会报错提示
let x = (a as number) * (a as number);//这样子断言类型后就可以使用了
```

8. void

-   表示没有任何类型
-   当一个函数没有返回值时，你通常会见到其返回值类型是 void
-   指定某一个元素为 void 类型时，他只能为 undefined 或 null

```javascript
function fn(): void {}

const num: void = undefined;
```

9. null 和 undefined

-   默认情况下 null 和 undefined 是所有类型的子类型

10. never

-   never 类型表示的是那些永不存在的值的类型。
-   实际场景会很少用到它，只有在死循环，以及抛出错误到时候，才会用到
-   never在工具类型中的作用



```javascript
function createError(): never {
    throw new Error("this is a type error");
}

function infiniteLoop(): never {
    while (true) {}
}
```

1.  object

-   object 表示非原始值，也就是除 number,string,boolean,symbol,null,undefined 之外到值

12. 类型断言

-   类型断言不进行特殊的数据检查和解构，没有运行时的影响，只在编译阶段起作用
-   类型断言的两种写法

```javascript
const str:string='this is  a string'
//写法1:
const num:number=(str as string).length
//写法2:
const num2:number=(<string>str).length
```

## 变量声明

-   type 用来声明一个类型

```javascript
//解构赋值后的变量声明
const obj = { name: "zs", age: 99 };
const { name: n, age: a }: { name: string, age: number } = obj;

//函数声明
type paramsType = { name: string, age: number };
function fn({ name, age }: paramsType): void {}
```

## 接口

-   接口与 object 相比较，对参数顺序没有要求，只会类型进行校验

```javascript
interface paramsType{
  color:string,
  width:number,
  //可选属性
  height?:number,
  //只读属性
  readonly privateParams:'string'
  //剩余的其他类型属性
  [propName:string]:any

}

function fn(params:paramsType){

}
fn({height:10,width:20,color:'red'})
```

-   ReadonlyArray<T>类型

它与 Array<T>相似，只是把所有可变方法去掉了，可以保证数组创建后再也不能被修改

```javascript
const arr: ReadonlyArray<number> = [1, 2, 3, 4, 5];
```

-   可检索的类型

-   函数类型接口

```javascript
interface fnType {
    (name: string, age?: number): void;
}
let fn: fnType = (name) => {};
```

## 函数定义与重载

-   函数定义时，函数的参数名不要求与
-   支持可选参数和默认参数,可选参数，需要放在参数末尾
-   支持剩余参数
    函数定义

```javascript
//1. 函数定义（必须参数，默认参数，可选参数）
function fn(name: string, other: number = 10, age?: number): void {}
//剩余参数
function fn1(name: string, ...restParams: Array<string>): void {}

//2. 函数表达式
type fnType = (name: string) => string;
fn2: fnType = function (name) {};
//或这样写(按上下文归类，是类型推论的一种)
fn2: fnType = function (name: string): string {};

//3. 通过接口定义函数类型
interface fnInterface {
    (name: string): string;
}
```

函数重载

-   函数的多种声明和调用不能分开
-   限制函数的传参方式
-   为同一个函数提供多个函数类型定义
-   在定义重载的时候，一定要把最精确的定义放在最前面(因为查找重载列表时，是从第一个重载定义开始的)

```javascript
function fn(value:string):void
function fn(value:number):void
function fn(value:string|number):void{
  if(typeof value==='string'){
    doSomeThing1()
  }
  if(typeof value==='number'){
    doSomeThing2()
  }
}
```

## 类

### 类的修饰符

-   public
    默认类的属性都是 public，常省略不写 自己，自己的子类，其他类都能访问
-   private
    通过 private 修饰符修饰的属性，只能由自己来访问，自身的实例及子类不能访问到
-   protected
    通过 protected 修饰符修饰的属性，只能又自己及子类访问，实例不能访问

```javascript

class Person {
  public name;
  private age;
  protected sex;
  constructor(name:string,sex:number){
    this.name=name
    this.sex=sex
  }

}

class P1 extends Person {
  constructor(){
    super()


  }
}
```

### 静态属性，静态方法

只能通过类本身来访问

## 泛型

-   泛型定义

-   泛型约束（通过继承）

```javascript
function sun
```
