import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import logo from "./log.png"



function Otp() {

    const [user, setUser] = useState({
        
        otp: "",
    });

    var handelInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,

        })
    }

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

console.log("ASSLAM");
       try {

         const response = await fetch(`${window.location.origin}/api/auth/otp`,{
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
            if (rus_data.msg=="Logged In") {
                navigate("/home")
            }
            
           }else{
            const rus_data = await response.json()
            toast.error(rus_data.msg)
            console.log(rus_data);

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
            <h1 className='text-3xl text-center font-bold '>OTP is send by Email</h1>
            <div className='shadow-xl flex flex-col bg-blue-500 w-1/1 lg:w-1/2  rounded-lg mx-5  lg:mx-auto my-4 py-1 px-1'>
                
                <input type="text"
                    className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                    placeholder='OTP'
                    name='otp'
                    value={user.otp}
                    onChange={handelInput}
                />
            </div>
           
            <br />
            <button onClick={handleSubmit} className='mt-3 bg-blue-400 w-20 mx-15 p-2 text-white rounded-lg font-semibold hover:bg-black'>Submit</button>
            
        </div>
    );
}

export default Otp