class Node {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    add(element) {
        if (!this.root) {
            this.root = new Node(element);
            return;
        }

        let currentNode = this.root;

        let parent = null;

        let compare;

        while (currentNode) {
            parent = currentNode;

            compare = currentNode.element < element;

            if (compare) {
                currentNode = currentNode.right;
            } else {
                currentNode = compare.left;
            }
        }
        let newNode = new Node(element);

        if (compare) {
            parent.right = newNode;
        } else {
            parent.left = newNode;
        }
    }
}

function bl(node) {
    if (!node.value) {
        return;
    }

    bl(node.left);
    console.log("node", node);
    bl(node.right);
}
