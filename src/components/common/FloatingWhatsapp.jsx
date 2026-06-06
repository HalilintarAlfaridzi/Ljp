import { MessageCircle } from "lucide-react";
import { formatWhatsappUrl } from "../../utils/formatWhatsappUrl";
import { whatsappMessages } from "../../constants/whatsapp";

export default function FloatingWhatsapp() {
  return (
    <a
      className="floating-whatsapp"
      href={formatWhatsappUrl(whatsappMessages.general)}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi WhatsApp LJP"
    >
      <MessageCircle size={21} aria-hidden="true" />
      <span>Konsultasi</span>
    </a>
  );
}
