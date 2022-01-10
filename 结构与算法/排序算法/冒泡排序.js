function bubble_sort(array) {

    let isCom=true

    for(let j=0;j<array.length-1;j++){

        for(let i=0;i<array.length-1-j;i++){
            if(array[i]>array[i+1]){
                [array[i+1],arr[i]]=[arr[i],arr[i+1]]
                isCom=false
            }
        }

        if(isCom){
            break
        }

    }
   
}

// 数组长度  循环几轮  每轮循环最多比较几次

//  1  0  0
//  2  1  1
//  3  2  2

//  n  n-1  n-1

//优化：
// 1.每遍历完一轮的时候，在比较的时候，都比前一轮少比较一次
// 2. 如果有一轮遍历轮空，就说明排好了，后面的几轮就不需要继续执行了


let arr=[2,33,1,2,2234,5,5,3323,1212,3,5]
bubble_sort(arr)
console.log('arr',arr)





 




