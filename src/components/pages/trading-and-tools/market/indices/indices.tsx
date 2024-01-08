// Import necessary dependencies
import MostPopularCard from "@/components/molecules/most-popular-card";
import Image from "next/image";

// Your Indices component
const Indices = () => {
  <MostPopularCard
    image="/images/pages/trading-and-tools/market/popular-trade.png"
    heading={
      <>
        What is the <span>Heading</span>
      </>
    }
    paragraphs={[
      <>
        Hello <span> Sajid</span>{" "}
      </>,
    ]}
  />;
};
export default Indices;
