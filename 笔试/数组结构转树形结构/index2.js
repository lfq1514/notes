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
    let map = {};
    for (let i = 0; i < menu.length; i++) {
        map[menu[i].Id] = menu[i];
        if (menu[i].ParentId === null) {
            P.push(menu[i]);
        }
    }

    for (let i = 0; i < menu.length; i++) {
        // debugger;
        let parentId = menu[i].ParentId;
        if (map[parentId]) {
            if (!map[parentId].children) {
                map[parentId].children = [];
                map[parentId].children.push(menu[i]);
            } else {
                map[parentId].children.push(menu[i]);
                map[parentId].children.sort((a, b) => {
                    return a.Sort - b.Sort;
                });
            }
        }
    }
    return P;
}
const res = getTree(menu);
console.log("res", res);
