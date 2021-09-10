
# 从0实现一个脚手架

## 背景

## 自己写的包如何运行？

1. 创建可执行的脚本，写入
```text
#！ usr/bin/env node
```

2. 配置package.json中的bin字段
默认都叫bin（当然，你非要非主流，搞个bbb也行）

4. npm link 链接到本地环境中
 link 相当于将本地模块（自己写的模块）链接到npm目录下，这个npm目录就可以直接访问，所以当前包就能直接访问到了

5. 之后就能通过执行命令了（执行的命令就是package.json的name名字），也可以通过起别名的方式

如果bin是一个字符串的话，就会采用name
```js
 "bin":"./bin/qy"
```
如果bin是以对象的话，就会采用对象的key
```js
 "bin":{
    "qy-cli":"./bin/qy",
    "lfq-cli":"./bin/qy",
 }
```

## 配置可执行命令 commander


## chalk 这个模块给命令行字体加颜色

## 命令行交互功能  inquirer
inquirer 在命令行里选择功能的

## 将模板下载下来， download-git-repo
可以根据模板名和版本号，把代码download下来

##  根据用户的选择，动态的生成内容  metalsmith

## ora 实现命令行里的loading效果


