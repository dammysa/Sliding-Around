"use client";
// Swiper requires Client to function

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

// Get the interface from /books
import { Book } from "../types/books";
import Image from "next/image";
import React from "react";

interface BookSliderProps {
  books: Book[];
}
export default function BookSliderFlip({ books }: BookSliderProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="relative bg-center bg-cover w-[250px]">
        <div className="custom-pagination absolute top-6 left-1/2 -translate-x-1/2 z-10" />

        <h2 className="text-2xl font-bold text-center text-nowrap flex justify-center mb-10">
          Book Slider with Flip
        </h2>

        <div
          className="swiper-button-next"
          style={
            {
              right: "-20px",
              color: "white",
            } as React.CSSProperties
          }
        />
        <div
          className="swiper-button-prev"
          style={
            {
              left: "-20px",
              color: "white",
            } as React.CSSProperties
          }
        />
        {/* Swiper component - Uses modules to register each feature, effect=flip for flipping. allows a grabCursor when hovering over it. Pagination dots at the bottom for navigation. Navigation has arrows left and right. Adding space between, same as in CSS. Slides per view allows only 2 in view. Uses custom navigation with nextEl and prevEl */}
        <Swiper
          modules={[EffectFlip, Pagination, Navigation]}
          effect="flip"
          grabCursor={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          loop={true}
          className="rounded"
        >
          {/* Loops the array into swiper slides */}
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="flex flex-col items-center">
                <div className="relative h-80">
                  <Image
                    src={book.thumbnail_src}
                    alt={book.name}
                    width={200}
                    height={300}
                    className="rounded-2xl"
                  />
                </div>
                <h3>{book.name}</h3>
                <p>{book.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
