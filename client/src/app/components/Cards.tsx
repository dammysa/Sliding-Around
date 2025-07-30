'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-cards';

import { Book } from "../types/books";

interface BookSliderProps {
    books: Book[];
}

export default function BookSliderCards({books}: BookSliderProps) {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[30%]"
            >
                {books.map((book) => (
                    <SwiperSlide key={book.id} className="bg-center bg-cover w-[200px]">
                        <img className="block w-[100%]" src={book.thumbnail_src} alt={book.name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}