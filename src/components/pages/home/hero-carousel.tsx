"use client";

import HeroSectionGraphic from "@/components/assets/home/herosection";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useElementSize } from "usehooks-ts";

type TSlide = {
  id: number;
  image: string;
};

const Slides: TSlide[] = [
  {
    id: 1,
    image: "/images/payment-methods.png",
  },
  {
    id: 2,
    image: "/images/payment-methods.png",
  },
  {
    id: 3,
    image: "/images/pages/trading-and-tools/trade-indices-online.png",
  },
];
const HomeHeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [squareRef, { width }] = useElementSize();

  return (
    <section
      className="section w-full overflow-hidden relative"
      style={{ maxWidth: "100vw" }}
    >
      <div
        className="min-h-[300px] flex items-center transition ease-in-out duration-150"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}vw)` }}
      >
        {Slides.map((slide: TSlide) => {
          const { id, image } = slide;
          return (
            <div
              key={id}
              className="min-w-[100vw]"
            >
              <div className="container grid grid-cols-1 min-[900px]:grid-cols-2 justify-center items-center">
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
                    <Button variant="secondary">Open an Account</Button>
                  </div>
                </div>

                <div className="hidden min-[900px]:flex w-full">
                  {slide.id === 1 ? (
                    <HeroSectionGraphic className="hidden min-[900px]:flex" />
                  ) : (
                    <Image
                      src={image}
                      alt="image"
                      width={1000}
                      height={1000}
                      className="w-auto h-full mx-auto max-h-[500px]"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-[20px] py-[20px]">
        {[1, 2, 3].map((item) => {
          return (
            <div
              key={item}
              className={clsx("w-[20px] h-[8px] rounded-full ", {
                "bg-gray-200": item !== currentSlide,
                "bg-secondary": item === currentSlide,
              })}
              role="button"
              onClick={() => setCurrentSlide(item)}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeHeroCarousel;
