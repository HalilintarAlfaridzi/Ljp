import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Sparkles,
  X
} from "lucide-react";
import { useParams } from "react-router-dom";
import Button from "../components/common/Button";
import ProjectCard from "../components/portfolio/ProjectCard";
import SectionHeader from "../components/common/SectionHeader";
import {
  getPortfolioBySlug,
  getRelatedPortfolios
} from "../data/portfolioProjects";
import { primarySeoKeywords, siteUrl } from "../constants/seo";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import { usePageMeta } from "../utils/usePageMeta";

const defaultCustomizationOptions = [
  "Ukuran",
  "Layout Ruangan",
  "Material",
  "Warna",
  "Finishing",
  "Kebutuhan Penyimpanan",
  "Budget"
];

const inspirationProfiles = {
  "Kitchen Set": {
    suitableFor: ["Rumah pribadi", "Apartemen", "Dapur keluarga"],
    overview:
      "Konsep ini menghadirkan area dapur yang rapi, fungsional, dan hangat melalui komposisi kabinet clean, penyimpanan yang terarah, serta pilihan material yang mudah dirawat. Setiap elemen dapat disesuaikan dengan alur aktivitas memasak dan ukuran ruang.",
    keyFeatures: [
      "Kabinet Clean",
      "Penyimpanan Efisien",
      "Area Kerja Rapi",
      "Material Mudah Dirawat",
      "Tampilan Modern",
      "Finishing Hangat"
    ],
    value:
      "Konsep ini cocok untuk hunian yang membutuhkan dapur rapi dengan tampilan modern tanpa mengorbankan fungsi penyimpanan dan kenyamanan penggunaan harian."
  },
  "Bedroom Furniture": {
    suitableFor: ["Kamar tidur", "Walk-in closet", "Apartemen", "Rumah pribadi"],
    overview:
      "Konsep ini berfokus pada penyimpanan kamar yang tertata, visual yang clean, dan proporsi furniture yang mengikuti kebutuhan ruang. Modul gantung, rak lipat, dan storage tertutup dapat dikombinasikan agar kamar terasa lebih lega.",
    keyFeatures: [
      "Storage Besar",
      "Layout Fleksibel",
      "Tampilan Clean",
      "Modul Gantung",
      "Rak Lipat",
      "Finishing Matte"
    ],
    value:
      "Konsep ini ideal untuk ruang tidur yang membutuhkan kapasitas penyimpanan besar, tampilan tenang, dan furniture yang menyatu dengan karakter interior."
  },
  "Living room furniture": {
    suitableFor: ["Ruang keluarga", "Ruang tamu", "Apartment living", "Entertainment area"],
    overview:
      "Konsep ini menempatkan furniture ruang keluarga sebagai focal point yang tetap fungsional. Cabinet, backdrop, rak display, dan storage tertutup dapat dirancang agar perangkat elektronik, dekorasi, dan barang harian terlihat lebih tertata.",
    keyFeatures: [
      "Focal Point Ruang",
      "Storage Tertutup",
      "Kabel Lebih Rapi",
      "Aksen Premium",
      "Proporsi Seimbang",
      "Tampilan Hangat"
    ],
    value:
      "Konsep ini cocok untuk ruang keluarga yang ingin tampil lebih premium, rapi, dan nyaman digunakan untuk aktivitas bersama maupun hiburan."
  },
  "Office furniture": {
    suitableFor: ["Kantor", "Ruang kerja", "Area pelayanan", "Studio"],
    overview:
      "Konsep ini menggabungkan tampilan profesional dengan fungsi ruang kerja yang jelas. Panel, storage, meja, atau backdrop dapat dibuat mengikuti identitas ruang agar area kerja terlihat representatif dan mudah digunakan.",
    keyFeatures: [
      "Tampilan Profesional",
      "Panel Rapi",
      "Storage Fungsional",
      "Identitas Ruang",
      "Material Tahan Lama",
      "Finishing Formal"
    ],
    value:
      "Konsep ini sesuai untuk ruang kerja yang membutuhkan kesan representatif, struktur penyimpanan yang jelas, dan tampilan yang tetap nyaman untuk aktivitas harian."
  },
  "Dining room": {
    suitableFor: ["Ruang makan", "Pantry rumah", "Cafe kecil", "Area keluarga"],
    overview:
      "Konsep ini menghadirkan area makan yang hangat, ringkas, dan mudah dipadukan dengan furniture lain. Proporsi meja, seating, storage pendukung, dan finishing dapat disesuaikan dengan jumlah pengguna serta karakter ruang.",
    keyFeatures: [
      "Suasana Hangat",
      "Proporsi Nyaman",
      "Finishing Natural",
      "Mudah Dipadukan",
      "Layout Fleksibel",
      "Tampilan Rapi"
    ],
    value:
      "Konsep ini cocok untuk ruang makan yang ingin terasa lebih nyaman, tertata, dan memiliki visual natural yang tidak berlebihan."
  },
  "Commercial space": {
    suitableFor: ["Cafe", "Coffee Shop", "Bakery", "Ruang usaha"],
    overview:
      "Konsep ini mengutamakan tampilan hangat melalui penggunaan elemen kayu natural yang dipadukan dengan garis desain modern dan minimalis. Fokus utama berada pada efisiensi penyimpanan, kemudahan penggunaan, serta tampilan premium yang mampu meningkatkan estetika ruang tanpa mengurangi fungsi utama furniture.",
    keyFeatures: [
      "Tampilan Kayu Natural",
      "Penyimpanan Tersembunyi",
      "Desain Modern Minimalis",
      "Efisiensi Ruang",
      "Material Tahan Lama",
      "Tampilan Premium"
    ],
    value:
      "Konsep ini cocok bagi pemilik bisnis yang menginginkan keseimbangan antara fungsi operasional dan estetika ruang agar area komersial terlihat lebih matang serta nyaman digunakan."
  }
};

