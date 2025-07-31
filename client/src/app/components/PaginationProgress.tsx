'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Book } from "../types/books";

interface BookSliderProps {
    books: Book[];
}

export default function BookSliderPaginationProgress({books}: BookSliderProps) {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar'
                }}
                navigation={true}
                slidesPerView={3}
                loop={true}
                modules={[Pagination, Navigation]}
                className="w-[100%]"
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