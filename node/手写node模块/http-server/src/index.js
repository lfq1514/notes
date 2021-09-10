const http = require("http")

const os=require('os')

const netInterface=os.networkInterfaces()

// console.log('netInterface',netInterface)

const ip=Object.values(netInterface)
.reduce((obj,item)=>{
    return [...obj,...item]
},[])
.find((item)=>{
    return item.family==='IPv4'&&item.cidr.startsWith('192.')
})
.address

const paramKeys=['port','directory','cache','gzip']
class Server {
    constructor(options={}){
        paramKeys.reduce((ctx,key)=>{
            ctx[key]=options[key]
             return ctx
        },this)
    }
    start(){
       const server= http.createServer((res,req)=>{

        })
        server.listen(this.port,()=>{
            console.log('server is runing......')
            console.log(`address is ${ip}:${this.port} `)
        })

    }
}
module.exports=Server
