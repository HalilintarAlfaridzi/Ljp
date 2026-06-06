import { siteConfig } from "../constants/siteConfig";
import { whatsappMessages } from "../constants/whatsapp";

export function formatWhatsappUrl(message = whatsappMessages.general) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
