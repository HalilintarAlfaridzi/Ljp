import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, featured = false }) {
  const detailPath = `/portfolio/${project.slug}`;
  const image = project.thumbnail || project.image;
  const description = project.shortDescription || project.description;

  return (
    <motion.article
      className={`project-card ${featured ? "project-card-featured" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <Link className="project-card-link" to={detailPath} aria-label={`Lihat detail project ${project.title}`}>
        <div className="card-image">
          <img
            decoding="async"
            loading={featured ? "eager" : "lazy"}
            src={image}
            alt={`${project.title} oleh LJP Custom Furniture`}
          />
          <span>{project.category}</span>
        </div>
        <div className="card-body">
          <div className="project-meta">
            <span>{project.category}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{description}</p>
          <div className="project-detail-grid">
            <div>
              <strong>Jenis Furniture</strong>
              <p>{project.furnitureType}</p>
            </div>
            <div>
              <strong>Style</strong>
              <p>{project.style}</p>
            </div>
          </div>
          <span className="btn btn-outline project-card-cta">
            <span>Lihat Detail Project</span>
            <ArrowRight size={18} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
