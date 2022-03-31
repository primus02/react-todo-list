// import React from "react";
import {Link} from "react-router-dom";
import React  from "react";
import { useSelector } from "react-redux";


function Navbar(){
    const counter= useSelector(state=> state.counterReducer);
    const login= useSelector(state=> state.logReducer);

    console.log(login)


    return(
        <nav>
               <p className="logo"><Link to="/home"><img src="/static/heart_logo.png" alt="logo"/></Link></p>
               <ul>
                   <Link to="/"><li>Home</li></Link>
                   <Link to="/contact-us"><li>Contact Us</li></Link>
                   <Link to="/about-us"><li>About Us</li></Link>
                   {login ? <Link to="/address"><li>Address</li></Link> : ""}
                   <p style={{color: "red"}}>{counter}</p>  
               </ul>

           </nav>
    );
}

export default Navbar;