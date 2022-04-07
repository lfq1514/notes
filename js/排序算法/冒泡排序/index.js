/**
 *
 * 排序思想:遍历数组,比较相邻的两个值,交换位置,遍历数轮后,排序完成
 */
// function sort(arr){
//     let c_arr=JSON.parse(JSON.stringify(arr))
//     //遍历轮数
//     for(let i=0;i<c_arr.length-1;i++){
//         //每一轮进行相邻数值比较,交换位置
//         for(let j=0;j<c_arr.length-1-i;j++){
//             if(c_arr[j]>c_arr[j+1]){
//                 let temp=c_arr[j]
//                 c_arr[j]=c_arr[j+1]
//                 c_arr[j+1]=temp
//             }
//         }
//     }
//     return c_arr
// }
// let res=sort([4,5,6,7,333,2,221,1])
// console.log(res)
