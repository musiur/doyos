import SignupIcon from "../icons/signup-icon";
import FeatureCard from "../molecules/feature-card";
import SectionHead from "../molecules/section-head";

const HowItWorks = () => {
  return (
    <div className="section container">
      <SectionHead
        details={{
          H2: <>How it Works</>,
          p: [
            <>
              Got a community of traders who trust your judgement? Introduce
              them to Doyos and profit from generous lifetime commissions on
              every lot they trade.
            </>,
          ],
        }}
      />
      <div className="flex flex-wrap items-center justify-center gap-[50px]">
        {CardData.map((item) => {
          return (
            <FeatureCard key={item.id} details={{ ...item, steps: true }} />
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;

const CardData = [
  {
    id: 1,
    title: "Sign Up",
    icon: <SignupIcon className="" />,
  },
  {
    id: 2,
    title: "Find your account",
    icon: <SignupIcon className="" />,
  },
  {
    id: 3,
    title: "Trade",
    icon: <SignupIcon className="" />,
  },
  {
    id: 4,
    title: "Trade",
    icon: <SignupIcon className="" />,
  },
];