const defaultInspirationProfile = {
  suitableFor: ["Rumah pribadi", "Ruang bisnis", "Interior custom"],
  overview:
    "Konsep ini dirancang sebagai referensi furniture custom yang dapat disesuaikan dengan ukuran ruang, kebutuhan fungsi, pilihan material, dan preferensi visual pelanggan.",
  keyFeatures: [
    "Layout Fleksibel",
    "Material Tahan Lama",
    "Finishing Rapi",
    "Storage Efisien",
    "Tampilan Premium",
    "Custom Size"
  ],
  value:
    "Konsep ini membantu pelanggan membayangkan furniture custom yang lebih sesuai dengan fungsi ruang, gaya interior, dan kebutuhan penggunaan sehari-hari."
};

function getInspirationProfile(inspiration) {
  return inspirationProfiles[inspiration.category] || defaultInspirationProfile;
}

function formatList(items) {
  return items.filter(Boolean).join(", ");
}

function buildConsultationMessage(inspiration) {
  return `Halo LJP, saya melihat inspirasi desain ${inspiration.title} dan ingin konsultasi furniture custom dengan konsep serupa.`;
}

function buildCustomDesignMessage(inspiration) {
  return `Halo LJP, saya ingin minta rekomendasi desain custom yang terinspirasi dari ${inspiration.title}. Saya ingin menyesuaikan ukuran, material, finishing, dan budget.`;
}

