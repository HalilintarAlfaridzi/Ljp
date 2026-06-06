import { Clock, MapPin, MessageCircle, Navigation, Send } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import { siteConfig } from "../constants/siteConfig";
import { whatsappMessages } from "../constants/whatsapp";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import { usePageMeta } from "../utils/usePageMeta";

export default function Contact() {
  usePageMeta(
    "Kontak LJP Custom Furniture Magelang",
    "Hubungi LJP Custom Furniture di Kabupaten Magelang dekat kantor KPU untuk konsultasi kitchen set, wardrobe, cabinet, furniture kantor, cafe, restoran, dan project custom."
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Konsultasikan Kebutuhan Furniture Custom Anda."
        description="Ceritakan jenis furniture, lokasi, ukuran perkiraan, referensi desain, atau foto ruangan melalui WhatsApp. Konsultasi awal bisa dimulai dari kebutuhan kasar."
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeader
              eyebrow="Hubungi LJP"
              title="Chat WhatsApp untuk Mulai Diskusi Project."
              description="LJP berbasis di Kabupaten Magelang dan dapat melayani area sekitar sesuai kebutuhan project."
            />
            <div className="contact-list">
              <div>
                <MapPin size={22} aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </div>
              <div>
                <Clock size={22} aria-hidden="true" />
                <span>Jam operasional mengikuti jadwal konsultasi dan project.</span>
              </div>
              <div>
                <MessageCircle size={22} aria-hidden="true" />
                <span>WhatsApp aktif untuk konsultasi desain, estimasi, dan survey lokasi.</span>
              </div>
            </div>
            <Button href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
              Chat WhatsApp Sekarang
            </Button>
          </div>
          <div className="contact-panel">
            <h2>Area Layanan</h2>
            <div className="service-area-list">
              {siteConfig.serviceAreas.map((area) => (
                <span key={area}>
                  <Navigation size={16} aria-hidden="true" />
                  {area}
                </span>
              ))}
            </div>
            <div className="message-example">
              <h3>Contoh pesan konsultasi</h3>
              <p>
                Halo LJP, saya ingin konsultasi custom furniture untuk dapur/ruang kantor/cafe. Lokasi
                saya di Magelang. Saya ingin bertanya estimasi desain, material, dan pengerjaannya.
              </p>
            </div>
            <a className="inline-wa" href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
              <Send size={18} aria-hidden="true" />
              Kirim pesan otomatis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
