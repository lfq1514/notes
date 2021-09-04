const less_loader = require("./less-loader");

function style_loader(source){
    let style=`
    let style=document.createElement('style');
    style.innerHTML=${JSON.stringify(source)}
    document.head.appendChild(style)
    `
    return style

}

module.exports=style_loader