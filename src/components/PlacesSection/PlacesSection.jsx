import { useState } from "react";
import LocationCard from "../LocationCard/LocationCard";
import Button from "../Button/Button";
import places from "../../data/places";

function PlacesSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {places.slice(0, visibleCount).map((place) => (
          <LocationCard key={place.id} place={place} />
        ))}
      </div>

      {visibleCount < places.length && (
        <Button onClick={handleShowMore}>Ver más</Button>
      )}
    </section>
  );
}

export default PlacesSection;