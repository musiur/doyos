import HeroSection from '@/components/molecules/hero-section';
import MostPopularCard from '@/components/molecules/most-popular-card';
import SectionHead from '@/components/molecules/section-head';
import React from 'react';
import HowToGetStarted from '../../how-to-get-started-section';

const FundingWithdrawal = () => {
    return (
        <div>
            <HeroSection
                backgroundUrl="/images/pages/trading-and-tools/FundingWithdrawalBanner.png"
                heading={<>Funding & Withdrawal</>}
            />


            <MostPopularCard
                image="/images/pages/trading-and-tools/funding-withdrawal.png"
                heading={
                    <>
                        Funding & Withdrawal

                    </>
                }
                paragraphs={[
                    <>
                        Seamless, instant, stress-free.&nbsp;
                    </>,

                ]}
                imageLeft={false}
                buttonList={[

                    { id: 1, text: "Start Trading", link: "/", variant: "secondary" },
                ]}
            />
            <MostPopularCard
                image="/images/pages/trading-and-tools/funding-withdrawal-2.png"
                heading={
                    <>
                        Fund Your Account via Our Secure Doyos Wallet
                    </>
                }
                paragraphs={[
                    <>
                        The convenient investment tool that fast-tracks your place in the KYC queue, helps manage your risk, and streamlines your account funding process.&nbsp;
                    </>,

                ]}
                imageLeft={true}

            />

            {/* issues */}
            <SectionHead
                details={{
                    H2: (
                        <>
                            How the &nbsp;
                            <span className="text-secondary">Doyos Wallet</span>&nbsp; Works
                        </>
                    ),
                    p: [
                        <>
                            The Doyos Wallet is an online financial wallet that is automatically created for you as soon as youregister for a live trading account.
                        </>,
                        <>
                            You can fund it immediately after you register using your choice of the funding methods listed below.
                        </>
                    ],
                }}

            />

            <HowToGetStarted />



        </div>
    );
};

export default FundingWithdrawal;