const babel = require("@babel/core");
const fs = require("fs");
const path = require("path");
const tr = require("@babel/traverse");
console.log("tr000", tr);

const enterFile = fs.readFileSync(
    path.resolve(__dirname, "./index.js"),
    "utf-8"
);

const ast = babel.parseSync(enterFile, {
    sourceType: "module",
});

// tr.default(ast, {
//     entry(path) {
//         console.log("entry", path);
//     },
//     exit(path) {
//         console.log("exit", path);
//     },
// });

// console.dir(astParse, { depth: 100 });
