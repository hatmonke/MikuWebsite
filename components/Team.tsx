/* eslint-disable @next/next/no-img-element */
import { FaPaperPlane } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";


export default function tokenomics() {
  const hatMonke = "https://i.imgur.com/3QWwgQf.jpg";
  const miku = "https://i.imgur.com/qu9fc3K.png";
  const dezigner = "https://i.imgur.com/dDeMCjp.jpg";
  const soln = "https://i.imgur.com/vLEF7rT.png";
  return (
    <>
      <div className="block mx-auto">
        <h2 className="text-3xl sm:text-6xl mb-4 text-center pb-4 text-black">The team</h2>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper max-w-[50vw] rounded-3xl"
      >
        <SwiperSlide>
        <div className="bg-white bg-opacity-70 p-8 px-4">
            <picture>
              <source srcSet={miku} />
              <img
                src={miku}
                alt="miku"
                className="rounded-full max-h-56 mx-auto"
              />
            </picture>
            <div className="flex">
              <FaPaperPlane className="mr-4 h-10 w-10" />
              <div>
                <p className="text-2xl font-bold">@KamadoGemCalls</p>
                <p className="text-base -mt-6">Community Manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white bg-opacity-70 p-8 px-4">
            <picture>
              <source srcSet={miku} />
              <img
                src={miku}
                alt="miku"
                className="rounded-full max-h-56 mx-auto"
              />
            </picture>
            <div className="flex">
              <FaPaperPlane className="mr-4 h-10 w-10" />
              <div>
                <p className="text-2xl  font-bold">@NobuOsamu</p>
                <p className="text-base -mt-6">Developer & Marketing</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white bg-opacity-70 p-8 px-4">
            <picture>
              <source srcSet={miku} />
              <img
                src={miku}
                alt="miku"
                className="rounded-full max-h-56 mx-auto"
              />
            </picture>
            <div className="flex">
              <FaPaperPlane className="mr-4 h-10 w-10" />
              <div>
                <p className="text-2xl  font-bold">@MartinClvrd</p>
                <p className="text-base -mt-6">Head Product Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className="bg-white bg-opacity-70 p-8 px-4">
            <picture>
              <source srcSet={hatMonke} />
              <img
                src={hatMonke}
                alt="hatMonke"
                className="rounded-full max-h-56 mx-auto"
              />
            </picture>
            <div className="flex">
              <FaPaperPlane className="mr-4 h-10 w-10" />
              <div>
                <p className="text-2xl  font-bold">@HatMonke</p>
                <p className="text-base -mt-6">Product</p>
              </div>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white bg-opacity-70 p-8 px-4">
            <picture>
              <source srcSet={soln} />
              <img
                src={soln}
                alt="soln"
                className="rounded-full max-h-56 mx-auto"
              />
            </picture>
            <div className="flex">
              <FaPaperPlane className="mr-4 h-10 w-10" />
              <div>
                <p className="text-2xl  font-bold">@Cryp_Soln</p>
                <p className="text-base -mt-6">Marketing Helper</p>
              </div>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="bg-white rounded-3xl bg-opacity-70 p-8 px-4">
            <picture>
              <source srcSet={dezigner} />
              <img
                src={dezigner}
                alt="dezigner"
                className="rounded-full max-h-56 mx-auto"
              />
            </picture>
            <div className="flex">
              <FaPaperPlane className="mr-4 h-10 w-10" />
              <div>
                <p className="text-2xl  font-bold">@DezignerCrypto</p>
                <p className="text-base -mt-6">Graphic & Designer</p>{" "}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
