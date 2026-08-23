import { Link } from "react-router-dom";

function CategoryCard({ icon, title, description, color }) {
  return (
    <div className="category-card">

      <div
        className="category-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {title === "Eco Tourism" ? (
        <Link to="/eco-tourism" className="discover-button">
          Discover →
        </Link>
      ) : (
        <button className="discover-button">
          Discover →
        </button>
      )}

    </div>
  );
}

export default CategoryCard;