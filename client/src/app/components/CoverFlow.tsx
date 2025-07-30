'use client'

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function CoverFlow() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="w-[100%] pt-[50px] pb-[50px]"
            >
                <SwiperSlide className="bg-center bg-cover w-[200px]">
                    <img className="block w-[100%]" src='https://upload.wikimedia.org/wikipedia/en/2/21/Jurassic_Park_%28book_cover%29.jpg' />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover w-[200px]">
                    <img className="block w-[100%]" src='https://m.media-amazon.com/images/I/81b8bgvoIJL._UF1000,1000_QL80_.jpg' />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover w-[200px]">
                    <img className="block w-[100%]" src='https://upload.wikimedia.org/wikipedia/en/6/62/Silence3.png' />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover w-[200px]">
                    <img className="block w-[100%]" src='https://m.media-amazon.com/images/I/71Jzezm8CBL._UF1000,1000_QL80_.jpg' />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover w-[200px]">
                    <img className="block w-[100%]" src='https://m.media-amazon.com/images/I/817tHNcyAgL.jpg' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}