import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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

function buildProjectConsultationMessage(project) {
  return `Halo LJP, saya melihat portfolio ${project.title} dan tertarik membuat furniture custom seperti project ini. Saya ingin konsultasi kebutuhan ruang, material, finishing, dan estimasi pengerjaan.`;
}

function formatList(items) {
  return items.filter(Boolean).join(", ");
}

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = getPortfolioBySlug(slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const touchStartX = useRef(null);
  const galleryImages = project?.galleryImages || [];
  const selectedImage =
    selectedImageIndex === null ? null : galleryImages[selectedImageIndex];

  const seo = useMemo(() => {
    if (!project) {
      return {
        title: "Project Portfolio Tidak Ditemukan | LJP Custom Furniture",
        description: "Project portfolio LJP yang Anda cari tidak ditemukan.",
        path: `/portfolio/${slug || ""}`,
        robots: "noindex, follow",
        keywords: primarySeoKeywords
      };
    }

    return {
      title: `${project.title} | Portfolio LJP Custom Furniture Magelang`,
      description: project.shortDescription,
      path: `/portfolio/${project.slug}`,
      image: project.featuredImage,
      keywords: [
        ...primarySeoKeywords,
        project.title,
        project.category,
        project.location,
        `${project.category} custom Magelang`
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        url: `${siteUrl}/portfolio/${project.slug}`,
        name: project.title,
        description: project.shortDescription,
        image: galleryImages.length > 0 ? galleryImages : project.featuredImage,
        creator: { "@id": `${siteUrl}/#business` },
        locationCreated: project.location,
        dateCreated: project.year,
        inLanguage: "id-ID"
      }
    };
  }, [galleryImages, project, slug]);

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

  const handleLightboxTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleLightboxTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 48) return;

    if (deltaX > 0) {
      showPreviousImage();
    } else {
      showNextImage();
    }
  };

  if (!project) {
    return (
      <section className="page-hero not-found portfolio-not-found">
        <div className="container page-hero-inner">
          <p className="eyebrow">Project Tidak Ditemukan</p>
          <h1>Project portfolio yang Anda cari tidak tersedia.</h1>
          <p>Kembali ke halaman portfolio untuk melihat project LJP lainnya.</p>
          <Button to="/portfolio">Kembali ke Portfolio</Button>
        </div>
      </section>
    );
  }

  const projectFacts = [
    ["Nama Project", project.title],
    ["Lokasi", project.location],
    ["Tahun Pengerjaan", project.year],
    ["Material", project.material],
    ["Finishing", project.finishing],
    ["Style Desain", project.style],
    ["Jenis Furniture", project.furnitureType]
  ];

  const storyItems = [
    ["Kebutuhan Client", project.clientNeeds],
    ["Permasalahan", project.challenge],
    ["Konsep Desain", project.designConcept],
    ["Solusi LJP", project.solution],
    ["Hasil Akhir", project.finalResult]
  ];

  const relatedProjects = getRelatedPortfolios(project, 3);

  return (
    <>
      <section className="portfolio-detail-hero">
        <div className="container">
          <Button className="portfolio-back-button" to="/portfolio" variant="secondary">
            Kembali ke Portfolio
          </Button>
          <div className="portfolio-detail-hero-media">
            <img
              src={project.featuredImage}
              alt={`${project.title} oleh LJP Custom Furniture`}
              decoding="async"
              loading="eager"
              fetchPriority="high"
              width="1312"
              height="816"
            />
            <div className="portfolio-detail-hero-copy">
              <p className="eyebrow">{project.category}</p>
              <h1>{project.title}</h1>
              <p>{project.shortDescription}</p>
              <div className="portfolio-hero-meta">
                <span>{project.location}</span>
                <span>{project.year}</span>
                <span>{project.style}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container portfolio-detail-layout">
          <aside className="project-info-panel" aria-label="Informasi project">
            <p className="eyebrow">Informasi Project</p>
            <div className="project-info-list">
              {projectFacts.map(([label, value]) => (
                <div className="project-info-item" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </aside>

          <div className="project-description-panel">
            <SectionHeader
              eyebrow="Cerita Project"
              title="Dari Kebutuhan Ruang Menjadi Furniture yang Siap Digunakan."
              description={project.description}
            />
            <div className="project-story-grid">
              {storyItems.map(([title, description]) => (
                <article className="project-story-item" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted portfolio-gallery-section">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Galeri Project"
              title="Foto dari Project yang Sama."
              description="Galeri ini menampilkan beberapa dokumentasi visual dari project untuk membantu calon pelanggan melihat detail hasil pengerjaan."
            />
          </div>
          {galleryImages.length > 0 ? (
            <div className="portfolio-gallery">
              {galleryImages.map((image, index) => (
                <button
                  className={`gallery-item ${index === 0 ? "gallery-item-large" : ""}`}
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`Buka foto project ${index + 1} ${project.title}`}
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    width="1312"
                    height="816"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="eyebrow">Galeri Kosong</p>
              <h2>Foto project belum tersedia.</h2>
              <p>Galeri akan ditampilkan setelah dokumentasi project tersedia.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section material-detail-section">
        <div className="container">
          <SectionHeader
            eyebrow="Material & Finishing"
            title="Material yang Digunakan pada Project Ini."
            description={`Project ini menggunakan ${formatList([project.material, project.finishing])} untuk mendukung fungsi, tampilan, dan ketahanan furniture.`}
          />
          <div className="material-detail-grid">
            {project.materialDetails.map((material) => (
              <article className="material-detail-card" key={material.title}>
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                <ul>
                  {material.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-detail-cta-section">
        <div className="container">
          <div className="portfolio-detail-cta">
            <div>
              <p className="eyebrow">Mulai Konsultasi</p>
              <h2>Tertarik Membuat Furniture Custom Seperti Project Ini?</h2>
              <p>
                Ceritakan kebutuhan ruang, ukuran, material, dan referensi project yang Anda sukai.
                LJP akan membantu mengarahkan konsep yang sesuai dengan kebutuhan Anda.
              </p>
            </div>
            <div className="portfolio-detail-cta-actions">
              <Button
                href={formatWhatsappUrl(buildProjectConsultationMessage(project))}
                target="_blank"
                rel="noreferrer"
                variant="light"
              >
                Konsultasi Gratis via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="section related-projects-section">
          <div className="container">
            <div className="section-top">
              <SectionHeader
                eyebrow="Project Terkait"
                title="Project Lain dengan Kebutuhan yang Mirip."
                description="Lihat project lain sebagai bahan pembanding sebelum menentukan arah furniture custom yang ingin dibuat."
              />
            </div>
            <div className="portfolio-grid related-projects-grid">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard project={relatedProject} key={relatedProject.id} />
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
          aria-label={`Preview foto ${project.title}`}
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
          <figure
            className="lightbox-figure"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleLightboxTouchStart}
            onTouchEnd={handleLightboxTouchEnd}
          >
            <img
              src={selectedImage}
              alt={`${project.title} fullscreen`}
              decoding="async"
              width="1312"
              height="816"
            />
            <figcaption>
              {project.title} - {selectedImageIndex + 1}/{galleryImages.length}
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
