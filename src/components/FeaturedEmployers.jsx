import React from 'react'
import image1 from "../assets/images/1.png"
import image2 from "../assets/images/2.png"
import image3 from "../assets/images/3.png"
import image4 from "../assets/images/4.png"
import image5 from "../assets/images/5.png"
import image6 from "../assets/images/6.png"
import image7 from "../assets/images/7.png"
import image8 from "../assets/images/8.png"
import image9 from "../assets/images/9.png"
import image10 from "../assets/images/10.png"
import image11 from "../assets/images/11.png"
import image12 from "../assets/images/12.png"
import image13 from "../assets/images/13.png"
import image14 from "../assets/images/14.png"
import image15 from "../assets/images/15.png"
import image16 from "../assets/images/16.png"
import image17 from "../assets/images/17.png"
import image18 from "../assets/images/18.png"
import image19 from "../assets/images/19.png"
import image20 from "../assets/images/20.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const FeaturedEmployers = () => {

    const workers = [
        {
            image: image1,
        },
        {
            image: image2,
        },
        {
            image: image3,
        },
        {
            image: image4,
        },
        {
            image: image5,
        },
        {
            image: image6,
        },
        {
            image: image7,
        },
        {
            image: image8,
        },
        {
            image: image9,
        },
        {
            image: image10,
        },
        {
            image: image11,
        },
        {
            image: image12,
        },
        {
            image: image13,
        },
        {
            image: image14,
        },
        {
            image: image15,
        },
        {
            image: image16,
        },
        {
            image: image17,
        },
        {
            image: image18,
        },
        {
            image: image19,
        },
        {
            image: image20,
        },
    ]

    return (
        <div className='px-16'>
            <h1 className='text-center text-2xl text-blue-900 font-bold py-5'>Featured Workers</h1>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={8}
                autoplay={{ delay: 2000}}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 8 },
                }}
            >
               
                {workers.map((worker, index) => (
                    <SwiperSlide key={index} >
                        <div className="flex justify-center">
                            <img src={worker.image} alt="" className=' w-[7rem] border border-gray-400 rounded-sm' />
                            </div>
                    </SwiperSlide>
                ))}
                 
            </Swiper>
        </div>
    )
}

export default FeaturedEmployers