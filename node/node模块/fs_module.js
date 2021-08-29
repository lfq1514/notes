//fs 上基本上有两种api，一种是同步，一种是异步



const fs=require('fs')
const path=require('path')

//读取文件，如果不制定编码类型，默认是buffer类型，
fs.readFile(path.resolve(__dirname,'./test/test.js'),(err,data)=>{
    if(!err){
        console.log('读取文件成功',data)
    }
})
//写入的时候，默认会以utf-8格式写入（）
fs.writeFile(path.resolve(__dirname,'./test/test.js'),Buffer.from('hello'),function(){
    // console.log('err',err,data)
})



// fs.open()
// fs.close()
// fs.read()
// fs.write()


