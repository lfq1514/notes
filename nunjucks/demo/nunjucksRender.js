let nunjucks=require('nunjucks')

// let path=require('path')
// console.log('ssss',path.resolve('views'))
//第一个参数配置的是视图所在的路径
nunjucks.configure('/views',{autoescape:true})


//render的第一个参数是文字的名字，相对于我们上面配置的view的路径
let res=nunjucks.render('index.html',{name:'sss'})

console.log('res',res)