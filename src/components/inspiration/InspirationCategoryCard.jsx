import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function InspirationCategoryCard({ category, featured = false }) {
  return (
    <article
      className={`inspiration-category-card ${featured ? "inspiration-category-card-featured" : ""}`}
    >
      <Link
        className="inspiration-category-link"
        to={`/catalog?category=${category.slug}`}
        aria-label={`Lihat catalog ${category.title}`}
      >
        <div className="inspiration-category-image">
          <img
            src={category.coverImage}
            alt={`Catalog ${category.title} LJP Custom Furniture`}
            loading="lazy"
            decoding="async"
            width="736"
            height="920"
          />
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
    </article>
  );
}
