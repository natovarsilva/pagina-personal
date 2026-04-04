import { Link } from "react-router-dom";

function LocationCard({ place }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "12px",
        background: "#fff",
      }}
    >
      <p style={{ fontSize: "12px", color: "#777" }}>
        {place.country.toUpperCase()}
      </p>

      <Link to={`/places/${place.id}`} style={{ textDecoration: "none" }}>
        <h3 style={{ marginTop: "8px", color: "#222" }}>
          {place.title}
        </h3>
      </Link>
    </div>
  );
}

export default LocationCard;