import { Link } from "react-router";

import {
  ArrowUpRight,
  Gem,
  Globe2,
  Handshake,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    description:
      "Every relationship and sourcing decision is guided by honesty, responsibility and professional discretion.",
  },
  {
    icon: Gem,
    title: "Natural Character",
    description:
      "We value gemstones for their authenticity, individuality and the natural stories revealed through each stone.",
  },
  {
    icon: Handshake,
    title: "Lasting Relationships",
    description:
      "Our work is built around trusted partnerships rather than short-term transactions.",
  },
  {
    icon: Sparkles,
    title: "Refined Service",
    description:
      "Every introduction and consultation receives thoughtful, personal and attentive support.",
  },
];

const locations = [
  {
    location: "Ilakaka",
    country: "Madagascar",
    description:
      "A central point in Suranga Gems’ international gemstone relationships and sourcing network.",
  },
  {
    location: "Colombo",
    country: "Sri Lanka",
    description:
      "Supporting professional connections, consultations and relationships across Sri Lanka.",
  },
  {
    location: "Balangoda",
    country: "Sri Lanka",
    description:
      "A growing local presence connected to the company’s Sri Lankan roots and long-term future.",
  },
];

function AboutPage() {
  return (
    <div className="site-page about-page">
      <section className="page-hero about-page-hero">
        <div className="page-hero-glow" />

        <div
          className="container page-hero-content"
          data-reveal="up"
        >
          <p className="section-label">
            About Suranga Gems
          </p>

          <h1>
            A reputation shaped by
            <em> trust and experience.</em>
          </h1>

          <p>
            A personal gemstone business connecting
            Madagascar and Sri Lanka through
            authenticity, professional knowledge and
            meaningful long-term relationships.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div
            className="about-story-media"
            data-reveal="left"
          >
            <div className="about-story-image-frame">
              <img
                src="/images/founder.jpg"
                alt="Suranga Weerasinghe, founder of Suranga Gems"
                loading="lazy"
                decoding="async"
              />

              <div className="about-story-image-label">
                <span>Founder</span>

                <strong>
                  Suranga Weerasinghe
                </strong>
              </div>
            </div>
          </div>

          <div
            className="about-story-copy"
            data-reveal="right"
          >
            <p className="section-label">
              The Story
            </p>

            <h2>
              Reputation comes
              <em> before transaction.</em>
            </h2>

            <p className="about-story-lead">
              Suranga Gems was built around one
              simple belief: trust is the most
              valuable part of every gemstone
              relationship.
            </p>

            <p>
              Through experience across Madagascar
              and Sri Lanka, Suranga Weerasinghe has
              developed a personal approach to
              gemstone sourcing and professional
              relationships.
            </p>

            <p>
              Every stone, introduction and
              partnership is approached carefully.
              The focus is not simply on presenting
              beautiful gemstones, but on creating
              confidence through knowledge,
              authenticity and responsible service.
            </p>

            <blockquote className="about-quote">
              “A lasting name is built through
              honesty, knowledge and the trust of
              every person you work with.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="container">
          <div
            className="section-heading centered"
            data-reveal="up"
          >
            <p className="section-label">
              What Guides Us
            </p>

            <h2>
              Principles behind every
              relationship.
            </h2>
          </div>

          <div className="about-principles-grid">
            {principles.map(
              (
                {
                  icon: Icon,
                  title,
                  description,
                },
                index
              ) => (
                <article
                  className="about-principle"
                  key={title}
                  data-reveal="up"
                  style={{
                    "--reveal-delay": `${index * 80}ms`,
                  }}
                >
                  <Icon
                    size={30}
                    strokeWidth={1.4}
                  />

                  <h3>{title}</h3>

                  <p>{description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="about-presence">
        <div className="container">
          <div className="about-presence-heading">
            <div data-reveal="left">
              <p className="section-label">
                Our Presence
              </p>

              <h2>
                Connected across
                <em> two countries.</em>
              </h2>
            </div>

            <Globe2
              className="about-presence-icon"
              strokeWidth={0.8}
              aria-hidden="true"
            />
          </div>

          <div className="presence-grid">
            {locations.map(
              (
                {
                  location,
                  country,
                  description,
                },
                index
              ) => (
                <article
                  className="presence-card"
                  key={`${location}-${country}`}
                  data-reveal="up"
                  style={{
                    "--reveal-delay": `${index * 90}ms`,
                  }}
                >
                  <MapPin
                    size={24}
                    strokeWidth={1.4}
                  />

                  <span>{country}</span>

                  <h3>{location}</h3>

                  <p>{description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="page-closing-cta">
        <div
          className="container page-closing-cta-inner"
          data-reveal="up"
        >
          <div>
            <p className="section-label">
              Start a Conversation
            </p>

            <h2>
              Discover a more personal approach to
              natural gemstones.
            </h2>
          </div>

          <Link
            to="/contact"
            className="primary-button"
          >
            Contact Suranga Gems

            <ArrowUpRight
              size={18}
              strokeWidth={1.6}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;