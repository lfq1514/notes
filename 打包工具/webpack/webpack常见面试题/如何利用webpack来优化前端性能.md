# 如何利用 webpack 来优化前端性能

## 压缩 css

optimization 中配置
css-minimizer-webpack-plugin

## 压缩 js

optimization 中
terserPlugin（webpack4 之前用 uglifyjs-webpack-plugin）

## 压缩 html 代码

plugin 中配置
html-webpack-plugin

## 压缩图片

url-loader（比 file-loader 好用）

## tree shaking

useExports

sideEffects

## scope hosting

## 代码分割

-   动态导入和懒加载
    import（）

-   提取公共代码
    optimization.splitChunks

## cdn

-   文件名配置 hash

-   hash 分类

[webpack 常见面试题](https://www.jianshu.com/p/2a5a6c483327)
