export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div
        className="container page-hero-inner"
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
