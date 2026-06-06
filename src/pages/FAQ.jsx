import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import FAQAccordion from "../components/faq/FAQAccordion";
import Button from "../components/common/Button";
import { faqs } from "../data/faqs";
import { whatsappMessages } from "../constants/whatsapp";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import { usePageMeta } from "../utils/usePageMeta";
import { primarySeoKeywords, siteUrl } from "../constants/seo";

const faqSeo = {
  title: "FAQ Jasa Custom Furniture Magelang | LJP Furniture",
  description:
    "FAQ LJP Furniture Magelang tentang jasa pembuatan furniture custom, kitchen set, lemari custom, meja custom, furniture rumah, kantor, cafe, estimasi, material, survey, dan konsultasi desain.",
  path: "/faq",
  keywords: [
    ...primarySeoKeywords,
    "jasa pembuatan furniture Magelang",
    "jasa pembuatan kitchen set Magelang",
    "jasa pembuatan lemari custom Magelang",
    "furniture sesuai ukuran",
    "furniture sesuai kebutuhan",
    "furniture custom berkualitas",
    "furniture custom premium"
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${siteUrl}/faq`,
    name: "FAQ Jasa Custom Furniture Magelang",
    inLanguage: "id-ID",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }
};

export default function FAQ() {
  usePageMeta(
    faqSeo.title,
    faqSeo.description,
    faqSeo
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
