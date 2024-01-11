
import Commodities from "@/components/pages/trading-and-tools/market/commodities/commodities";
import Cryptos from "@/components/pages/trading-and-tools/market/cryptos/cryptos";
import ForexTrading from "@/components/pages/trading-and-tools/market/forex/forex";
import MarketIndices from "@/components/pages/trading-and-tools/market/indices/indices";


import StockShare from "@/components/pages/trading-and-tools/market/stock/stock-share";

const MetaData5 = ({ params }: { params: { child: string } }) => {
  return (
    <div>
      {/* <ForexTrading /> */}
      {/* <Cryptos /> */}
      {/* <StockShare /> */}
      {/* <MarketIndices /> */}
      <Commodities />
    </div>
  );
};

export default MetaData5;
