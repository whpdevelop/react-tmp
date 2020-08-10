
const NAME = 'NAME'

const initState = { 
    name:'globalRedux'
}

export const globalReducer = (state = initState,action) => {
    switch(action.type){
        case NAME:
            return {...state,name:action.payLoad}
        default:
            return initState
    }
}


const nameAction = (payLoad) => {
    return {type:NAME,payLoad}
}
export function nameFn(){
    return dispatch=> dispatch(nameAction('globalRedux-test'))
}