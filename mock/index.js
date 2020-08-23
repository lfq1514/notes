import Mock from 'mockjs'
/**
 * 获取get请求路径上的参数
 */
function getQuery(url,name){
    if(url.split("?")[1]!==null){
        let queryStrArr=url.split("?")[1].split('&')
        for(let i=0;i<queryStrArr.length;i++){
            let itemArr=queryStrArr[i].split('=')
            if(itemArr[0]===name){
                return itemArr[1]
            }
        }
    }
    return null
}
//mock拦截 登录接口请求
Mock.mock('/api/login', 'get', {
    code: 200,
    msg: '登录成功'
})
/**
 * mock模拟列表数据
 */
let {list} = Mock.mock({
    'list|14': [
        {
            shopName: "@ctitle",
            shopImg: "@image('100x100','red','blue','png','测试')",
            'serverFee|0.1-2': 1,
            'saleFee|1-500': 1,
            shopStatus: "@ctitle",
            createDate: "@date('yyyy-mm-dd hh:mm:ss')",
        }

    ]

})
/**
 * mock拦截列表接口请求
 */
Mock.mock(/\/api\/getGoodsList/, 'get', (options) => {
    let start=getQuery(options.url,'start')
    let limit=getQuery(options.url,'limit')
    return {
        code:200,
        list:list.slice(start,start+limit),
        total:list.length
    }

})