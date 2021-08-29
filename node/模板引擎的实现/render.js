const fs = require("fs");
const path = require("path");
const _ejs = {
    readFile(filename, options) {
        let content = fs.readFileSync(
            path.resolve(__dirname, filename),
            "utf-8"
        );
        content=content.replace(/<%=(.+?)%>/g,function(){
            return '${'+arguments[1]+'}'

        })
        let head = 'let str="";\n with(obj){\n str+=`';
        let body = content = content.replace(/<%(.+?)%>/g, function () {
            return '`\n' + arguments[1] + '\n str+=`'
        });
        let tail = '`} return str';
        console.log('head + body + tail',head + body + tail)

        let fn = new Function("obj", head + body + tail);

        return fn(options);
    }
};

const res = _ejs.readFile("template.html", {arr:[1,2,3]});
console.log("res", res);
