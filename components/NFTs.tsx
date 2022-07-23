/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
const nft1 = "https://i.imgur.com/26i7uq3.png";
const nft2 = "https://i.imgur.com/RTPGgF0.png";
const nft3 = "https://i.imgur.com/z49X01i.png";
const nft4 = "https://i.imgur.com/pBa0EAs.png";
const nft5 = "https://i.imgur.com/EU7GkAD.png";

export default function NFT() {
  return (
    <>
      <div className="block mx-auto">
        <h2 className="text-3xl sm:text-6xl mb-4 text-center pb-4 text-black">
          NFTs
        </h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper max-w-[70vw] sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[25vw] rounded-3xl"
      >
        <SwiperSlide>
        <div className="bg-indigo-400 rounded-3xl bg-opacity-60 border-gray-300 border-opacity-50 border-4 p-4">
          <picture>
            <source srcSet={nft1} />
            <img src={nft1} alt="nft1" className="max-w-[70vw] sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[25vw]" />
          </picture>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-indigo-400 rounded-3xl bg-opacity-60 border-gray-300 border-opacity-50 border-4 p-4">
          <picture>
            <source srcSet={nft2} />
            <img src={nft2} alt="nft2" className="max-w-[70vw] sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[25vw]" />
          </picture>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-indigo-400 rounded-3xl bg-opacity-60 border-gray-300 border-opacity-50 border-4 p-4">
          <picture>
            <source srcSet={nft3} />
            <img src={nft3} alt="nft3" className="max-w-[70vw] sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[25vw]" />
          </picture>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-indigo-400 rounded-3xl bg-opacity-60 border-gray-300 border-opacity-50 border-4 p-4">
          <picture>
            <source srcSet={nft4} />
            <img src={nft4} alt="nft4" className="max-w-[70vw] sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[25vw]" />
          </picture>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-indigo-400 rounded-3xl bg-opacity-60 border-gray-300 border-opacity-50 border-4 p-4">
          <picture>
            <source srcSet={nft5} />
            <img src={nft5} alt="nft5" className="max-w-[70vw] sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[25vw]" />
          </picture>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
