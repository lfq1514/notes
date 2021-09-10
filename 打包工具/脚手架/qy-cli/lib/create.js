
const path=require('path')
const fs=require('fs-extra') //比fs强大
const Inquirer=require('inquirer')
const Creator=require('./Creator.js')

module.exports= async function(projectName,options){
    
    const cwd=process.cwd()//获取当前命令执行时所在的目录
    const targetDir=path.join(cwd,projectName)

    //判断当前目录下，是否存在同名目录
    if(fs.existsSync(targetDir)){
        //创建前先删除同名目录
        if(options.force){
            await fs.remove(targetDir)
        }else {
           let {action}= await Inquirer.prompt([
                //配置询问的方式
                {
                    name:'action',
                    type:'list',//类型有很多，如checkbox等
                    message:`target directory already exits Pick an action`,
                    choices:[
                        {name:'Overwrite',value:'overwrite'},
                        {name:'Cancel',value:false},
                    ]

                }
            ])

            if(!action){
                return 
            }else if(action==='overwrite'){
                console.log('\r\n Removing...')
                await fs.remove(targetDir)
                console.log('\r\n remove success')

            }
        }
    }
    //创建项目
    const creator=new Creator(projectName,targetDir)
    // console.log('creat',creator)

    await creator.create()

    
}
