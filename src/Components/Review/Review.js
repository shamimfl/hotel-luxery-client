import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Review.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const Review = () => {

    const { isLoading, error, data } = useQuery('reviewData', () =>
        fetch('https://hotel67767-shamimfl.vercel.app/review').then(res =>
            res.json()
        )
    )

    console.log(data)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='my-20  p-10'>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                
                {
                    data.map(reviews => (
                        <SwiperSlide className='p-5   font-bold rounded'>
                            <div className='card-shadow-2 p-3 rounded-2xl'>
                                <img className='w-24 h-24 rounded-full mx-auto' src={reviews?.photo} alt="" />
                                <h1 className='text-white font-medium text-center text-xl my-3'>{reviews.name}</h1>
                                <p className='text-center text-content my-3'>{reviews?.Descriptions?.slice(0, 100)}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Review;