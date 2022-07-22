export default function Chart() {
  return (
    <>
      <h2 className="text-6xl mb-4 text-center text-black">Chart</h2>
      <div className="space-y-4 bg-white rounded-3xl bg-opacity-50 p-2">
        <div>
        <iframe src="https://charts.bogged.finance/?c=bsc&t=0x73419De8E3E26A17e0E6b0436e29dd04A25B061D&embed=1" className='h-[70vh]' width="100%" ></iframe> 
        </div>
      </div>
    </>
  );
}
