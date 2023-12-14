import MostPopularCard from "@/components/molecules/most-popular-card";
import Image from "next/image";

const ForexTrading = () => {
    return (
        <div>
            <div className="bg-[url('/images/pages/trading-and-tools/market/ForexTradingBanner.svg')] bg-cover bg-center h-[317px]">
            </div>
            <br />
            {/* most popular forex trading content card */}
            <MostPopularCard />
            {/* <div className="container  flex flex-col-reverse lg:flex-row items-center justify-between py-[70px]">
                <div className="text">
                    <h1 className="font-bold text-[27px] md:text-[35px] lg:text-[48px] max-w-[664px] leading-[55px] pt-5" >
                        Trade The Most Popular <span className="action-span">Forex Trading Pairs
                        </span> with Low Spreads
                    </h1>
                    <p className="max-w-[679px] md:pt-[50px] pb-[22px]">Trade Forex with a globally recognized broker. Buy and sell CFDs through our bespoke MetaTrader 5 trading platform, and benefit from the award-winning multilingual customer support available 24/7.</p>
                    <p className="max-w-[752px]">
                        Some believe you must choose between an online broker and a wealth management firm. At DOYOS, you don&apos;t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.
                    </p>
                </div>
                <div className="image">
                    <Image
                        src="/images/pages/trading-and-tools/market/popular-trade.png"
                        alt="most popular trade image"
                        width={600}
                        height={493}
                    />
                </div>
            </div> */}
        </div>
    );
};

export default ForexTrading;