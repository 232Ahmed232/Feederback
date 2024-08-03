import React, { useState, useEffect,useContext } from 'react';
import list from '../data'
import vid from './don.mp4'
import { useParams, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../store/Store';


function Template() {
    const navigate = useNavigate();

    const { food } = useParams()
    const [validph, setvalid] = useState("")
    const [link, setlink] = useState("/home")



    const [details, setDetails] = useState({
        name: "",
        phone: "",
        quantity: "3",
        date: "",
        food:"",
        location: "",
        donater:""
    })


    const [userData,setUserData] = useState(true)

    const { user } = useContext(AuthContext)

    if (userData && user) {
        setDetails({
        name: "",
        phone: user.phone,
        quantity: "3",
        date: "",
        food:food,
        location: "",
        donater:user._id
        })
        setUserData(false)
    }






    useEffect(() => {
        const phoneNumberPattern = /^03\d{9}$/;
        if (!details.phone.match(phoneNumberPattern)) {
            setvalid("Wrong Phone#")
        } else {
            setvalid(" ")
        }

    }, [details.phone])


    var handelInput = async (e) => {
        let name = e.target.name
        let value = e.target.value

        setDetails({
            ...details,
            [name]: value,
        })

        if ((details.name.length > 0) && (validph === " ") && (details.location.length > 0) &&  (details.date.length > 0)) {



            setlink("/home")

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

       try {
         const response = await fetch(`${window.location.origin}/api/template/item`,{
             method:"POST",
             headers:{
                 'Content-Type':"application/json"
             },
             body:JSON.stringify(details)
         })

         if (response.ok) {
            const rus_data = await response.json()
            navigate("/home")
           }else{
            const rus_data = await response.json()
            console.log(rus_data);
            toast.error(rus_data.msg)
           }
       } catch (error) {
        console.log(error);
       }

       

    };



    return (
        <div>
            <div className="video w-1/2 text-center mx-auto">
                <video width="520" height="140"
                    autoPlay loop muted src={vid}
                    className='relative mx-auto'
                />


                <h1 className='lg:text-2xl text-xs bottom-20  text-slate-100 relative lg:bottom-32 py-2 font-semibold hover:bg-black '>No one has ever become poor from giving</h1>
            </div>
            {list.map((e) => {
                if (food === e.name) {
                    return (

                        <div key={e.id}
                            className={`  bg-cover text-center pt-12`}
                            style={{ backgroundImage: `url('${e.img}')` }}
                        ><h1 className='font-bold text-3xl w-1/6 rounded-2xl mx-auto py-2 lg:bg-black text-slate-100 italic'>{e.name}</h1>

                            <div className='shadow-xl  flex flex-col bg-red-500  bg-opacity-15 lg:w-1/2  rounded-lg  mx-5 lg:mx-auto my-4 py-1 px-1'>

                                <input type="text"
                                    className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                                    placeholder='Food Name'
                                    name='name'
                                    value={details.name}
                                    onChange={handelInput}
                                />
                                <input type="number"
                                    className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                                    placeholder='Avalaible Phone'
                                    name='phone'
                                    value={details.phone}
                                    onChange={handelInput}
                                />
                                <h1 className='bg-white text-red-600 w-32 mx-auto font-serif' >{validph}</h1>
                                <input type="text"
                                    className=' border-2 border-black  w-3/4 mx-auto my-5 h-10 rounded-lg pl-4 font-sans font-semibold '
                                    placeholder='Location From Where To Pick Food '
                                    name='location'
                                    value={details.location}
                                    onChange={handelInput}
                                />

                              
                                <div className='w-3/4 text-left mx-auto my-4'>
                                    <label className='lg:text-xl font-bold text-white'>Date in which you last taste "{food}":</label>
                                    <input type="date" id="birthday" name="date"
                                        className='ml-2'
                                        
                                        value={details.date}
                                        onChange={handelInput}

                                    />
                                    <input
                                        type="range"
                                        min={1}
                                        max={100}
                                        name='quantity'
                                        value={details.quantity}
                                        className='cursor-pointer'
                                        onChange={handelInput}
                                    />
                                    <label className='text-xl text-white font-semibold italic'> Kg: {details.quantity}</label>
                                </div>
                            </div>
                            <button onClick={handleSubmit} className='bg-blue-400 bg-opacity-20 hover:bg-black w-20 mx-15 p-2 text-white rounded-lg font-semibold'>
                                    Submit
                            </button>


                        </div>
                    )
                }

            })}
        </div>
    );
}

export default Template;