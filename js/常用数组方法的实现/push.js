
Array.prototype.push=function push(value) {
  console.log('1111')
  this[this.length]=value
  this.length++
}

