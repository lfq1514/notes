Array.prototype.reduce = function (cb, initData) {
    const data = this;
    console.log("this", this);

    let pre = data[0];
    // if (typeof initData !== null) {
    //     for (let i = 0; i < data.length; i++) {
    //         pre = cb(pre, data[i], i);
    //         console.log("pre", pre);
    //     }
    // }
    for (let i = 0; i < data.length - 1; i++) {
        pre = cb(pre, data[i + 1], i);
        console.log("pre", pre);
    }

    return pre;

    // if(){

    // }
};

let arr = [3, 2, 1];

const res = arr.reduce((pre, next, index) => {
    // console.log(pre, next, index);
    return pre + next;
}, 0);
console.log("res", res);
