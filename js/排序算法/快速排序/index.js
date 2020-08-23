

/**
 *
 * 1,先找数组的中间项,按中间项值,将数组分为两部分(left,right两部分)
 * 2,递归执行上述步骤,直到不能再分
 */
function quick(arr){
    if(arr.length<=1){
        return arr
    }

    let m_index=Math.floor(arr.length/2)
    let m_value=arr[m_index]
    arr.splice(m_index,1)
    let l_arr=[]
    let r_arr=[]

    for(let i=0;i<arr.length;i++){
        arr[i]<m_value?l_arr.push(arr[i]):r_arr.push(arr[i])
    }
    return quick(l_arr).concat(m_value,quick(r_arr))

}
let res=quick([4,22,1,45,332,12,2])
console.log(res)