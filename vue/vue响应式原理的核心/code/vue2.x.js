function render() {
    console.log("render");
}

function observe(obj) {

    if(Array.isArray(obj)){
        defineArrayData(obj)
        return 
    }
    for (key in obj) {
        defineReactive(obj, key,obj[key]);
    }
}
//对象的响应式处理
function defineReactive(obj, key,value) {
    if (typeof value === "object" && value !== null) {
        observe(obj[key]);
    }
    Object.defineProperty(obj, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                render();
            }
            return newValue
        },
    });
}
//数组的响应式处理
function defineArrayData(obj){
   
    const methods=['pop','push','shift','unshift','splice','sort','reserve']

    const arrayProto=Array.prototype
    
    let newProto=Object.create(arrayProto)
   
    methods.forEach((item)=>{
        newProto[item]=function(){
            render()
            arrayProto[item].call(this,...args)
        }
    })
     //让数组的原型，指向我们改写后的原型
    obj.__proto__=newProto
}

let vmData = {
    groups: {
        waters: {
            name: "water group",
            total: 10,
            description: "this is water group",
        },
    },
    test: "testOne",
};

observe(vmData);

function $set(obj,key,value){

    if(Array.isArray(obj)){
        obj.splice(key,1,value)
    }
    defineReactive(obj,key,value)
}

