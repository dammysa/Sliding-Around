"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import { Book } from "../types/books";
import Image from "next/image";

interface BookSliderProps {
  books: Book[];
}

export default function BookSliderCards({ books }: BookSliderProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-white text-center text-nowrap flex justify-center mb-10 mt-1">
        Book Slider with Cards
      </h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[30%]"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id} className="bg-center bg-cover w-[200px]">
            <Image
              className="block w-[100%]"
              src={book.thumbnail_src}
              alt={book.name}
              width={200}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
