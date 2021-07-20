export  function useState(initState){
  let memorizeState=memorizeState||initState
  function setState(newState){
    memorizeState=newState
  }
  return [memorizeState,setState]
}
