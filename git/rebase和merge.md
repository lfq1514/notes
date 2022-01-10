# git merge 和 git rebase 的详细解读

## git rebase 之合并commit提交记录
+ 使用git rebase合并多次提交
  1. git rebase -i HEAD~3（合并最近3次的提交，注意:默认会保留最初始状态的commit，这个commit不会被合并，例如：本地有3次commit记录，则只能合并最近的两次，最初的那一条是不会也不能被合并的）
  2. 之后会进入vim编辑命令，通过指令（下面也会有详细的指令解释与提示）来进行你本次的操作，有压缩，重写，删除等，本人用的只是压缩，也就是squash（简写为s）
  3. 再之后git进行完rebase之后，会再次进入到vim编辑器中，这时候，就可以把你的多次的commit记录进行任意的修改
  4. 修改之后，按esc退出，再按:wq 退出并保存，既完成了本次的rebase操作

## git rebase 之 分支变基
这个老哥写的比较到位
[git rebase 详解（图解+最简单示例，大白话一次懂！）](https://blog.csdn.net/weixin_42310154/article/details/119004977?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.nolandingword2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.nolandingword2)
