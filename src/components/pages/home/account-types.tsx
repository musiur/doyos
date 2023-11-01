import { Button } from "@/components/ui/button";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const AccountTypes = () => {
  return (
    <div className="">
      <div className="container section grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
        <div className="flex items-center relative">
          <Image
            src="/images/slide-back.png"
            alt=""
            width={1000}
            height={1000}
            className="w-4/5 ml-auto h-auto"
          />
          <div className="absolute left-0 -bottom-[20px] border border-primary bg-muted p-3 md:p-5 rounded-tl-[20px] rounded-br-[20px] flex flex-col items-end justify-center gap-3">
            <p className="text-2xl lg:text-4xl font-bold text-right">
              Standard
            </p>
            <p className="text-xl lg:text-2xl font-bold text-right">
              <span className="text-xl lg:text-2xl font-bold text-secondary">
                Spread
              </span>
              : 2.5
            </p>
            <p className="text-xl lg:text-2xl font-bold text-right">
              Up to:{" "}
              <span className="text-xl lg:text-2xl font-bold text-secondary">
                1:50
              </span>{" "}
              Leverage
            </p>
          </div>
          <div className="absolute right-0 -bottom-[40px] flex items-end justify-end gap-5">
            <div className="bg-muted hover:bg-white border border-primary hover:border-secondary p-2 rounded-full rounded-br-none cursor-pointer group">
              <ChevronLeft className="h-12 w-12 stroke-1 group-hover:stroke-secondary" />{" "}
            </div>
            <div className="bg-muted hover:bg-white border border-primary hover:border-secondary p-2 rounded-full rounded-bl-none cursor-pointer group">
              <ChevronRight className="h-12 w-12 stroke-1 group-hover:stroke-secondary" />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <h2 className="text-right">
            Choose the{" "}
            <span className="text-secondary h2-span">
              best
              <br /> account type
            </span>{" "}
            for you
          </h2>
          <div className="flex flex-col items-end justify-center gap-[20px]">
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Individual accounts</span>
            </div>

            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Islamic accounts</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Institutional/Corporate Accounts</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-[20px]">
            <Button>Open Demo Account</Button>
            <Button variant="secondary">Open Real Acccount</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTypes;
