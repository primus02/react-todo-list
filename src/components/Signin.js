import React, {useState, useEffect, useContext}  from "react";
import { UserContext } from "../contexts/userContext";
import {Link} from "react-router-dom";


function Signin(){

  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");
  const {setUser} = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(true);

  const updateEmail=(e)=> {
    setEmail(e.target.value);
 }

  const updatePassword=(e)=> {
    setPassword(e.target.value);
 }

 const signinUser=(e)=> {
        e.preventDefault();

        let retrievedUsers;
        let users= localStorage.getItem("users");
        if(users === null){
            retrievedUsers= [];
            alert("Email/Password invalid!");
            return;
        }
        else{
            retrievedUsers= JSON.parse(users);
            let filter= retrievedUsers.filter(retrievedUser=> retrievedUser.email === email);

            if(filter.length < 1){
                alert("Invalid Email/ Password");
                return;
            }
            else{
                let filter1= retrievedUsers.filter(retrievedUser=> retrievedUser.password === password);
                if(filter1.length < 1){
                    alert("Invalid Email/Password");
                    return;
                }
                else{
                    setUser(filter1);
                   
                    alert("Log in successful");

                    localStorage.setItem("logged", true);

                    setShowLogin(false);
                }
            }
        }
 }

    
        
       if(showLogin){
        return(
        <div className="sign">
            <form onSubmit={signinUser}>
               <p>
                    <label>E-mail:</label>
                    <input type="email" className="input-email" value={email} onChange={updateEmail} required/>
                </p>
                <p>
                    <label>Password:</label>
                    <input type="password" className="input-password" value={password} onChange={updatePassword} required/>
                </p>

                <button type="submit">Submit</button>
                

            </form>

        </div>
        );
       }
       else{
         return(
           <div className="sign">
                 <p className="profile-btn"><button><Link to="/profile">Go to profile</Link></button></p>
           </div>
         )
       }
      
    
}

export default Signin;