#  三种hash

- hash

hash是整个项目的hash，是根据编译内容计算得到的，每次编译之后都会生成新的hash，即修改任何文件都会导致所有文件的hash发生改变

- chunkhash

根据chunk生成hash值，chunk内容发生变化，则hash值变化，且来源于同一个chunk的hash是一样的


- contenthash
根据文件内容生成hash，文件内容相同，hash就相同