export default function PortfolioDetail() {
  const { slug } = useParams();
  const inspiration = getPortfolioBySlug(slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const galleryImages = inspiration?.inspirationImages || inspiration?.galleryImages || [];
  const selectedImage =
    selectedImageIndex === null ? null : galleryImages[selectedImageIndex];

  const seo = useMemo(() => {
    if (!inspiration) {
      return {
        title: "Inspirasi Desain Tidak Ditemukan | LJP Custom Furniture",
        description: "Inspirasi desain furniture LJP yang Anda cari tidak ditemukan.",
        path: `/portfolio/${slug || ""}`,
        robots: "noindex, follow",
        keywords: primarySeoKeywords
      };
    }

    return {
      title: `${inspiration.title} | Inspirasi Desain Furniture LJP`,
      description: inspiration.shortDescription,
      path: `/portfolio/${inspiration.slug}`,
      image: inspiration.featuredImage,
      keywords: [
        ...primarySeoKeywords,
        inspiration.title,
        inspiration.category,
        `${inspiration.category} custom`
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        url: `${siteUrl}/portfolio/${inspiration.slug}`,
        name: inspiration.title,
        description: inspiration.shortDescription,
        image: galleryImages.length > 0 ? galleryImages : inspiration.featuredImage,
        creator: { "@id": `${siteUrl}/#business` },
        inLanguage: "id-ID"
      }
    };
  }, [galleryImages, inspiration, slug]);

  usePageMeta(seo.title, seo.description, seo);

  useEffect(() => {
    setSelectedImageIndex(null);
  }, [slug]);

  useEffect(() => {
    if (selectedImageIndex === null || galleryImages.length === 0) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((current) =>
          current === null
            ? current
            : (current - 1 + galleryImages.length) % galleryImages.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedImageIndex((current) =>
          current === null ? current : (current + 1) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryImages.length, selectedImageIndex]);

  if (!inspiration) {
    return (
      <section className="page-hero not-found portfolio-not-found">
        <div className="container page-hero-inner">
          <p className="eyebrow">Inspirasi Tidak Ditemukan</p>
          <h1>Referensi desain yang Anda cari tidak tersedia.</h1>
          <p>
            Kembali ke halaman portfolio untuk melihat kumpulan inspirasi furniture custom lainnya.
          </p>
          <Button to="/portfolio">Kembali ke Portfolio</Button>
        </div>
      </section>
    );
  }

  const profile = getInspirationProfile(inspiration);
  const suitableFor = inspiration.suitableFor || profile.suitableFor;
  const keyFeatures = inspiration.keyFeatures || profile.keyFeatures;
  const overview = inspiration.inspirationDescription || profile.overview;
  const valueDescription = inspiration.valueDescription || profile.value;
  const customizationOptions =
    inspiration.customizationOptions || defaultCustomizationOptions;

  const conceptFacts = [
    ["Kategori", inspiration.category],
    ["Gaya Desain", inspiration.style],
    ["Cocok Untuk", formatList(suitableFor)],
    ["Material Rekomendasi", inspiration.material],
    ["Finishing Rekomendasi", inspiration.finishing]
  ];

  const relatedInspirations = getRelatedPortfolios(inspiration, 4);

  const showPreviousImage = () => {
    setSelectedImageIndex((current) =>
      current === null
        ? galleryImages.length - 1
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((current) =>
      current === null ? 0 : (current + 1) % galleryImages.length
    );
  };

  return (
    <>
      <section className="portfolio-detail-hero inspiration-hero">
        <div className="container">
          <Button className="portfolio-back-button" to="/portfolio" variant="secondary">
            Kembali ke Portfolio
          </Button>
          <div className="portfolio-detail-hero-media">
            <img
              src={inspiration.featuredImage}
              alt={`Inspirasi desain ${inspiration.title} dari LJP Custom Furniture`}
              decoding="async"
              loading="eager"
            />
            <div className="portfolio-detail-hero-copy">
              <p className="eyebrow">{inspiration.category}</p>
              <h1>{inspiration.title}</h1>
              <p>{inspiration.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section inspiration-concept-section">
        <div className="container portfolio-detail-layout">
          <aside className="project-info-panel inspiration-info-panel" aria-label="Informasi konsep">
            <p className="eyebrow">Informasi Konsep</p>
            <div className="project-info-list">
              {conceptFacts.map(([label, value]) => (
                <div className="project-info-item" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </aside>

          <div className="project-description-panel inspiration-overview-panel">
            <SectionHeader
              eyebrow="Gambaran Desain"
              title="Referensi Furniture Custom yang Bisa Disesuaikan."
              description={overview}
            />
            <div className="inspiration-context-note">
              <Sparkles size={22} aria-hidden="true" />
              <p>
                Gambar dalam halaman ini merupakan kumpulan referensi visual dengan tema desain
                serupa. Setiap inspirasi dapat diwujudkan ulang sesuai ukuran ruang, kebutuhan
                penggunaan, material, dan preferensi pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted inspiration-features-section">
        <div className="container">
          <SectionHeader
            eyebrow="Karakteristik Utama Desain"
            title="Elemen Visual dan Fungsi yang Menjadi Fokus."
            description="Poin berikut membantu menggambarkan karakter desain yang bisa dipertahankan atau disesuaikan saat proses custom furniture."
          />
          <div className="inspiration-feature-grid">
            {keyFeatures.map((feature) => (
              <article className="inspiration-feature-card" key={feature}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{feature}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-gallery-section inspiration-gallery-section">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Galeri Inspirasi"
              title="Kumpulan Referensi Visual dengan Tema Desain Serupa."
              description="Kumpulan referensi visual yang menggambarkan konsep desain ini dan dapat disesuaikan dengan kebutuhan, ukuran ruang, material, serta preferensi pelanggan."
            />
          </div>
          {galleryImages.length > 0 ? (
            <div className="portfolio-gallery inspiration-gallery">
              {galleryImages.map((image, index) => (
                <button
                  className={`gallery-item inspiration-gallery-item ${
                    index % 5 === 0 ? "gallery-item-large" : ""
                  }`}
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`Buka inspirasi visual ${index + 1} ${inspiration.title}`}
                >
                  <img
                    src={image}
                    alt={`Inspirasi ${inspiration.title} ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="eyebrow">Galeri Kosong</p>
              <h2>Referensi visual belum tersedia.</h2>
              <p>Galeri inspirasi akan ditampilkan setelah aset foto final tersedia.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section section-muted inspiration-custom-section">
        <div className="container inspiration-split-layout">
          <div>
            <SectionHeader
              eyebrow="Opsi Kustomisasi"
              title="Seluruh Desain Dapat Disesuaikan."
              description="Furniture custom LJP dapat diarahkan mengikuti kebutuhan praktis, karakter ruang, serta batas anggaran yang Anda siapkan."
            />
          </div>
          <div className="customization-grid">
            {customizationOptions.map((option) => (
              <div className="customization-item" key={option}>
                <SlidersHorizontal size={18} aria-hidden="true" />
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section inspiration-value-section">
        <div className="container inspiration-value-panel">
          <p className="eyebrow">Mengapa Memilih Konsep Ini</p>
          <h2>Keseimbangan antara Fungsi, Estetika, dan Kenyamanan.</h2>
          <p>{valueDescription}</p>
        </div>
      </section>

      <section className="portfolio-detail-cta-section inspiration-cta-section">
        <div className="container">
          <div className="portfolio-detail-cta inspiration-cta">
            <div>
              <p className="eyebrow">Mulai Konsultasi</p>
              <h2>Tertarik Dengan Desain Serupa?</h2>
              <p>
                Diskusikan kebutuhan furniture custom Anda bersama tim LJP dan dapatkan rekomendasi
                desain yang sesuai dengan ruang, gaya, dan anggaran Anda.
              </p>
            </div>
            <div className="portfolio-detail-cta-actions">
              <Button
                href={formatWhatsappUrl(buildConsultationMessage(inspiration))}
                target="_blank"
                rel="noreferrer"
                variant="light"
              >
                Konsultasi via WhatsApp
              </Button>
              <Button
                href={formatWhatsappUrl(buildCustomDesignMessage(inspiration))}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                Minta Desain Custom
              </Button>
            </div>
          </div>
        </div>
      </section>

      {relatedInspirations.length > 0 ? (
        <section className="section related-projects-section related-inspirations-section">
          <div className="container">
            <div className="section-top">
              <SectionHeader
                eyebrow="Inspirasi Lainnya"
                title="Referensi Desain yang Masih Berhubungan."
                description="Lihat inspirasi lain untuk membandingkan kategori, karakter material, dan arah desain furniture custom yang paling sesuai."
              />
            </div>
            <div className="portfolio-grid related-projects-grid">
              {relatedInspirations.map((relatedInspiration) => (
                <ProjectCard project={relatedInspiration} key={relatedInspiration.id} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {selectedImage ? (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview inspirasi ${inspiration.title}`}
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="lightbox-button lightbox-close"
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Tutup preview"
          >
            <X size={24} aria-hidden="true" />
          </button>
          <button
            className="lightbox-button lightbox-nav lightbox-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage} alt={`Inspirasi ${inspiration.title} fullscreen`} />
            <figcaption>
              {inspiration.title} - {selectedImageIndex + 1}/{galleryImages.length}
            </figcaption>
          </figure>
          <button
            className="lightbox-button lightbox-nav lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Foto berikutnya"
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  );
}
