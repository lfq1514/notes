let obj={next:null}

function handleHooks(){
  const hook={
    next:{name:'xxx'}
  }

  obj=obj.next=hook
}
handleHooks()
console.log(obj)

