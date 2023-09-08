"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
     
  const [isDelete , setIsDelete] = useState(false);
  
  const toggleDelete = ()=>{
    setIsDelete(!isDelete);
  }


  return (
    <GlobalContext.Provider value={{toggleDelete , isDelete}}>
     <div>{children}</div>
    </GlobalContext.Provider>
  );
};