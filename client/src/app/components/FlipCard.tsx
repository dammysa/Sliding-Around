"use client";
// Swiper requires Client to function

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, EffectFlip } from "swiper/modules";
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
        <h2 className="text-2xl font-bold text-white text-center text-nowrap flex justify-center mb-10 mt-1">
          Book Slider with Flip
        </h2>

        <div
          className="swiper-button-next"
          style={
            {
              right: "-20px",
              color: "#05df72",
            } as React.CSSProperties
          }
        />
        <div
          className="swiper-button-prev"
          style={
            {
              left: "-20px",
              color: "#05df72",
            } as React.CSSProperties
          }
        />
        {/* Swiper component - Uses modules to register each feature, effect=flip for flipping. allows a grabCursor when hovering over it. Pagination dots at the bottom for navigation. Navigation has arrows left and right. Adding space between, same as in CSS. Slides per view allows only 2 in view. Uses custom navigation with nextEl and prevEl */}
        <Swiper
          modules={[A11y, EffectFlip, Pagination, Navigation]}
          effect="flip"
          grabCursor={true}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous book",
            nextSlideMessage: "Next book",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          keyboard={{ enabled: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          loop={true}
          className="rounded"
        >
          <div className="custom-pagination relative flex items-center justify-center top-0 z-10 right-0.5" />
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
                <h3 className="text-1xl font-bold text-white text-center text-nowrap flex justify-center">
                  {book.name}
                </h3>
                <p className="text-1xl font-bold text-white text-center text-nowrap flex justify-center">
                  {book.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
