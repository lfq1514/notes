# git 子模块相关操作命令

有时候我们的项目太大，想进行git仓库 拆分，这个时候就会用用到git子模块

1. 添加子模块
```
git submodule add  url   path

```
url 是子模块的git地址
path 是指定的子模块的存放路径，如果没有指定，默认是放在根目录下的
使用举例如下：
```
//git git submodule add https://github.com/xxx.git  ./submudule
```
上面的命令就会把子仓库放在根目录下的submudule目录下
稍微注意一下：这里指定的path路径，默认会作为子模块的名称

2. 拉取子模块
如果我们刚clone下来一个仓库，这个仓库子模块的存在，这个时候，我们就要执行命令拉取子模块
```
git submodule update  --init --recursive
```
--recursive的作用是，如果项目下还有子项目，就会再次clone下来（相当于递归的方式来clone当前项目下的子项目）

3. 删除子模块
如果有朝一日不想要这个子模块了，就需要删掉相应的子模块
删除子模块最重要的是删除当前git下关联的子模块配置，至于对应的子模块文件，在删了相关配置之后，自然没有什么作用了，删掉也罢
具体涉及到的删除配置文件有（只需要删除里面对应的子模块配置就行）：
- .gitmodules

- .git/config

- .git/modules

这里要稍微注意一下；如果不删这里面的对应模块，有一天突然又想起要关联这个子模块，执行命令的时候，你会发现git报错了：
```
A git directory for 'xxxx' is found locally with remote(s):
  origin	git@git.xxxxxxx.git
If you want to reuse this local git directory instead of cloning again from
  git@git.xxxxxxx.git
use the '--force' option. If the local git directory is not the correct repo
or you are unsure what this means choose another name with the '--name' option.
```


