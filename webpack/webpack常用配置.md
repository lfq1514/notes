# 什么是 webpack

## webpack 安装

```JavaScript
npm i webpack webpack-cli -D

//-D 表示当前是开发依赖,上线时不需要
```

## webpack 执行

```JavaScript
//1. 直接运行某一个配置文件
npx webpack --config webpack.config.js

//2. 在package.json中配置执行脚本

"scripts":{
    "build":"webpack --webpack.config.js"
}

直接运行npm run build 执行
```

### 启动服务配置

1. 安装依赖

```JavaScript
npm i webpack-dev-server -D
```

2. 使用

```JavaScript
//直接使用
npx webpack-dev-server
//配置script脚本
"scripts":{
    "build":"webpack-dev-server"
}

注意: 不会打包生成文件,只会生成内存中的打包

```

## webpack 基础配置

- 默认配置文件的名字是 webpack.config.js

- webpack 是 node 写出来的,要用 node 的写法来运行

1. 模式配置

```
mode:'production',//production生成模式  development开发模式
```

2. 入口配置

```
entry:'./src/index.js'
```

3. 出口配置

```
output:{
    //打包后的名字
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist'),//指定打包后的文件存放目录,路径必须是一个绝对路径,(这里需要引入核心模块path)
    compress:true,//是否开启压缩(gzip压缩)
}
```

4. 服务设置

```
devServer :{
    port : 3000,
    progress:true, //显示打包滚动条
}
```

### loader 配置

```

```

### plugin 配置

#### 1.html-webpack-plugin

指定打包的模板

```
//下载安装插件,并引入
let HtmlWebpackPlugin=require('html-webpack-plugin')
//配置
plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',//指定打包的模板
        filename: 'index.html',//指定打包后的名字
        chunks:['index'],
        minify: {//设置模板的最小化操作
            removeAttributeQuotes: true,//删除属性的双引号
            collapseWhitespace: false,//折叠空行(一行显示)
        },
        hash: true,//在引用打包后的文件的时候加上哈西戳(解决缓存的问题)

    }),
]


如果是多页应用，需要通过chunk属性来配置指定的入口文件

多个页面需要通过new HtmlWebpackPlugin来配置多次

chunk : 代码块，(多页应用的时候，需要在这里指定要引入的对应的入口文件，也可以指定多个入口文件)
```

#### 2.mini-css-extract-plugin

```
 //将css样式抽离出来
new MiniCssExtractPlugin({
    filename: 'css/main.css' //抽离出来样式的文件名(css/是自定义的资源目录)
}),

```

#### 3.clean-webpack-plugin

```
//打包之前删除指定的文件(这个插件默认会清除 output.path 输出的目录)
new CleanWebpackPlugin({
//这个参数配置要删除那些文件，和不要删除那些文件，不要删除的文件前面加个逻辑运算符非 !
// cleanOnceBeforeBuildPatterns:''
}),
```

#### 4.copy-webpack-plugin

```
//打包的时候将其他一些不在依赖关系里的文件拷贝到指定打包目录下。
new CopyWebpackPlugin([
    {from:'./src/rename.md',to:'./'}//to设置为./，就会默认拷贝到打包生成的根目录下
]),

```

#### 5.html-webpack-plugin

#### 6.webpack 内置的一些 plugin

1. BannerPlugin

```JavaScript
//在打包生成的文件中添加一些说明(如版权声明，文件说明等等)
new webpack.BannerPlugin('make 2020 by lfq')
```

2. IgnorePlugin

```JavaScript
//指定要忽略打包的模块
new webpack.IgnorePlugin(/\.\/locale/,/moment/),

```

3. DefinePlugin

```
new webpack.DefinePlugin({//定义环境变量（webpack内置的插件）
    DEV:JSON.stringify('dev'),//这里需要使用stringify来进行字符串化，直接使用DEV:"dev"会把dev认为是一个变量
}),
```

4. ProvidePlugin

```
new webpack.ProvidePlugin({//在每个模块中都注入$
    $: 'jquery'
}),
```
