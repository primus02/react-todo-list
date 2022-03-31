export const logReducer=(state= true, action)=> {
    switch(action.type){
        case "LOGIN": 
        return state= action.payload
        default :
        return state
    }
}