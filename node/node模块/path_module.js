const url=require('url')
const path=require('path')

const res=url.parse('localhost:3000/test/index.js')

// console.log('res',process.cwd())
console.log(path.join(process.cwd(),res.pathname))
