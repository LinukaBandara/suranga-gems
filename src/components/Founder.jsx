import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

function Founder() {
  return (
    <section className="about-story founder-section founder-section-home" id="about">
      <div className="container about-story-grid founder-unified-grid">
        <div className="about-story-media" data-reveal="left">
          <div className="about-story-image-frame">
            <img
              src="/images/founder.jpg"
              alt="Suranga Weerasinghe, founder of Suranga Gems"
              loading="lazy"
              decoding="async"
            />

            <div className="about-story-image-label">
              <span>Founder</span>
              <strong>Suranga Weerasinghe</strong>
            </div>
          </div>
        </div>

        <div className="about-story-copy" data-reveal="right">
          <p className="section-label">The Founder</p>

          <h2>
            Reputation comes
            <em> before transaction.</em>
          </h2>

          <p className="about-story-lead">
            Suranga Gems was built around one simple belief: trust is the most
            valuable part of every gemstone relationship.
          </p>

          <p>
            Through experience across Madagascar and Sri Lanka, Suranga
            Weerasinghe has developed a personal approach to gemstone sourcing
            and professional relationships.
          </p>

          <p>
            Every introduction and sourcing decision is approached with care,
            discretion and responsible service.
          </p>

          <Link to="/about" className="founder-read-more">
            <span>Discover Our Story</span>
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Founder;
