var name='hello world'

function A(x,y){
  var res=x+y
  console.log(res,this.name)

}

function B(x,y){
  var res=x+y
  console.log(res,this.name)
}

B.call(A,20,10)

B.call.call.call(A,20,10)