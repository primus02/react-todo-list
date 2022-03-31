import React from "react";
import {useDispatch} from "react-redux";
import {increment, decrement, login} from "../actions/counter";



function Redux(){
 const dispatch= useDispatch();


const increaseCounter=(number)=> {
    dispatch(increment(number));
}

const decreaseCounter=(number)=> {
    dispatch(decrement(number));
}




    return(
        <div className="container">
            <p><button onClick={()=> increaseCounter(3)}>Increase Counter</button></p>
            <p><button onClick={()=> decreaseCounter(2)}>Decrease Counter</button></p>
            <p><button onClick={()=> dispatch(login(false))}>Log in User</button></p>
            <p><button onClick={()=> dispatch(login(true))}>Log out User</button></p>
        </div>
    );
}

export default Redux;