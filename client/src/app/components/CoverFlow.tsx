"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Book } from "../types/books";
import Image from "next/image";

interface BookSliderProps {
  books: Book[];
}

export default function BookSliderCoverFlow({ books }: BookSliderProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-white text-center text-nowrap flex justify-center mb-10">
        Book Slider with Coverflow
      </h2>
      <Swiper
        effect={"coverflow"}
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
          <SwiperSlide key={book.id} className="bg-center bg-cover w-[200px]">
            <Image
              src={book.thumbnail_src}
              alt={book.name}
              width={200}
              height={300}
              className="block w-[100%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
