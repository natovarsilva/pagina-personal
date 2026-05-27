import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import places from "../../data/places";
import { getCountryByName } from "../../services/api";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import "./PlaceDetail.css";
import Tag from "../../components/Tag/Tag";
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";

function PlaceDetail() {
  const { slug } = useParams();

  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const place = places.find((p) => p.slug === slug);

  useEffect(() => {
    if (!place) return;

    setLoading(true);
    setError(false);

    getCountryByName(place.countryApi)
      .then((data) => {
        setCountryData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [place]);

  if (!place) return <div>Lugar no encontrado</div>;

  return (
  <>
    <div className="place-detail">
      <div className="place-detail__container">
        <div className="place-detail__grid">

          {/* IZQUIERDA */}
          <div className="place-detail__left">

            <img
              src={place.image}
              alt={place.title}
              className="place-detail__image protected-image"
              draggable={false}
            />

            <div className="place-meta">
              <div className="place-meta__line"></div>

              <div className="place-meta__content">
                <div className="place-meta__header">
                  <h3 className="place-meta__title">
                    {place.title}, {place.country}
                  </h3>

                  <span className="place-meta__year">{place.year}</span>
                </div>

                <p className="place-meta__author">
                  Fotógrafa: Natalia Tovar S.
                </p>

                <div className="place-meta__tags">
                  {place.tags.map((tag, index) => (
                    <Tag key={index} variant="olive" size="md">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>

            <CountryInfo
              data={countryData}
              loading={loading}
              error={error}
            />
          </div>

          {/* DERECHA */}
          <div className="place-detail__right">
            <h1 className="place-detail__title">{place.title}</h1>

            <p className="place-detail__text">
              {place.story}
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* SLIDER */}
    <PhotoSlider places={places.filter((p) => p.slug !== slug)} />

  </>
);
  
}

export default PlaceDetail;