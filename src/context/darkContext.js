import { useState,useContext } from "react";
import React from "react";

const DarkContext = React.createContext();

const DarkProvider = ({children}) => {

    const [dark,setDark] = useState(false);
    return (
        <DarkContext.Provider value={ {dark,setDark}}>
            {children}
        </DarkContext.Provider>
    );
}
export const useGlobalContext = () => {
    return useContext(DarkContext);
}
export {DarkContext,DarkProvider}