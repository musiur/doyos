import LegalDocuments from "@/components/pages/about-us/legal-documents";

const AboutUsSlug = ({ params }: { params: { slug: String } }) => {
  return (
    <>

      {
        params.slug === "legal-documents" ? (
          <LegalDocuments />
        ) : params.slug === "our-goal" ? (
          <LegalDocuments />
        ) : null
      }
    </>
  );
};

export default AboutUsSlug;
