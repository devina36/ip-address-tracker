export default function Home() {
  return (
    <main className="min-h-screen max-w-[1440px] m-auto">
      <div className="bg-desktop h-[280px] w-full bg-no-repeat bg-auto flex justify-center">
        <div className=" relative max-h-full mt-[30px] flex flex-col items-center">
          <h1 className="text-white text-3xl font-medium tracking-wide">
            IP Address Tracker
          </h1>
          <div className="mt-[28px] flex justify-center items-center w-[558px]">
            <input
              placeholder="Search for any IP address or domain"
              className="w-[500px] bg-white h-[58px] text-lg rounded-l-xl px-[30px]"
            />
            <button className=" size-[58px] flex justify-center items-center bg-black rounded-r-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>

          <div className="h-fit absolute bottom-0 translate-y-1/2">
            <div className="bg-white flex justify-center gap-[60px] font-bold py-[35px] pl-[30px] rounded-xl text-black">
              <div>
                <h3 className="uppercase text-sm tracking-wide mb-[10px]">
                  IP Address
                </h3>
                <p className="text-[26px] leading-[1.15] w-[185px] font-semibold tracking-tight">
                  192.212.174.101
                </p>
              </div>
              <div className="pl-8 border-l-[0.5px] border-black">
                <h3 className="uppercase text-sm tracking-wide mb-[10px]">
                  Location
                </h3>
                <p className="text-[26px] leading-[1.15] w-[185px] font-semibold tracking-tight">
                  Brooklyn, NY 10001
                </p>
              </div>
              <div className="pl-8 border-l-[0.5px] border-black">
                <h3 className="uppercase text-sm tracking-wide mb-[10px]">
                  Timezone
                </h3>
                <p className="text-[26px] leading-[1.15] w-[185px] font-semibold tracking-tight">
                  UTC -05:00
                </p>
              </div>
              <div className="pl-8 border-l-[0.5px] border-black pr-[60px]">
                <h3 className="uppercase text-sm tracking-wide mb-[10px]">
                  ISP
                </h3>
                <p className="text-[26px] leading-[1.15] w-[185px] font-semibold tracking-tight">
                  SpaceX Starlink
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">{/* map */}</div>
    </main>
  );
}
