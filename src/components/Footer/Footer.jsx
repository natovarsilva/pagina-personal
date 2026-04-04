import logo from "../../assets/logo_light.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__wrapper">

          {/* 🔝 TOP */}
          <div className="footer__top">

            {/* COL 1 */}
            <div className="footer__col">
              <h4 className="footer__title">Fotografías</h4>
              <ul className="footer__list">
                <li>Naturaleza</li>
                <li>Atardeceres</li>
                <li>Agua</li>
                <li>Montaña</li>
                <li>Animales</li>
              </ul>
            </div>

            {/* COL 2 */}
            <div className="footer__col">
              <h4 className="footer__title">Galería</h4>
            </div>

            {/* COL 3 */}
            <div className="footer__col">
              <h4 className="footer__title">Contacto</h4>
              <ul className="footer__list">
                <li>Behance</li>
              </ul>
            </div>

          </div>

          {/* 🔻 LOGO */}
          <div className="footer__bottom">
            <img src={logo} alt="Logo" className="footer__logo" />
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;