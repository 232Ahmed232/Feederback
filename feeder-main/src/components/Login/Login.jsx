import React, { useContext, useState } from 'react';
import logo from "./log.png"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/Store';
import { toast } from 'react-toastify';



function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const [err, seterr] = useState("")
    const [errdis, seterrdis] = useState("hidden")
    const  { storetokenInLS } = useContext(AuthContext)


    var handelInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


       try {

         const response = await fetch(`${window.location.origin}/api/auth/login`,{
             method:"POST",
             headers:{
                 'Content-Type':"application/json"
             },
             body:JSON.stringify(user)
         })

        //  console.log(response);
         if (response.ok) {
            console.log("Check");
            const rus_data = await response.json()
            await  storetokenInLS(rus_data.token)
            toast(rus_data.msg)
            if (rus_data.msg == "Logged In") {
                navigate("/home")
            } else {
                navigate("/otp")
            }
            
            
           }else{
            const rus_data = await response.json()
            toast.error(rus_data.msg)

           }
       } catch (error) {
        console.log(error);
       }

       

    };


    return (
        <div className='text-center'>
            <img src={logo} alt=""
                className='m-auto size-32'
            />
            <h1 className='text-3xl text-center font-bold '>Log In To Make World Better</h1>
            <div className='shadow-xl flex flex-col bg-blue-500 w-1/1 lg:w-1/2  rounded-lg mx-5  lg:mx-auto my-4 py-1 px-1'>
                <input type="email"
                    className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                    placeholder='Email'
                    name='email'
                    value={user.email}
                    onChange={handelInput}
                />
                <input type="password"
                    className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                    placeholder='Password'
                    name='password'
                    value={user.password}
                    onChange={handelInput}
                />
            </div>
            <Link to={"/signup"}
                className='hover:text-blue-400 font-bold hover:underline'
            >Dont have account to create one</Link>
            <br />
            <button onClick={handleSubmit} className='mt-3 bg-blue-400 w-20 mx-15 p-2 text-white rounded-lg font-semibold hover:bg-black'>Submit</button>
            <h1
                className={`m-10 mx-auto p-4 border-red-900 border-4 w-1/2 bg-red-100 text-red-500 ${errdis}`}
            >{err}</h1>
        </div>
    );
}

export default Login;