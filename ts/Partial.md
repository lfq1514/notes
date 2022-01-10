# ts 高级类型之 Partial

## ts 项目开发中，我们基于已有的一个接口，想要将接口的所有属性变成可选，如果没有 Partial，我们需要重新定义一个接口

```ts
interface Person {
    name: string;
    age: number;
}

type otherPerson = Partial<Person>;

const p1: otherPerson = {
    name: "p1",
};
```

## Partial 的底层实现

Partial 的底层也是非常简单，用到了 keyof 关键字

```ts
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

我们完全可以自己去实现,效果和 Partial 是完全一样的

```ts
type Pt<T>={
    [P in keyof T]?;T[P]
}
```
