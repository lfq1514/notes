let menu = [
    { Id: 1, ParentId: null, Sort: 0, Name: "菜单1" },
    { Id: 2, ParentId: 1, Sort: 0, Name: "菜单1-1" },
    { Id: 3, ParentId: 1, Sort: 1, Name: "菜单1-2" },
    { Id: 4, ParentId: 2, Sort: 2, Name: "菜单1-1-2" },
    { Id: 5, ParentId: 2, Sort: 1, Name: "菜单1-1-1" },
    { Id: 6, ParentId: null, Sort: 1, Name: "菜单2" },
    { Id: 7, ParentId: 6, Sort: 0, Name: "菜单2-1" },
    { Id: 8, ParentId: 6, Sort: 1, Name: "菜单2-2" },
    { Id: 9, ParentId: 8, Sort: 2, Name: "菜单2-2-2" },
    { Id: 10, ParentId: 8, Sort: 1, Name: "菜单2-2-1" },
    { Id: 11, ParentId: 10, Sort: 0, Name: "菜单2-2-1-1" },
];

function getTree(menu) {
    let P = [];
    for (let i = 0; i < menu.length; i++) {
        let current = menu[i];
        if (current.ParentId == null) {
            P.push(current);
        }

        for (let j = 0; j < menu.length; j++) {
            if (menu[j].ParentId === current.Id) {
                if (!current.flag) {
                    current.flag = true;
                    if (current.children) {
                        current.children.push(current);
                        current.children.sort((a, b) => {
                            a.Sort - b.Sort;
                        });
                    } else {
                        current.children = [];
                        current.children.push(current);
                    }
                }
            }
        }
    }
    return P;
}
const res = getTree(menu);
console.log("res", res);
