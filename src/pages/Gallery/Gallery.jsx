import { useState, useEffect } from "react";
import "./Gallery.css";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import places from "../../data/places";
import Loader from "../../components/Loader/Loader";

export default function Gallery() {
  const [activeTags, setActiveTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [visibleCount, setVisibleCount] = useState(3);

  // estados UX
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);
  const [lastLoadCount, setLastLoadCount] = useState(0);

  // FILTRO
  const filteredPlaces = places.filter((place) => {
    const matchesTags =
      activeTags.length === 0 ||
      place.tags.some((tag) => activeTags.includes(tag));

    const text = `
      ${place.country}
      ${place.title}
      ${place.author}
      ${place.year}
      ${place.tags.join(" ")}
    `.toLowerCase();

    const matchesSearch = text.includes(searchTerm.toLowerCase());

    return matchesTags && matchesSearch;
  });

  // visibles
  const visiblePlaces = filteredPlaces.slice(0, visibleCount);

  // reset cuando cambian filtros
  useEffect(() => {
    setVisibleCount(3);
    setHasLoadedMore(false);
    setLastLoadCount(0);
  }, [activeTags, searchTerm]);

  // limpiar error si cambian filtros
  useEffect(() => {
    setError(false);
  }, [activeTags, searchTerm]);

  // cargar más
  const handleLoadMore = () => {
    setIsLoading(true);
    setError(false);
    setHasLoadedMore(true);

    setTimeout(() => {
      const fail = false;

      if (fail) {
        setError(true);
      } else {
        const prevCount = visibleCount;
        const newCount = prevCount + 3;

        const nextVisible = Math.min(newCount, filteredPlaces.length);

        setVisibleCount(nextVisible);

        setLastLoadCount(nextVisible - prevCount);
      }

      setIsLoading(false);
    }, 1200);
  };

  return (
    <section className="gallery">
      <div className="gallery__container">

        <SearchBar
          activeTags={activeTags}
          setActiveTags={setActiveTags}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* GRID */}
        {filteredPlaces.length > 0 && (
          <div className="gallery__grid">
            {visiblePlaces.map((place) => (
              <Card
                key={place.id}
                id={place.id}
                size="lg"
                image={place.image}
                country={place.country}
                title={place.title}
                author={place.author}
                year={place.year}
                tags={place.tags}
                slug={place.slug}
              />
            ))}
          </div>
        )}

        {/* FOOTER */}
        <div className="gallery__footer">

          {/* ERROR */}
          {error && (
            <div className="gallery__error">
              <p>
                Lo sentimos!<br />
                No pudimos cargar la información
              </p>
              <button 
                className="button button--blue button--dark"
                onClick={handleLoadMore}>
                Volver a cargar
              </button>
            </div>
          )}

          {/* LOADING */}
          

          {/* EMPTY (sin resultados de búsqueda) */}
          {!isLoading && !error && filteredPlaces.length === 0 && (
            <div className="gallery__empty-wrapper">
              <p className="gallery__message">
                Lo sentimos!<br />
                No encontramos fotos para mostrar en este momento<br />
                Estamos trabajando para compartir más fotos hermosas
              </p>
            </div>
          )}

          {/* VER MÁS (DEFAULT STATE) */}
          {/* BOTÓN / LOADER */}
          {!error && filteredPlaces.length > 0 && visibleCount < filteredPlaces.length && (
            isLoading ? (
              <Loader />
            ) : (
              <button
                className="button button--blue button--dark gallery__more"
                onClick={handleLoadMore}
              >
                Ver más
              </button>
            )
          )}

        </div>
      </div>
    </section>
  );
}