const http=require('http')
const url=require('url')

//nodemon（本地） pm2（线上） 实现代码改变后，自动重启

const server=http.createServer((req,res)=>{
    //请求行
    console.log('req',req.url)
   const {pathname,query}=url.parse(req.url,true)//第二个参数为true，query会以对象的形式展示
   console.log('query',pathname,query)

   //请求头
   console.log('req',req.header)

    const chunk=[]
    //读取请求体
   req.on('data',(data)=>{ //可读流读取的数据都是buffer类型
    
    chunk.push(data)
   })

   req.on('end',()=>{//浏览器发送的数据全部读取完毕

   })

   res.statusCode=200
   res.statusMessage='ok'

   res.setHeader('XSS-HEADER',111)

   res.write('111')
   res.end()


})

server.on('request',(req,res)=>{
    console.log('REQUEST')
})
// const server=http.createServer(()=>{

// })

server.listen('8080',()=>{
console.log('listening-ddd-----')
})


