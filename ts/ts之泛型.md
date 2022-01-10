# ts 之泛型

## 泛型为什么使用尖括号
为什么泛型要用尖括号（<>），而不是别的？ 我猜是因为它和 () 长得最像，且在现在的 JS 中不会有语法歧义。但是，它和 JSX 不兼容！

这是因为 TS 发明这个语法的时候，还没想过有 JSX 这种东西。后来 TS 团队在 TypeScript 2.9 版本修复了这个问题。也就是说现在你可以直接在 TS 中使用带有泛型参数的 JSX 啦（比如上面的代码）。


## 泛型类型

- 函数泛型

```ts
function Fn<T>(a1:T,a2:T):T{
    return a1+a2
}
```
- 接口泛型
```ts
interface Inter<T,U> {
    hello:T;
    world:U
}
```

- 类泛型
```ts
class ShopPage extend React.component<IProp,IState> {

}
```

## 类型约束

```ts
interface Size {
    size:string
}

function lengthAble<T extends Size>(a:T):T{
    console.log(a.size)
    return a

}
```
