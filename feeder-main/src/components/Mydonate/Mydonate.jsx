import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { toast } from 'react-toastify';



function Mydonate(props) {

  const [item, setitem] = useState("")
  const [fulname, setful] = useState([{}])
  const { id } = useParams()
  
  const id_string = id.toString()

  const [user, setuse] = useState(null)




  const getdata = async()=>{
    try {
      const response = await fetch(`${window.location.origin}/api/template/useritem/${id_string}`,{
          method:"GET",
          headers:{
              'Content-Type':"application/json"
          },
          // body:JSON.stringify(id_string)
      })

      if (response.ok) {
         const rus_data = await response.json()
         setful(rus_data.msg)
        }else{
         const rus_data = await response.json()
         console.log(rus_data);
        }
    } catch (error) {
     console.log(error);
    }

  }

  useEffect(() => {
   getdata()

  }, [])

const deleteOne =  async(id)=>{
    console.log(id);
    try {
      const response = await fetch("http://localhost:3000/api/template/deleteitem/"+id,{
          method:"GET",
          headers:{
              'Content-Type':"application/json"
          },
      })

      if (response.ok) {
         const rus_data = await response.json()
        toast(rus_data.msg)
        }else{
         const rus_data = await response.json()
         console.log(rus_data);
         toast.error(rus_data.msg)
        }
    } catch (error) {
     console.log(error);
    }

  }

  
 



  return (
    
    <div>
      {fulname.map((ele, index) => {
        return (
          <div key={index} className={`bg-slate-400  lg:w-1/2 lg:mx-auto mx-5 mt-10 py-5 `}>
            <div className=' flex flex-row mx-3 mb-2'>
              <button
                id={index}
                
                className='mr-4'>
                <i id={index} className={`fa-solid fa-arrow-${(item === index) ? "down" : "up"} `}></i>
              </button>
              <span className={`mx-auto text-3xl font-bold text-slate-100 italic `}>{ele.name}</span>
              <button
                id={index}
                onClick={() => deleteOne(ele._id)}
                className={`p-2 rounded text-white font-bold italic bg-blue-400  hover:bg-red-600`}>
                Cancel
              </button>
            </div>
            <div className={`bg-slate-200 mx-4  px-4 itealic font-bold`}>
              <h1>Phone Number: <span className='underline italic text-slate-600'>{ele.phone}</span></h1>
              <h1>Category of Food: <span className='underline italic text-slate-600'>{ele.food}</span></h1>
              <h1>Location from where to pick food: <span className='underline italic text-slate-600'>{ele.location}</span></h1>
              <h1>How much kg food is :<span className='underline italic text-slate-600'>{ele.quantity}</span></h1>
            </div>
          </div>
        )

      })}
      <h1 className='mx-auto text-center my-10 capitalize italic underline'>After cancel the request you need to refresh the page to see update</h1>
    </div>
  );
}

export default Mydonate;