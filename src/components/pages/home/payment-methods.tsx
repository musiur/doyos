import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PaymentMethods = () => {
  return (
    <div className="bg-muted">
      <div className="container section grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center gap-10">
          <h2 className="">
            Your money, <span className="text-secondary h2-span">your way</span>
          </h2>
          <p>
            For more information on deposits, withdrawals and how to fund your
            trading account,{" "}
            <Link
              href="/"
              className="text-primary font-bold hover:text-secondary"
            >
              Go here
            </Link>
          </p>
          <div className="flex flex-wrap items-center justify-start gap-[20px]">
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Instant Deposit</span>
            </div>

            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Fast Withdrawal</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>0% Commission</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-5 py-2 mt-10 rounded-[10px] border font-bold bg-white">
              All Payment Methods
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/images/payment-methods.png"
            alt=""
            width={1000}
            height={1000}
            className="w-4/5 ml-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
