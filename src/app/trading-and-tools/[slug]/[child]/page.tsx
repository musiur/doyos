import Indices from "@/components/assets/home/instruments/indices";
import ForexTrading from "@/components/pages/trading-and-tools/market/forex/forex";

const MetaData5 = ({ params }: { params: { child: string } }) => {
  console.log(params.child, "<--");
  return (
    <div>
      <ForexTrading />
      <br />
      <Indices />
    </div>
  );
};

export default MetaData5;
