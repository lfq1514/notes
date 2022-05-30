let cacheData=[]

function setCacheData(a){
    cacheData=a

}
function getCachedata(){
    return cacheData
}

function clearCacheData(){

}

module.exports={
    setCacheData,
    getCachedata,
    clearCacheData,
    cacheData
}


