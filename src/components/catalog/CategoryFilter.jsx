export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="filter-row" aria-label="Filter kategori">
      {categories.map((category) => (
        <button
          className={`filter-pill ${active === category ? "active" : ""}`}
          key={category}
          type="button"
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
