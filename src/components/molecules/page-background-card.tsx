// PageBannerCard.jsx
import React, { ReactNode } from "react";
import clsx from "clsx";


type PageBannerCardProps = {
    backgroundUrl: String;
    heading: ReactNode;
};

const PageBannerCard = ({
    backgroundUrl = "/images/pages/trading-and-tools/market/ForexTradingBanner.png",
    heading = <h1 className="text-white">Title Here</h1>

}: PageBannerCardProps) => {

    return (

        <section className={clsx(`bg-cover bg-center section bg-[url("${backgroundUrl}")]`)}>
            <div className="container flex items-center h-full">
                <h1>{heading}</h1>
            </div>
        </section>
    );
};

export default PageBannerCard;

<section className="bg-[url('/images/pages/trading-and-tools/market/ForexTradingBanner.png')] bg-cover bg-center section">
    <div className="container flex items-center h-full">
        <h1 className="text-white">Forex Trading</h1>
    </div>
</section>