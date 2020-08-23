import Mock from 'mockjs'
/**
 * mock基础知识
 * @c 生成的是中文的
 * id和idCard同时设置的时候，idCard会等于id，不会新增idCard序列号
*/
let data=Mock.mock({
    'txt':'@cword(5)',//文本
    'title':'@ctitle(10)',//标题
    'sentence':'@csentence(5)',//句子
    'p':'@cparagraph(1)',//段落
    'num|1-100':1,//数字
    // 'id':'@increment()',//增量
    'name':'@cname()',//名字
    'idCard':'@id()',//身份唯一标识
    'address':'@city(true)',//地址
    'img':"@image('250x250','red','blue','jpg','hhaha')",//图片
    'date':"@date(yyyy-mm-dd hh:mm:ss)",//图片
    //******************数组**********
    'list|8':[
        {
            name:'@cname()',
            address:'@city(true)',
            id:'@increment(0)',
        }

    ],


})
Mock.mock('/api/login','get',{
    code:200,
    msg:'登录成功'
})

console.log(data)