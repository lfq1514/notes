/**
 * 前序遍历，是 先遍历当前节点，再遍历左子节点，再遍历右子节点
 *
 * 1.将节点压住栈中，
 * 2. 并从栈中弹出一个节点，处理这个节点的逻辑，
 * 3. 之后先压右，后压左
 * 4. 重复执行2-3-2-3；
 */
//--------迭代法--------
function transverseNode(root) {
    //建空栈，用于压入元素
    let stack = [];
    if (!root) {
        return stack;
    }
    //用于存放遍历的结果
    let result = [];
    //当前处理的节点
    let current = null;

    stack.push(root);

    while (stack.length !== 0) {
        //弹出最近最后一个压入栈中的元素
        current = stack.pop();
        result.push(current.val);
        current.right && stack.push(current.right);
        current.left && stack.push(current.left);
    }

    return result;
}

function transverseNodeMap(root) {
    let result = [];

    function mapNode(root) {
        if (!root) {
            return;
        }

        result.push(root.val);

        mapNode(root.left);
        mapNode(root.right);
    }
    mapNode();
    return result;
}
