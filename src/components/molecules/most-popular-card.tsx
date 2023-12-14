import Image from 'next/image';
import React, { ReactElement, ReactNode } from 'react';

const MostPopularCard = ({
    sectionImage = <><Image src="/images/pages/trading-and-tools/market/popular-trade.png" alt="most popular trade image"
        width={600} height={493} /></>,
    highlighter = 'Trade The Most Popular',
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
    highlighter?: string;
    heading?: ReactElement;
    paragraphs?: ReactNode[];
}) => {
    return (
        <div className="container flex flex-col-reverse lg:flex-row items-center justify-between py-[70px]">
            <div className="text">
                {highlighter ? (
                    <p className="font-bold text-[27px] md:text-[35px] lg:text-[48px] max-w-[664px] leading-[55px] py-7">
                        {highlighter} {heading}
                    </p>
                ) : null}
                {paragraphs.length
                    ? paragraphs.map((item: ReactNode, index: number) => (
                        <p key={index} className="max-w-[752px]  pb-[22px]">
                            {item}
                        </p>
                    ))
                    : null}
            </div>
            <div className="image">{sectionImage}</div>
        </div>
    );
};

export default MostPopularCard;
