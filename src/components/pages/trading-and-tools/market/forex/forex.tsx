import MostPopularCard from "@/components/molecules/most-popular-card";
import Image from "next/image";
// import Image from "next/image";

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
        highlighter="Hello"
        heading={<>Hello</>}
        paragraphs={[<>Hello</>]}
      />
    </div>
  );
};

export default ForexTrading;
