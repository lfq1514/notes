//创建长度为5的空间
const b1=Buffer.alloc(12)
// console.log('b1',b1.length)

const b2=Buffer.from('千易')
const b21=Buffer.from('大佬')
console.log(b2,b21)

//A.copy(B,a,b,c)
//将A buffer拷贝到B buffer上，拷贝到的B上的位置是从a开始的，拷贝的长度是A buffer 从b到c的长度
b21.copy(b1,6,0,6)
b2.copy(b1,0,0,6)

console.log('b3',b1)

//拼接buffer
const b4=Buffer.concat([b2,b21])
console.log('b4',b4)

//判断是否是buffer
const b5=Buffer.isBuffer(b2)
console.log('b5',b5)

//byteLength,length是一样的效果，表示buffer的长度
const b6=b4.byteLength
console.log('b6',b6)

const b7=b4.length
console.log('b6',b6)







