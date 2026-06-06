import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import FAQAccordion from "../components/faq/FAQAccordion";
import Button from "../components/common/Button";
import { faqs } from "../data/faqs";
import { whatsappMessages } from "../constants/whatsapp";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import { usePageMeta } from "../utils/usePageMeta";

export default function FAQ() {
  usePageMeta(
    "FAQ Custom Furniture Magelang | LJP Custom Furniture",
    "Pertanyaan umum tentang custom order, estimasi harga, konsultasi desain, area layanan, referensi desain, dan survey lokasi LJP Custom Furniture."
  );

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Jawaban untuk Pertanyaan Umum Custom Furniture."
        description="FAQ ini membantu menjelaskan bahwa furniture LJP dibuat custom, sehingga harga, material, ukuran, dan waktu pengerjaan menyesuaikan kebutuhan project."
      />
      <section className="section">
        <div className="container faq-page-grid">
          <div>
            <SectionHeader
              eyebrow="Sebelum Konsultasi"
              title="Belum Punya Detail Lengkap Tidak Masalah."
              description="Anda bisa mulai dari jenis ruangan, referensi desain, atau foto area. Detail ukuran dan material bisa didiskusikan bertahap."
            />
            <Button href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
              Tanya via WhatsApp
            </Button>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
