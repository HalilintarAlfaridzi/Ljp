import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import FinalCTA from "../components/common/FinalCTA";
import InspirationCategoryCard from "../components/inspiration/InspirationCategoryCard";
import { inspirationCategories } from "../data/inspirationDesigns";
import { whatsappMessages } from "../constants/whatsapp";
import { primarySeoKeywords, serviceCatalog, siteUrl } from "../constants/seo";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import { usePageMeta } from "../utils/usePageMeta";

const servicesSeo = {
  title: "Layanan LJP Custom Furniture Magelang | Kitchen Set, Wardrobe & Interior",
  description:
    "Layanan LJP Custom Furniture Magelang untuk kitchen set, wardrobe, TV cabinet, bedroom set, furniture kantor, cafe furniture, dan custom furniture.",
  path: "/layanan",
  keywords: [
    ...primarySeoKeywords,
    "layanan custom furniture Magelang",
    "jasa kitchen set Magelang",
    "jasa wardrobe custom Magelang",
    "jasa furniture cafe Magelang"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Service",
    url: `${siteUrl}/layanan`,
    name: "Layanan LJP Custom Furniture Magelang",
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: "Magelang, Jawa Tengah",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Custom Furniture LJP",
      itemListElement: serviceCatalog.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service
        }
      }))
    }
  }
};

const servicePoints = [
  "Ukuran dan layout mengikuti kondisi ruangan",
  "Material dan finishing dapat diarahkan sesuai kebutuhan",
  "Cocok untuk rumah, kantor, cafe, restoran, dan ruang komersial",
  "Konsultasi awal dapat dimulai dari referensi desain atau foto ruangan"
];

export default function Services() {
  usePageMeta(servicesSeo.title, servicesSeo.description, servicesSeo);

  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Pembuatan Furniture Custom untuk Hunian dan Ruang Bisnis."
        description="LJP membantu membuat furniture custom yang mengikuti ukuran, fungsi, karakter ruangan, dan gaya visual yang Anda inginkan."
      />

      <section className="section">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Ruang Lingkup"
              title="Layanan Custom Furniture LJP."
              description="Pilih kebutuhan utama Anda, lalu gunakan halaman catalog sebagai referensi visual sebelum konsultasi ukuran, material, dan estimasi pengerjaan."
            />
            <Button href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
              Konsultasi Layanan
            </Button>
          </div>

          <div className="inspiration-category-grid service-category-grid">
            {inspirationCategories.map((category) => (
              <InspirationCategoryCard category={category} key={category.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container service-note-panel">
          <SectionHeader
            eyebrow="Cara Kerja"
            title="Setiap Project Dimulai dari Kebutuhan Ruang."
            description="LJP tidak menjual furniture fixed price. Estimasi dibuat setelah kebutuhan, ukuran, material, finishing, dan kompleksitas pengerjaan dipahami."
          />
          <div className="service-point-grid">
            {servicePoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA secondaryTo="/catalog" secondaryLabel="Lihat Catalog" />
    </>
  );
}
