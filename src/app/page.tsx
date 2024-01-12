import AccountTypes from "@/components/pages/home/account-types";
import DoyosAcademy from "@/components/pages/home/doyos-acamedy";
import HomeHero from "@/components/pages/home/hero";
import Instruments from "@/components/pages/home/instruments";
import JoinBanner from "@/components/pages/home/join-banner";
import MarketUpdate from "@/components/pages/home/market-update";
import NewsUpdates from "@/components/pages/home/news-updates";
import PaymentMethods from "@/components/pages/home/payment-methods";
import TradingPlatform from "@/components/pages/home/trading-platform";
import WhatWeProvide from "@/components/pages/home/what-we-provider";

const Home = () => {

  return (
    <>
      <HomeHero />
      <WhatWeProvide />
      <MarketUpdate />
      <Instruments />
      <JoinBanner />
      <TradingPlatform />
      <DoyosAcademy />
      <PaymentMethods />
      <AccountTypes />
      <NewsUpdates />
    </>
  );
};

export default Home;
