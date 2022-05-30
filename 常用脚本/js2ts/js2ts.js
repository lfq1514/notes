const fs = require("fs-extra");
const path = require("path");
const tempFile = path.join(__dirname, "./temp.txt");

const ext_ts = ".ts";
const ext_tsx = ".tsx";
const ext_js = ".js";
const ext_jsx = ".jsx";

let res = fs.readFileSync(tempFile, "utf-8");
let cachePath = JSON.parse(res);

function js2ts(cachePath) {
    cachePath.forEach((jsfile,index) => {
        const { dir: filePath, name: fileName,ext:extName } = path.parse(jsfile);
        let instead=extName===ext_js?ext_ts:ext_tsx
        console.log('extName',extName,instead)
        let newName = `${filePath}\\${fileName}${instead}`;
        fs.renameSync(jsfile, newName);
    });
}
function removeTempFile() {
    fs.removeSync(tempFile);
}


js2ts(cachePath);

removeTempFile()


