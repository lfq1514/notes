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