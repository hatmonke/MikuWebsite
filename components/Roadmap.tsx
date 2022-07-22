import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function roadmap() {
  return (
    <>
      <div className="block mx-auto">
        <h2 className="text-3xl sm:text-6xl mb-4 text-center pb-4 text-black">
          Roadmap
        </h2>
      </div>
      <div className="pt-[14ch] mx-auto bg-center bg-no-repeat bg-cover h-[75ch] w-[65ch] text-center rounded-xl font-['Bellow'] bg-[url('https://i.imgur.com/WSAol03.png')]">
        {" "}
        <Swiper
          navigation={true}
          autoHeight={true}
          direction="vertical"
          className="mySwiper swiper-v max-h-[80%] max-w-prose"
        >
          <SwiperSlide>
            <div className="px-8 pt-4 mb-2 w-full text-black">
              <h3 className="text-2xl pb-2 text-black ">
                LAUNCH AND MARKETING
              </h3>
              <p className="text-lg sm:text-2xl font-bold pb-3">
                We will launch the $MIKU token and reach as far as we can to
                ensure we can all arrive to moon and beyond together!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-8 pt-4 mb-2 w-full text-black">
              <h3 className="text-2xl pb-2 text-black ">
                MIKUSWAP
              </h3>
              <p className="text-lg sm:text-2xl font-bold pb-3">
                Soon after $MIKU launch, We will relase our Swap platform
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="px-8 pt-4 mb-2 w-full text-black">
              <h3 className="text-2xl pb-2 text-black ">
                MIKULOCK
              </h3>
              <p className="text-lg sm:text-2xl font-bold pb-3">
                We will apply to these coin trackers as soon as possible
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-8 pt-4 mb-2 w-full text-black">
              <h3 className="text-2xl pb-2 text-black ">
                NFT COLLECTION
              </h3>
              <p className="text-lg sm:text-2xl font-bold pb-3">
                A collection of 10,000 Unique PFP NFTs that our holders can
                identify themselves
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-8 pt-4 mb-2 w-full text-black">
              <h3 className="text-2xl pb-2 text-black ">
                MORE(?)
              </h3>
              <p className="text-lg sm:text-2xl font-bold pb-3">
                The future is unclear, but as we grow we may add more utilities
                and create event to keep our community engaged and active!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
