import { Progress } from "antd";
import React from "react";

export default function tokenomics() {
  return (
    <>

        <div className="bg-[url('https://i.imgur.com/kRzkWNN.png')] text-center p-4 py-14 font-medium bg-cover font-['Bellow'] bg-no-repeat bg-center rounded-3xl bg-opacity-90 mx-auto max-w-screen h-screen">
        <div className="block mx-auto">
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 pb-8 text-black">
          TOKENOMICS
        </h2>
      </div>
          <p className="text-3xl text-center">
            Supply: 1 Trillion $MIKU
            <p>8% fee in each transaction, for:</p>
          </p>
          <div className="block max-w-max mx-auto">
            <div className="flex">            <div>
              <Progress type="circle" percent={25} className='opacity-70' />
              <p className="text-3xl">Auto LP</p>
            </div>

            <div>
              <Progress type="circle" percent={25} className='opacity-70' />
              <p className="text-3xl">Product Development</p>
            </div>

            <div>
              <Progress type="circle" percent={50} className='opacity-70'   />
              <p className="text-3xl">Marketing</p>
            </div></div>
          </div>
        </div>

    </>
  );
}
