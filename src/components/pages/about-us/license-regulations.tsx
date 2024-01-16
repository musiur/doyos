"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LicenseCarousel from "./license-carousel";
import { useElementSize } from "usehooks-ts";

const LicenseRegulation = () => {
  const [squareRef, { width }] = useElementSize();
  return (
    <section className="container section grid grid-cols-1 sm:grid-cols-6 gap-10">
      <div className="flex items-center col-span-4" ref={squareRef}>
        <LicenseCarousel width={width}/>
      </div>
      <div className="flex flex-col justify-center gap-10 col-span-2">
        <Image
          src="/images/pages/about-us/licese-regulations/license-sheet.png"
          alt=""
          width={1000}
          height={1000}
          className="max-w-full h-auto mr-auto"
        />
        <div className="flex flex-wrap items-center justify-center gap-[20px]">
          <Button>Open Demo Account</Button>
          <Button variant="secondary">Open Real Acccount</Button>
        </div>
      </div>
    </section>
  );
};

export default LicenseRegulation;
