console.log("我是a模块，加载b---之前");
const b = require("./b");
console.log("b", b);
console.log("我是a模块，加载b---之后");

module.exports = "我是a模块";
