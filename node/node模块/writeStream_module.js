const fs=require('fs')
const path=require('path')

//写入的时候会累计写入的字节数，如果超过预期或者等于预期则返回false，虽然超过预期但是不影响写入
const ws=fs.createWriteStream(path.resolve(__dirname,'/test.txt'),{
    flags:'w',
    autoClose:true,
    encoding:'utf-8',
    start:0,
    highWaterMark:3,//可写流的 highWaterMark和可读性的不一样，表示的是 ：期望用多少内存来写
})

ws.on('open',function name(fd) {
    console.log('open',fd)
})

//调用了end方法才会执行close监听方法
ws.on('close',function name(fd) {
    console.log('close')
})




//参数只能是字符串或者buffer
ws.write('1')

ws.end()


