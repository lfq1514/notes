# svg说明文档


## rect 矩形

```JavaScript
<rect width="300" height="300" style="fill:red; stroke:blue,stroke-width:1"></rect>
<rect width="300" height="300" fill="red" stroke="blue" stroke-width="1"></rect>
```

## circle 圆形

```JavaScript
<circle cx="100" cy="100" r="40" stroke="black" fill="blue" stroke-width="2" ></circle>

<circle cx="100" cy="100" r="40"  style="fill:red; stroke:blue,stroke-width:1"></circle>
```

## line 直线

```JavaScript
<line x1='0' y1='0' x2='100' y2='100' stroke="black" stroke-width="2" ></line>

<line x1='0' y1='0' x2='100' y2='100'  style="stroke:blue,stroke-width:1"></line>
```

## polygon 多边形

```JavaScript
<polygon points="100,100 200,200 0,0" style="stroke:blue,stroke-width:1"></polygon>
```

## path元素

- M
起点坐标位置(M 100 100)

- L
下一个直线坐标位置(L 100 100)

- V
垂直坐标(Y轴坐标)位置(X轴坐标与当前坐标一致)

- H
水平坐标(X轴坐标)位置(Y轴坐标与当前坐标一致)

- A命令参数

1. X半径
2. Y半径
3. 角度
4. 弧度  0 小弧 1大弧
5. 方向  0 逆时针 1 顺时针
6. 终点X坐标
7. 终点Y坐标

```javascript
<path d="M 100 100 L200 100 V50 H300 A100 100 0 1 1 100 200"></path>
```

- Q 二次贝塞尔曲线 (x1,y1,x,y)

图示: ![二次贝塞尔曲线](https://images2015.cnblogs.com/blog/485405/201511/485405-20151128225502860-1182931979.gif)

x1,y1是中间点(P1)点坐标,x,y是贝塞尔曲线终点坐标（P2）


- Z
关闭路径

注意： 上述命令区分大小写，大写表示绝对定位（相对于svg坐标系而言），小写表示相对定位（相对于上一个轨迹停止位置而言）

```javascript
//综合案例
<path d="M 100 100 L200 100 V50 A100 100 0 1 1 100 200 Z"></path>
```

## svg文本

```
<text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
```

## Stroke 属性

Stroke属性定义一条线，文本或元素轮廓颜色：

## stroke-width 属性

stroke- width属性定义了一条线，文本或元素轮廓厚度：


