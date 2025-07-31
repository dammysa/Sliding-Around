'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Book } from "../types/books";
import Image from "next/image";

interface BookSliderProps {
    books: Book[];
}

export default function BookSliderCoverFlow({books}: BookSliderProps) {
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
                {books.map((book) => (
                    <SwiperSlide className="bg-center bg-cover w-[200px]">
                        <img src={book.thumbnail_src} alt={book.name} className="block w-[100%]" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}