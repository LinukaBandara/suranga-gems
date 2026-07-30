import { Link } from "react-router";

import {
  Gem,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link
            to="/"
            className="brand"
            aria-label="Suranga Gems home"
          >
            <Gem
              className="brand-diamond"
              strokeWidth={1.2}
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

          <p>
            Sourcing Madagascar and Sri Lanka
            gemstones with refined service, global
            relationships and absolute discretion.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/contact">
            Contact Us
          </Link>
        </div>

        <div className="footer-column">
          <h3>Our Presence</h3>

          <p className="footer-location">
            <MapPin size={16} />
            <span>Ilakaka, Madagascar</span>
          </p>

          <p className="footer-location">
            <MapPin size={16} />
            <span>Colombo, Sri Lanka</span>
          </p>

          <p className="footer-location">
            <MapPin size={16} />
            <span>Balangoda, Sri Lanka</span>
          </p>
        </div>

        <div className="footer-social-group">
          <div className="footer-social-label">
            Connect
          </div>

          <div className="social-links">
            <a
              href="https://wa.me/94000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact through WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:info@surangagems.com"
              aria-label="Email Suranga Gems"
            >
              <Mail size={17} />
            </a>

            <a
              href="tel:+94000000000"
              aria-label="Call Suranga Gems"
            >
              <Phone size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Suranga Gems.
          All rights reserved.
        </span>

        <span className="footer-agency-credit">
          Designed &amp; Developed by
          <strong> ARK II</strong>
        </span>
      </div>
    </footer>
  );
}

export default Footer;