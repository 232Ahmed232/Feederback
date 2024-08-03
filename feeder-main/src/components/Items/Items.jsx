import React from 'react';
import bakery from '../Home/Fastfood.jpg'
import { Link, NavLink } from "react-router-dom";


function Items(props) {
    return (

        <div className=" w-25 basis-25 mx-10 text-center my-5"  >
            <Link to={`/items/${props.link}`}>
            <img className='h-32 w-52 rounded-lg mb-3' src={props.img} alt={props.img}/>
            <h4 className='font-bold italic tracking-wider'>{props.name}</h4>
            </Link>
        </div>
    );
}

export default Items;