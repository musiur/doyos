import SectionHead from "@/components/molecules/section-head";
import { Button } from "@/components/ui/button";
import { PricingFeaturesData } from "@/lib/data";
import clsx from "clsx";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const RegularAccount = () => {
  return (
    <section className="container section">
      <SectionHead
        details={{
          H2: (
            <>
              <span>Corporate</span>&nbsp;Regular Account
            </>
          ),
        }}
      />
      <div className="flex flex-wrap items-center justify-center gap-[40px]">
        {PricingFeaturesData.map((pack) => {
          const { id, accountType, features } = pack;
          return (
            <div
              key={id}
              className="min-w-[300px] w-[360px] flex flex-col items-center justify-center border rounded-[20px]"
            >
              <div
                className={clsx(
                  "w-full relative px-[20px] h-[190px] rounded-t-[20px] flex flex-col items-center justify-center",
                  { "bg-[#C1282D]": id === 2, "bg-[#C1282D10]": id !== 2 }
                )}
              >
                <Image
                  src={id === 2 ? "/map.png" : "/map1.png"}
                  alt="map"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    //   zIndex: "-1",
                  }}
                />
                <div className="relative flex flex-col items-center justify-center space-y-2">
                  {id === 2 ? <p className="text-white">Most Popular</p> : null}
                  <p
                    className={clsx({
                      "text-white text-[16px] md:text-[20px]": id === 2,
                    })}
                  >
                    Account
                  </p>
                  <h4
                    className={clsx("text-[32px] md:text-[40px] font-bold", {
                      "text-white": id === 2,
                      "text-gray-600": id !== 2,
                    })}
                  >
                    {accountType}
                  </h4>
                  {pack.accountSubType ? <p>({pack.accountSubType})</p> : null}
                </div>
              </div>
              <ul
                className={clsx("flex flex-col gap-[10px]", {
                  "pt-[64px]": id === 2,
                  "pt-[24px]": id !== 2,
                })}
              >
                {features.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-[4px]">
                      <CheckCircle
                        className={clsx({
                          "stroke-white fill-secondary w-5 h-5": index < 10,
                          "stroke-secondary fill-white w-[18px] h-4": index >= 10,
                        })}
                      />
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className="w-full p-[32px]">
                <Button
                  variant={id === 2 ? "secondary" : "outline"}
                  className="w-full"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RegularAccount;
