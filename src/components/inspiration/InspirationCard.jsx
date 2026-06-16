export default function InspirationCard({ inspiration, onSelect }) {
  return (
    <button
      className="inspiration-design-card"
      type="button"
      onClick={onSelect}
    >
      <div className="inspiration-design-image">
        <img
          src={inspiration.image}
          alt={inspiration.title}
          loading="lazy"
          decoding="async"
          width="1200"
          height="900"
        />
        <span>{inspiration.style}</span>
      </div>
      <div className="inspiration-design-body">
        <h3>{inspiration.title}</h3>
        <p>{inspiration.description}</p>
      </div>
    </button>
  );
}
