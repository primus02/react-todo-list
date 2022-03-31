import { createContext, useState } from "react";

export const UserContext= createContext({});

function ContextProvider({children}){
    const [user, setUser]= useState([]);
    const [title, setTitle] = useState("");


    return(
         <UserContext.Provider value={{user, setUser, title, setTitle}}>
              {children}
         </UserContext.Provider>
    );
}

export default ContextProvider;