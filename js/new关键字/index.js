function _new(Fn, ...args) {
    //在ie浏览器下__proto__是受保护的，不允许直接访问
    // obj.__proto__=Fn.prototype

    //1. 创建一个空对象，obj.__proto__===Fn.prototype
    const obj = Object.create(Fn.prototype);
    //2. 执行构造函数，this指向1中创建的空对象
    const res = Fn.apply(obj, args);
    //3. 如果 构造函数返回的不是基本类型，就将其返回值返回，
    // 如果返回的是基本类型，就返回obj这个空对象
    if (
        res !== null &&
        (typeof res === "object" || typeof res === "function")
    ) {
        return res;
    }

    return obj;
}
