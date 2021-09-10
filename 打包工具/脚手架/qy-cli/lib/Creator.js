const inquirer = require("inquirer");
const { fetchRepoList,fetchTagList } = require("./request");
const ora=require('ora')
const downloadGitRepo=require('download-git-repo')//不支持promise，是普通的方法

const util=require('util')
const path=require('path')



async function sleep(time) {
    let t1 = new Date().getTime();
    let t2 = t1;
    while (t2 - t1 <= time) {
        t2 = new Date().getTime();
    }
}

let time=3

// 基于ora插件 封装loading效果，实现失败重新尝试
async function wrapLoading(fn, message,...args) {
    const spinner = ora(message);
    spinner.start();
    try {
        let repos = await fn(...args);
        spinner.succeed();
        return repos;
    } catch (e) {
        //失败重新获取
        spinner.fail("request failed,refetch...."+time);
        sleep(2000);
        time--
        if(time===0){
            spinner.fail("request failed,will exit 2s later");
            sleep(2000);
            process.exit()
            // return time=3
        } 
        return wrapLoading(fn, message,...args);
        
    }
}
//创建项目
class Creator {
    constructor(projectName, targetDir) {
        this.name = projectName;
        this.target = targetDir;
        this.downloadGitRepo=util.promisify(downloadGitRepo)
    }

    async fetchRepo() {
        let repos = await wrapLoading(fetchRepoList, "waiting fetch template");
        if (!repos) {
            return;
        }
        repos = repos.map((item) => item.name);
        let { repo } = await inquirer.prompt({
            name: "repo",
            type: "list",
            choices: repos,
            message: "please choose a template to create project",
        });
        return repo
    }

    async fetchTag(repo) {
        let tags = await wrapLoading(fetchTagList, "waiting fetch tag",repo);
        if (!tags) {
            return;
        }
        tags = tags.map((item) => item.name);
        let { tag } = await inquirer.prompt({
            name: "tag",
            type: "list",
            choices: tags,
            message: "please choose a tag to create project",
        });
        return tag

    }

    async download(repo,tag) {
        //拼接下载路径 facebook/react#v17.0.2

        // let requestUrl=`Facebook/${repo}${tag?'#'+tag:''}`
        console.log('download',repo,tag)
        let requestUrl=`lfq1514/${repo}`
        //2. 把资源下载到某个路径下
    //    await this.downloadGitRepo(requestUrl,path.resolve(process.cwd(),path.resolve(process.cwd(),`${repo}@qianyi`)))
       await wrapLoading(this.downloadGitRepo,'file is download...',requestUrl,path.resolve(process.cwd(),`${repo}#${tag}`))

       return this.target

    }
    async create() {
        //基于github拉取代码并下载

        //1.拉取github当前组织下的模板(我的仓库下没有迭代版本tag，这里跳过这一步)

        let repo = await this.fetchRepo();

        //2. 通过模板找到版本号
        let tag = await this.fetchTag(repo);

        //3. 下载
        this.download(repo,tag)


        //4. 编译模板
        //放到系统文件中，--》模板和用户的其他选择--》生成结果放到当前目录
    }
}

module.exports = Creator;
