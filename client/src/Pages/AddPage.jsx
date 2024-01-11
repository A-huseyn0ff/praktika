import React, { useEffect, useState } from 'react'
import './Add.scss'
import axios from 'axios'
import Products from '../components/Products/Products'
const AddPage = () => {
    
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [image,setImage]=useState("")
    
    const handleSubmit=async()=>{

        await axios.post('http://localhost:4000/products',{
            name:name,
            image:image,
            price:price
        })
    }


  return (
    <div className='form_container'>

    <form onSubmit={(e)=>handleSubmit(e)}>
        <input name='name' type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
        <input name='image' type="text" placeholder='Enter image src' onChange={(e)=>setImage(e.target.value)}/>
        <input name='price' type="text" placeholder='Enter price' onChange={(e)=>setPrice(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
    </div>
  )
}

export default AddPage