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
这个文件要删掉
- .git/config
删除里面关于子模块的记录
- .git/models
删除整个models或者删除里面的子模块相关文件（这个文件夹以及config都是在我们执行拉取子模块的操作之后生成的，所以里面的内容都是和子模块相关的）


## 注意
1. 这里要稍微注意一下；如果不删这里面的对应模块，有一天突然又想起要关联这个子模块，执行命令的时候，你会发现git报错了：
```
A git directory for 'xxxx' is found locally with remote(s):
  origin	git@git.xxxxxxx.git
If you want to reuse this local git directory instead of cloning again from
  git@git.xxxxxxx.git
use the '--force' option. If the local git directory is not the correct repo
or you are unsure what this means choose another name with the '--name' option.
```

2. 在我们删掉上面的子模块相关文件之后，如果我们这个时候在原来子模块文件夹下编写内容的时候，是不会被列入git跟踪的，我们要在执行完删除操作只有，先commit，然后再去添加，才能跟踪到添加的文件。

    举个例子吧：
    我们的文件夹如下：

    假设这是我们的 mainModules(主仓库)下的文件
    src--------- 
        |--submoduleOne---  这里假设是我们的git子模块
                |--pages    这里是子模块下的内容
                |--img      这里是子模块下的内容
    assets------
    api---------
        

- 背景：
我们之前submoduleOne是以单独的仓库管理的，然后我们在mainModules（主仓库）下关联我们的子模块，有一天，我们发现这样子管理太麻烦了，想把这个子模块的内容，直接列为 主仓库 下来管理，这样子，就不用每次提交两个文件（子仓库提交了之后，主仓库还要提交子仓库的更改记录），

- 实践：

    所以我们开始执行上面提到的 子模块删除 操作步骤

    这个时候，就会遇到我提到的更改子模块submoduleOne下的内容，但是没有产生git记录。很奇怪，有木有！！

- 解决：
我们在移除子模块的关联之后，把子模块的内容先copy出来，然后提交一次，之后，再把copy的内容复制到当前子模块下，这个时候，你就会发现，git子模块的文件都产生了提交记录。






