import {createStore} from './src/index'


function reducer(state,action){
    switch(action.type){
        case 'LIST':
        return {...state,list:action.payload}
    }

}

const store=createStore(reducer)

console.log('store',store)

export default {}
