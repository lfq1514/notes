
let data = {
    groups: {
        waters: {
            name: "water group",
            total: 10,
            description: "this is water group",
        },
        sss:'sss'
    },
    test: "testOne",
    arr:[]
};

function render(){
    console.log('render')

}

let handler={
    get(target,key){
        //如果取的值是对象的话，就对这个对象进行数据劫持
        if(typeof target[key]==='object'&& target[key]!==null){
            return new Proxy(target[key],handler)
        }
       return  Reflect.get(target,key)
    },
    set(target,key,value){
        if(key==='length'){
            return true
        }
        render()
       return Reflect.set(target,key,value)
    }
}

let proxyData=new Proxy(data,handler)

//如果存在对象属性是对象的这种嵌套方式，在取值到proxyData.groups的时候，做判断，如果proxyData.groups是对象的话，继续代理
// proxyData.groups.sss='bbb'
proxyData.arr.push('111')
// console.log(proxyData.arr.push)









