import "./Hero.css";
import heroImg from "../../assets/photo-hero.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        {/* TEXTO */}
        <div className="hero__content">
          <h1 className="hero__quote">
            Viajar no es solo conocer el mundo,
            es conocerte a ti misma
          </h1>

          <p className="hero__author">
            Natalia Tovar Silva
          </p>
        </div>

        {/* IMAGEN */}
        <div className="hero__image-wrapper">
          <img src={heroImg} alt="Natalia viajando" className="hero__image" draggable={false}/>
        </div>

      </div>
    </section>
  );
}

export default Hero;