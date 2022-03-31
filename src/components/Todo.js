import React, {useState, useEffect, useContext }  from "react";
import { UserContext } from "../contexts/userContext";
import {Link, useParams, Navigate} from "react-router-dom";
import {images} from "../assets/images";


function Todo(){
    const loggedIn= localStorage.getItem("logged");
    const {user}= useContext(UserContext);
    const [todo, setTodo]= useState({});

    const {id}= useParams();
    

 useEffect(()=> {

      getTodo();

 }, []);

 

    const getTodo=()=> {
        let retreivedTodos;
        let users= localStorage.getItem("users");
        retreivedTodos= JSON.parse(users);
        if(user.length > 0){
        let filteredUser= retreivedTodos.filter(retreivedTodo => retreivedTodo.email === user[0].email);
        let filteredTodo= filteredUser[0].todos.filter(todo=> todo.title === id);

        setTodo(filteredTodo[0]);   
        }    
    }

    if(!loggedIn || loggedIn === null){
        console.log(`False! I am ${loggedIn}`)
        return <Navigate to="/sign-in"/>
    }
    


    return(
        <div className="todo-container">
            <h1>Here is the details of your Todo</h1>
            <div className="todo-details">
                <h3>Title: <span className="title">{todo.title}</span></h3>
                <h3>Status: <span className="status">{todo.executed ? "Executed" : "Non-executed"}</span></h3>
                <h3>Rating: <img className="rating" src={images[todo.rating]}/></h3>
                <h3>Date Created: <span className="date">{todo.date}</span></h3>
                <p><button><Link to="/todo-list">Back to Todo-List</Link></button></p>
            </div>

        </div>
    );
}

export default Todo;