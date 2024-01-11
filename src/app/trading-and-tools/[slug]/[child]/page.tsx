import Indices from "@/components/assets/home/instruments/indices";
import Cryptos from "@/components/pages/trading-and-tools/market/cryptos/cryptos";
import ForexTrading from "@/components/pages/trading-and-tools/market/forex/forex";
import StockShare from "@/components/pages/trading-and-tools/market/stock/stock-share";

const MetaData5 = ({ params }: { params: { child: string } }) => {
  return (
    <div>
      {/* <ForexTrading /> */}
      {/* <Cryptos /> */}
      <StockShare />
    </div>
  );
};

export default MetaData5;
