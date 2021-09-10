const  babel =require('@babel/core')
const fs=require('fs') 
const path=require('path') 

const  enterFile=fs.readFileSync(path.resolve(__dirname,'./index.js'),'utf-8')


const astParse=babel.parseSync(enterFile,{
    sourceType: 'module',
  })

console.dir(astParse,{depth:100})
