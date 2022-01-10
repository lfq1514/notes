# babel-loader 版本不用引起的问题

babel-loader 在 7.x（包含 7.x）之前配置 preset 时，使用的 babel-preset-es2015，
在升级到 8 之后，使用的时@babel/preset-es2015

在 babel-loader 的 8.x 版本，最终会被编译为 eval（xxx）的这样的代码

注意: @babel/preset-es2015 只能编译 es6 的代码，如果代码中遇到 es6+的语法就无法正常编译，此时，babel 提供了另外一个 preset，即 preset-env，来保证可以编译更高级别的语法
