# ts 之工具类型

相关链接：
[工具类型](https://www.cnblogs.com/cangqinglang/p/12896595.html)

## typeof

typeof 操作符可以用来获取一个变量的声明类型

```ts
interface Person {
    name: string;
    age: number;
}
// 1
const p1: Person = { name: "zs", age: 10 };
const p2: typeof p1 = { name: "ls", age: 20 }; //通过typeof指定p2的类型和p1的类型一致（当然我们也可以直接给p2指定为Person类型）
// 2

function isObject(v: any): Boolean {
    return typeof v === "object" && v !== null;
}
type isO = typeof isObject;
```

## keyof

keyof T，索引类型操作符。
对于任何类型 T，keyof T 的结果为 T 上已知的公共属性名的联合。

```ts
interface Person {
    name: string;
    age: number;
}
const t1: keyof Person = "name";
```

const t1:keyof Person='name' 等价于

```ts
type k = "name" | "age";
const t1: k = "name";
```

## in

in 可以遍历枚举类型

```ts
type Keys = "a" | "b" | "c";

type Obj = {
    [p in Keys]: string;
}; // -> { a: string, b: string, c: string }

const o: Obj = {
    a: "1",
    b: "2",
    c: "3",
};
```

## extends(约束)

-   Exclude<T, U>
-   是条件类型，主要是用来添加泛型约束（条件类型是一种条件表达式进行类型的关系检测。）
-   这是 TS2.8 版本中推出的特性，此能力让类型定义变的更加灵活，需要注意：extends 运用在 type 和 class 中时完全是两种作用的效果。
-   将 U 联合类型的所有成员从 T 中排除，可以理解为取差集。剩余的部分返回作为一个新类型。
    源码实现

```ts
type Exclude<T, U> = T extends U ? never : T;
```

-   如何理解 T extends U ? never : T 呢？判断 T 中的每一项是否可以赋值给类型 U，如果可以，就返回 never，如果不可以，就返回当前这项。

```ts
type T0 = Exclude<"a" | "b" | "c", "a">; //结果为 "b" | "c"
```

-   参考链接：

1. [TypeScript 的 extends 条件类型](https://juejin.cn/post/6844904066485583885)
2. [玩转 TypeScript 工具类型（中）](https://mp.weixin.qq.com/s/V6LegBdQgz8pqHnozYCTDA)

## Partial

Partial<T> 的作用就是将某个类型里的属性全部变为可选项

Partial 源码实现

```ts
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

## Required

Required<T> 的作用就是将某个类型里的属性全部变为必选项。

-   -? 的作用就是移除可选项

```ts
type Required<T> = {
    [p in keyof T]-?: T[P];
};
```

## Readonly

Readonly<T> 的作用是将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值。

```ts
type Readonly<T> = {
    readonly [p in keyof T]: T[P];
};
```

## Record

Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
源码实现

```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

## Pick

-   Pick<T, K extends keyof T> 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。
-   实现

```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

-   举例

```ts
interface Animal {
    name: string;
    age: number;
    bar: () => {};
}

type Person = Pick<Animal, "name" | "age">;

const p1: Person = {
    name: "zs",
    age: 12,
};
```

## Exclude

-   Exclude<T, U> 的作用是从 T 中找出 U 中没有的元素(从 T 中排除 U)
-   **注意 Exclude 是操作联合类型的**
-   Exclude 源码

```ts
type Exclude<T, U> = T extends U ? never : T;
//如果 T 是 U 的子类型则返回 never 不是则返回 T
T = 1 | 2 | 3;
U = 2 | 3;
```

-   **exclude 的语义**
    如果 T 是 U 的子类型的话，那么就会返回 X，否则返回 Y

```ts
 T extends U ? X : Y
```

## Extract

Extract<T, U> - 用于从类型 T 中取出可分配给 U 类型的成员

## Omit

-   Omit<T, K extends keyof any> 的作用是使用 T 类型中除了 K 类型的所有属性，来构造一个新的类型。
-   **将接口或者类型的键值对删除一部分**
-   用之前的 Pick 和 Exclude 进行组合, 实现忽略对象某些属性功能, 源码如下

```ts
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

T = 1 | 2 | 3;
k = 2;
```

例子

```ts
type Foo = Omit<{ name: string; age: number }, "name">; // -> { age: number }
```

## NonNullable

## infer

在条件类型表达式中，可以在 extends 条件语句中使用 infer 关键字来声明一个待推断的类型变量。
注意：仅可以在条件语句中才能使用，其他地方使用会报错
ReturnType 和 Parameters 中就用到了 infer

## ReturnType

-   ReturnType<T> 的作用是用于获取函数 T 的返回类型。
    源码

```ts
type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R
    ? R
    : any;
```

## Parameters

-   Parameters<T> 的作用是用于获得函数的参数类型组成的元组类型。
-   源码

```ts
type Parameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any
    ? P
    : never;
```

## InstanceType

## ThisType

## ConstructorParameters
