import React, { useContext, useState } from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../store/Store';


function Contact() {

    const navigate = useNavigate()

    const [errdis, seterrdis] = useState("hidden")
    const [link, setlink] = useState("")
    const [err, seter] = useState("")
   const [contact ,setContact] = useState({
    username:"",
    email:"",
    text:"",
    })

    const [userData,setUserData] = useState(true)

    const { user } = useContext(AuthContext)

    if (userData && user) {
        setContact({
            username:user.username,
            email:user.email,
            text:"",
        })
        setUserData(false)
    }

    var handelInput = async (e) => {
        let name = e.target.name
        let value = e.target.value

        setContact({
            ...contact,
            [name]:value,
        })
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{3,3}$/

        if ((contact.username.length > 0) && (contact.email.match(pattern)) && (contact.text.length > 0) ) {

         
            setlink("/home")
            seterrdis("hidden");

        }else{
            seterrdis(" ");
            seter("Please Provide Valid Information & Valid Email")
        }

    }

    const handelSubmit = async(e) =>{
        e.preventDefault();

       try {
         const response = await fetch(`${window.location.origin}/api/contact/contact`,{
             method:"POST",
             headers:{
                'Content-Type':"application/json"
             },
             body:JSON.stringify(contact)
         })

        //  console.log(response);
         if (response.ok) {
            const rus_data = await response.json()
            navigate("/home")
           }else{
            const rus_data = await response.json()
            console.log(rus_data);
           }
       } catch (error) {
        console.log(error);
       }
    }




    return (
        <div>
            <h1 className='text-center text-3xl'>Contact Us</h1>
            <div className="form flex flex-col">
                <input type="text"
                    className=' border-2 border-black  lg:w-1/2 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                    placeholder='Full Name'
                    name='username'
                    value={contact.username}
                    onChange={handelInput}
                />
                <input type="email"
                    className=' border-2 border-black  lg:w-1/2 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                    placeholder='Email'
                    name='email'
                    value={contact.email}
                    onChange={handelInput}
                />
               
                <textarea id="w3review" name="text" rows="4" cols="30" className='border-2 border-black lg:w-1/2 m-auto my-5'
                    value={contact.text}
                    onChange={handelInput}
                    placeholder='AnyProblem According to site or Any help need please type!
                    Or if youare interested in our work'
                >

                </textarea>
                <button onClick={handelSubmit} className='bg-blue-600 hover:bg-black w-20 mx-auto p-2 text-white rounded-lg font-semibold'>
                        Submit
                </button>
            </div>
            <h1
                className={`m-10 mx-auto p-4 border-red-900 border-4 w-1/2 bg-red-100 text-red-500 ${errdis}`}
            >{err}</h1>

        </div>
    );
}


export default Contact;