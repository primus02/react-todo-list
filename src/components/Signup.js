import React from "react";
import {useState, useEffec} from "react";


function Signup(props){
   const [firstName, setFirstname]= useState("");
   const [lastName, setLastname]= useState("");
   const [email, setEmail]= useState("");
   const [phoneNumber, setPhonenumber]= useState("");
   const [password, setPassword]= useState("");
   const [confirmPassword, setConfirmPassword]= useState("");


   const updateFirstname=(e)=> {
       setFirstname(e.target.value);
   }

   const updateLastname=(e)=> {
    setLastname(e.target.value);
 }
const updateEmail=(e)=> {
    setEmail(e.target.value);
 }

const updatePhonenumber=(e)=> {
    setPhonenumber(e.target.value);
 }

const updatePassword=(e)=> {
    setPassword(e.target.value);
 }

const updateConfirmPassword=(e)=> {
    setConfirmPassword(e.target.value);
 }

 const signupUser=(e)=> {
     e.preventDefault();

     let retrievedUsers;
     let user= {firstName, lastName, email, phoneNumber, password, todos: []};
     let users = localStorage.getItem("users");
     if(users === null){
         retrievedUsers= [];
         if(password === confirmPassword){
         retrievedUsers.push(user);
         alert("Registration successful!");
         window.location.href="/sign-in";
         }
         else{
             alert("Passwords must match!");
             return;
         }
     }
     else{
         retrievedUsers= JSON.parse(users);
         let filter= retrievedUsers.filter(retrievedUser=> retrievedUser.email === email )
         if(filter.length > 0){
             alert("Email already exists!")
             return;
         }
         else{
             if(password === confirmPassword){
             retrievedUsers.push(user);
             alert("Registration successful!");
             window.location.href="/sign-in";
             }
             else{
                 alert("Passwords must match!")
                 return;
             }
         }
     }

     localStorage.setItem("users", JSON.stringify(retrievedUsers));
     
     setFirstname("");
     setLastname("");
     setEmail("");
     setPhonenumber("");
     setPassword("");
     setConfirmPassword("");

 };
    
   

    return(
        <div className="sign">
            <form id="form" onSubmit={signupUser}>
                <p>
                    <label>First Name:</label>
                    <input type="text" className="input-first-name" value={firstName} onChange={updateFirstname} required/>
                </p>
                <p>
                    <label>Last Name:</label>
                    <input type="text" className="input-last-name" value={lastName} onChange={updateLastname} required/>
                </p>
                <p>
                    <label>E-mail Address:</label>
                    <input type="email" className="input-email" value={email} onChange={updateEmail} required/>
                </p>
                <p>
                    <label>Phone Number:</label>
                    <input type="number" className="input-phone-number" value={phoneNumber} onChange={updatePhonenumber} required/>
                </p>
                <p>
                    <label>Password:</label>
                    <input type="password" className="input-password" value={password} onChange={updatePassword} required/>
                </p>
                <p>
                    <label>Confirm Password:</label>
                    <input type="password" className="input-confirm-passoword" value={confirmPassword} onChange={updateConfirmPassword} required/>
                </p>
                
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
            
        </div>
    );
}
export default Signup;