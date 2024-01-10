import React from "react";

const InterestedAndChoosePlatform = () => {
  return (
    <div>
      <div className="">
        <div>
          <div className="text-center">
            <h2>Interested in Other Markets?</h2>
            <p className="pt-[30px]">
              Doyos offers access to tier-1 bank liquidity across a large
              selection of trading instruments including
            </p>
          </div>

          <div className="bg-[url('/images/market-and-platform-bg.png')] bg-cover bg-center section">
            <div className=" section container icon-cards grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] md:gap-[100px]  px-[10px]"></div>

            {/* choose platform Section */}
            <div className="text-center">
              <h2>Choose Your Platform</h2>
              <p className="pt-[30px]">
                Trade the world&apos;s most advanced platforms, anywhere, any
                time and on any device, without compromising on speed,
                precision, or execution.
              </p>
            </div>

            <div className="section container flex justify-center items-center pt-[50px] px-[10px] place-items-center gap-[50px]"></div>
          </div>
        </div>
      </div>

      <div className="">
        <div className=" container icon-cards grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] md:gap-[100px]  px-[10px]"></div>

        <div className="text-center">
          <h2>Choose Your Platform</h2>
          <p className="pt-[30px]">
            Trade the world&apos;s most advanced platforms, anywhere, any time
            and on any device, without compromising on speed, precision, or
            execution.
          </p>
        </div>

        <div className=" container flex justify-center items-center pt-[50px] px-[10px] place-items-center gap-[50px]"></div>
      </div>
    </div>
  );
};

export default InterestedAndChoosePlatform;
