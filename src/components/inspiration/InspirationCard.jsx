import { motion } from "framer-motion";

export default function InspirationCard({ inspiration, onSelect }) {
  return (
    <motion.button
      className="inspiration-design-card"
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.38 }}
    >
      <div className="inspiration-design-image">
        <img src={inspiration.image} alt={inspiration.title} loading="lazy" />
        <span>{inspiration.style}</span>
      </div>
      <div className="inspiration-design-body">
        <h3>{inspiration.title}</h3>
        <p>{inspiration.description}</p>
      </div>
    </motion.button>
  );
}
