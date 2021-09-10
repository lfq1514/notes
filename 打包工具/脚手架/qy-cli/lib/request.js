//通过axios来获取结果

const axios=require('axios')

axios.interceptors.response.use((res)=>{
    return res.data
})
async function fetchRepoList(){
   return  axios.get('https://api.github.com/users/lfq1514/repos')
}
async function fetchTagList(repo){
    repo='react'
//    return  axios.get(`https://api.github.com/users/lfq1514/${repo}/tags`)
   return  axios.get(`https://api.github.com/repos/facebook/${repo}/tags`)
}

module.exports={
    fetchRepoList,
    fetchTagList

}
