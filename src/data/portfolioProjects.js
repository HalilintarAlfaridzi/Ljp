import { images } from "../constants/images";

const materialLibrary = {
  premiumPlywood: {
    title: "Multipleks Premium",
    description:
      "Material utama yang umum dipakai untuk struktur furniture custom karena kuat, stabil, dan fleksibel untuk berbagai bentuk kabinet.",
    points: ["Struktur kuat", "Tahan lama", "Cocok untuk furniture custom premium"]
  },
  woodHpl: {
    title: "HPL Motif Kayu",
    description:
      "Finishing motif kayu yang memberi tampilan hangat dan mudah dipadukan dengan interior modern.",
    points: ["Tampilan elegan", "Mudah dibersihkan", "Banyak pilihan motif"]
  },
  matteHpl: {
    title: "HPL Solid Matte",
    description:
      "Finishing warna solid dengan permukaan matte untuk tampilan bersih, modern, dan tidak terlalu memantulkan cahaya.",
    points: ["Tampilan clean", "Mudah dirawat", "Cocok untuk warna netral modern"]
  },
  decorativePanel: {
    title: "Panel Dekoratif",
    description:
      "Elemen aksen untuk memperkuat karakter ruang, terutama pada backdrop, area display, atau focal point interior.",
    points: ["Memberi dimensi visual", "Tampilan lebih premium", "Cocok untuk area representatif"]
  },
  accentLighting: {
    title: "Accent Lighting",
    description:
      "Lampu sorot atau hidden light yang dipakai untuk mempertegas backdrop, signage, dan area pelayanan agar terlihat lebih representatif.",
    points: ["Membuat area utama lebih menonjol", "Memberi kesan hangat", "Cocok untuk ruang layanan dan kantor"]
  },
  brandSignage: {
    title: "Signage Custom",
    description:
      "Elemen logo atau huruf timbul yang disesuaikan dengan identitas instansi maupun ruang bisnis.",
    points: ["Memperkuat identitas ruang", "Tampilan lebih profesional", "Proporsi mengikuti bidang backdrop"]
  },
  solidWood: {
    title: "Kayu Solid Opsional",
    description:
      "Material pendukung untuk detail tertentu yang membutuhkan karakter natural dan daya tahan tambahan.",
    points: ["Karakter natural", "Kuat untuk detail tertentu", "Memberi kesan hangat"]
  }
};

