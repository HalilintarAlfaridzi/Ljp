import Button from "./Button";
import { formatWhatsappUrl } from "../../utils/formatWhatsappUrl";
import { whatsappMessages } from "../../constants/whatsapp";

export default function FinalCTA({
  title = "Punya Ide Furniture Custom untuk Rumah atau Bisnis Anda?",
  description = "Ceritakan kebutuhan ruangan Anda kepada LJP. Kami bantu arahkan pilihan desain, material, dan estimasi pengerjaan yang sesuai.",
  secondaryTo = "/catalog",
  secondaryLabel = "Lihat Catalog"
}) {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta">
          <div>
            <p className="eyebrow">Mulai Konsultasi</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="final-cta-actions">
            <Button href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
              Konsultasi WhatsApp Sekarang
            </Button>
            <Button to={secondaryTo} variant="light">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
