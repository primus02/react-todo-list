import { useState } from "react";
import React from "react";


function Modals(){
  const [users, setUsers]= useState([{name: "Akinyemi Ismheel", age: "25", mobile: "07036288696"}]);
  const [name, setName]= useState("");
  const [age, setAge]= useState("");
  const [mobile, setMobile]= useState("");
  const [show, setShow]= useState(true);


  const addUser=(e)=> {
      e.preventDefault();
      if(name === "" || age === "" || mobile === ""){
          alert("You can not submit an empty field")
          return;
      }
      else{
      setUsers(prevUsers => (
          [...prevUsers, {name, age, mobile}]
      ))

      setShow(true);

      setName("");
      setAge("");
      setMobile("");
      }
  }

    return(
        <div className="modal-container">
            <div className="modal" hidden={show}>
                <p className="close"><button onClick={()=> {setShow(true)}}> X</button></p>
                <h1>This is the modal component</h1>
                    
                <form onSubmit={addUser}>
                        <p><label>Name:</label> <input type="text" value={name} onChange={(e)=> {
                            setName(e.target.value)
                        }}/></p>
                        <p><label>Age:</label> <input type="number" value={age} onChange={(e)=> {
                            setAge(e.target.value)
                        }}/></p>
                        <p><label>Mobile-No:</label> <input type="number" value={mobile} onChange={(e)=> {
                            setMobile(e.target.value)
                        }}/></p>
                        <p><button type="submit">Submit</button></p>
                 </form>
                
            </div>
            <div className="users-container">
                <p className="add"><button onClick={()=> {setShow(false)}}>Add New User</button></p>

                <div className="users-info">
                        {users.map(user => (
                            <div className="user" key={Math.random()}>
                                <p>Name: <span>{user.name}</span></p>
                                <p>Age: <span>{user.age} years</span></p>
                                <p>Mobile: <span>{user.mobile}</span></p>
                            </div>
                        ))}
                    
                </div>
            </div>
        </div>
    );
}


export default Modals;