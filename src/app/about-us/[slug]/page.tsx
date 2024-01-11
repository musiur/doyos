import LegalDocuments from "@/components/pages/about-us/legal-documents";

const AboutUsSlug = ({ params }: { params: { slug: String } }) => {
  return (
    <>
      <LegalDocuments />
    </>
  );
};

export default AboutUsSlug;
