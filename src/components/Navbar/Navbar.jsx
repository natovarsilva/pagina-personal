import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_dark.svg";
import menuIcon from "../../assets/icon-menu.svg";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* LOGO */}
        <Link to="/" className="navbar__logo-link">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="navbar__links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/gallery">Galería</NavLink>
            <Link to="/#about">Sobre mí</Link>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="navbar__menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menuIcon} alt="menu" />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="navbar__mobile">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Galería</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>Sobre mí</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;