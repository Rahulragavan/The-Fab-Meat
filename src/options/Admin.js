import React, { useState } from 'react'
import './Cart.css';
import { NavLink } from 'react-router-dom';

const Admin = () => {

  const [name, setName]= useState("");
  const [price, setPrice]= useState("");
  const [image, setImage]= useState("");

  return (
    <div className='form-admin'>
        Name :<input type='text' value={name} onClick={(e)=> setName  (e.target.value)}></input>
        Price :<input type='number'  value={price} onClick={(e)=> setPrice  (e.target.value)}></input>
        Image :<input type='file'  value={image} onClick={(e)=> setImage  (e.target.value)}></input>
    </div>
  )
}

export default Admin