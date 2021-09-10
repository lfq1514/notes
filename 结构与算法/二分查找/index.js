/**
 * 
 * @param arr  要查找的范围
 * @param num  要找的数字
 *  return   找到，返回对应的下标，找不到，返回-1
 */
function search(arr,num){
    let l=0,
    r=arr.length-1,
    middle
    while(l<=r){
        middle=Math.floor((l+r)/2)
        if(arr[middle]===num){
            return middle
        }
        if(arr[middle]>num){
             r=middle-1
        }
        if(arr[middle]<num){
             l=middle+1
        }
    }
    return -1
}

