import { siteConfig } from "./siteConfig";

export const whatsappMessages = {
  general:
    "Halo LJP, saya ingin konsultasi custom furniture.\n\nJenis kebutuhan:\n- Produk/Ruangan: \n- Lokasi: \n- Referensi desain: \n- Perkiraan ukuran: \n- Kebutuhan utama: \n\nSaya ingin bertanya estimasi desain, material, dan pengerjaannya.",
  catalog:
    "Halo LJP, saya tertarik dengan inspirasi desain di website. Saya ingin konsultasi apakah desain ini bisa disesuaikan untuk ruangan saya.\n\nLokasi saya di:\nKebutuhan saya:",
  portfolio:
    "Halo LJP, saya melihat portfolio di website dan tertarik membuat furniture custom dengan konsep yang mirip.\n\nLokasi saya di:\nSaya ingin konsultasi estimasi desain, material, dan pengerjaannya."
};

export const defaultWhatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessages.general
)}`;
