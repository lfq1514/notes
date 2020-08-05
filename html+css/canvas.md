#  canvas学习

## canvas起步

##  canvas基础命令

```
 let mycanvas=document.querySelector('canvas')
 //获取canvas上下文
 let ctx=mycanvas.getContext('2d')
 //开始新的路径
 ctx.beginPath()
 //结束路径
 ctx.closePath()
//设置描边的颜色
 ctx.strokeStyle='red'
 //描边
 ctx.stroke()
 //填充
 ctx.fill()
 //指定填充的颜色
 ctx.fillStyle="red"
  //获取画布高度
 ctx.canvas.height
 //获取画布宽度
 ctx.canvas.width
```



##  绘制直线

```
//设置画笔起点
 ctx.moveTo()
 //绘制直线，设置画笔移动到哪里
 ctx.lineTo()
 //设置线条宽度
 ctx.lineWidth=20
 //设置描边的颜色
 ctx.strokeStyle='red'
 //描边
 ctx.stroke()
 //填充
 ctx.fill()
 //指定填充的颜色
 ctx.fillStyle="red"
```

##  绘制矩形

```
//x,y:绘制矩形的起点
//w:矩形的宽度
//h:矩形的高度
ctx.react(x,y,w,h)
//矩形描边
ctx.strokeRect(x,y,w,h)
//矩形填充
ctx.fillRect(x,y,w,h)
//清除矩形区域的内容
ctx.clearRect(x,y,w,h)

```

##  渐变

```
  //创建渐变方案(直线渐变)
   let linearGradient= ctx.createLinearGradient(x0,y0,x1,y1)
   //指定渐变起始颜色（0指0%的位置）
   linearGradient.addColorStop(0,'pink')
   //指定渐变结束颜色（1指100%位置）
   linearGradient.addColorStop(1,'red') 
```

##  非零环绕规则（填充规则）

看一块区域是否填充的规则：

1. 从这个区域拉一条直线
2. 看和这个直线相交的轨迹
3. 如果遇到顺时针轨迹就+1
4. 如果遇到逆时针轨迹就-1
5. 最后计算所有的轨迹的值，如果是非0，则填充，如果是0，则不填充



