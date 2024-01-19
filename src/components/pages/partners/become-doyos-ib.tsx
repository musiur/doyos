import MostPopularCard from "@/components/molecules/most-popular-card";
import HowItWorks from "../how-it-works-section";

const BecomeDoyosIB = () => {
    return (
        <main>
            <MostPopularCard
                image="/images/pages/partners/partners-hero-img.png"
                heading={
                    <>

                        Become a &nbsp;
                        <span className="h2-span text-secondary">Doyos</span>
                        &nbsp;IB
                    </>
                }
                paragraphs={[
                    <>
                        Earn up to $8 per lot with every active trader you introduce.&nbsp;
                    </>,

                ]}
                imageLeft={false}
                buttonList={[
                    { id: 1, text: "Start Now", link: "/", variant: "secondary" },

                ]}
            />
            {/* how it works section */}
            <div className="">
                <HowItWorks />
            </div>
        </main>
    )
}
export default BecomeDoyosIB;