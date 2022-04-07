function _instanceof(target, Origin) {
    while ((target = target.__proto__)) {
        if (target === Origin.prototype) {
            return true;
        }
        return false;
    }
}

let arr = [];
const res = _instanceof(arr, Array);
console.log("res", res);
