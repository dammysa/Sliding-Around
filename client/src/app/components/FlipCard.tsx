"use client";
// Swiper requires Client to function

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

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
      {/* Swiper component - Uses modules to register each feature, effect=flip for flipping. allows a grabCursor when hovering over it. Pagination dots at the bottom for navigation. Navigation has arrows left and right. Adding space between, same as in CSS. Slides per view allows only 2 in view. */}
      <Swiper
        modules={[EffectFlip, Pagination, Navigation]}
        effect="flip"
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="rounded"
      >
        {/* Loops the array into swiper slides */}
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="flex flex-col items-center bg-white rounded-2xl h-[500px]">
              <div className="relative w-full h-80 mb-10">
                <Image
                  src={book.thumbnail_src}
                  alt={book.name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3>{book.name}</h3>
              <p>{book.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
