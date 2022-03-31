export const increment=(payload)=> {
     return{
         type: "INCREMENT",
         payload
     }
}

export const decrement=(payload)=> {
    return{
        type: "DECREMENT",
        payload
    }
}

export const login=(payload)=> {
   return {
       type: "LOGIN",
       payload
   }
}