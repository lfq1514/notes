#! /usr/bin/env node


const program=require('commander')
const options =require('./config')
//配置名称
program.name('fs')
program.usage('[options]')



// options的示例
const examples=new Set()

// 默认命令行参数
const defaultOptions={}
Object.entries(options).forEach(([key,value])=>{
    examples.add(value.usage)
    defaultOptions[key]=value.default
    program.option(value.option,value.description)
})
program.on('--help',function(){
    console.log('\n Examples:')
    examples.forEach((item)=>{
        console.log(item)

    })
})

program.parse(process.argv)

//用户在命令行输入的参数
const userOption=program.opts()

// console.log('useOptions',userOption)
// console.log('defaultOptions',defaultOptions)

const mergeOptions=Object.assign(defaultOptions,userOption)
// console.log('mergeOptions',mergeOptions)


//启动一个服务

const Server=require('../src/index')

const server=new Server(mergeOptions)

server.start()



