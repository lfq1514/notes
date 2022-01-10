# node

## 模块的实现

通过自执行函数实现
((exports,module,require,**filename,**dirname)
)=>{...
})(exports,module,require,**filename,**dirname)

## 全局变量

-   progress
-   buffer
-   setTimeout
-   setImmediate

### progress

-   progress.cwd
    当前工作目录

-   progress.argv
    获取在终端（命令行）输入的指令
    minimist 库 可以用来将 progress.argv 参数处理成对象的格式
-   progress.env
-   progress.nextTick

## node 核心模块

## Buffer 介绍（Buffer 是全部变量）

### fs

-   fs.readFile
-   fs.readSync
-   fs.writeFile
-   fs.writeFileSync
-   fs.open
-   fs.read
-   fs.write
-   fs.unlink
-   fs.link
-   fs.rmdir
-   fs.rmdirsync

### path

-   path.resolve
-   path.join

### vm

### util

-   util.promisify

### events

## 流

相关练习题 github
https://github.com/wangtongmeng/front-end-practice

珠峰 node 及其他笔记课堂 github 链接
https://github.com/1021965843/jiagouke1-node/blob/5d778be0c218401e6d41deba8e2baec938a7fae5/8.tree/3.fs.js
