import { Link } from "react-router";
import { Gem } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        aria-hidden="true"
      >
        <img
          src="/images/hero-gems.webp"
          alt=""
          className="hero-image"
        />

        <div className="hero-gradient" />
        <div className="hero-blur-layer" />
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-gold" />
        <div className="particles" />
        <div className="hero-light-sweep" />
      </div>

      <div className="container hero-content-wrapper">
        <div
          className="hero-text-card"
          data-reveal="up"
        >
          <p className="section-label">
            Natural. Rare. Timeless.
          </p>

          <h1>
            Discover the world’s finest
            <span>natural gemstones</span>
          </h1>

          <p className="hero-subtitle">
            sourced directly from Madagascar and
            Sri Lanka
          </p>

          <p className="hero-description">
            Suranga Gems offers a curated selection
            of rare gemstones for collectors,
            designers and discerning buyers. Every
            stone is chosen for its authenticity,
            beauty and enduring value.
          </p>

          <div className="hero-actions">
            <Link
              to="/about"
              className="primary-button"
            >
              <Gem
                size={18}
                strokeWidth={1.7}
              />

              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;