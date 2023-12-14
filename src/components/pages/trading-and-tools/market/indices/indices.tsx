// Import necessary dependencies
import MostPopularCard from "@/components/molecules/most-popular-card";
import Image from "next/image";

// Your Indices component
const Indices = () => {
    // Provide your custom image component
    const customImageComponent = (
        <Image
            src="/images/pages/trading-and-tools/market/popular-indices.png"
            alt="most popular indices image"
            width={600}
            height={493}
        />
    );

    // Your custom paragraphs
    const newParagraphs = [
        <>
            Customize the first paragraph with your own content and{' '}
            <span>customize the span</span>.
        </>,
        <>
            Add a new paragraph here with your own content. You can also use{' '}
            <span>additional spans</span>.
        </>,
    ];

    // Render the MostPopularCard component with custom props
    return (
        <div>
            <MostPopularCard
                sectionImage={customImageComponent}
                highlighter="Trade Indices Online."
                paragraphs={newParagraphs}
            />
        </div>
    );
};

export default Indices;
