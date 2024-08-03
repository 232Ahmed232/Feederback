import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "./log.png"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function Signup() {

    const navigate = useNavigate();

  
    const [backenderr,setback] = useState("")
    const [errdis, seterrdis] = useState("hidden")
    const [err, seter] = useState("")

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });


    var handelInput = async (e) => {
       
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });

    };

    // handle form on submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SS");
       try {
         const response = await fetch(`${window.location.origin}/api/auth/register`,{
             method:"POST",
             headers:{
                 'Content-Type':"application/json"
             },
             body:JSON.stringify(user)
         })

        //  console.log(response);
         if (response.ok) {
            const rus_data = await response.json()
            toast(rus_data.msg)
            navigate("/login")
           }else{
            const rus_data = await response.json()
            console.log(rus_data.msg);
            toast.error(rus_data.msg)
           
           }
       } catch (error) {
        console.log(error);
       }

       

    };















useEffect(() => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{3,3}$/

    var phpattren = /^03\d{9}$/

    if (!user.email.match(pattern)) {
        seter("Please provide wright email")
        seterrdis("")
    }
    if (user.email.match(pattern)) {
        seter("")
        seterrdis("hidden")
    }
    if (!user.phone.match(phpattren)) {
        seter("Please provide wright Pakistani Phone")
        seterrdis("")
    }
    if (user.phone.match(phpattren)) {
        seter(" ")
        seterrdis("hidden")
    }
    if (user.password.length < 8) {
        seter("Please Enter password more then 8 charachters")
        seterrdis("")
    }
    if (user.username == 0) {
        seter("Please Enter Name")
        seterrdis("")
    }

    if (!backenderr==="") {
        seter(backenderr)
        seterrdis("")
    }

}, [user.email, user.password, user.username,user.phone,backenderr])

return (
    <form className='text-center border-10 border-black' method='POST'>

        <h1 className='text-3xl text-center font-bold  my-20'>Sign Up</h1>
        <div className='  flex flex-col lg:w-1/2 rounded-lg w-1/1  lg:m-auto my-10 py-1 px-1 '>

            <input type="text"
                className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                placeholder='Full Name'
                name="username"
                onChange={handelInput}
                value={user.username}

                required
            />
            <input type="email"
                className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                placeholder='Email'
                name='email'
                value={user.email}
                onChange={handelInput}
                autoComplete='off'
                required
            />
            <input type="password"
                className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                placeholder='Password'
                name='password'
                value={user.password}
                onChange={handelInput}
                required
            />
            <input type="number"
                className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                placeholder='Phone'
                name='phone'
                value={user.phone}
                onChange={handelInput}
                required
            />

            <Link to={"/"}
                className='hover:text-blue-400 font-bold hover:underline my-6'
            >Already Have Account</Link>

        </div>

        <button onClick={handleSubmit} disabled={false}  className='bg-blue-400 hover:bg-black w-20 mx-15 p-2 text-white rounded-lg font-semibold'>
                Submit

        </button>
        <img
            className='w-1/2 h-2/3 opacity-30  absolute left-1/4 top-10 -z-10'
            src={logo}
            alt="" />
        <h1
            className={`m-10 mx-auto p-4 border-red-900 border-4 w-1/2 bg-red-100 text-red-500 ${errdis}`}
        >{err}</h1>
    </form>
);
}

export default Signup