import { motion } from "framer-motion";
import Button from "../common/Button";
import { formatWhatsappUrl } from "../../utils/formatWhatsappUrl";

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      className={`project-card ${featured ? "project-card-featured" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <div className="card-image">
        <img loading="lazy" src={project.image} alt={`${project.title} oleh LJP di ${project.location}`} />
        <span>{project.type}</span>
      </div>
      <div className="card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.location}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-detail-grid">
          <div>
            <strong>Kebutuhan</strong>
            <p>{project.challenge}</p>
          </div>
          <div>
            <strong>Solusi</strong>
            <p>{project.solution}</p>
          </div>
        </div>
        <Button
          href={formatWhatsappUrl(project.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          variant="outline"
        >
          Ingin Project Seperti Ini?
        </Button>
      </div>
    </motion.article>
  );
}
