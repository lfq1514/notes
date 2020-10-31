# 概述
- null是js的基本类型之一

- null通过typeof来判断类型的时候会显示为‘Object’,这本身是js的一个bug，“typeof null”的错误从JavaScripts第一个版本开始就已经存在了（第一个版本的JavaScript完成只用了极少的时间），不幸的是这并不能解决，因为这将破坏现有规范

- 原型链的顶端是null,这个并不能说明万物皆对象，null表示空，没有的意思，原型链最顶端为null，说明了再往上就没有原型了。

- 下面附几篇文章

  1. [关于Object.prototype 的原型解释]: https://github.com/mqyqingfeng/Blog/issues/2
