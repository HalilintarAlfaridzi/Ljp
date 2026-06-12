import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Layers, Palette, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import CategoryFilter from "../components/catalog/CategoryFilter";
import InspirationCard from "../components/inspiration/InspirationCard";
import { inspirationCategories } from "../data/inspirationDesigns";
import { whatsappMessages } from "../constants/whatsapp";
import { primarySeoKeywords, siteUrl } from "../constants/seo";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import { usePageMeta } from "../utils/usePageMeta";

const allCategoriesLabel = "Semua Catalog";

const catalogSeo = {
  title: "Catalog Furniture LJP | Kitchen Set, Wardrobe, TV Cabinet & Custom",
  description:
    "Catalog desain furniture LJP berisi referensi kitchen set, wardrobe, bedroom set, TV cabinet, office furniture, cafe furniture, dan custom furniture.",
  path: "/catalog",
  keywords: [
    ...primarySeoKeywords,
    "catalog furniture custom Magelang",
    "catalog kitchen set Magelang",
    "catalog wardrobe custom",
    "referensi furniture custom",
    "desain furniture custom Magelang"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${siteUrl}/catalog`,
    name: "Catalog Furniture LJP",
    description:
      "Catalog desain furniture LJP untuk membantu pelanggan melihat referensi model, gaya, warna, dan material furniture custom.",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` }
  }
};

function DetailList({ icon: Icon, title, items }) {
  return (
    <div className="inspiration-detail-list">
      <h3>
        <Icon size={18} aria-hidden="true" />
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function buildCatalogMessage(item) {
  return `Halo LJP, saya melihat catalog ${item.title} di website dan ingin konsultasi apakah desain ini bisa disesuaikan dengan ukuran, material, dan kebutuhan ruangan saya.`;
}

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(allCategoriesLabel);
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = useMemo(
    () => [allCategoriesLabel, ...inspirationCategories.map((category) => category.title)],
    []
  );

  const catalogItems = useMemo(
    () =>
      inspirationCategories.flatMap((category) =>
        category.inspirations.map((item) => ({
          ...item,
          category: category.title,
          categorySlug: category.slug
        }))
      ),
    []
  );

  const filteredItems =
    activeCategory === allCategoriesLabel
      ? catalogItems
      : catalogItems.filter((item) => item.category === activeCategory);

  usePageMeta(catalogSeo.title, catalogSeo.description, catalogSeo);

  useEffect(() => {
    const categorySlug = searchParams.get("category");
    const matchingCategory = inspirationCategories.find((category) => category.slug === categorySlug);
    setActiveCategory(matchingCategory?.title || allCategoriesLabel);
  }, [searchParams]);

  const handleCategoryChange = (categoryTitle) => {
    setActiveCategory(categoryTitle);

    if (categoryTitle === allCategoriesLabel) {
      setSearchParams({});
      return;
    }

    const category = inspirationCategories.find((item) => item.title === categoryTitle);
    setSearchParams(category ? { category: category.slug } : {});
  };

  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Catalog Desain Furniture Custom LJP."
        description="Lihat kumpulan referensi desain furniture berdasarkan kategori. Semua desain dapat dikonsultasikan ulang sesuai ukuran, material, warna, finishing, dan kebutuhan ruangan."
      />

      <section className="section">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Galeri Catalog"
              title="Semua Referensi Desain dalam Satu Halaman."
              description="Pilih kategori untuk menyaring catalog, lalu klik gambar untuk melihat detail gaya desain, rekomendasi material, warna, dan kelebihan desain."
            />
            <Button href={formatWhatsappUrl(whatsappMessages.catalog)} target="_blank" rel="noreferrer">
              Konsultasi Catalog
            </Button>
          </div>

          <CategoryFilter categories={categories} active={activeCategory} onChange={handleCategoryChange} />

          <div className="inspiration-design-grid catalog-design-grid">
            {filteredItems.map((item) => (
              <InspirationCard
                inspiration={item}
                key={`${item.categorySlug}-${item.id}`}
                onSelect={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedItem ? (
        <div
          className="inspiration-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail catalog ${selectedItem.title}`}
          onClick={() => setSelectedItem(null)}
        >
          <div className="inspiration-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button
              className="inspiration-modal-close"
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Tutup detail catalog"
            >
              <X size={22} aria-hidden="true" />
            </button>

            <div className="inspiration-modal-media">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>

            <div className="inspiration-modal-content">
              <p className="eyebrow">{selectedItem.category}</p>
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>

              <div className="inspiration-spec-grid">
                <DetailList icon={Layers} title="Material Rekomendasi" items={selectedItem.materials} />
                <DetailList icon={Palette} title="Warna Rekomendasi" items={selectedItem.colors} />
                <DetailList icon={CheckCircle2} title="Kelebihan Desain" items={selectedItem.benefits} />
              </div>

              <div className="inspiration-modal-cta">
                <div>
                  <h3>Suka dengan desain ini?</h3>
                  <p>Kirim referensi catalog ini untuk mulai konsultasi furniture custom.</p>
                </div>
                <Button
                  href={formatWhatsappUrl(buildCatalogMessage(selectedItem))}
                  target="_blank"
                  rel="noreferrer"
                >
                  Konsultasikan Desain Ini
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
