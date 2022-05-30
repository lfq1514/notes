const will = '.js';//要修改的扩展名
const instead = '.tsx';//要改成的扩展名

const fs = require('fs');
const path = require('path');
const nowPath = path.resolve('./');
reName(nowPath);
function reName(nowPath){
    fs.readdir(nowPath,function(err,files){
        for(var i in files){
            const file = files[i];
            const filedir = path.join(nowPath,file);
            fs.stat(filedir,function(eror,stats){
                if(eror){
                    console.warn(eror)
                }else{
                    if(stats.isFile()){//判断是不是文件
                        if(path.extname(filedir)===will){
                            const fileName = path.basename(filedir).split(path.extname(filedir))[0];//获取文件名称 不带扩展名
                            const fileNames = path.basename(filedir);//获取文件名称 带扩展名
                            const filePath = filedir.split(path.basename(filedir))[0];//文件路径不带文件名
                            const expand = path.extname(filedir);//文件扩展名
                            console.log(filedir);//获取文件路径+文件名称
                            fs.rename(filedir,`${filePath}${fileName}${instead}`,function(err){
                                if(err){
                                    console.log(err);
                                }else{
                                    console.log(`${filePath}${fileName}${instead}------已完成`);
                                }
                            })
                        }
                    }
                    if(stats.isDirectory()){//判断是不是文件夹，如果是文件夹则返回进入文件夹获取文件
                        reName(filedir)
                    }
                }
            })
        }
    })
}
