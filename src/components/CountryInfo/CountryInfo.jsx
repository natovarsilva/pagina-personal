import "./CountryInfo.css";

function CountryInfo({ data, loading, error }) {
  if (loading) {
    return <div className="country-info">Cargando información...</div>;
  }

  if (error) {
    return <div className="country-info">Error al cargar información</div>;
  }

  if (!data) {
    return <div className="country-info">No hay información disponible</div>;
  }

  return (
    <section className="country-info">
      <h2 className="country-info__title">DATOS DEL PAÍS</h2>

      <p className="country-info__item">
        📍{" Región: "}
        {data.region}
      </p>

      <p className="country-info__item">
        🗺️{" Capital: "}
        {data.capital?.[0]} · {data.name.common}
      </p>

      <p className="country-info__item">
        🗣️{" Idioma: "}
        {data.languages
          ? Object.values(data.languages).join(", ")
          : "N/A"}
      </p>

      <p className="country-info__item">
        💰{" Moneda: "}
        {data.currencies
          ? Object.values(data.currencies)[0].name
          : "N/A"}
      </p>
    </section>
  );
}

export default CountryInfo;