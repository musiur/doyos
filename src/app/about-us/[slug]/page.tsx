
const AboutUsSlug = ({ params }: { params: { slug: String } }) => {
    return (
        <>
            <h1>hi...{params.slug}</h1>
        </>
    );
};

export default AboutUsSlug;