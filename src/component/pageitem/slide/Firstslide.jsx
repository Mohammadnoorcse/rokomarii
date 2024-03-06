import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../home/home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from "../../../image/10007.webp"
import img2 from "../../../image/10008.webp"
import img3 from "../../../image/10009.webp"
import img4 from "../../../image/10010.webp"
import img5 from "../../../image/10011.webp"
import img6 from "../../../image/10012.webp"
import img7 from "../../../image/10013.webp"

const slider=[
    {
        img:img1
    },
    {
        img:img2
    },
    {
        img:img3
    },
    {
        img:img4
    },
    {
        img:img5
    },
    {
        img:img6
    },
    {
        img:img7
    },
]
function Firstslide() {
  return (
    <div className='firstslider w100 div-center'>
        <div className="firstslider-content container">

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {slider.map((value)=>{
            return(
                <SwiperSlide>
                    <img src={value.img} alt="" />
                </SwiperSlide>
            )
        })}
      </Swiper>

        </div>

    </div>
  )
}

export default Firstslide