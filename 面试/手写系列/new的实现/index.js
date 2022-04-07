function _new(Fn, ...args) {
    const obj = Object.create(Fn.prototypes);

    const res = fn.apply(obj, args);

    if ((typeof res !== "object") | (typeof res === null)) {
        return res;
    }

    return obj;
}
