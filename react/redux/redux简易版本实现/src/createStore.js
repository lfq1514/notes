export function createStore(reducer,preloadState={}){

    let state=preloadState

    function getState(){
        return state
    }

    function dispatch(action){
        state=reducer(state,action)
    }

    function subscribe(listener){


    }


    return {
        getState,
        dispatch,
        subscribe
    }
}
