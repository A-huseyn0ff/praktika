import React, { useEffect, useState } from 'react'
import './Products.scss'
import axios from 'axios'
import { useWishlist } from '../../Context/wishlist'
const Products = () => {
  const { AddToWishlist } = useWishlist()
  const [products,setProducts]=useState([])
  const fetchData=async ()=>{
    const res= await axios.get('http://localhost:4000/products')
    console.log(res.data);
    const jsondatas=res.data
    setProducts(jsondatas)
  }
  useEffect(()=>{
   
    fetchData()
  },[])
  return (
    <section className='products'>
        <div className='products_container'>
            <div className='txt'>
              <p>Devoted to wonderful beauty</p>
              <h2>Flowers Pricing</h2>
              
            </div>
                <div className='products_row'>
{products && products.map((item)=>(
  <div className='cards' key={item._id}>
    <img src={item.image} alt="" />
    <h2>{item.name}</h2>
    <p>${item.price}</p>
    
      <button onClick={()=>AddToWishlist(item)}>Add to wishlist</button>
   
  </div>  
  
))}
                </div>
            
        </div>
    </section>
  )
}

export default Products