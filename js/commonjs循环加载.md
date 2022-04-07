## commonjs 循环加载

1. 第一种回答
   一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

2. 第二种回答
   commonjs 是同步模块加载方式，因此其加载完成后才能执行下面的动作，require 第一次加载完该脚本，就会在内存中生成一个对象，

接着运行脚本，从别处引用此模块时，可以引用其 exports 出来的内容。当模块第二次引用时不会去重复加载，而是执行上次缓存的。

若出现循环引用，就只执行已经输出的（exports）部分，其他的未导出的不用管。

[commonjs 循环加载](https://blog.csdn.net/wu_xianqiang/article/details/100693895)
[commonjs 模块循环加载](https://blog.csdn.net/u012657197/article/details/77541157)
[阮一峰 模块加载(es6,commonjs)](https://es6.ruanyifeng.com/#docs/module-loader#%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD)
