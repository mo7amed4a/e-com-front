"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Slide {
  image: string;
  title1: string;
  title2?: string;
  color?: string;
  description?: string;
}

const slidesData:Slide[] = [
  {
    image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title1: "title one",
    title2: "description one",
  },
  {
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title1: "title two",
    title2: "description two",
  },
  {
    image: "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title1: "title three",
    title2: "description three",
  },
]

export default function Hero({ slides=slidesData, align}: { slides?: Slide[], align?: "center" | "start" | "end" }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      // navigation
      pagination={{ clickable: true }}
      className="w-full h-auto"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[575px] text-center text-white overflow-hidden font-roboto">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt="Background Image"
                width={1920}
                height={1080}
                className="object-cover object-center w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-50" />
            </div>
            <div className={`relative z-10 flex flex-col justify-center items-center h-full md:space-y-5 container mx-auto text-center`}>
              <h1 className={`text-3xl md:text-5xl font-bold leading-tight mb-4 flex flex-col ${align === "center" || slide?.color && "!flex-row-reverse gap-x-2"}`}>
                <span className="text-[f2f2f2]" style={{ color: slide?.color }}>{slide.title1}</span>
                {slide.title2 && <span className="text-[f2f2f2] text-3xl">{slide.title2}</span>}
              </h1>
              {slide.description && (
                <p className={`text-lg md:text-xl text-gray-100 mb-8 font-roboto ${align === "center" && "lg:w-2/4"}`}>{slide.description}</p>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}