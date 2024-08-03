import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Outlet, Router } from 'react-router-dom'
import { AuthContext } from './store/Store';
import Header from './components/Header/Header';



function Feeder() {
    const {isLoogedin} = useContext(AuthContext)

    if (isLoogedin) {
        return (<>
            <Header /> 
           <Outlet />
       </>)
    } else {
        return (<>
           <Navigate to="/login" />
       </>)
    }
    
}

export default Feeder