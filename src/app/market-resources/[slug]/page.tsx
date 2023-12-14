import ForexEducation from "@/components/pages/market-resources/forex-educations/forex-education";

const MarketResourcesSlug = ({ params }: { params: { slug: String } }) => {
    return (
        <div>
            <ForexEducation />
        </div>
    );
};

export default MarketResourcesSlug;