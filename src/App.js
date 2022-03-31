import React, {useState} from "react";
import { Navigate } from "react-router";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import TodoList from "./components/Todolist";
import Todoform from "./components/Todoform";
import Todo from "./components/Todo";
import About from "./components/About";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Redux from "./components/Redux";
import Modals from "./components/Modal";
import SelectOption from "./components/Select";
import ContextProvider from "./contexts/userContext";


function App() {

  return (
    <Router>
    <div className="App">
      <ContextProvider>
       <Navbar/>
       <Routes>
         <Route path="*" element={<Home/>}/>
         <Route path="/about-us" element={<About/>}/>
         <Route path="/address" element={<Address/>}/>
         <Route path="/contact-us" element={<Contact />}/>
         <Route path="/" element={<Home/>}/> 
         <Route path="/sign-up" element={<Signup/>} />
         <Route path="/sign-in" element={<Signin/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/add-new-todo" element={<Todoform/>} />
         <Route path="/todo-list" element={<TodoList/>} />
         <Route path="/todo/:id" element={< Todo/>}/>
         <Route path="/redux" element={<Redux/>}/>
         <Route path="/select" element={<SelectOption/>}/>
         <Route path="/modal" element={<Modals />} />
       </Routes>
       <Footer/>
      </ContextProvider>
    </div>
    </Router>
  );
}

export default App;
