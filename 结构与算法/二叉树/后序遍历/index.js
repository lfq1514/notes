/**
 *
 * @param {*} root
 * @returns
 *
 * 迭代法
 */
function transverseNode(root) {
    let stack = [];
    let result = [];

    if (!root) {
        return stack;
    }
    stack.push(root);
    let current = null;

    while (stack.length !== 0) {
        current = stack.pop();
        result.push(current);
        current.left && stack.push(left);
        current.right && stack.push(right);
    }

    return result.reverse();
}
