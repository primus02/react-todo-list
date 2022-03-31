import React from "react";
import {Link} from "react-router-dom";


function Home(){
    return(
        <div className="container">
           <div>
                <h1 className="title">Welcome to our Todo-List Website!</h1>

                <div className="access-account">
                    <h3>Are you new here and would like to use our platform? <Link to="/sign-up"><span className="sign-up">Sign Up here!</span></Link></h3>
                    <h3>You already have an account with us? <Link to="sign-in"><span className="log-in">Log In here! </span></Link></h3>
                </div>

                <div className="info">
                    <h4>This website gives you the privilege to create and manage you todo lists judicously. It is organized in such a way that it keeps records of all your Todos in terms of; </h4>
                    <ul>
                        <li>When a particular Todo is created.</li>
                        <li>When a particular Todo is marked as executed.</li>
                        <li>When a particular Todo is changed.</li>
                        <li>List of all your Todos, both executed and non-executed. </li>
                    </ul>
                </div>
            </div>
            

        </div>
    );
}

export default Home;