export default function tokenomics() {
  return (
    <>
      <div className="block mx-auto">
        <h2 className="text-3xl sm:text-6xl mb-4 text-center pb-8">
          TOKENOMICS
        </h2>
        <p className="text-3xl font-bold text-center pb-8">
          1,000,000,000,000 Total $MIKU Supply
          <p>8% Total Tax on Transasction</p>
        </p>
      </div>
      <div className="block  sm:ml-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="bg-black rounded-3xl bg-opacity-70 p-12 px-4 w-80 h-80">
            <h3 className="text-6xl mt-16">2%</h3>
            <p className="text-2xl font-bold">Liquidity Pools</p>
          </div>
          <div className="bg-black rounded-3xl bg-opacity-70 p-12 px-4 w-80 h-80">
            <h3 className="text-6xl mt-16">2%</h3>
            <p className="text-2xl font-bold">Product Development</p>
          </div>
          <div className="bg-black rounded-3xl bg-opacity-70 p-12 px-4 w-80 h-80">
            <h3 className="text-6xl mt-16">4%</h3>
            <p className="text-2xl font-bold">Marketing</p>
          </div>
        </div>
      </div>
    </>
  );
}
