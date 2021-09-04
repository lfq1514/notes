
const babel=require('@babel/core')
function babel_loader(source,inputSourceMap,data){

    const options={
        presets:['@babel/preset-env'],
        inputSourceMap:inputSourceMap,
        sourceMaps:true,
        fileName:this.request.split('!')[1].split('/').pop()

    }

    let {code,map,ast}=babel.transform(source,options)

    return this.callback(null,code,map,ast)
    
}

module.exports=loader
