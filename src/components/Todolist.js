import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../contexts/userContext";
import {Link, useNavigate, Navigate} from "react-router-dom";


function TodoList(){
    const loggedIn= localStorage.getItem("logged");
    const {user, setTitle}= useContext(UserContext);
    const [todos, setTodos]= useState([]);
    // const [filter, setFilter]= useState(false);

    let navigate = useNavigate();
    
     

useEffect(()=> {
      getTodos();
}, []);



    const getTodos=()=> {
        let retreivedTodos;
        let users= localStorage.getItem("users");
        retreivedTodos= JSON.parse(users);
        if(user.length > 0){
        let filter= retreivedTodos.filter(retreivedTodo => retreivedTodo.email === user[0].email);
        setTodos(filter[0].todos);   
        }
    }

    const checkTodo=(e)=> {
         e.target.parentElement.classList.toggle("executed");

         let retreivedTodos;
         let users= localStorage.getItem("users");
         retreivedTodos= JSON.parse(users);
         let filteredUser= retreivedTodos.filter(retreivedTodo => retreivedTodo.email === user[0].email);
         let filteredTodo= filteredUser[0].todos.filter(todo=> todo.title == e.target.parentElement.children[1].innerHTML);
         filteredTodo[0].executed = !filteredTodo[0].executed;

         localStorage.setItem("users", JSON.stringify(retreivedTodos));
    }

    const deleteTodo=(e)=> {
        e.target.parentElement.parentElement.remove();

        let retreivedTodos;
         let users= localStorage.getItem("users");
         retreivedTodos= JSON.parse(users);
         let filteredUser= retreivedTodos.filter(retreivedTodo => retreivedTodo.email === user[0].email);
         let todoIndex= filteredUser[0].todos.findIndex(todo=> todo.title == e.target.parentElement.parentElement.children[1].innerHTML);
         filteredUser[0].todos.splice(todoIndex, 1);

         localStorage.setItem("users", JSON.stringify(retreivedTodos));

    }

    const editTodo=(e)=> {
         setTitle(e.target.parentElement.parentElement.children[1].innerHTML);

         deleteTodo(e);
         navigate("/add-new-todo");
         
    }

    const filterTodos=(e)=> {
       if(e.target.checked === true){
        let filteredTodos= todos.filter(todo=> todo.executed === true);
           setTodos(filteredTodos);
       }
       else{
           getTodos();
       }  
    }

    if(!loggedIn || loggedIn === null){
        console.log(`False! I am ${loggedIn}`)
        return <Navigate to="/sign-in"/>
    }



    return(
        <div className="todo-container1">

            <h1>Here is your Todo-List</h1>

            <input type="checkbox" className="filter" onClick={filterTodos}/> 
            <label>Show only the executed Todos</label>

            <div className="todo-content">
            {todos.map(todo=> (
                <div className={`todo-item ${todo.executed ? `executed` : ""}`}  key={Math.random()}>
                  <input type="checkbox" onClick={checkTodo} defaultChecked= {todo.executed ? true: false}/>
                  <h3>{todo.title}</h3>
                  <p><button onClick={editTodo} disabled= {todo.executed ? "true" : ""}>Edit Todo</button></p>
                  <p><button onClick={deleteTodo}>Delete Todo</button></p>
                  <p><button><Link to={`/todo/${todo.title}`}>View Todo</Link></button></p>
              </div>
            ))}
            </div>

            <p><button><Link to="/profile">Go back to profile</Link></button></p>
            
        </div>
    );
  
}

export default TodoList;