[Babel教程专栏目录：](https://zhuanlan.zhihu.com/p/393122285)

@babel/cli，@babel/core与@babel/preset-env是Babel官方的三个包，它们的作用如下：

@babel/cli是Babel命令行转码工具，如果我们使用命令行进行Babel转码就需要安装它。
@babel/cli依赖@babel/core，因此也需要安装@babel/core这个Babel核心npm包。
@babel/preset-env这个npm包提供了ES6转换ES5的语法转换规则，我们在Babel配置文件里指定使用它。如果不使用的话，也可以完成转码，但转码后的代码仍然是ES6的，相当于没有转码。 这些工具后续都会有单独的章节说明，现在先学会简单使用即可。