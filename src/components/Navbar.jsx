import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router";

import { Gem, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [menuOpen]);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">
          <Link
            to="/"
            className="brand"
            onClick={closeMenu}
            aria-label="Suranga Gems home"
          >
            <Gem
              className="brand-diamond"
              strokeWidth={1.25}
            />

            <div className="brand-text">
              <span className="brand-main">
                SURANGA
              </span>

              <span className="brand-sub">
                GEMS
              </span>

              <span className="brand-country">
                MADAGASCAR · SRI LANKA
              </span>
            </div>
          </Link>

          <nav
            id="primary-navigation"
            className={`nav-menu ${
              menuOpen ? "nav-menu-open" : ""
            }`}
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              end
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            aria-controls="primary-navigation"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((current) => !current);
            }}
          >
            {menuOpen ? (
              <X size={27} />
            ) : (
              <Menu size={27} />
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
}

export default Navbar;