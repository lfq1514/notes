const reduce=function(arr,callBack,init){
  let pre,next,initIndex

  if(typeof init ==='undefined'){
    pre=arr[0]
    initIndex=1

  }else {

    pre=init
    arr=arr.slice(0)
    initIndex=0
  }

  for(let i=initIndex;i<arr.length;i++){ 
    next=arr[i]
   pre=callBack(pre,next,i)
  }
}

//测试
reduce([1,2,3],(pre,next,index)=>{
  console.log('pre',next)
  pre.push(next)
  return pre
},[])