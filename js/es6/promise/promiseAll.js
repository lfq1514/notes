
import Promise from './myPromise'
let isPromise=(value)=>{typeof value.then==='function'}

Promise.all=function(promises){

    return new Promise((resolve,reject)=>{
        let data=[]
        let count=0
        const processData=(index,value)=>{
            // count++
            data[index]=value
            if(++count===promises.length){
                resolve(data)
            }
        }
        for(let i=0;i<promises.length;i++){
            let result=promises[i]
            //如果是promise
            if(isPromise(result)){
                result.then((value)=>{
                    processData(i,value)
                },reject)
            }else {
                processData(i,result)
            }
        }
    })
}
Promise.all([1,2,fs.readFile('./11.js'),fs.readFile('./22.js')]).then((data)=>{

})
