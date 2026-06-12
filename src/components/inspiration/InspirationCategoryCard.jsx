import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function InspirationCategoryCard({ category, featured = false }) {
  return (
    <motion.article
      className={`inspiration-category-card ${featured ? "inspiration-category-card-featured" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.42 }}
    >
      <Link
        className="inspiration-category-link"
        to={`/catalog?category=${category.slug}`}
        aria-label={`Lihat catalog ${category.title}`}
      >
        <div className="inspiration-category-image">
          <img src={category.coverImage} alt={`Inspirasi ${category.title} LJP Custom Furniture`} loading="lazy" />
          <span>{category.count} Desain</span>
        </div>
        <div className="inspiration-category-body">
          <h3>{category.title}</h3>
          <p>{category.description}</p>
          <span className="category-card-cta">
            <span>Lihat Catalog</span>
            <ArrowRight size={18} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
