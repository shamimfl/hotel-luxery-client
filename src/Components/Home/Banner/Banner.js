import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import './Banner.css'

const Banner = () => {
    return (
        <div className=''>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper bg-1 lg:h-[90vh]">
                <SwiperSlide className='flex items-center lg:px-10'>
                    <div className='py-10 px-5 text-center lg:text-start'>
                        <h1 className='lg:text-5xl font-bold text-white  uppercase'>Luxuary Apartment</h1>
                        <h1 className='lg:text-5xl font-bold text-white  uppercase'>In Amstrong</h1>
                        <p className='text-white mt-5 md:w-1/2 hidden lg:block'>Food indulgence in mind, come next door and sate your desires
                            with our ever changing internationally and seasonally.</p>
                        <p className='text-white mt-2 md:w-1/2  lg:hidden block'>Food indulgence in mind, come next door and sate your ....</p>

                        <button className='btn bg-primary border-2  rounded-sm md:mt-10 mt-5'>View Rooms</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex items-center lg:px-10'>
                    <div className='py-10 px-5 text-center lg:text-start'>
                        <h1 className='lg:text-5xl font-bold text-white  uppercase'>This Apartment</h1>
                        <h1 className='lg:text-5xl font-bold text-white  uppercase'>In The Heart Of The Mid Town</h1>
                        <p className='text-white mt-5 md:w-1/2 hidden lg:block'>Food indulgence in mind, come next door and sate your desires
                            with our ever changing internationally and seasonally.</p>
                        <p className='text-white mt-2 md:w-1/2  lg:hidden block'>Food indulgence in mind, come next door and sate your ....</p>

                        <button className='btn bg-primary border-2  rounded-sm md:mt-10 mt-5'>View Rooms</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex items-center lg:px-10'>
                    <div className='py-10 px-5 text-center lg:text-start'>
                        <h1 className='lg:text-5xl font-bold text-white  uppercase'>kitchen</h1>
                        <h1 className='lg:text-5xl font-bold text-white  uppercase'>for daily cook uses</h1>
                        <p className='text-white mt-5 md:w-1/2 hidden lg:block'>Food indulgence in mind, come next door and sate your desires
                            with our ever changing internationally and seasonally.</p>
                        <p className='text-white mt-2 md:w-1/2  lg:hidden block'>Food indulgence in mind, come next door and sate your ....</p>

                        <button className='btn bg-primary border-2  rounded-sm md:mt-10 mt-5'>View Rooms</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;