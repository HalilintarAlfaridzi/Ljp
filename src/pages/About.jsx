import { BadgeCheck, MapPin, MessageCircle, Ruler, Wrench } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import FinalCTA from "../components/common/FinalCTA";
import { images } from "../constants/images";
import { siteConfig } from "../constants/siteConfig";
import { whatsappMessages } from "../constants/whatsapp";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import { usePageMeta } from "../utils/usePageMeta";
import { primarySeoKeywords, siteUrl } from "../constants/seo";

const aboutSeo = {
  title: "Tentang LJP Custom Furniture Magelang | Mebel Custom & Interior Modern",
  description:
    "Profil LJP Custom Furniture Magelang, jasa mebel custom dan furniture interior untuk rumah, kantor, cafe, restoran, hotel, villa, homestay, serta ruang bisnis di Magelang dan Jawa Tengah.",
  path: "/about",
  keywords: [
    ...primarySeoKeywords,
    "mebel custom Magelang",
    "furniture interior Magelang",
    "jasa interior Magelang",
    "interior rumah Magelang",
    "interior kantor Magelang",
    "interior cafe Magelang",
    "furniture handmade Magelang"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${siteUrl}/about`,
    name: "Tentang LJP Custom Furniture Magelang",
    description:
      "Profil studio custom furniture lokal Magelang untuk kebutuhan furniture custom, mebel custom, dan interior modern.",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` }
  }
};

const values = [
  { icon: Ruler, title: "Presisi Ruang", text: "Furniture diarahkan mengikuti ukuran dan layout ruangan." },
  { icon: Wrench, title: "Fungsi Jelas", text: "Setiap detail dibuat sesuai kebutuhan penyimpanan, display, atau aktivitas." },
  { icon: BadgeCheck, title: "Tampilan Rapi", text: "Visual diarahkan ke modern, clean, natural, dan profesional." },
  { icon: MessageCircle, title: "Diskusi Mudah", text: "Konsultasi awal dapat dimulai dari WhatsApp dengan referensi sederhana." }
];

export default function About() {
  usePageMeta(
    aboutSeo.title,
    aboutSeo.description,
    aboutSeo
  );

  return (
    <>
      <PageHero
        eyebrow="About LJP"
        title="Studio Custom Furniture Lokal Magelang untuk Hunian dan Ruang Bisnis."
        description="LJP membantu klien membuat furniture custom yang sesuai ukuran, kebutuhan, fungsi, dan karakter ruangan dengan tampilan modern, rapi, dan premium."
      />
      <section className="section">
        <div className="container split-grid">
          <img className="feature-image" src={images.about} alt="Detail furniture custom LJP" loading="lazy" />
          <div>
            <SectionHeader
              eyebrow="Profil Singkat"
              title="Furniture yang Tidak Hanya Indah Dilihat, Tetapi Tepat Secara Fungsi."
              description="Setiap project dibuat menyesuaikan ukuran ruangan, kebutuhan penggunaan, pilihan material, dan gaya visual yang diinginkan. LJP cocok menjadi partner untuk kebutuhan personal maupun project ruang bisnis."
            />
            <div className="location-note">
              <MapPin size={20} aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </div>
            <Button href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
              Konsultasi dengan LJP
            </Button>
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Nilai Kerja"
            title="Cara LJP Membantu Klien."
            description="Fokus kami adalah membuat proses custom terasa jelas untuk klien awam, mulai dari kebutuhan awal sampai furniture siap digunakan."
          />
          <div className="why-card-grid values-grid">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article className="why-card" key={item.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCTA secondaryTo="/portfolio" secondaryLabel="Lihat Portfolio" />
    </>
  );
}
