import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import {
  ArrowUpRight,
  Gem,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navigationItems = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
  { label: "Contact Us", to: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeButtonRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
  const handleDesktopResize = () => {
    if (window.innerWidth > 900) {
      setMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  handleDesktopResize();

  window.addEventListener("resize", handleDesktopResize);

  return () => {
    window.removeEventListener("resize", handleDesktopResize);
  };
}, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
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
            <Gem className="brand-diamond" strokeWidth={1.25} />

            <div className="brand-text">
              <span className="brand-main">SURANGA</span>
              <span className="brand-sub">GEMS</span>
              <span className="brand-country">MADAGASCAR · SRI LANKA</span>
            </div>
          </Link>

          <nav className="nav-menu nav-menu-desktop" aria-label="Main navigation">
            {navigationItems.map(({ label, to, end }) => (
              <NavLink key={to} to={to} end={end}>
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            aria-controls="mobile-navigation-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={27} />}
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`nav-backdrop ${menuOpen ? "nav-backdrop-open" : ""}`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
      />

      <aside
        id="mobile-navigation-drawer"
        className={`mobile-nav-drawer ${menuOpen ? "mobile-nav-drawer-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-header">
          <Link to="/" className="mobile-nav-brand" onClick={closeMenu}>
            <Gem strokeWidth={1.2} />
            <span>
              <strong>SURANGA GEMS</strong>
              <small>MADAGASCAR · SRI LANKA</small>
            </span>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-nav-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {navigationItems.map(({ label, to, end }, index) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={closeMenu}
              style={{ "--nav-index": index }}
            >
              <span>{label}</span>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </NavLink>
          ))}
        </nav>

        <div className="mobile-nav-connect">
          <p>Connect</p>

          <div className="mobile-nav-contact-links">
            <a
              href="https://wa.me/94000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a href="mailto:info@surangagems.com">
              <Mail size={18} />
              <span>Email</span>
            </a>

            <a href="tel:+94000000000">
              <Phone size={18} />
              <span>Call</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
