var addBinary = function (a, b) {
    if (a.length > b.length) {
        b.padStart(a.length, 0);
    }
    if (a.length < b.length) {
        a.padStart(b.length, 0);
    }
    let stack = [];
    a = a.split("").reverse();
    b = b.split("").reverse();
    debugger;
    for (let i = 0; i < a.length; i++) {
        if (Number(a[i]) + Number(b[i]) === 0) {
            stack[i] = 0;
        }
        if (Number(a[i]) + Number(b[i]) === 1) {
            if (stack[i + 1]) {
                stack[i] = 0;
                stack[i + 1] = 1;
            }
        }
        if (Number(a[i]) + Number(b[i]) === 2) {
            stack[i] = 0;
            stack[i + 1] = 1;
        }
    }
    console.log("stack", stack);
    return stack.reverse().join("");
};
const res = addBinary("1100", "1011");
console.log("res", res);
