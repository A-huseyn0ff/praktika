import React from 'react'
import './Header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
const Header = () => {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}>
        <SwiperSlide className='slide'><img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" alt="" />
        
        <div className='txt'>
          <p>Floral</p>
        <h2>Excellent bouquets for you</h2>
          </div>

        </SwiperSlide>
        <SwiperSlide className='slide'>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" alt="" />
          <div className='txt'>
          <p>Floral</p>
        <h2>Excellent bouquets for you</h2>
          </div>
            </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Header