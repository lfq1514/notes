# git 之 tag 操作

git 允许我们为我们当前分支的某一个 commit 打上标签，以示其特殊性及重要性。
如果留意重要的库或者框架的 github，他们都会有 tag 表示某个版本节点。

1. 添加 tag

    下面就是打标签的命令，
    -a 是表示我要打标签，后面紧跟的信息是 tag 的内容
    -m 是表示我要对这个 tag 添加一些说明，后面跟着的内容，是要说明的内容
    git tag -a v1.0 -m "my version 1.0"

    注:如果要给历史提交打 tag，就要在命令的最后加上对应的 commit id。

2. 查看所有 tag
   git tag

3. 提交 tag 到远程仓库

-   提交某一个 tag
    git push origin tag 名称
-   提交所有的 tag
    git push --tags
    或
    git push origin --tags

4. 删除 tag

-   删除本地 tag
    git tag -d tag 名称
-   删除远程仓库 tag
    git push origin --delete tag 名称
