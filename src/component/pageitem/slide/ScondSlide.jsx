import React from 'react'
import "./scondslide.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';
import {Link} from "react-router-dom"
import img1 from "../../../image/10014.png"

const scondslidecard =[
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
    {
     text:"উপন্যাস"
    },
]
function ScondSlide() {
  return (
    <div className='scondslide w100 div-center '>
        <div className="seconslide-content container">
           <div><img src={img1} alt="" /></div>

        <Swiper
        slidesPerView={6}
        spaceBetween={3}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        
        modules={[FreeMode]}
        className="mySwiper i"
      >
       {scondslidecard.map((value)=>{
        return(
            <SwiperSlide className='a'>{value.text}</SwiperSlide>
        )
       })}
        
        
       
      </Swiper>

        </div>

    </div>
  )
}

export default ScondSlide