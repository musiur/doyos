
const MarketResourcesSlug = ({ params }: { params: { slug: String } }) => {
    return (
        <div>
            <h1>{params.slug}...Hey!</h1>
        </div>
    );
};

export default MarketResourcesSlug;