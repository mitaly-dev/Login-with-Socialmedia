import React from 'react';
import { createContext, useState } from 'react';
import Header from './Header';
import {Outlet} from "react-router-dom";

export const UserContext = createContext()
const Main = () => {
    let [user,setUser] = useState({})

return (
    <UserContext.Provider value={[user,setUser]}>
        <Header></Header>
        <Outlet></Outlet>
    </UserContext.Provider>
    );
};

export default Main;

