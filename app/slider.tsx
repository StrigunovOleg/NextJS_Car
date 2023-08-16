"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../database.types'

interface Car {
    id: number;
    brand: string | null;
    model: string | null;
    description: string | null;
    images: string | null;
    price: number | null;
}


export default function Slider() {

    const [cars, setCars] = useState<Car[]>([]);

    const supabase = createClientComponentClient<Database>();
    useEffect(() => {
        const fetchEmployeeList = async (): Promise<void> => {
            const { data } = await supabase
                .from('cars')
                .select('*');

                if (data) {
                    setCars(data)
                }
        };
        fetchEmployeeList();
    }, [supabase]);



    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >

                {cars.map((car) => (
                    <SwiperSlide key={car.id}>
                        <div className='box_img'>
                            <img src={car.images!} alt="img" />
                        </div>
                        <div className='slider_description'>
                            <h2 className='slider_model'>{car.model}</h2>
                            <h3 className='slider_brand'>{car.brand}</h3>
                            <p className='slider_price'>${car.price}</p>
                        </div>
                    </SwiperSlide>
                ))}

                {cars.map((car) => (
                    <SwiperSlide key={car.id}>
                        <div className='box_img'>
                            <img src={car.images!} alt="img" />
                        </div>
                        <div className='slider_description'>
                            <h2 className='slider_model'>{car.model}</h2>
                            <h3 className='slider_brand'>{car.brand}</h3>
                            <p className='slider_price'>${car.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

