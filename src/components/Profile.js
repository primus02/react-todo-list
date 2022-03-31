import {Link, Navigate, useNavigate} from "react-router-dom";
import React, { useContext }  from "react";
import { UserContext } from "../contexts/userContext";

function Profile(){
    const loggedIn= localStorage.getItem("logged");
    const navigate= useNavigate();
   
    const {user}= useContext(UserContext);
    console.log(user);

    const signOut=()=> {
        navigate("/sign-in");
        localStorage.removeItem("logged");
    }
    
    
    if(!loggedIn || loggedIn === null){
        console.log(`False! I am ${loggedIn}`)
        return <Navigate to="/sign-in"/>
   }
  
      

    return(
        <div className="profile-container">
            <div className="todo-icons">
                <button> <Link to="/add-new-todo"> Add Todo </Link></button>
                <button> <Link to="/todo-list">View Todo List</Link></button>
                <button onClick={signOut} className="sign-out"> Sign Out</button>
            </div>
            <div className="profile">
                <h3>Name: <span className="names">{`${user[0].firstName}  ${user[0].lastName}`}</span></h3>
                <h3>E-mail Address: <span className="email">{user[0].email}</span></h3>
                <h3>Phone Number: <span className="mobile">{user[0].phoneNumber}</span></h3>
            </div>
            
        </div>
    );

}

export default Profile;