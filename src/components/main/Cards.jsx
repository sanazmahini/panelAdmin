import React from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import styles from './Cards.scss';
const Cards = () => {
    return (
        <>
         <div className='cards d-flex justify-content-between mt-3'>     
        <Swiper
  breakpoints={{   
    425: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    640: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    768: {
       spaceBetween: 20,
       slidesPerView: 2,
    },
    1024: {
        spaceBetween: 10,
        slidesPerView:2,
      },
      1200: {
        spaceBetween: 10,
        slidesPerView:3,
      },
  }}
            spaceBetween={10}
             slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {/* Start Cards */}                     
                    <SwiperSlide><Card title="Completed Orders" number="32" /></SwiperSlide>
                    <SwiperSlide><Card title="Refund Requests" number="74"/></SwiperSlide>
                    <SwiperSlide><Card title="New Comments" number="25"/></SwiperSlide>
                    <SwiperSlide><Card title="Pending Orders" number="14"/></SwiperSlide>
                    <SwiperSlide><Card title="Pending Orders" number="85"/></SwiperSlide>           
            {/* End Cards */}
            </Swiper>
            </div>
        </>
    );
};

export default Cards;