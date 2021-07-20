## package.json中的依赖管理

1. dependencies
生产环境依赖（程序正常运行需要加载的依赖）

2. devDependencies

开发环境依赖

3. peerDependencies
如果一个插件中，指定了peerDependencies了，那么这个依赖就不会在当前插件的node_modules中出现，而且在宿主环境中去下载（宿主环境就是这个插件所应用的项目），这样子就不会出现一个包在同一应用中出现多次的问题报错

注：
- 通过NODE_ENV=developement或NODE_ENV=production指定开发还是生产环境
- dependencies依赖的包不仅开发环境能使用，生产环境也能使用

