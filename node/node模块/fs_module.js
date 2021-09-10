//fs 上基本上有两种api，一种是同步，一种是异步



const fs=require('fs')
// const fs=require('fs').promises  fs对应的方法，返回的都是promise
const path=require('path')

//读取文件，如果不制定编码类型，默认是buffer类型，
// fs.readFile(path.resolve(__dirname,'./test/test.js'),(err,data)=>{
//     if(!err){
//         console.log('读取文件成功',data)
//     }
// })
//写入的时候，默认会以utf-8格式写入（）
// fs.writeFile(path.resolve(__dirname,'./test/test.js'),Buffer.from('hello'),function(){
//     // console.log('err',err,data)
// })



// fs.open()
// fs.close()
// fs.read()
// fs.write()

//创建文件夹
// fs.mkdir('dist',(a)=>{
//     console.log('dist',a)
// })
// fs.mkdirSync()

//移除文件夹（不能直接移除父文件夹，要先删除子文件，再删除父文件）
// fs.rmdir()
// fs.rmdirSync()

// fs.readdir(path.resolve(__dirname,'./code'),(err,data)=>{
//     console.log('code',data)
// })
// fs.readdirSync()

// //文件状态  文件的信息，修改时间，创建时间，目录状态（isFile，isDirectory方法）
fs.stat(path.resolve(__dirname,'./code'),(err,data)=>{
    console.log('err',data)

})
// fs.statSync()

//A删除文件
// fs.unlink(path.resolve(__dirname,'./test.txt'),(err,data)=>{
//     console.log('d',err,data)
// })
// fs.unlinkSync()


