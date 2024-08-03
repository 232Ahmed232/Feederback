import React, { useContext } from 'react';

import Items from '../Items/Items.jsx'

import list from '../data'

import my from "./my.png"

import { AuthContext } from '../../store/Store';


function Home() {
    
    const { user } = useContext(AuthContext)



    return (
        <>
            <h1 className='font-sans font-semibold text-center tracking-wider text-2xl mt-9 text-orange-600 underline hover:text-orange-800'>What Kind of Food you are Donating!</h1>



            <div className="flex flex-row flex-wrap justify-center  m-auto w-1/2">

                {list.map((e)=>{
                return <Items key={e.id} link={e.name} img={e.img} name={e.name}/>
                
            })}
            <Items  link={"mydonte/"+user._id} img={my} name={"My Dontaion"}/>
            </div>


        </>
    );
}

export default Home;