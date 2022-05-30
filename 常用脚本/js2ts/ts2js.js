const path = require("path");
const fs = require("fs-extra");

const ext_ts = ".ts";
const ext_tsx = ".tsx";
const ext_js = ".js";
const ext_jsx = ".jsx";
const rootDir = path.join(__dirname, "../js2ts");

const tempFile = path.join(__dirname, "./temp.txt");

let cache = [];
function ts2js(rootDir) {
    const files = fs.readdirSync(rootDir);
    files.forEach((file) => {
        const filedir = path.join(rootDir, file);
        const { dir: filePath, name: fileName,ext:extName } = path.parse(filedir);
        const stat = fs.statSync(filedir);
        if (stat.isFile()) {
            if ([ext_tsx,ext_ts].includes(extName)) {
                let instead=extName===ext_ts?ext_js:ext_jsx
                let newName = `${filePath}\\${fileName}${instead}`;
                fs.renameSync(filedir, newName);
                cache.push(newName);
            }
        }
        if (stat.isDirectory()) {
            ts2js(filedir);
        }
    });
}

ts2js(rootDir);
fs.outputJSONSync(tempFile, cache);


