import { images } from "../constants/images";

export const portfolioProjects = [
  {
    id: 1,
    title: "Project Balai Desa Borobudur",
    slug: "Project Balai Desa Borobudur ",
    category: "Office",
    type: "Residential",
    location: "Kabupaten Magelang",
    description:
      "Project Backdrop dari Balai Desa Borobudur",
    challenge:
      "Klien membutuhkan yang rapi, fungsional, dan sesuai ukuran .",
    solution:
      "LJP membuat layout kabinet custom dengan area penyimpanan yang menyesuaikan kebutuhan penggunaan harian.",
    image: images.Project_Balai_desa_Borobudur,
    gallery: [images.kitchen, images.material, images["TV CABINET"]],
    tags: ["Backdrop", "Office", "Natural Wood"],
    whatsappMessage:
      "Halo LJP, saya melihat portfolio Set Project dan ingin konsultasi project serupa."
  },
  {
    id: 2,
    title: "Warm Wood Wardrobe Project",
    slug: "warm-wood-wardrobe-project",
    category: "Wardrobe",
    type: "Residential",
    location: "Magelang",
    description:
      "Wardrobe custom dengan tampilan clean dan kapasitas penyimpanan yang disesuaikan dengan kebutuhan kamar.",
    challenge:
      "Ruangan membutuhkan lemari pakaian yang tidak memakan banyak area namun tetap memiliki storage besar.",
    solution:
      "Desain wardrobe dibuat custom mengikuti ukuran dinding dan kebutuhan penyimpanan klien.",
    image: images.wardrobe,
    gallery: [images.wardrobe, images.Sofa],
    tags: ["Wardrobe", "Storage", "Minimalist"],
    whatsappMessage:
      "Halo LJP, saya tertarik dengan portfolio Wardrobe dan ingin konsultasi."
  },
  {
    id: 3,
    title: "Cafe Furniture Custom Project",
    slug: "cafe-furniture-custom-project",
    category: "Cafe",
    type: "Commercial Space",
    location: "Bandar Lampung, Pangkal Pinang",
    description:
      "Furniture custom untuk cafe dengan konsep hangat, natural, dan nyaman untuk pelanggan.",
    challenge:
      "Pemilik cafe membutuhkan furniture yang sesuai konsep tempat dan tetap kuat untuk penggunaan harian.",
    solution:
      "LJP menyesuaikan desain meja, seating, dan elemen furniture dengan layout cafe.",
    image: images.ProjectCafe,
    gallery: [images["Meja Makan"], images.material],
    tags: ["Cafe", "Commercial", "Natural Wood"],
    whatsappMessage:
      "Halo LJP, saya melihat portfolio furniture cafe dan ingin konsultasi untuk tempat usaha saya."
  },
  {
    id: 4,
    title: "Project Balai Desa Kaliangkrik",
    slug: "Project Balai Desa Kaliangkrik",
    category: "Office",
    type: "Office",
    location: "Desa Kaliangkrik",
    description:
      "Project Backdrop Balai Desa Kaliangkrik",
    challenge:
      "Area kantor membutuhkan storage terintegrasi tanpa membuat ruang terasa penuh.",
    solution:
      "Layout furniture dibuat mengikuti alur kerja tim dengan komposisi storage dan meja kerja yang seimbang.",
    image: images["Project Balai desa Kaliangkrik"],
    gallery: [images["Meja Kerja"], images["TV CABINET"]],
    tags: ["Office", "Work Desk", "Storage", "Backdrop"],
    whatsappMessage:
      "Halo LJP, saya melihat portfolio Office Cabinet & Work Desk Project dan ingin konsultasi kebutuhan furniture kantor."
  },
  {
    id: 5,
    title: "Divan",
    slug: "Divan",
    category: "Living Room",
    type: "Residential",
    location: "Muntilan",
    description:
      "Divan dengan tampilan clean dan storage tertutup.",
    challenge:
      "Ruang keluarga perlu terlihat rapi tanpa mengorbankan kebutuhan penyimpanan.",
    solution:
      "Desain Divan yang sangat elegan.",
    image: images.Divan,
    gallery: [images.Sofa, images["TV CABINET"]],
    tags: ["Kasur", "Divan", "Residential"],
    whatsappMessage:
      "Halo LJP, saya melihat portfolio Modern Living Cabinet Project dan ingin konsultasi backdrop TV atau cabinet custom."
  },
  {
    id: 6,
    title: "Project Kamar KOS",
    slug: "Kamar Kos",
    category: "Commercial Space",
    type: "Commercial Space",
    location: "Kota Magelang",
    description:
      "Interior dari kamar kos yang menyesuaikan dengan ukuran kamar.",
    challenge:
      "Membuat layout dan interior kamar kos sesuai dengan ukuran kamar.",
    solution:
      "Interior dibuat dengan pembagian display dan penyimpanan yang menyesuaikan flow ruang.",
    image: images.KamarKOS,
    gallery: [images["Project Interior RSIA Puri Agung Magelang"], images.material],
    tags: ["Commercial", "Display", "Divan", "Interior"],
    whatsappMessage:
      "Halo LJP, saya tertarik dengan Commercial Display Cabinet dan ingin konsultasi project custom untuk ruang bisnis."
  }
];
