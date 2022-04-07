// const repeat = function (target, total) {
//     let s = target;
//     for (let i = 0; i < total - 1; i++) {
//         s += target;
//     }
//     return s;
// };

const repeat = function (target, total) {
    return new Array(total).fill(target).join("");
};
const res = repeat("1", 2);
console.log("res", res);
