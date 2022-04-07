//1. 查找两个节点，的最近父节点

function search($e1, $e2) {
    let c1 = $e1;

    let parent = null;

    function searchParent($e1, $e2) {
        let res = $e1.parentNode.children.some((c) => {
            c === $e2;
        });

        if (res) {
            return res;
        }

        searchParent($e1.parentNode, $e2.parentNode);
    }

    searchParent($e1, $e2);
}
console.log("module", module);
