[在 webpack 中，以及 nginx 中如何开启 gzip 压缩](https://blog.csdn.net/zSY_snake/article/details/108062483)
笔记：
webpack 中通过 compression-webpack-plugin 配置 gzip 压缩
nginx 通过开启 gzip 的相关配置项，开启 gzip 压缩

[webpack gzip 和 nginx gzip 的区别](https://blog.csdn.net/sd4015700/article/details/118650050)

笔记：

1. 静态 gzip 压缩（如果有 gz 文件，就是用，不用每次都压缩），实时 gzip 压缩(每次都回去压缩)
2. 在 terserPlugin 插件压缩的基础上，commpression-webpack-plugin 还能通过 gzip 进行二次压缩
3. 使用静态 gzip 必须要先启用 nginx 的 gzip_static 模块.
