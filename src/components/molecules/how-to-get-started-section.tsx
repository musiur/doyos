
import AcountIcon from "../icons/account-icon";
import SignupIcon from "../icons/signup-icon";
import TradeIcon from "../icons/trade-icon";

const HowToGetStarted =()=>{
    return(
        <div className="bg-muted">
        <div className="section container">
          <div className="header-text pt-[50px] text-center">
            <h2>How to Get Started</h2>
            <p className="pt-[30px]">To begin your investment journey in theForex markets, follow these simple steps</p>
          </div>
          <div className="icons-card pt-[60px] pb-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center gap-[10px] ">
            <div className="card flex flex-col text-center items-center gap-[13px] bg-white w-full md:max-w-[472px] rounded-[10px] px-[45px] h-auto py-[25px]">
              <SignupIcon className=""/>
              <p className="font-bold text-[24px]">Sign Up</p>
              <p>Create an account in minutes & upload your documents.</p>
            </div>
            <div className="card flex flex-col text-center items-center gap-[13px] bg-white w-full md:max-w-[472px] rounded-[10px] px-[45px] h-auto py-[25px]">
              <AcountIcon className=""/>
              <p className="font-bold text-[24px]">Find Your Account</p>
              <p>Make instant deposits to your Doyos Wallet via debit card, wire transfer or your preferred online payment method.</p>
            </div>
            <div className="card flex flex-col text-center items-center gap-[13px] bg-white w-full md:max-w-[472px] rounded-[10px] px-[45px] h-auto py-[25px]">
              <TradeIcon className=""/>
              <p className="font-bold text-[24px]">Trade</p>
              <p>Download your favorite trading platform on your device of choice & begin trading.</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default HowToGetStarted;