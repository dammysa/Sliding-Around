"use client";
// Swiper requires Client to function

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Get the interface from /books
import { Book } from "../types/books";
import Image from "next/image";

interface BookSliderProps {
  books: Book[];
}
export default function BookSliderFlip({ books }: BookSliderProps) {
  return (
    <div className="w-full max-w-3x1 py-10">
      <h2 className="text-2xl font-bold text-center">Book Slider with Flip</h2>
      <Swiper
        modules={[EffectFlip, Pagination, Navigation]}
        effect="flip"
        grabCursor={true}
        pagination={{ clickable = true }}
        navigation
        className="rounded"
      >
        {books.map((book) => 
        <SwiperSlide key={book.id}>
            <div className="flex flex-col"
        </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
