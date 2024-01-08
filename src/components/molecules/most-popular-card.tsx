import Image from "next/image";
import React, { ReactElement, ReactNode } from "react";

const MostPopularCard = ({
  sectionImage = (
    <>
      <Image
        src="/images/pages/trading-and-tools/market/popular-trade.png"
        alt="most popular trade image"
        width={600}
        height={493}
      />
    </>
  ),

  heading = (
    <span className="action-span">Forex Trading Pairs with Low Spreads</span>
  ),
  paragraphs = [
    <>
      Trade Forex with a globally recognized broker. Buy and sell CFDs through
      our bespoke MetaTrader 5 trading platform, and benefit from the
      award-winning multilingual customer support available 24/7.
    </>,
    <>
      Some believe you must choose between an online broker and a wealth
      management firm. At DOYOS, you don&apos;t need to compromise. Whether you
      invest on your own, with an advisor, or a little of both — we can support
      you.
    </>,
  ],
}: {
  sectionImage?: ReactElement;
  heading?: ReactElement;
  paragraphs?: ReactNode[];
}) => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2  py-[70px]">
      <div>
        <h2>
          {heading}
        </h2>
        <div className="flex flex-col gap-[22px]">
          {paragraphs.length
            ? paragraphs.map((item: ReactNode, index: number) => {
              return (
                <p key={index} className="max-w-[752px] py-[22px]">
                  {item}
                </p>
              );
            })
            : null}
        </div>


      </div>
      {sectionImage ? <div className="image">{sectionImage}</div> : null}
    </div>
  );
};

export default MostPopularCard;
