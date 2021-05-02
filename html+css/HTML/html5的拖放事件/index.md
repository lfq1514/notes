# html5中的拖放
相较于通过原生js实现的拖放效果来说，html5新增的拖放会更好更简单一些


## 拖放事件

### 作用在被拖的源对象
1. ondragstart：源对象开始被拖动

2. ondrag：源对象被拖动过程中(鼠标可能在移动也可能未移动)

3. ondragend：源对象被拖动结束


### 作用在投放的目标对象

1. ondragenter：目标对象被源对象拖动着进入

2. ondragover：目标对象被源对象拖动着悬停在上方

3. ondragleave：源对象拖动着离开了目标对象

4. ondrop：源对象拖动着在目标对象上方释放/松手

## dataTransfer对象属性

可以通过在源对象的事件处理中，在e.dataTransfer.setData在源对象上保存数据，
在目标对象的事件处理中，通过e.dataTransfer.getData获取保存的数

```javascript
//setData的时候参数分别为key-value
setData(k,v)
//getData取值的时候，用对应的key来取对应的值
getData(k)
```

## 案例
1. 垃圾桶删除

2. 从其他地方拖拽图片到页面中显示

## 注意点：
1. 在 ondragover 中一定要执行 preventDefault()否则ondrop事件不会被触发
 