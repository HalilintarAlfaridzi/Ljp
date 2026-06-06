import { motion } from "framer-motion";
import Button from "../common/Button";
import { formatWhatsappUrl } from "../../utils/formatWhatsappUrl";

export default function ProductCard({ item }) {
  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <div className="card-image">
        <img loading="lazy" src={item.image} alt={`${item.title} custom furniture LJP Magelang`} />
        <span>{item.category}</span>
      </div>
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="tag-list">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="card-note">Ukuran, material, warna, finishing, dan layout dapat disesuaikan.</p>
        <Button
          href={formatWhatsappUrl(item.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          variant="outline"
        >
          Konsultasikan Desain Ini
        </Button>
      </div>
    </motion.article>
  );
}
