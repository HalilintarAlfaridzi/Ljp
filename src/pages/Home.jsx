import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Home as HomeIcon,
  MapPin,
  MessageCircle,
  Ruler,
  Sparkles,
  Trees,
  Wrench
} from "lucide-react";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import FinalCTA from "../components/common/FinalCTA";
import FAQAccordion from "../components/faq/FAQAccordion";
import ProductCard from "../components/catalog/ProductCard";
import ProjectCard from "../components/portfolio/ProjectCard";
import { images } from "../constants/images";
import { whatsappMessages } from "../constants/whatsapp";
import { productCategories } from "../data/productCategories";
import { portfolioProjects } from "../data/portfolioProjects";
import { whyChooseUs } from "../data/whyChooseUs";
import { processSteps } from "../data/processSteps";
import { faqs } from "../data/faqs";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import { usePageMeta } from "../utils/usePageMeta";
import { defaultSeo, primarySeoKeywords, serviceCatalog, siteUrl } from "../constants/seo";

const trustItems = [
  { icon: Ruler, title: "Custom sesuai ukuran ruangan" },
  { icon: Building2, title: "Untuk rumah, kantor, cafe & commercial space" },
  { icon: MessageCircle, title: "Konsultasi mudah via WhatsApp" },
  { icon: MapPin, title: "Berbasis di Kabupaten Magelang" }
];

const heroBadges = ["Custom by request", "Residential & commercial", "Magelang based"];

const homeSeo = {
  title: defaultSeo.title,
  description: defaultSeo.description,
  path: "/",
  keywords: defaultSeo.keywords,
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "LJP Custom Furniture",
        alternateName: ["LJP", "LJP Furniture", "LJP Furniture Magelang"],
        description: defaultSeo.description,
        url: siteUrl,
        image: defaultSeo.image,
        telephone: "+62 812-3456-7890",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dekat kantor KPU",
          addressLocality: "Kabupaten Magelang",
          addressRegion: "Jawa Tengah",
          addressCountry: "ID"
        },
        areaServed: [
          "Kabupaten Magelang",
          "Kota Magelang",
          "Mertoyudan",
          "Muntilan",
          "Secang",
          "Borobudur",
          "Jawa Tengah"
        ],
        knowsAbout: defaultSeo.keywords,
        makesOffer: serviceCatalog.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
            areaServed: "Magelang, Jawa Tengah"
          }
        }))
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "LJP Custom Furniture",
        alternateName: ["LJP", "LJP Furniture Magelang"],
        url: siteUrl,
        inLanguage: "id-ID",
        keywords: defaultSeo.keywords.join(", ")
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: defaultSeo.title,
        description: defaultSeo.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#business` },
        inLanguage: "id-ID",
        keywords: primarySeoKeywords.join(", ")
      }
    ]
  }
};

