## git 常用操作场景

###  一定要先二段式才能提交代码吗？  
不是的，可以通过-a 参数，将add 和commit 合并操作
```js
git commit -a -m '跟新了一些东西'
```
### 查看日志
1. 查看日志
```js
git log --oneline --graph
//--oneline 一行显示， --graph 会图形化展示
```
2. 查找某个人活某些人的commit 
git log --oneline --author='lfq'
3. 找commit信息中时否含有某些关键字
git log --oneline --grep=‘test’
4. 查找某一时间段内的commit 
git log --oneline --since =‘9am’ --until=‘12am’  --after ==‘2017-01’ 每天早上9am -12am的提交
5. 查看特定文件的commit 记录
git log inex.html

### 删除文件
直接删除 rm index.html  
git 删除 git rm index.html


### 变更文件名

mv inex.html newIndex.html
相当于先删除，后新建，git 会记录delete 文件，以及新增的文件
git mv index.html newIndex.html
git 对状态会变成rename 

### 文件的名称对git跟踪记录来说不重要
git 是根据文件的‘内容’来计算sha-a的值的

### 修改commit 记录

1. 修改最后一次的cimmit 
git commit --amend -m ‘我要修改最后一次的commit 提交记录’ 
2. 改动更早的记录
git rebase 修改

### 追加文件到最近一次的commit 
先 git add
再 git commit --amend --no-edit 

--no-edit 的意思就是‘我不要编辑commit 信息’

### 新增目录
如果只是新增目录，git 是不做任何跟踪的，因为git 的计算，产生对象，是根据‘文件内容’进行计算的
所以，需要再目录中新增文件才允许新建目录

### 忽略文件
通过再.gitignore中新建忽略规则即可

通过 git add -f ‘xxx’ 可以强制跳过忽略规则，把文件列入git 跟踪

注意：.gitignore只对规则设置之后存入的文件有效，对于在规则设置之前的文件来说

清除忽略的文件 
git clean -fX   -f 参数是强制删除，

### 查看某个文件的详细记录，包括改动者
git blame index.html


### 一不小心把文件或目录删除了怎么办

git checkout index.html 
这样子就会把index.html从删除记录中找回
git checkout . 把所有删除的文件找回来

### git checkout 说明

git checkout 如果后面是分支名，就会切换分支
git checkout index.html
如果后面是文件名或者路径，就不会切换分支，而是把文件从.git目录中复制一份到当前的工作目录，更准确的说，是会把暂存区区中的内容或者文件拿来覆盖工作目录中的内容或文件

git checkout HEAD~2 .
会把距离现在两个版本以上的文件来覆盖当前工作目录中的文件，同时更新暂存区的状态






