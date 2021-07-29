Array.prototype.slice=function slice(){

  let arr=[]

  for(let i=0;i<this.length;i++){
    arr.push(this[i])
   }

  return arr

}