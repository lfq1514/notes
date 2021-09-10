function insertSort(A){
    for(let i=1;i<A.length;i++){
        //p是指针,指向当前要比较的元素
        let p=i-1

        let Pointer=A[p+1]
        
        while(Pointer<A[p]){
            A[p+1]=A[p]
            p--
        }
        A[p+1]=Pointer
    }

    return A
    
}

const res=insertSort([1,2,111,3,44,2,4])
console.log('res',res)





