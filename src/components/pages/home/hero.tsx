import HeroSectionGraphic from "@/components/assets/home/herosection";
import { Button } from "@/components/ui/button";

const HomeHero = () => {
  return (
    <section className="container grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 section">
      <div className="flex flex-col gap-6 md:gap-10 xl:gap-16">
        <div className="flex flex-col justify-center gap-3 md:gap-6 xl:gap-10">
          <p className="text-[16px] lg:text-[20px] text-center min-[900px]:text-left">
            WELCOME! START GROWING YOUR TRADING TODAY
          </p>
          <h1 className="text-center min-[900px]:text-left">
            <span className="text-secondary h1-span text-center min-[900px]:text-left">
              MetaTrader 5
            </span>
            <br /> Trading Platform
          </h1>
          <p className="text-[16px] lg:text-[20px] text-center min-[900px]:text-left">
            Buy & Sell crypto futures / CFDs in MT5.
          </p>
        </div>
        <div className="flex justify-center min-[900px]:justify-start max-h-[60px]">
          <Button variant="secondary">
            Open an Account
          </Button>
        </div>
      </div>
      <HeroSectionGraphic className="hidden min-[900px]:flex" />
    </section>
  );
};

export default HomeHero;
