import { useState } from "react";
import "./PhotoSlider.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

import iconNext from "../../assets/icon-next-default-blue.svg";
import iconNextHover from "../../assets/icon-next-hover-blue.svg";

import iconPrev from "../../assets/icon-previous-default-blue.svg";
import iconPrevHover from "../../assets/icon-previous-hover-blue.svg";

export default function PhotoSlider({ places }) {
    const [hovered, setHovered] = useState(null);
    
    const [index, setIndex] = useState(0);

  const visibleItems = [];
  for (let i = 0; i < 3; i++) {
  visibleItems.push(
    places[(index + i) % places.length]
  );


}

  return (
    <section className="photo-slider">

      <div className="photo-slider__container">

        <h2 className="photo-slider__title">
          Galería destacada
        </h2>

        <div className="photo-slider__wrapper">

          <div className="photo-slider__slider">

            {/* PREV */}
            <button
                className="photo-slider__nav"
                onMouseEnter={() => setHovered("prev")}
                onMouseLeave={() => setHovered(null)}
                onClick={() =>
                    setIndex((prev) =>
                    (prev - 1 + places.length) % places.length
                    )
                }
                >
                <img
                    src={hovered === "prev" ? iconPrevHover : iconPrev}
                    alt="previous"
                    className="photo-slider__icon"
                />
            </button>

            {/* CARDS */}
            <div className="photo-slider__polaroids">
              {visibleItems.map((place) => (
                <Card key={place.id} {...place} size="md" maxTags={2}/>
              ))}
            </div>

            {/* NEXT */}
            <button
                className="photo-slider__nav"
                onMouseEnter={() => setHovered("next")}
                onMouseLeave={() => setHovered(null)}
                onClick={() =>
                    setIndex((prev) =>
                    (prev + 1) % places.length
                    )
                }
                >
                <img
                    src={hovered === "next" ? iconNextHover : iconNext}
                    alt="next"
                    className="photo-slider__icon"
                />
            </button>

          </div>

          {/* BUTTON */}
          <Button to="/gallery" variant="blue" appearance="dark">
            Ver más fotos
          </Button>

        </div>
      </div>
    </section>
  );
}