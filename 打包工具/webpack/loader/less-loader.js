let less=require('less')
/**
 *
 * @param {*} source  匹配到的内容源码(如less匹配都都是以.less结尾的文件)
 */
function less_loader(source){
    let css=''
    less.render(source,function(err,c){
        css=c.css
    })
    return css
}

module.exports=less_loader