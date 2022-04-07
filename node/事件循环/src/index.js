const fs = require("fs");
const path = require("path");

// setImmediate(() => {
//     console.log("111");
// });
// setTimeout(() => {
//     console.log("2222");
// }, 10);

const p = path.resolve(__dirname, "./test.txt");

fs.readFile(p, "utf-8", function (err, data) {
    console.log("data", data);
});
setImmediate(() => {
    console.log("111");
});
setTimeout(() => {
    console.log("2222");
}, 0);
