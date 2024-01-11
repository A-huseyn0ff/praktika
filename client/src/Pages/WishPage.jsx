import React from 'react'
import './Wish.scss'
import { useWishlist } from '../Context/wishlist'
import { FaRegHeart } from "react-icons/fa";
const WishPage = () => {
    const { wishlist, RemoveToWishlist } = useWishlist()
    return (
        <section className='wishlist'>
            <FaRegHeart className='icon'/>  
            <h2>My Wishlist</h2>
        <div className='wishlist_container'>  
            {wishlist.map((item,id) => (

                <div className='cards' key={id}>
                    <img src={item.image} alt="" />
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <button onClick={() => RemoveToWishlist(item)}>delete</button>
                </div>
            ))}
        </div>
        </section>
    )
}

export default WishPage