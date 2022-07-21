/* eslint-disable @next/next/no-img-element */
import { FaPaperPlane } from "react-icons/fa";

export default function tokenomics() {
  const hatMonke = "https://i.imgur.com/3QWwgQf.jpg";
  const miku = "https://i.imgur.com/qu9fc3K.png";
  const dezigner = "https://i.imgur.com/dDeMCjp.jpg";
  const soln = "https://i.imgur.com/vLEF7rT.png";
  return (
    <>
      <div className="block mx-auto">
        <h2 className="text-3xl sm:text-6xl mb-4 text-center pb-8">The team</h2>
      </div>
      <div className="block sm:ml-14 md:ml-28">
        <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-8 text-left">
          <div className="bg-black rounded-3xl bg-opacity-70 p-8 px-4  sm:w-80 sm:h-80">
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
                <p className="text-2xl  font-bold">@KamadoGemCalls</p>
                <p className="text-base">Community Manager</p>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-3xl bg-opacity-70 p-8 px-4  sm:w-80 sm:h-80">
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
                <p className="text-base">Developer & Marketing</p>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-3xl bg-opacity-70 p-8 px-4  sm:w-80 sm:h-80">
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
                <p className="text-base">Head Product Development</p>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-3xl bg-opacity-70 p-8 px-4  sm:w-80 sm:h-80">
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
                <p className="text-base">Product</p>
              </div>{" "}
            </div>
          </div>

          <div className="bg-black rounded-3xl bg-opacity-70 p-8 px-4  sm:w-80 sm:h-80">
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
                <p className="text-base">Marketing Helper</p>
              </div>{" "}
            </div>
          </div>

          <div className="bg-black rounded-3xl bg-opacity-70 p-8 px-4  sm:w-80 sm:h-80">
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
                <p className="text-base">Graphic & Designer</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
