# gulp 学习

## gulp介绍

###  gulp是什么
    - 基于nodejs的steam流打包
    - 定位是基于任务流的自动化构建工具

###  优点：
  1. 流式的写法，简单直观
  2. api简单，代码量少
  3. 易于学习和使用
  4. 适合多页面应用开发（没有很强的递归依赖关系，适用于中小型项目）

###  缺点：
  1. 异常处理比较麻烦
  2. 工作流程顺序难以精细控制
  3. 不太适合单页或者自定义模块开发

## 创建gulpfile文件

在项目大的根目录下创建一个名为 gulpfile.js 的文件，这是执行gulp的关键

## 命令执行

在根目录下执行gulp，默认会去执行gulpfile文件下的 exports.default 默认导出的任务（如果没有default就会报错提示）

如果想执行gulpfile下的某一个任务，可以先通过exports.xxx的方式将任务导出，之后在终端执行gulp xxx就会执行这个任务

如果想串行，或者并行一系列任务，可以借用gulp的series（串行），parallel（并行）方法来执行

## gulp常用api

1. src
创建一个流，用于从文件系统读取 [Vinyl 对象](https://www.gulpjs.com.cn/docs/api/vinyl/)

2. dest
返回一个可以在管道的中间或末尾使用的流，用于在文件系统上创建文件

3. task
这个API不再是推荐的模式了(请使用exports的方式)

4. series
串行执行任务

5. parallel
并行执行任务

## gulp插件使用

插件基本上都是以gulp-xxx命名的。引入直接使用


## 注意点：

1. gulp 不再支持同步任务（Synchronous tasks）了。因为同步任务常常会导致难以调试的细微错误，例如忘记从任务（task）中返回 stream。

解决方案：

- 当你看到 "Did you forget to signal async completion?" 警告时，说明你并未使用前面提到的返回方式。你需要使用 callback 或返回 stream、promise、event emitter、child process、observable 来解决此问题。
- 使用 async/await


## 相关资料文献
[gulp 官方文档](https://www.gulpjs.com.cn/docs/getting-started/quick-start/)

