# setState异步改同步写法
- 基于promise和async 和await写法


```javascript

function setStateAsync(data){
  return new Promise((resolve,reject)=>{
    this.setState(data,resolve)
  })
}

class TestView extends Component {
  constructor(){
    this.state={
      name:''
    }
  }

  componentDidMount(){
    this.initData()
  }

  async initData(){
    await setStateAsync({name:zs})
    doSomeThing()
  }
}
```
