function create(obj){

  if(typeof obj !=='object'){
    throw new TypeError('Object prototype may only be an Object')
  }

  function Fn(){}

  Fn.prototype=obj

  return new Fn()

}