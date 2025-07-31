"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Book } from "../types/books";
import Image from "next/image";

interface BookSliderProps {
  books: Book[];
}

export default function BookSliderPaginationProgress({
  books,
}: BookSliderProps) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-white text-center text-nowrap flex justify-center mb-10">
        Book Slider with Coverflow
      </h2>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        slidesPerView={3}
        loop={true}
        modules={[Pagination, Navigation]}
        className="w-[100%]"
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
    </div>
  );
}
