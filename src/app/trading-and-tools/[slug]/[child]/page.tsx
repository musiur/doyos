import Commodities from "@/components/pages/trading-and-tools/market/commodities/commodities";
import Cryptos from "@/components/pages/trading-and-tools/market/cryptos/cryptos";
import ForexTrading from "@/components/pages/trading-and-tools/market/forex/forex";
import MarketIndices from "@/components/pages/trading-and-tools/market/indices/indices";

import StockShare from "@/components/pages/trading-and-tools/market/stock/stock-share";

const Page = ({ params }: { params: { child: string } }) => {
  return (
    <div>
      {params.child === "forex" ? (
        <ForexTrading />
      ) : params.child === "cryptos" ? (
        <Cryptos />
      ) : params.child === "stock" ? (
        <StockShare />
      ) : params.child === "commodities" ? (
        <Commodities />
      ) : params.child === "indices" ? (
        <MarketIndices />
      ) : null}
    </div>
  );
};

export default Page;
