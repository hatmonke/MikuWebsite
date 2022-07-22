/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import Twitter from "../components/Twitter";
import projectConfig from "../config/projectConfig";
import NextLink from "./NextLink";
import Chart from "../components/Chart";
import Prose from "../components/Prose";
import { Swiper, SwiperSlide } from "swiper/react";
import Roadmap from "../components/Roadmap";

import { Pagination } from "swiper";

import About from "../components/About";

const bigMiku = "https://i.imgur.com/dJ9oSPp.png";

const newMiku = "https://i.imgur.com/6mqFt63.png";

const mikuText = "https://i.imgur.com/5yY7Tzj.png";

const Home: NextPage = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="hidden md:flex -mt-18">
            <div className="mx-auto">
              <picture>
                <source srcSet={newMiku} />
                <img
                  src={newMiku}
                  alt={projectConfig.projectName}
                  className="max-h-[80vh]"
                />
              </picture>
            </div>
            <div className="mx-auto">
              <picture>
                <source srcSet={mikuText} />
                <img
                  src={mikuText}
                  alt={projectConfig.projectName}
                  className="max-h-[80vh]"
                />
              </picture>
            </div>
          </div>
          <div className="flex md:hidden">
            <Prose>
              <About />
            </Prose>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="py-24" id="Tokenomics">
            <div className="max-w-[90%] mx-auto px-4 -mt-14">
              <Tokenomics />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="py-24" id="Roadmap">
            <div className="max-w-[90%] mx-auto px-4 -mt-14">
              <Roadmap />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="py-24">
            <div className="max-w-[90%] mx-auto px-4">
              <Team />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="py-24">
            <div className="max-w-[90%] mx-auto px-4">
              <Chart />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="py-24">
            <div className="max-w-[90%] mx-auto px-4">
              <Twitter />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
