import TradingPlatform from "@/components/pages/home/trading-platform";
import Commodities from "@/components/pages/trading-and-tools/market/commodities/commodities";
import Cryptos from "@/components/pages/trading-and-tools/market/cryptos/cryptos";
import ForexTrading from "@/components/pages/trading-and-tools/market/forex/forex";
import MarketIndices from "@/components/pages/trading-and-tools/market/indices/indices";

import StockShare from "@/components/pages/trading-and-tools/market/stock/stock-share";
import MetaTrader5 from "@/components/pages/trading-and-tools/trading-platform/meta-trader5/meta-trader5";
import Mt5Android from "@/components/pages/trading-and-tools/trading-platform/mt5-android/mt5-android";
import Mt5MacIOS from "@/components/pages/trading-and-tools/trading-platform/mt5-ios/mt5-mac-ios";
import Calculator from "@/components/pages/trading-and-tools/trading-tools/calculator/calculator";

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
      ) : params.child === "meta-trader5" ? (
        <MetaTrader5 />
      ) : params.child === "mt5-ios" ? (
        <Mt5MacIOS />
      ) : params.child === "mt5-android" ? (
        <Mt5Android />
      ) : params.child === "calculator" ? (
        <Calculator />
      ) : null}
    </div>
  );
};

export default Page;
