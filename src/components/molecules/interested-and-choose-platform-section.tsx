import React from "react";
import CommoditiesCard from "../assets/interested-market-choose-platform/commodities-card";
import StocksCard from "../assets/interested-market-choose-platform/stocks-card";
import ForexCard from "../assets/interested-market-choose-platform/forex-card";
import IndicesCard from "../assets/interested-market-choose-platform/indices-card";
import Mt5Windows from "../assets/interested-market-choose-platform/mt5-windows";
import Mt5Apple from "../assets/interested-market-choose-platform/mt5-apple";
import Mt5Android from "../assets/interested-market-choose-platform/mt5-android";
import Mt5MultiTerminal from "../assets/interested-market-choose-platform/mt5-multi-terminal";

const InterestedAndChoosePlatform = () => {
  return (
    <div className="bg-[url('/images/market-and-platform-bg.png')] bg-cover bg-center">
      <div>
        <div className="text-center">
          <h2>Interested in Other Markets?</h2>
          <p className="pt-[30px]">
            Doyos offers access to tier-1 bank liquidity across a large
            selection of trading instruments including
          </p>
        </div>

        <div className="">
          <div className=" container icon-cards grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] md:gap-[100px]  px-[10px]">
            <ForexCard />
            <CommoditiesCard className="" />
            <StocksCard />clear
            
            <IndicesCard />
          </div>

          <div className="text-center">
            <h2>Choose Your Platform</h2>
            <p className="pt-[30px]">
              Trade the world&apos;s most advanced platforms, anywhere, any time
              and on any device, without compromising on speed, precision, or
              execution.
            </p>
          </div>

          <div className=" container flex justify-center items-center pt-[50px] px-[10px] place-items-center gap-[50px]">
            <Mt5Windows />
            <Mt5Apple />
            <Mt5Android />
            <Mt5MultiTerminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestedAndChoosePlatform;
