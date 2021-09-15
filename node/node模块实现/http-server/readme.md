# 从0实现一个http-server



1. 在根目录下，新建bin目录，bin目录下新建xxx.js(很多包都起www.js，也可以起其他名字)

在bin下的www.js中配置执行的运行方式
```js

#! usr/bin/env node

```
- 有bin的环境'
- 用node来执行这个环境


## 在package.json中配置别名，之后在命令行，执行这个别名的时候，会运行对应的文件
```json
 "bin": {
    "lfq-s": "./bin/www.js",
    "lfq-server": "./bin/www.js"
  },
```

2. 根目录下，执行npm link 将插件链接到全局上，之后就能执行对应的插件名



## 命令行的帮助文档
1. commander ，这是一个命令行的帮助文档




