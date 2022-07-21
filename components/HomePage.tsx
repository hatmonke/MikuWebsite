/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Prose from "../components/Prose";
import Minting from "../components/Minting";
import Tokenomics from "../components/Tokenomics";
import projectConfig from "../config/projectConfig";
import NextLink from "./NextLink";

import About from '../components/About';

const bigMiku = "https://i.imgur.com/dJ9oSPp.png";

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto max-w-[90ch] text-center">
        <picture>
          <source srcSet={bigMiku} />
          <img
            src={bigMiku}
            alt={projectConfig.projectName}
            className="max-w-full mx-auto"
          />
        </picture>
        <div className="block mx-auto pt-6 font-['Boge']">
          {" "}
          <NextLink href="https://poocoin.app/tokens/0x73419de8e3e26a17e0e6b0436e29dd04a25b061d">
            {" "}
            <button className="mr-7 bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl shadow-2xl text-xl w-[130px]">CHART</button>
            
          </NextLink>
          <NextLink href="https://poocoin.app/tokens/0x73419de8e3e26a17e0e6b0436e29dd04a25b061d">
            {" "}
            <button className="ml-7 bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl shadow-2xl text-xl w-[130px]">BUY</button>
            
          </NextLink>
        </div>
      </div>

      <div className="py-48">
        <div className="max-w-[90%] mx-auto px-4">
          <About />
        </div>
      </div>

      <div className="py-48">
      <div className="max-w-[90%] mx-auto px-4">
          <Tokenomics />
        </div>
      </div>

    </>
  );
};

export default Home;
