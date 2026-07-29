import { Link } from "react-router";

import {
  ArrowUpRight,
  Gem,
  ShieldCheck,
} from "lucide-react";

function Founder() {
  return (
    <section
      className="founder-section"
      id="about"
    >
      <div
        className="founder-background-glow"
        aria-hidden="true"
      />

      <div className="container founder-container">
        <div
          className="founder-media"
          data-reveal="left"
        >
          <div className="founder-frame">
            <img
              src="/images/founder.jpg"
              alt="Suranga Weerasinghe, founder of Suranga Gems"
              loading="lazy"
              decoding="async"
              className="founder-image"
            />

            <div
              className="founder-image-shade"
              aria-hidden="true"
            />

            <div className="founder-image-label">
              <span>Founder</span>

              <strong>
                Suranga Weerasinghe
              </strong>
            </div>
          </div>
        </div>

        <div
          className="founder-content"
          data-reveal="right"
        >
          <p className="section-label">
            The Founder
          </p>

          <h2>
            <span>A name built on</span>
            <em>trust, discernment</em>
            <span>
              and lasting relationships.
            </span>
          </h2>

          <p className="founder-lead">
            Suranga Weerasinghe has built Suranga
            Gems around trust, expertise and
            long-term relationships across
            Madagascar and Sri Lanka.
          </p>

          <p className="founder-copy">
            His approach is personal, discreet and
            grounded in genuine industry knowledge.
            Every introduction, sourcing decision
            and partnership reflects one principle:
            reputation always comes before
            transaction.
          </p>

          <div className="founder-standard">
            <ShieldCheck
              size={25}
              strokeWidth={1.45}
            />

            <div>
              <span>
                The standard behind the name
              </span>

              <strong>
                Authenticity. Integrity. Personal
                attention.
              </strong>
            </div>
          </div>

          <div className="founder-actions">
            <Link
              to="/about"
              className="founder-cta"
            >
              Read Our Story

              <ArrowUpRight
                size={18}
                strokeWidth={1.6}
              />
            </Link>
          </div>
        </div>
      </div>

      <Gem
        className="founder-watermark"
        strokeWidth={0.55}
        aria-hidden="true"
      />
    </section>
  );
}

export default Founder;