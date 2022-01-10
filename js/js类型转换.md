# 类型转化需要用到的方法

## 底层规范实现上的方法（并没有直接暴露出来）

### 1. `ToNumber（value）`（基本类型转数字）

| 参数类型  | 结果                                                                                                                         |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Undefined | NaN                                                                                                                          |
| Null      | +0                                                                                                                           |
| Boolean   | 如果参数是 true，返回 1。参数为 false，返回 +0                                                                               |
| Number    | 返回与之相等的值                                                                                                             |
| String    | 如果传入的是一个字符串，它会视图将其转换成一个整数或浮点数，而且会忽略所有前面的 0，如果有一个字符不是数组，结果都会返回 NaN |

### 2. `ToString(value)`（基本类型转字符串）

| 参数类型  | 结果                          |
| --------- | ----------------------------- |
| Undefined | "undefined"                   |
| Null      | "null"                        |
| Boolean   | true-->"true" false-->"false" |
| Number    | 转化成字符串类型的            |
| String    | 返回与之相等的值              |

```JavaScript
console.log(String()) // 空字符串

console.log(String(undefined)) // undefined
console.log(String(null)) // null

console.log(String(false)) // false
console.log(String(true)) // true

console.log(String(0)) // 0
console.log(String(-0)) // 0
console.log(String(NaN)) // NaN
console.log(String(Infinity)) // Infinity
console.log(String(-Infinity)) // -Infinity
console.log(String(1)) // 1
```

### 3.`ToPrimitive(input[, PreferredType])`

-   输入一个值，然后返回一个一定是基本类型的值

-   第一个参数是 input，表示要处理的输入值。
-   第二个参数是 `PreferredType`，非必填，表示希望转换成的类型，有两个值可以选，Number 或者 String。
-   当不传入 PreferredType 时，如果 input 是日期类型，相当于传入 String，否则，都相当于传入 Number。
-   如果传入的 input 是 Undefined、Null、Boolean、Number、String 类型，直接返回该值。
-   如果是 ToPrimitive(obj, Number)，处理步骤如下：

    1. 如果 obj 为 基本类型，直接返回
    2. 否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
    3. 否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
    4. 否则，JavaScript 抛出一个类型错误异常。

-   如果是 ToPrimitive(obj, String)，处理步骤如下
    1. 如果 obj 为 基本类型，直接返回
    2. 否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回
    3. 否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
    4. 否则，JavaScript 抛出一个类型错误异常。

## 暴露出来的方法

### 1. valueOf()方法

-   默认的 valueOf 方法返回这个对象本身

-   数组、函数、正则简单的继承了这个默认方法，也会返回对象本身。

-   日期是一个例外，它会返回它的一个内容表示: 1970 年 1 月 1 日以来的毫秒数。

    ```JavaScript
    var date = new Date(2017, 4, 21);
    console.log(date.valueOf()) // 1495296000000
    ```

### 2. toString()方法

1. 当调用对象的 toString 方法时，其实调用的是 Object.prototype 上的 toString 方法。
2. 数组的 toString 方法将每个数组元素转换成一个字符串，并在元素之间添加逗号后合并成结果字符串。
3. 函数的 toString 方法返回源代码字符串。
4. 日期的 toString 方法返回一个可读的日期和时间字符串。
5. RegExp 的 toString 方法返回一个表示正则表达式直接量的字符串。

```JavaScript
console.log(({}).toString()) // [object Object]

console.log([].toString()) // ""
console.log([0].toString()) // 0
console.log([1, 2, 3].toString()) // 1,2,3
console.log((function(){var a = 1;}).toString()) // function (){var a = 1;}
console.log((/\d+/g).toString()) // /\d+/g
console.log((new Date(2010, 0, 1)).toString()) // Fri Jan 01 2010 00:00:00 GMT+0800 (CST)
```

## 不同情况的类型转换

### 1. 原始值转布尔

只有六种可以被转化为 false（undefined，null，0，-0，NaN，""）,其他都转化为 true

### 2. 原始值转数字

规范中调用 ToNumber（）来实现

### 3. 原始值转字符

规范中调用 ToString（）

### 4. 原始值转对象

通过调用 Number（），String（），Boolean（）构造函数 转化

### 5. 对象转布尔值

所有对象都会转为 true

### 6. 对象转字符串

1. 先通过按 ToPrimitive（obj，String）来处理
2. 再通过 ToString()来转化

### 7. 对象转数字

1. 按 ToPrimitive（obj，Number）来处理
2. 再通过 ToNumber（）来转化

### 8. 隐式转换

1. 一元操作符+

    调用 ToNumber 处理

2. 二元操作符+（x+y）

    转化步骤如下：

    1. 转化 x0=ToPrimitive（x），转化 y0=ToPrimitive（y）(x0,y0 是转化后数据)
    2. 如果 x0 和 y0 只要有一个是字符串，直接返回 ToString（x0）和 ToString（y0）的拼接结果
    3. 否则返回 ToNumber（x0）和 ToNumber（y0）的运算结果

3. ==相等(x==y)

    1. null 和 undefined

        - x 是 null 并且 y 是 undefined，返回 true
        - x 是 undefined 并且 y 是 null，返回 true

    2. 字符串与数字

        - 将字符串用 ToNumber（）转化为数字

    3. 布尔值与其他类型

        - 将布尔值用 ToNumber（）转化为数字

    4. 对象与非对象（这里的非对象指字符串或数字）

        - 将对象通过 ToPrimitive（）转化后再比较

    5. 如果 x 和 y 是用一种类型

        特殊情况：

        - NaN==NaN --> false
        - false==false -->true
        - 如果是对象类型,x 和 y 指向同一个对象就是 true,否则为 false
        - 除上述情况，其他的都为 true

    6. 其他都是 false

## 练习

好，我们的知识点在上面已经列出来了，我们练习一道题

1. []==[]

根据==的规则，x，y 属于同一种类型，且他们的指向是两个内存地址，所以就为 false

2. 1=='false'

根据==比较的，第 2 条，字符串与数字比较，会将字符串转化为数字

所以’false‘转化为数字，根据 ToNumber（value）的转化规则，会转化为 NaN

1==NaN，结果就是 false

## 结尾

有什么疑惑，或者是问题，可以底部留言
