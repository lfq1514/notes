### jsx语法渲染机制（原理）

前言：jsx语法是react独有的语法，结构由js与html(或xml)构成

####  jsx渲染流程（3步走）

1. 基于babel中的语法解析模块（babel-preset-react）把jsx语法编译为React.createElement(...)这样的结构（通过<https://babeljs.io/repl>这个网站输入jsx语法，可自行查看编译结果，注意：需要在PRESETS中勾选上react这一项）

   ```
   例如jsx语法这样；
   <h1 className='title' ref='href' key='hkey'>
   测试
   </h1>
   解析出来的结果是这个样子：
   
   React.createElement("h1", {
     className: "title",
     ref: "href",
     key: "hkey"
   }, "\u6D4B\u8BD5");
   
   注：
   1，React.createElement(type,props,children)接受三个参数，type是标签名，props是标签对应的属性，children是标签的内容，如果内容也是标签，会继续转化为 React.createElement(type,props,children)这样的结构
   2，"\u6D4B\u8BD5"是"测试"两个字的unicode编码，不用纠结
   ```

2. 执行React.createElement(type,props,children)，会创建一个对象（就是虚拟dom）,这个对象的结构如下：

   ```
   key: "hkey"
   props: {className: "title", children: "测试"}
   ref: "href"
   type: "h1"
   注：
   1，当然还有一些其他属性，如_owner,_store等，这些我们基本不会用到，所以在代码上就不体现出来了
   2，这里在转化的时候，将传进来的props中的key和ref放到了外面，并删除了props内部的key和ref的值
   ```

   下面我们实现一下createElement方法：

   ```
   function createElement(type,props,children){
   let obj=｛
       key: null,
       props: {},
       ref: null,
       type: null,
   ｝
   obj={...obj,type,props:｛...props,children｝}
   'key' in obj.props?obj.key=obj.props.key,obj.props.key=undefined:null
   'ref' in obj.props?obj.ref=obj.props.ref,obj.props.ref=undefined:null
   return obj    
   }
   ```

​    3.执行ReactDOM.render方法，把生成的对象动态创建为dom元素，插入到指定的容器中

```
function render(obj,container,callBack){
let {type,props}=obj||{}
let newElement=document.createElement(type)
for(let attr in props){
    if(!props.hasOwnProperty(attr)) break;不是私有属性，直接结束遍历
    if（!props[attr]）continue;//如果当前属性没有值，进行下一个迭代
    let value=props[attr];  
    if(attr==='className'){
    newElement.setAttribute('class',value)
    continue
    }
    if(attr==='style'&&value!==''){
    if(value==='') continue
        for(styleKey in value){
            if(value.hasOwnProperty(styleKey)){
                newElement['style'][styleKey]=value[styleKey]
            }
        }
    }
    if(attr==='children'){
    if(typeof value==='string'){
        let text=document.createTextNode(value);
        newElement.appendChild(text)     
    }     
    } 
}
container.appendChild(newElement)
callBack&&callBack()
    
}
```

