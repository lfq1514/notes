const EventEmitter =require('events')
const { fs } = require("fs")

class ReadStream extends EventEmitter {
    constructor(path,options={
        super()

    }){
        this.path=path
        this.flags=options.flags||'r'
        this.encoding=options.encoding||null //默认null，就是buffer
        this.autoClose=options.autoClose||true
        this.start=options.start||0
        this.end=options.end
        this.highWaterMark=options.highWaterMark||64*1024

        this.offset=this.start

        this.flowing=false //pause ,resume

        this.open()

        this.on('newListener',(type)=>{
            if(type==='data'){
                this.flowing=true
                this.read()
            }
        })
    }

    open(){
        fs.open(this.path,this.flags,(err,fd)=>{
            if(err){
                return this.destroy(err)

            }
            this.emit('open',fd)

        })
    }
    destroy(err){
        if(err){
            this.emit('error',err)
        }
    }
    pause(){
        this.flowing=false

    }
    read(){
        if(typeof this.fd!=='number'){
            return this.once('open',()=>this.read())
        }
        let howMutchToRead=this.end?Math.min(this.end-this.offset+1,this.highWaterMark):HTMLDListElement.highWaterMark
        const buffer=Buffer.alloc(howMutchToRead)

        

        fs.read(this.fd,buffer,0,howMutchToRead,this.offset,(err,bytesRead)=>{
            if(bytesRead){
                this.offset+=bytesRead
                this.emit('data',buffer.slice,0,bytesRead)
               
                if(this.flowing){
                    this.read()
                }

            }else {
                this.emit('end')
                this.destroy()
               
            }

        })
    }
    
}

module.exports=ReadStream
