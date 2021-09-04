
//pipe的目的是:可以读一点,写一点,监听可读流的触发事件,将获取到的数据写入到可写流中,如果写入的时候,返回false,则暂停读取,读取完毕后触发drain事件,再继续读取,直到最终完毕,
// 缺点:我们无法对读取的数据进行操作,如果需要操作读取到的数据,需要使用on('data')
//pipe可以理解为对 on('data'), fs.write(), fs.read(), on('end'),on('close')等的一系列封装

const fs=require('fs')
const path=require('path')
const rs=fs.createReadStream(path.resolve(__dirname,'./a.txt'),{highWaterMark:4})
const ws=fs.createWriteStream(path.resolve(__dirname,'./b.txt'),{highWaterMark:1})


rs.on('data',(data)=>{
    console.log('res',data)
    let flag=ws.write(data)
    if(!flag){
        rs.pause()
    }
})

ws.on('drain',()=>{
    rs.resume()

})