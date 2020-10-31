# 类型转化需要用到的方法

## 底层规范实现上的方法（并没有直接暴露出来）

### 1. `ToNumber（value）`（基本类型转数字）

| 参数类型  | 结果                                                         |
| --------- | ------------------------------------------------------------ |
| Undefined | NaN                                                          |
| Null      | +0                                                           |
| Boolean   | 如果参数是 true，返回 1。参数为 false，返回 +0               |
| Number    | 返回与之相等的值                                             |
| String    | 如果传入的是一个字符串，它会视图将其转换成一个整数或浮点数，而且会忽略所有前面的0，如果有一个字符不是数组，结果都会返回NaN |

### 2. `ToString(value)`（基本类型转字符串）

| 参数类型  | 结果                            |
| --------- | ------------------------------- |
| Undefined | "undefined"                     |
| Null      | "null"                          |
| Boolean   | true-->"true"   false-->"false" |
| Number    | 转化成字符串类型的              |
| String    | 返回与之相等的值                |

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

- 输入一个值，然后返回一个一定是基本类型的值

- 第一个参数是 input，表示要处理的输入值。
- 第二个参数是 `PreferredType`，非必填，表示希望转换成的类型，有两个值可以选，Number 或者 String。
- 当不传入 PreferredType 时，如果 input 是日期类型，相当于传入 String，否则，都相当于传入 Number。
- 如果传入的 input 是 Undefined、Null、Boolean、Number、String 类型，直接返回该值。
- 如果是 ToPrimitive(obj, Number)，处理步骤如下：
  1. 如果 obj 为 基本类型，直接返回
  2. 否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
  3. 否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
  4. 否则，JavaScript 抛出一个类型错误异常。

- 如果是 ToPrimitive(obj, String)，处理步骤如下
  1. 如果 obj为 基本类型，直接返回
  2. 否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回
  3. 否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
  4. 否则，JavaScript 抛出一个类型错误异常。

## 暴露出来的方法

### 1.  valueOf()方法

- 默认的 valueOf 方法返回这个对象本身

- 数组、函数、正则简单的继承了这个默认方法，也会返回对象本身。

- 日期是一个例外，它会返回它的一个内容表示: 1970 年 1 月 1 日以来的毫秒数。

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

只有六种可以被转化为false（undefined，null，0，-0，NaN，""）,其他都转化为true

### 2. 原始值转数字

规范中调用ToNumber（）来实现

### 3. 原始值转字符

规范中调用ToString（）

### 4. 原始值转对象

通过调用Number（），String（），Boolean（）构造函数 转化

### 5. 对象转布尔值

所有对象都会转为true

### 6. 对象转字符串

1. 先通过按ToPrimitive（obj，String）来处理
2. 再通过ToString()来转化

### 7. 对象转数字

1. 按ToPrimitive（obj，Number）来处理
2. 再通过ToNumber（）来转化

### 8. 隐式转换

1. 一元操作符+

   调用ToNumber处理

2. 二元操作符+（x+y）

   转化步骤如下：

   1. 转化x0=ToPrimitive（x），转化y0=ToPrimitive（y）(x0,y0是转化后数据)
   2. 如果x0和y0只要有一个是字符串，直接返回ToString（x0）和ToString（y0）的拼接结果
   3. 否则返回ToNumber（x0）和ToNumber（y0）的运算结果

3. ==相等(x==y)

   1. null和undefined

      - x是null并且y是undefined，返回true
      - x是undefined并且y是null，返回true

   2. 字符串与数字

      - 将字符串用ToNumber（）转化为数字

   3. 布尔值与其他类型

      - 将布尔值用ToNumber（）转化为数字

   4. 对象与非对象（这里的非对象指字符串或数字）

      - 将对象通过ToPrimitive（）转化后再比较

   5. 如果x和y是用一种类型

      特殊情况：

      - NaN==NaN    --> false
      - false==false  -->true
      - 如果是对象类型,x和y指向同一个对象就是true

   6. 其他都是false
