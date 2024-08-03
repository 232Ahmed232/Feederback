import './App.css'
import React from 'react';
import { ToastContainer } from "react-toastify"

import { AuthProvider } from './store/Store.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Feeder from './Feeder.jsx';
import { Outlet } from 'react-router-dom';


function App() {




      return (
        <AuthProvider>
          
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
        />
         <Outlet/>
        
        </AuthProvider>
      )
    


 
 

}

export default App
