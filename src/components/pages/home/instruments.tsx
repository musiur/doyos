import Clocks from "@/components/assets/home/what-we-provide/clocks";

const Instruments = () => {
  const ForexTradingSolution = [
    {
      id: 0,
      text: "24/7 Customer Services",
      graphic: <Clocks />,
    },
    {
      id: 1,
      text: "Fast Execution Speed",
      graphic: <Clocks />,
    },
    {
      id: 2,
      text: "MetaTrader 5 Platform",
      graphic: <Clocks />,
    },
    {
      id: 3,
      text: "Free Education and Training",
      graphic: <Clocks />,
    },
    {
      id: 4,
      text: "Windows, Android & Mac/iOS support",
      graphic: <Clocks />,
    },
    {
      id: 5,
      text: "Secured Platforms",
      graphic: <Clocks />,
    },
  ];
  return (
    <div>
      <div className="bg-muted section rounded-bl-[20px] md:rounded-bl-[40px]">
        <div className="container">
          <h2 className="text-center">
          Instruments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-16 pb-5">
            {ForexTradingSolution.map((item) => {
              return (
                <div
                  className="p-5 bg-white w-full rounded-[10px] md:rounded-[20px] flex flex-col items-center justify-center"
                  key={item.id}
                >
                  {item.graphic}
                  <p className="text-center">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruments;
