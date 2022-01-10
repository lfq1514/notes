# 编写 babel

## babel 介绍

babel 本质上是一个函数，函数的参数就是匹配到的源码，

## 编写 babel 时常用的依赖包

1. loader-utils

loader-utils 中的方法

getOptions，

可以获取对应 loader 在 webpack 中的配置项

interpolateName




2. schema-utils

validateOptions 可以校验你在 webpack 中的配置是否符合 loader 指定的“骨架”

## babel 函数上下文中常用的方法

在 babel 函数中通过 this，可以获取到 babel 的上下文

常用的方法有

1. this.async

执行后会返回一个 cb 函数，cb 执行后，会将 babel 最终的结果返回出去

2. this.addDependency

添加文件依赖，参数就是文件路径，添加之后，文件路径对应的文件发生变化，webpack 就会重新打包

3. this.cacheable

每次执行的时候，根据参数决定是否使用缓存，
不使用缓存：传 false
默认是使用缓存

4. this.emitFile


