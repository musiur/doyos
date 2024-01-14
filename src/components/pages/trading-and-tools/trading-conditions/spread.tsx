import CheckTik from "@/components/icons/check-tik-icon";
import FeatureCard from "@/components/molecules/feature-card";
import HeroSection from "@/components/molecules/hero-section";
import MostPopularCard from "@/components/molecules/most-popular-card";
import HowToGetStarted from "../../how-to-get-started-section";

const Spread = () => {
    return (
        <div>
            <HeroSection
                backgroundUrl="/images/pages/trading-and-tools/SpreadBanner.png"
                heading={<>Spread</>}
            />


            <MostPopularCard
                image="/images/pages/trading-and-tools/spread-swap.png"
                heading={
                    <>

                        Spreads, Swaps & Commissions.
                    </>
                }
                paragraphs={[
                    <>
                        In keeping with our commitment to the highest ethical standards, Doyos offers full transparency regarding fees, execution and the company&apos;s pricing model.&nbsp;
                    </>,

                ]}
                imageLeft={false}
                buttonList={[

                    { id: 1, text: "Start Trading", link: "/", variant: "secondary" },
                ]}
            />


            {/* issues >> need to update icons and texts */}
            <div className="get-gradient section">
                <h2 className="text-center pt-[20px] pb-[60px]">Spreads, Swaps & Commissions</h2>
                <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 place-items-center gap-[50px]">
                    {CardData.map((item) => {
                        return (
                            <FeatureCard key={item.id} details={{ ...item, steps: false }} />
                        );
                    })}
                </div>

            </div>

            {/* Spreads, Commissions and Fees table here >>> issues */}

            <HowToGetStarted />
        </div>
    )
}
export default Spread;

const CardData = [
    {
        id: 1,
        title: "Multi-asset Trading",
        text: "Trade over 400 CFDs including Forex pairs, Stocks, Indices, Commodities,and Cryptocurrencies.",
        icon: <CheckTik className="" />,
    },
    {
        id: 2,
        title: "Flexible Trading",
        text: "Gain more control over your trades with different types of orders, modes of execution, and market depth.",
        icon: <CheckTik className="" />,
    },
    {
        id: 3,
        title: "Integrated Tools",
        text: "Add plugins including Doyos’s Trading Central, Elliott Wave indicator and VPS service.",
        icon: <CheckTik className="" />,
    },
    {
        id: 4,
        title: "Join a Community",
        text: "Share ideas, strategies, and custom indicators with a community of other traders and developers.",
        icon: <CheckTik className="" />,
    },
    {
        id: 5,
        title: "Advanced Tools",
        text: "Spot the most promising trade opportunities with 38+ preinstalled technical indicators and 44 analytical charting tools.",
        icon: <CheckTik className="" />,
    },
    {
        id: 6,
        title: "Custom Indicators",
        text: "Develop and back test your own indicators and EAs to perform any trading operation.",
        icon: <CheckTik className="" />,
    },
    {
        id: 7,
        title: "Track Your Performance",
        text: "Improve your strategy by tracking your performance with advanced reports and daily statements.",
        icon: <CheckTik className="" />,
    },
    {
        id: 8,
        title: "Automate Your Trades",
        text: "Improve your strategy by tracking your performance with advanced reports and daily statements.",
        icon: <CheckTik className="" />,
    },
    {
        id: 8,
        title: "Custom Indicators",
        text: "Improve your strategy by tracking your performance with advanced reports and daily statements.",
        icon: <CheckTik className="" />,
    },
];