# ts 之 keyof

keyof 是索引类型查询操作符

keyof 可以理解为是某个类型的其中一个 key

```ts
interface Person {
    name: string;
    age: number;
}

type key = keyof Person;

//keyof 可以理解为是某个类型的其中一个 key,这里就可以理解为k是 Person接口 key 其中的一个
const k: key = "name";
```



