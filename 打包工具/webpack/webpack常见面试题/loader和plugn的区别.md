## loader
loader 为加载器，
webpack将一切文件视为模块，但是webpack原生只能解析js文件，如果想将其他文件也打包的话，就会用到loader，loader的作用就是让webpack拥有加载和解析非js文件的能力

css处理所需loader

- style-loader 插入到页面
- MiniCssExtractPlugin.loader  提取css文件
- css-loader
- postcss-loader
- resolve-url-loader
- less-loader(sass-loader)

文件处理
- file-loader




## plugin
plugin为插件，plugin可以拓展webpack的功能，让webpack具有更多的灵活性，在webpack运行的生命周期，中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的api改变输出结果


- TerserPlugin 压缩js代码
- OptimizeCssAssetsPlugin 压缩css代码

- HtmlWebpack-plugin

- 

