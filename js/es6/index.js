/***
 * 1,展开运算符
 * 2,剩余参数
 * 3,class
 * 4,proxy
 * 5,import模块化
 * 6,可选链  ?.
 * 7,空值运算符 ??
 *
 * 8,Object.entries
 * 9,Object.formEntries
 *
 * 10,String.padStart
 * 11,String.padEnd
 *
 * 12,String.trimStart
 * 14,String.trimEnd
 *
 */

 function f({name,age}={name:111,age:333}){
   console.log(name,age)

 }
 f({name:122,age:222})