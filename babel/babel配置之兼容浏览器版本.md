# babel之兼容浏览器版本

通过package.json的browerslist字段指定浏览器兼容列表，或者通过@babel/preset-env配置项的target指定，

@babel/preset-env在转化的时候，会读取到上面我们配的浏览器列表，如果没有配，默认es6转es5


browerslist会依据can i use来判断语法或者api是否兼容

通过npx browerslist命令，可以查看当前项目配置的浏览器兼容列表

[快速查找浏览器兼容列表](https://browsersl.ist/)


