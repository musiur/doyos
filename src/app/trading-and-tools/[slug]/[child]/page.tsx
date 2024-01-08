import Indices from "@/components/assets/home/instruments/indices";
import ForexTrading from "@/components/pages/trading-and-tools/market/forex/forex";

const MetaData5 = ({ params }: { params: { child: string } }) => {
  console.log(params.child, "<--");
  return (
    <div className="">
      <ForexTrading />
      <br />
      <Indices />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nesciunt. Ea quod aperiam autem. Laudantium culpa consequatur perspiciatis tenetur, molestias excepturi dicta. Consequuntur nam asperiores at totam reprehenderit, voluptatem amet!
    </div>
  );
};

export default MetaData5;
