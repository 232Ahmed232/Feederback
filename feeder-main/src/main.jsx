import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Template from './components/Template/Template.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import { AuthProvider } from './store/Store.jsx';
import Mydonate from './components/Mydonate/Mydonate.jsx'
import Error from './components/Error/Error.jsx'
import Logout from './components/Logout/Logout.jsx'
import Otp from './components/Otp/Otp.jsx'
import Feeder from './Feeder.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    <Route path="otp" element={<Otp />} />

    <Route path="" element={<Feeder />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="items/:food" element={<Template />} />
      <Route path="items/mydonte/:id" element={<Mydonate />} />
      <Route path="/logout" element={<Logout />} />
      <Route path='*' element={<Error />} />
    </Route>
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AuthProvider>

    <RouterProvider router={router} />
  </AuthProvider>
  

)
