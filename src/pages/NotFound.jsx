import Button from "../components/common/Button";
import { usePageMeta } from "../utils/usePageMeta";

export default function NotFound() {
  usePageMeta("Halaman Tidak Ditemukan | LJP Custom Furniture", "Halaman yang Anda cari tidak tersedia.", {
    robots: "noindex, follow"
  });

  return (
    <section className="page-hero not-found">
      <div className="container page-hero-inner">
        <p className="eyebrow">404</p>
        <h1>Halaman Tidak Ditemukan.</h1>
        <p>Gunakan navigasi utama untuk kembali melihat profil, catalog, atau portfolio LJP.</p>
        <Button to="/">Kembali ke Beranda</Button>
      </div>
    </section>
  );
}
