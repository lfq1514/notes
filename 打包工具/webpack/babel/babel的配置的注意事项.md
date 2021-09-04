# babel-loader版本不用引起的问题

babel-loader在7.x（包含7.x）之前配置preset时，使用的babel-preset-es2015，
在升级到8之后，使用的时@babel/preset-es2015

在babel-loader的8.x版本，最终会被编译为eval（xxx）的这样的代码


注意: @babel/preset-es2015只能编译es6的代码，如果代码中遇到es6+的语法就无法正常编译，此时，babel提供了另外一个preset，及preset-env，来保证可以编译更高级别的语法