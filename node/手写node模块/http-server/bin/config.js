const options={
    'port':{
        option:'-p, --port <n>',//根据commander的option（‘’）
        default:7878,//默认值
        usage:'fs --port 7878',//
        description:'set port'//描述
    },
    'gzip':{
        option:'-g, --gzip <n>',
        default:1,//默认压缩
        usage:'fs --gzip 0',//禁用压缩
        description:'set gzip'
    },
    'cache':{
        option:'-c, --cache <n>',
        default:1,
        usage:'-c --cache 0',
        description:'set cache'
    },
    'directory':{
        option:'-d, --directory <n>',
        default:process.cwd(),
        usage:'-d --directory usr/',
        description:'set directory'
    },
}
module.exports =options
