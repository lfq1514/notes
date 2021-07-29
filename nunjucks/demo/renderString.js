let nunjucks=require('nunjucks')
//autoescape:true会自动转译，（如遇到一些<>等特殊符号会转译）
nunjucks.configure({autoescape:false})

let result=nunjucks.renderString(`hello {{name}}`,{name:'<script>'})

console.log('result',result)
//第一个参数配置的是视图所在的路径
// nunjucks.configure('view',{autocade:true})

// nunjucks.render('index.html')