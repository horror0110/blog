"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
     
  const [isDelete , setIsDelete] = useState(false);
  const [openSidebar , setOpenSidebar] = useState(false);
  
  const toggleDelete = ()=>{
    setIsDelete(!isDelete);
  }

  const toggleSidebar=()=>{
    setOpenSidebar(!openSidebar);
  }




  return (
    <GlobalContext.Provider value={{toggleDelete , isDelete , toggleSidebar , openSidebar}}>
     <div>{children}</div>
    </GlobalContext.Provider>
  );
};