// Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header-container container">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" width={260} height={40} />
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink onClick={() => setMenuOpen(false)} to="/" className={"a"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/about"
              className={"a"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/recipes"
              className={"a"}
            >
              Recipes
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btm-menu">
          <Link to={"/recipes"}>Browse recipes</Link>
        </button>
        <button className="btn-mobileEL" onClick={toggleMenu}>
          <img src="/images/icon-hamburger-menu.svg" alt="menu icon" />
        </button>
      </div>

      {menuOpen && (
        <ul className="nav-list-mobile">
          <li>
            <NavLink onClick={() => setMenuOpen(false)} to="/" className={"a"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/about"
              className={"a"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/recipes"
              className={"a"}
            >
              Recipes
            </NavLink>
          </li>
          <button className="btn-mabil bl">
            <Link>Browse recipes</Link>
          </button>
        </ul>
      )}
    </header>
  );
}

export default Header;
