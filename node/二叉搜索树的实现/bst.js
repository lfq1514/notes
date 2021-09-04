class Node {
    constructor(element, parent) {
        this.element = element//当前节点的元素
        this.parent = parent//记录父节点
        this.left = null//记录左节点
        this.right = null//记录右节点
    }
}

class Tree {
    constructor() {
        //默认是一个空树
        this.root = null
    }

    add(element) {
        if (this.root === null) {
            //第一次存在时,树为空,将第一个元素作为根节点
            return this.root = new Node(element)
        }
        let currentNode = this.root
        let parent
        let compare
        while (currentNode) {
            //判断当前添加的元素与树节点的大小
            compare = currentNode.element < element
            parent = currentNode
            if (compare) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }

        let node = new Node(element, parent)
        if (compare) {
            parent.right = node
        } else {
            parent.left = node
        }
    }
    //二叉树的遍历
    //先序:先处理当前节点
    //中序:中间处理当前节点
    //后续:最后处理当前节点
    handleTraversal() {
        function traversal(node) {
            if (node === null) {
                return
            }
            traversal(node.left)
            console.log(node.element)
            traversal(node.right)
        }
        traversal(this.root)
    }
    //层序遍历(通过指针移动的方式)
    levelTraversal(cb){
        let stack=[this.root]
        let index=0//指针
        // let currentNode=stack[index]
        let currentNode

        while(currentNode=stack[index++]){
            cb(currentNode)
            // console.log(currentNode.element)
            if(currentNode.left){
                stack.push(currentNode.left)
            }
            if(currentNode.right){
                stack.push(currentNode.right)
            }
        }

    }
//反转二叉树
    reverse(){
        let stack=[this.root]
        let index=0//指针
        // let currentNode=stack[index]
        let currentNode

        while(currentNode=stack[index++]){
            let temp=currentNode.left
            currentNode.left=currentNode.right
            currentNode.right=temp
            // console.log(currentNode.element)
            if(currentNode.left){
                stack.push(currentNode.left)
            }
            if(currentNode.right){
                stack.push(currentNode.right)
            }
        }

    }
}


let tree = new Tree()
let testArr = [10, 8, 11, 33, 444]
testArr.forEach((item) => {
    tree.add(item)

})
console.dir(tree, { depth: 100 })


// tree.handleTraversal()
tree.levelTraversal((data)=>{

})
