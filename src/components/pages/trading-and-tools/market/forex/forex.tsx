import MostPopularCard from "@/components/molecules/most-popular-card";
import Image from "next/image";

const ForexTrading = () => {
  return (
    <div>
      <div className="bg-[url('/images/pages/trading-and-tools/market/ForexTradingBanner.svg')] bg-cover bg-center h-[317px]"></div>

      <MostPopularCard
        sectionImage={
          <Image
            src="/images/pages/trading-and-tools/market/popular-trade.png"
            alt="most popular trade image"
            width={600}
            height={493}
          />
        }
        heading={
          <>
            Trade The Most Popular&nbsp;
            <span className="h2-span text-secondary">Forex Trading Pairs</span>
            &nbsp; with Low Spreads
          </>
        }
        paragraphs={[
          <>
            Trade Forex with a globally recognized broker. Buy and sell CFDs
            through our bespoke MetaTrader 5 trading platform, and benefit from
            the award-winning multilingual customer support available
            24/7,&nbsp;
            <br />
            &nbsp;
            <>
              Some believe you must choose between an online broker and a wealth
              management firm. At DOYOS, you don&apos;t need to compromise.
              Whether you invest on your own, with an advisor, or a little of
              both — we can support you.
            </>
          </>,
        ]}
      />
    </div>
  );
};

export default ForexTrading;
