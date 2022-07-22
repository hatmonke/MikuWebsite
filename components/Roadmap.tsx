import { Timeline } from "antd";
import React from "react";

export default function roadmap() {
  return (
    <>
      <div className="block mx-auto">
        <h2 className="text-3xl sm:text-6xl mb-4 text-center pb-8 text-white">Roadmap</h2>
        <p className="font-bold text-base sm:text-lg lg:text-xl text-center pb-8">
          We plan to make ourselves known around the Crypto Space and solidify
          our presence as one of the go-to-top token in the Network!
        </p>
      </div>
      <Timeline>
        <Timeline.Item color='white'>
          <div className="bg-black rounded-3xl bg-opacity-70 px-8 pt-4 mb-2 w-full text-white">
            <h3 className="text-2xl pb-2 text-white">LAUNCH AND MARKETING</h3>
            <p className="text-lg sm:text-2xl font-bold pb-3">
              We will launch the $MIKU token and reach as far as we can to
              ensure we can all arrive to moon and beyond together!
            </p>
          </div>
        </Timeline.Item>

        <Timeline.Item color='white'>
          <div className="bg-black rounded-3xl bg-opacity-70 px-8 pt-4 mb-2 w-full text-white">
            <h3 className="text-2xl pb-2 text-white">MIKUSWAP</h3>
            <p className="text-lg sm:text-2xl font-bold pb-3">
              Soon after $MIKU launch, We will relase our Swap platform
            </p>
          </div>
        </Timeline.Item>

        <Timeline.Item color='white'>
          <div className="bg-black rounded-3xl bg-opacity-70 px-8 pt-4 mb-2 w-full text-white">
            <h3 className="text-2xl pb-2 text-white">MIKULOCK</h3>
            <p className="text-lg sm:text-2xl font-bold pb-3">
              We will apply to these coin trackers as soon as possible
            </p>
          </div>
        </Timeline.Item>

        <Timeline.Item color='white'>
          <div className="bg-black rounded-3xl bg-opacity-70 px-8 pt-4 mb-2 w-full text-white">
            <h3 className="text-2xl pb-2 text-white">NFT COLLECTION</h3>
            <p className="text-lg sm:text-2xl font-bold pb-3">
              A collection of 10,000 Unique PFP NFTs that our holders can
              identify themselves
            </p>
          </div>
        </Timeline.Item>

        <Timeline.Item color='white'>
          <div className="bg-black rounded-3xl bg-opacity-70 px-8 pt-4 mb-2 w-full text-white">
            <h3 className="text-2xl pb-2 text-white">MORE(?)</h3>
            <p className="text-lg sm:text-2xl font-bold pb-3">
              The future is unclear, but as we grow we may add more utilities
              and create event to keep our community engaged and active!
            </p>
          </div>
        </Timeline.Item>
      </Timeline>
    </>
  );
}
