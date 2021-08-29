const fs=require('fs')
const path=require('path')
//返回的是一个可读流对象
const rs=fs.createReadStream(path.resolve(__dirname,'./test/test.json'),{
    flags:'r',
    encoding:null,//默认编码是buffer
    autoClose:false,//设置为false，文件就不会关闭掉
    start:0,//读取的位置
    // end:4,//读取结束的位置，不传默认会读取完
    highWaterMark:4 //每次读取的数据个数（默认会读取64k，64*1024）
})

rs.on('open',(fd)=>{
    console.log('fd',fd)

})
//监听用户，绑定了data事件，就会触发对应的回调，不停的触发
rs.on('data',(chunk)=>{
    console.log('chunk',chunk)
   //暂停流文件读取
    rs.pause()

})
const s=setInterval(() => {
    //恢复流文件读取
    rs.resume()
}, 1000);
//当文件读取完毕后，会触发end事件
rs.on('end',()=>{
    console.log('end')
    clearInterval(s)
})
rs.on('close',()=>{
    console.log('close')
    clearInterval(s)
})
rs.on('error',(err)=>{
    console.log('onerr',err)
    clearInterval(s)

})

