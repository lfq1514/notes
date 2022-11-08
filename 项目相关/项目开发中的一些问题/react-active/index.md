# 项目开发ing

## 体脂秤面板（000000oesf）

### 需求：如果是一行文字，全部显示出来，如果是两行或者多行文字，超出的文字显示省略号，同时点击的时候弹窗显示全部的内容
- 实现思路1
  1. react-native中的Text中有个onLayout属性，这个属性会在加载时或者布局变化以后调用（[详细链接](https://reactnative.cn/docs/text#onlayout)）
  2. [numberOfLine](https://reactnative.cn/docs/text#numberoflines)
  3. 获取文本的实际高度，与开始约定的限制的高度做比较（行高*行数），得出是否需要超出隐藏，从而动态的添加numberOfLines属性，

  ```javascript

  const textInfo={
    limitLine:2,
    textLineHeight:cx(16)
  }
   textLayout=(e)=>{
     //实际文本高度
    const textHeight=e.nativeEvent.layout.height
    //设定好的高度与实际文本的高度比较
    const isTextOverflow=textHeight<(textInfo.limitLine+1)*textInfo.textLineHeight?false:true
    if(!isTextOverflow) return
    this.setState({
      isTextOverflow
    })

    //--------------------
    //动态添加numberOfLines这个属性
    const textNumberOfLines=this.state.isTextOverflow?{numberOfLines:textInfo.limitLine}:null

    <Text
      allowFontScaling={false}
      onPress={this.state.isTextOverflow?() => this.setState({ visible: true }):null}
      style={[styles.metricsRankTxt]}
      onLayout={this.textLayout}
      {...textNumberOfLines}
    ><Text>

  }
  ```

  - 思路2
   1. 准备两个Text元素，元素1一直处于隐藏状态，元素2用来显示（并设定好numberOfLines属性，超出设置值就隐藏）
   2. 元素1和元素2分别通过onLayout来获取文本高度，如果高度一致，说明没有超出隐藏，不用弹窗显示，如果高度不一致，说明超出隐藏了，需要弹窗显示详细的文案

## 多头电磁炉面板（000000u8o5）

### 需求1:svg动态绘制档位图

- 效果图展示
![circle](/Users/liufeiqiang/lfq/study/mygithub/notes/项目开发中的一些问题/img/circle.png)

- 绘制思路：
  1. 先画圆形背景图
  2. 生成根据大小圆半径以及扇形的个数 生成map数据，依次画单个封闭扇形。


## useRef的使用
- useRef不仅仅是常用来管理DOM ref,还相当于this，可以存放任何变量（由于函数式组件没有了class组件的this，可以通过useRef来存放变量）

```javascript

function Component1(){
  const {count,setCount}=useState(0)
  // let timerID  这样写每次在触发onLongPress的setState的时候都会重新渲染，重新执行函数，重新声明timerID，
  //这里改用useRef，useRef每次渲染返回的是同一份引用
  let timerID=useRef(null)

  const onLongPress=()=>{
    timerID.current=setInterval(()=>{
      setState
    },1000)
  }
  const onPressOut=()=>{
    timerID.current&&clearInterval(timerID.current)
  }
  return (
    <div>count:{count}<div>
  )
}

```
## memo (React v16.6)
- 用来包裹一个组件的时候，只有组件的props改变了，才会重新渲染该组件，否则会复用之前的组件
- memo有两个参数，第一个是要包裹的组件，第二个是自定义的用来进行props比较更新的函数areEqual（相当于shouldComponentUpdate，但是与shouldComponentUpdate() areEqual 返回 true 时，不会触发 render;如果返回 false，则会。而 shouldComponentUpdate 刚好与其相反。）

```javascript

import {memo} from 'react'
function Child(props){
  return (
    <div>child</div>
  )
}
const areEqual=(preProps,nextProps)=>{
  return preProps===nextProps

}
const ChildView=memo(Child,areEqual)
function ParentComponent(){
  const [data,setData]=useState({name:'zs',age:'99'})
  return (
    <div>
     <ChildView data={data}/>
    </div>
  )
}
```

## toastView在低版本组件的一些问题（1.xx）
- toastView的容器宽度是页面的宽度，如果在一个宽度与页面宽度不一致的组件中，显示的toastView就不会居中

## TouchableWithoutFeedback的一些注意点
注意TouchableWithoutFeedback只支持一个子节点（不能没有子节点也不能多于一个）。如果你希望包含多个子组件，可以用一个 View 来包装它们。
## 对项目结构 自己的一些看法
- src
  - container
    - home
      - index.js （这里主页面）
      - component（这里放页面拆分后的组件）
        - topBar.js
        - car.js
      - data （如果页面中有大量的逻辑，可以把逻辑抽离到data中）
        - index.js
  - component (这里放公共，通用的组件)
    - popup.js
  - api 
  - utils
  -res








