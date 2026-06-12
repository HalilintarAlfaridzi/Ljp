import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import ProjectCard from "../components/portfolio/ProjectCard";
import FinalCTA from "../components/common/FinalCTA";
import { portfolioProjects } from "../data/portfolioProjects";
import { usePageMeta } from "../utils/usePageMeta";
import { primarySeoKeywords, siteUrl } from "../constants/seo";

const portfolioSeo = {
  title: "Portfolio LJP Custom Furniture Magelang | Project Kitchen Set & Interior",
  description:
    "Portfolio project nyata LJP Custom Furniture Magelang untuk kitchen set, wardrobe, TV cabinet, furniture cafe, office furniture, dan interior custom.",
  path: "/portfolio",
  keywords: [
    ...primarySeoKeywords,
    "Jasa Furniture Custom Magelang",
    "Portfolio Furniture Custom",
    "Kitchen Set Custom Magelang",
    "Jasa Interior Custom Magelang",
    "project furniture custom Magelang"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${siteUrl}/portfolio`,
    name: "Portfolio Project LJP Custom Furniture Magelang",
    description:
      "Kumpulan project nyata LJP Custom Furniture untuk hunian, kantor, cafe, ruang publik, dan commercial space.",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` }
  }
};

export default function Portfolio() {
  usePageMeta(portfolioSeo.title, portfolioSeo.description, portfolioSeo);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Project Nyata yang Telah Dikerjakan LJP."
        description="Portfolio ini menampilkan pekerjaan LJP yang sudah dikerjakan sebagai bukti kualitas, pengalaman, dan kemampuan custom furniture untuk berbagai kebutuhan ruang."
      />

      <section className="section">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Daftar Project"
              title="Project Custom Furniture yang Telah Kami Kerjakan."
              description="Lihat beberapa project nyata LJP sebagai bukti kualitas pengerjaan, pengalaman, dan referensi sebelum memulai konsultasi."
            />
          </div>

          <div className="portfolio-grid portfolio-list-grid portfolio-clean-grid">
            {portfolioProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Tertarik Membuat Furniture Custom Seperti Project Ini?"
        description="Diskusikan kebutuhan ruang, ukuran, material, finishing, dan referensi project yang Anda sukai bersama LJP melalui WhatsApp."
        secondaryTo="/catalog"
        secondaryLabel="Lihat Catalog"
      />
    </>
  );
}
