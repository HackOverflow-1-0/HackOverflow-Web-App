
import React from 'react';
import {Swiper,SwiperSlide} from "swiper/react";



import 'swiper/css';
import './slider.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation  } from "swiper/modules";

import image_1 from "./assets/images/image1.jpg";
import image_2 from "./assets/images/image2.jpg";
import image_3 from "./assets/images/image3.jpg";
import image_4 from "./assets/images/image4.jpg";
import image_5 from "./assets/images/image5.jpg";
import image_6 from "./assets/images/images6.jpg";
 
function App() {
  return ( 
    <>
    <div className="mainSection">
    <div className="container">
      <h1 className="heading">Hack Overflow 2.0</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_5} alt="slide_image" />
        </SwiperSlide>
        
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
    </div>
    
     

    
    </>
    
  );
}

export default App;