export default function Home() {
  usePageMeta(
    homeSeo.title,
    homeSeo.description,
    homeSeo
  );

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">LJP Custom Furniture Magelang</p>
            <h1>Furniture Custom untuk Hunian & Ruang Bisnis.</h1>
            <p>
              Kitchen set, wardrobe, cabinet, furniture kantor, cafe, restoran, dan kebutuhan
              custom lain yang dibuat mengikuti ukuran, fungsi, dan gaya ruangan.
            </p>
            <div className="hero-actions">
              <Button href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
                Konsultasi via WhatsApp
              </Button>
              <Button to="/portfolio" variant="secondary">
                Lihat Portfolio
              </Button>
            </div>
            <div className="hero-badges" aria-label="Keunggulan singkat">
              {heroBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-media"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <img src={images.hero} alt="Interior modern dengan furniture custom natural wood" />
            <div className="hero-stat">
              <strong>Custom</strong>
              <span>Sesuai kebutuhan ruang, fungsi, dan gaya visual.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="trust-bar-section">
        <div className="container trust-bar">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="trust-item" key={item.title}>
                <Icon size={22} aria-hidden="true" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section about-preview">
        <div className="container split-grid">
          <motion.div
            className="image-stack"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <img src={images.about} alt="Detail furniture custom natural wood LJP" loading="lazy" />
          </motion.div>
          <div>
            <SectionHeader
              eyebrow="Tentang LJP"
              title="Furniture Custom yang Dirancang Mengikuti Kebutuhan Ruang Anda."
              description="LJP Custom Furniture melayani pembuatan berbagai furniture custom untuk hunian pribadi, kantor, cafe, restoran, dan ruang komersial. Setiap project dirancang menyesuaikan ukuran, fungsi, material, dan gaya visual yang dibutuhkan klien."
            />
            <div className="value-list">
              <span>
                <BadgeCheck size={18} aria-hidden="true" /> Desain mengikuti fungsi ruang
              </span>
              <span>
                <BadgeCheck size={18} aria-hidden="true" /> Material dan finishing fleksibel
              </span>
              <span>
                <BadgeCheck size={18} aria-hidden="true" /> Konsultasi awal melalui WhatsApp
              </span>
            </div>
            <Button to="/about" variant="secondary">
              Tentang LJP
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Katalog Inspirasi"
              title="Inspirasi Furniture Custom untuk Berbagai Kebutuhan."
              description="Pilih kategori sebagai referensi awal. Setiap desain dapat disesuaikan kembali dengan ukuran, material, warna, dan kebutuhan ruangan Anda."
            />
            <Button to="/catalog" variant="secondary">
              Lihat Katalog Inspirasi
            </Button>
          </div>
          <div className="product-grid product-grid-preview">
            {productCategories.slice(0, 3).map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why-grid">
          <div>
            <SectionHeader
              eyebrow="Keunggulan"
              title="Kenapa Memilih LJP?"
              description="LJP diposisikan sebagai partner furniture custom, bukan katalog harga satuan. Fokusnya adalah kebutuhan ruang, fungsi, tampilan, dan pengerjaan yang rapi."
            />
            <img className="why-image" src={images.workshop} alt="Ruang interior modern dengan furniture custom" loading="lazy" />
          </div>
          <div className="why-card-grid">
            {whyChooseUs.map((item, index) => {
              const icons = [Ruler, HomeIcon, Sparkles, MessageCircle, ClipboardCheck, Trees];
              const Icon = icons[index] || BadgeCheck;
              return (
                <motion.article
                  className="why-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <Icon size={22} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Portfolio"
              title="Project Custom Furniture yang Telah Kami Kerjakan."
              description="Dari hunian pribadi hingga ruang bisnis, LJP membantu menghadirkan furniture custom yang rapi, fungsional, dan sesuai karakter ruang."
            />
            <Button to="/portfolio" variant="secondary">
              Lihat Semua Portfolio
            </Button>
          </div>
          <div className="portfolio-preview-grid">
            <ProjectCard project={portfolioProjects[0]} featured />
            <div className="portfolio-side">
              {portfolioProjects.slice(1, 3).map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Proses Custom"
            title="Proses Custom Furniture yang Jelas dari Awal."
            description="Belum punya desain pasti? Ceritakan kebutuhan ruangannya dulu. Proses awal bisa dimulai dari referensi sederhana, foto ruangan, atau ukuran perkiraan."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.step}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="center-actions">
            <Button href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
              Mulai Konsultasi
            </Button>
          </div>
        </div>
      </section>

      <section className="section material-section">
        <div className="container split-grid reverse">
          <div>
            <SectionHeader
              eyebrow="Material & Finishing"
              title="Detail Material dan Finishing yang Menyesuaikan Kebutuhan Project."
              description="Setiap project dapat menyesuaikan pilihan material, warna, finishing, dan detail fungsi sesuai kebutuhan ruangan serta budget klien."
            />
            <div className="material-points">
              {["Pilihan material menyesuaikan kebutuhan", "Finishing rapi dan modern", "Desain mengikuti fungsi ruang", "Cocok untuk kebutuhan personal dan bisnis"].map(
                (point) => (
                  <span key={point}>
                    <Wrench size={18} aria-hidden="true" /> {point}
                  </span>
                )
              )}
            </div>
            <Button href={formatWhatsappUrl("Halo LJP, saya ingin bertanya pilihan material dan finishing untuk custom furniture.")} target="_blank" rel="noreferrer" variant="secondary">
              Tanya Pilihan Material
            </Button>
          </div>
          <img className="feature-image" src={images.material} alt="Detail material dan finishing furniture custom" loading="lazy" />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container faq-preview-grid">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Ditanyakan."
            description="FAQ membantu menjelaskan proses custom furniture, estimasi, area layanan, dan cara konsultasi agar calon klien tidak bingung sebelum menghubungi WhatsApp."
          />
          <FAQAccordion items={faqs.slice(0, 5)} />
          <div className="faq-actions">
            <Link to="/faq">Lihat FAQ Lengkap</Link>
            <a href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
