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
  title: "Inspirasi Desain Furniture LJP Magelang | Kitchen Set, Wardrobe & Cafe",
  description:
    "Kumpulan inspirasi desain furniture custom LJP untuk kitchen set, bedroom furniture, living room furniture, office furniture, dining room, dan commercial space.",
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
    name: "Inspirasi Desain Furniture LJP Custom Furniture Magelang",
    description:
      "Kumpulan inspirasi desain furniture custom LJP untuk hunian, kantor, cafe, restoran, dan commercial space.",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` }
  }
};

const portfolioCategoryOrder = [
  "Kitchen Set",
  "Bedroom Furniture",
  "Living room furniture",
  "Office furniture",
  "Dining room",
  "Commercial space"
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua Inspirasi");
  const categories = useMemo(() => {
    const projectCategories = new Set(portfolioProjects.map((project) => project.category));
    const orderedCategories = portfolioCategoryOrder.filter((category) =>
      projectCategories.has(category)
    );
    const remainingCategories = [...projectCategories].filter(
      (category) => !portfolioCategoryOrder.includes(category)
    );

    return ["Semua Inspirasi", ...orderedCategories, ...remainingCategories];
  }, []);
  const filteredProjects =
    activeCategory === "Semua Inspirasi"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeCategory);

  usePageMeta(
    portfolioSeo.title,
    portfolioSeo.description,
    portfolioSeo
  );

  return (
    <>
      <PageHero
        eyebrow="Inspirasi Desain"
        title="Referensi Furniture Custom untuk Hunian dan Ruang Bisnis."
        description="Kumpulan inspirasi ini membantu calon pelanggan membayangkan konsep desain, pilihan material, dan kemungkinan furniture custom yang dapat diwujudkan LJP."
      />
      <section className="section">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Inspirasi Terpilih"
              title="Dari Hunian Pribadi Hingga Commercial Space."
              description="Setiap halaman berisi kumpulan referensi visual bertema serupa yang dapat disesuaikan dengan ukuran ruang, material, finishing, dan kebutuhan pelanggan."
            />
          </div>
          <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
          {filteredProjects.length > 0 ? (
            <div className="portfolio-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard project={project} featured={index === 0} key={project.id} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="eyebrow">Inspirasi Kosong</p>
              <h2>Inspirasi Belum Tersedia.</h2>
              <p>
                Referensi desain untuk kategori ini belum ditemukan. Pilih kategori lain atau
                hubungi LJP untuk rekomendasi furniture custom yang paling sesuai.
              </p>
            </div>
          )}
        </div>
      </section>
      <FinalCTA
        title="Tertarik Dengan Desain Serupa?"
        description="Konsultasikan kebutuhan furniture custom Anda bersama LJP, mulai dari ukuran ruang, fungsi, referensi desain, material, finishing, hingga estimasi pengerjaan."
        secondaryTo="/catalog"
      />
    </>
  );
}
