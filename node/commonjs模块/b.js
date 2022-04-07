console.log("我是b模块，加载a---之前");
const a = require("./a");
console.log("a", a);
console.log("我是b模块，加载a---之后");
module.exports = "我是b模块";
