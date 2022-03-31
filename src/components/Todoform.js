import React, {useState, useContext, useEffect} from "react";
import { UserContext } from "../contexts/userContext";
import {useNavigate, Navigate} from "react-router-dom";


function Todoform(){
   const loggedIn= localStorage.getItem("logged");
   const [todo, setTodo]= useState("");
   const [rate, setRate]= useState(0);
   const {user, title, setTitle}= useContext(UserContext);
   let navigate = useNavigate();

useEffect(()=> {
    if(title){
        setTodo(title);
        }
}, [title]);

   const updateTodo=(e)=>{
         setTodo(e.target.value);
   }

   const updateRate=(e)=> {
         setRate(e.target.value);
   }

   console.log(user);
   console.log(title);


   const addTodo=(e)=> {
    e.preventDefault();

       if(rate < 1 || rate > 5){
           alert("Rating must be between 1 & 5")
               return;
       }
       else{
    

       let retreivedTodos;
       
       let users= localStorage.getItem("users");
   
      retreivedTodos= JSON.parse(users);
      let filter= retreivedTodos.filter(retrievedTodo=> retrievedTodo.email === user[0].email);

      let newTodo= {title: todo, rating: rate, date: new Date().toLocaleString(), executed: false};

      filter[0].todos.push(newTodo);

      localStorage.setItem("users", JSON.stringify(retreivedTodos));

      alert("Todo added successfully");

      navigate("/todo-list");

      setTitle("");

   }
}

   if(!loggedIn || loggedIn === null){
    console.log(`False! I am ${loggedIn}`)
    return <Navigate to="/sign-in"/>
   }

  


    return(
        <div className="todo-container">
            <h1>Kindly enter your new Todo here.</h1>
            <form className="todo-form" onSubmit={addTodo}>
                <input type="text" placeholder="Enter new todo here!" value={todo} onChange={updateTodo}/>
                <input type="number" placeholder="Rate your Todo between 1-5!" value={rate} onChange={updateRate}/>
                <p><button type="submit">Submit Todo</button></p>
            </form>
        </div>
    );
}

export default Todoform;