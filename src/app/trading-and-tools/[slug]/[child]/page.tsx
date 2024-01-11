import Cryptos from "@/components/pages/trading-and-tools/market/cryptos/cryptos";
import ForexTrading from "@/components/pages/trading-and-tools/market/forex/forex";
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
      ) : params.child === "StockShare" ? (
        <StockShare />
      ) : null}
    </div>
  );
};

export default Page;
