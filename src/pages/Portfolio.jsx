import { useMemo, useState } from "react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import ProjectCard from "../components/portfolio/ProjectCard";
import CategoryFilter from "../components/catalog/CategoryFilter";
import FinalCTA from "../components/common/FinalCTA";
import { portfolioProjects } from "../data/portfolioProjects";
import { usePageMeta } from "../utils/usePageMeta";
import { primarySeoKeywords, siteUrl } from "../constants/seo";

const portfolioSeo = {
  title: "Portfolio LJP Custom Furniture Magelang | Project Rumah, Kantor & Cafe",
  description:
    "Portfolio LJP Custom Furniture Magelang untuk project kitchen set modern minimalis, lemari custom, furniture rumah, meja kantor, cabinet, furniture cafe, restoran, dan ruang komersial.",
  path: "/portfolio",
  keywords: [
    ...primarySeoKeywords,
    "portfolio custom furniture Magelang",
    "furniture rumah Magelang",
    "furniture kantor Magelang",
    "furniture cafe Magelang",
    "custom furniture modern Magelang",
    "furniture modern minimalis Magelang"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${siteUrl}/portfolio`,
    name: "Portfolio LJP Custom Furniture Magelang",
    description:
      "Portfolio project custom furniture LJP di Magelang untuk hunian, kantor, cafe, restoran, dan commercial space.",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` }
  }
};

export default function Portfolio() {
  const [activeType, setActiveType] = useState("All Projects");
  const categories = useMemo(
    () => ["All Projects", ...new Set(portfolioProjects.map((project) => project.type))],
    []
  );
  const filteredProjects =
    activeType === "All Projects"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.type === activeType);

  usePageMeta(
    portfolioSeo.title,
    portfolioSeo.description,
    portfolioSeo
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio Project"
        title="Bukti Visual dari Project Custom Furniture LJP."
        description="Portfolio membantu calon klien melihat karakter pengerjaan, jenis kebutuhan yang bisa ditangani, dan hasil akhir yang rapi untuk hunian maupun ruang bisnis."
      />
      <section className="section">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Project Terpilih"
              title="Dari Hunian Pribadi Hingga Commercial Space."
              description="Lokasi project ditampilkan secara umum untuk menjaga privasi klien. Foto project asli dapat diganti ke aset final begitu tersedia."
            />
          </div>
          <CategoryFilter categories={categories} active={activeType} onChange={setActiveType} />
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard project={project} featured={index === 0} key={project.id} />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA
        title="Ingin Membuat Project Seperti Ini?"
        description="Konsultasikan kebutuhan furniture custom Anda bersama LJP, mulai dari ruangan, fungsi, referensi desain, hingga estimasi pengerjaan."
        secondaryTo="/catalog"
      />
    </>
  );
}
