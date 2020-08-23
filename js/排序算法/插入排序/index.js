
/**
 * 可以用抓扑克牌,并排序来说明;
 * 1,先从牌堆里装一张牌放在手上
 * 2,再抓的时候,与手里的牌依次比较大小(这里用左向右比,也就是从小到大排)
 * 3,如果抓起的牌与手里的牌比较的时候,如果找到符合条件的,把抓起的牌,插入到这张牌前面,并结束比较,否则的话,直接放到牌的最后面,同时也停止比较
 *
 */
function insert(arr){
    let newArr=[]
    newArr.push(arr[0])
    for(let i=1;i<arr.length;i++){
        let  A=arr[i]
        for(let j=0;j<newArr.length;j++){
            let B=newArr[j]
            if( A<B){
                newArr.splice(j,0,A)
                break
            }
            if(j===newArr.length-1){
                newArr.push(A)
                break
            }
        }
    }
    return newArr
}

let res=insert([3,1,55,4,3,2111,3])
console.log(res)