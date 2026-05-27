import "./InfoBanner.css";
import Button from "../Button/Button.jsx";

function InfoBanner() {
  return (
    <section id="about" className="info-banner">
      <div className="info-banner__container">

        <div className="info-banner__wrapper">
          
          <h2 className="info-banner__title h-lg">
            Sobre mi
          </h2>

          <p className="info-banner__text body-xl">
            Soy una apasionada por la fotografía, una forma de ver y sentir el mundo desde mi propia perspectiva.
            <br /><br />
            Me gusta capturar detalles, espacios y momentos que muchas veces pasan desapercibidos, encontrando belleza en lo cotidiano y en aquello que normalmente no nos detenemos a observar.
            <br /><br />
            A través de cada imagen, comparto mis viajes, mis experiencias y mi forma de interpretar los lugares que visito, mostrando cómo la perspectiva puede transformar completamente lo que vemos.
            <br /><br />
            Mi fotografía es una invitación a detenerse, observar y descubrir nuevas formas de sentir cada instante. Es también un pedacito de mí que quiero compartir con el mundo, para que otros puedan conocerlo a través de mis ojos y de mis fotos.          </p>

          <div className="info-banner__button-wrapper">
            <Button to="/gallery" variant="olive" appearance="dark">
              Ir a galería
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default InfoBanner;