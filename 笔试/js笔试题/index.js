//1.实现(1).add(10).reduce(2).add(10)=28

Number.prototype.add=function(num1){
    return this+num1
}
Number.prototype.reduce=function(num2){
    return this-num2
}

let r=(1).add(10)
console.log(r)