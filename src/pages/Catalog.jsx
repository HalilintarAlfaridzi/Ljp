import { useMemo, useState } from "react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import ProductCard from "../components/catalog/ProductCard";
import CategoryFilter from "../components/catalog/CategoryFilter";
import FinalCTA from "../components/common/FinalCTA";
import { productCategories } from "../data/productCategories";
import { usePageMeta } from "../utils/usePageMeta";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(productCategories.map((item) => item.category))],
    []
  );
  const filteredItems =
    activeCategory === "All"
      ? productCategories
      : productCategories.filter((item) => item.category === activeCategory);

  usePageMeta(
    "Inspirasi Furniture Custom | LJP Custom Furniture Magelang",
    "Katalog inspirasi furniture custom LJP untuk kitchen set, wardrobe, office furniture, cafe restaurant furniture, custom cabinet, dan custom project di Magelang."
  );

  return (
    <>
      <PageHero
        eyebrow="Product Inspiration"
        title="Inspirasi Furniture Custom, Bukan Produk Fixed Price."
        description="Gunakan katalog ini sebagai referensi awal. Setiap desain dapat disesuaikan kembali dengan ukuran, material, warna, finishing, layout, dan fungsi ruangan Anda."
      />
      <section className="section">
        <div className="container">
          <div className="section-top">
            <SectionHeader
              eyebrow="Kategori Custom Furniture"
              title="Temukan Referensi Desain untuk Setiap Ruang."
              description="Tidak ada checkout, keranjang, atau harga satuan. Estimasi diberikan setelah kebutuhan, ukuran, dan detail project dikonsultasikan."
            />
          </div>
          <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
          <div className="product-grid">
            {filteredItems.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA
        title="Tertarik dengan Salah Satu Inspirasi?"
        description="Kirim nama desain atau referensi gambar melalui WhatsApp. LJP dapat membantu menyesuaikan konsep dengan ukuran dan kebutuhan ruangan Anda."
      />
    </>
  );
}