const portfolioItems = [
  {
    id: "Project RSIA Puri Agung Magelang",
    slug: "rsia-puri-agung-magelang",
    title: "Project RSIA Puri Agung Magelang",
    category: "Healthcare Interior",
    type: "Healthcare Space",
    location: "Magelang",
    year: "2026",
    style: "Warm Clinical Interior",
    material: "Multipleks Premium, HPL Motif Kayu, dan Panel Kisi Dekoratif",
    finishing: "HPL motif kayu natural, solid white, dan aksen lampu warm",
    furnitureType: "Wall panel, kisi-kisi dekoratif, dan kabinet layanan",
    shortDescription:
      "Interior ruang layanan RSIA dengan panel kayu hangat, kisi-kisi vertikal, lighting, dan furniture custom yang rapi.",
    description:
      "Project ini dibuat untuk menghadirkan ruang layanan kesehatan yang terasa bersih, hangat, dan profesional. Panel dinding motif kayu, kisi-kisi vertikal, dan pencahayaan diarahkan agar ruang tidak terasa kaku.",
    clientNeeds:
      "Client membutuhkan interior ruang layanan yang lebih representatif, mudah dirawat, dan nyaman dilihat pasien maupun tim operasional.",
    challenge:
      "Ruang perlu terlihat bersih seperti area layanan kesehatan, tetapi tetap hangat agar tidak terasa terlalu dingin atau kosong.",
    designConcept:
      "Konsep warm clinical interior diterapkan melalui panel kayu natural, bidang putih bersih, kisi-kisi vertikal, dan lampu aksen pada area backdrop.",
    solution:
      "LJP membuat wall panel custom mengikuti bidang ruangan, menambahkan kisi-kisi dekoratif, serta furniture putih yang mendukung fungsi layanan tanpa membuat ruang terasa penuh.",
    finalResult:
      "Ruang tampil lebih hangat, profesional, dan tertata dengan focal point kayu yang memperkuat kesan premium pada area layanan.",
    thumbnail: images.Project_RSIA,
    featuredImage: images.Project_RSIA,
    galleryImages: [images.Project_RSIA, images.Project_RSIA1, images.Proses_RSIA],
    materialDetails: [materialLibrary.premiumPlywood, materialLibrary.woodHpl, materialLibrary.accentLighting],
    tags: ["Healthcare", "Wall Panel", "Warm Interior"],
    whatsappMessage:
      "Halo LJP, saya melihat portfolio Project RSIA Puri Agung Magelang dan ingin konsultasi interior ruang layanan dengan konsep serupa."
  },
  {
    id: "Project Balai Desa Borobudur",
    slug: "project-balai-desa-borobudur",
    title: "Project Balai Desa Borobudur",
    category: "Office & Public Service",
    type: "Government",
    location: "Borobudur, Magelang",
    year: "2026",
    style: "Formal Contemporary",
    material: "Multipleks Premium dan Panel Dekoratif",
    finishing: "HPL cream, dark brown, dan aksen lampu warm",
    furnitureType: "Backdrop signage dan meja pelayanan",
    shortDescription:
      "Backdrop dan meja pelayanan Desa Borobudur dengan panel formal, signage, dan pencahayaan warm.",
    description:
      "Project ini berfokus pada area penerima dan pelayanan desa agar terlihat lebih rapi, formal, dan mudah dikenali melalui signage utama Desa Borobudur.",
    clientNeeds:
      "Client membutuhkan area pelayanan publik yang terlihat representatif, memiliki identitas visual jelas, dan tetap fungsional untuk aktivitas harian.",
    challenge:
      "Backdrop harus menonjol sebagai identitas ruang, sementara meja pelayanan tetap harus kuat, proporsional, dan nyaman digunakan.",
    designConcept:
      "Konsep formal contemporary dibuat melalui kombinasi panel cream, frame gelap, signage huruf timbul, dan lampu sorot warm.",
    solution:
      "LJP membuat bidang backdrop custom, menata komposisi signage, dan membangun meja pelayanan yang mengikuti proporsi ruang depan.",
    finalResult:
      "Area pelayanan terlihat lebih resmi, rapi, dan memiliki focal point yang kuat untuk menyambut pengunjung.",
    thumbnail: images.balaiDesaBorobudur,
    featuredImage: images.balaiDesaBorobudur,
    galleryImages: [images.balaiDesaBorobudur, images.balaiDesaBorobudur1, images.balaiDesaBorobudur2],
    materialDetails: [materialLibrary.premiumPlywood, materialLibrary.decorativePanel, materialLibrary.brandSignage],
    tags: ["Government", "Backdrop", "Public Service"],
    whatsappMessage:
      "Halo LJP, saya melihat portfolio Project Balai Desa Borobudur dan ingin konsultasi backdrop atau meja pelayanan custom."
  },
  {
    id: "Project Balai Desa Kaliangkrik",
    slug: "balai-desa-kaliangkrik",
    title: "Project Balai Desa Kaliangkrik",
    category: "Public Hall Interior",
    type: "Government",
    location: "Kaliangkrik, Magelang",
    year: "2026",
    style: "Modern Formal Wood Panel",
    material: "Multipleks Premium dan HPL Motif Kayu",
    finishing: "HPL light wood, dark wood, dan aksen lampu warm",
    furnitureType: "Backdrop aula dan panel dinding panggung",
    shortDescription:
      "Backdrop aula Balai Desa Kaliangkrik dengan panel kayu besar, pilar aksen gelap, dan pencahayaan formal.",
    description:
      "Project ini dibuat untuk memperkuat area panggung/aula balai desa agar terlihat lebih formal, terang, dan siap digunakan untuk kegiatan publik.",
    clientNeeds:
      "Client membutuhkan backdrop aula yang lebih representatif, rapi secara visual, dan proporsional terhadap bidang dinding serta panggung.",
    challenge:
      "Bidang dinding yang lebar perlu diolah agar tidak kosong, tetapi desain tetap harus formal dan tidak terlalu ramai.",
    designConcept:
      "Konsep modern formal diterapkan melalui grid panel kayu terang, pilar vertikal gelap, dan pencahayaan warm pada garis horizontal backdrop.",
    solution:
      "LJP membuat panel dinding custom mengikuti ukuran panggung, menambahkan aksen kolom, serta menata lampu agar bidang utama terlihat lebih hidup.",
    finalResult:
      "Area aula tampil lebih megah, rapi, dan representatif untuk kegiatan desa maupun acara formal.",
    thumbnail: images.balaiDesaKaliangkrik,
    featuredImage: images.balaiDesaKaliangkrik,
    galleryImages: [images.balaiDesaKaliangkrik, images.balaiDesaKaliangkrik1, images.balaiDesaKaliangkrik2],
    materialDetails: [materialLibrary.premiumPlywood, materialLibrary.woodHpl, materialLibrary.accentLighting],
    tags: ["Aula", "Backdrop Panggung", "Wood Panel"],
    whatsappMessage:
      "Halo LJP, saya melihat portfolio Project Balai Desa Kaliangkrik dan ingin konsultasi backdrop aula atau panel dinding custom."
  },
  {
    id: "Project DAPM Salaman",
    slug: "project-dapm-salaman",
    title: "Project DAPM Salaman",
    category: "Office Reception",
    type: "Office / Financial Service",
    location: "Salaman, Magelang",
    year: "2026",
    style: "Corporate Modern",
    material: "Multipleks Premium, Panel Dekoratif, dan Signage Custom",
    finishing: "HPL orange brand color, cream panel, dan grey counter",
    furnitureType: "Counter teller, backdrop logo, dan panel dinding kantor",
    shortDescription:
      "Interior area teller DAPM Salaman dengan counter custom, backdrop logo, dan aksen warna brand yang tegas.",
    description:
      "Project ini dibuat untuk memperkuat area layanan DAPM Salaman melalui counter teller, backdrop logo, dan panel dinding dengan warna brand yang konsisten.",
    clientNeeds:
      "Client membutuhkan area teller yang terlihat profesional, mudah dikenali, dan mendukung aktivitas pelayanan harian.",
    challenge:
      "Desain harus membawa identitas warna brand yang kuat tanpa membuat area layanan terasa terlalu berat atau penuh.",
    designConcept:
      "Konsep corporate modern diterapkan dengan kombinasi orange, cream panel, grey counter, signage logo, dan pencahayaan pada backdrop utama.",
    solution:
      "LJP membuat counter teller custom, bidang backdrop logo, dan panel dinding yang mengikuti layout ruang serta kebutuhan pelayanan.",
    finalResult:
      "Area teller tampil lebih profesional, identitas DAPM Salaman terlihat jelas, dan ruang layanan terasa lebih rapi.",
    thumbnail: images.Project_DAPM,
    featuredImage: images.Project_DAPM,
    galleryImages: [images.Project_DAPM, images.Proses_DAPM, images.Proses_DAPM1],
    materialDetails: [
      materialLibrary.premiumPlywood,
      materialLibrary.matteHpl,
      materialLibrary.decorativePanel,
      materialLibrary.brandSignage
    ],
    tags: ["Office Reception", "Counter Teller", "Corporate Interior"],
    whatsappMessage:
      "Halo LJP, saya melihat portfolio Project DAPM Salaman dan ingin konsultasi counter teller atau backdrop kantor custom."
  }
];

export const portfolioProjects = portfolioItems.map((project) => ({
  ...project,
  image: project.thumbnail,
  gallery: project.galleryImages
}));

export function getPortfolioBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getRelatedPortfolios(project, limit = 3) {
  if (!project) return [];

  const sameCategory = portfolioProjects.filter(
    (item) => item.slug !== project.slug && item.category === project.category
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const sameType = portfolioProjects.filter(
    (item) =>
      item.slug !== project.slug &&
      item.category !== project.category &&
      item.type === project.type
  );

  return [...sameCategory, ...sameType].slice(0, limit);
}
