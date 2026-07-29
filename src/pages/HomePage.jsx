import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

import {
  Link,
  useNavigate,
} from "react-router";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  X,
} from "lucide-react";

import Hero from "../components/Hero";
import Founder from "../components/Founder";
import Values from "../components/Values";

import blueGem from "../assets/blue-gem.webp";
import pinkGem from "../assets/pink-gem.webp";
import greenGem from "../assets/green-gem.webp";
import goldGem from "../assets/gold-gem.webp";

const gemstones = [
  {
    id: "blue-sapphire",
    name: "Blue Sapphire",
    origin: "Sri Lanka",
    image: blueGem,
    description:
      "A vivid natural sapphire selected for its deep royal-blue character, crisp brilliance and timeless presence.",
  },
  {
    id: "ruby",
    name: "Ruby",
    origin: "Madagascar",
    image: pinkGem,
    description:
      "A richly saturated natural ruby with luminous red-pink tones, strong personality and exceptional visual energy.",
  },
  {
    id: "emerald",
    name: "Emerald",
    origin: "Madagascar",
    image: greenGem,
    description:
      "A striking natural emerald admired for its vivid green colour, architectural cut and distinctive internal character.",
  },
  {
    id: "golden-sapphire",
    name: "Golden Sapphire",
    origin: "Sri Lanka",
    image: goldGem,
    description:
      "A warm natural sapphire with golden depth, lively reflections and a refined glow suited to exceptional collections.",
  },
];

function GemShowcase({ onOpenGemstone }) {
  return (
    <section
      className="gem-showcase section"
      id="gemstones"
    >
      <div className="gem-showcase-glow gem-showcase-glow-left" />
      <div className="gem-showcase-glow gem-showcase-glow-right" />

      <div className="container gem-showcase-container">
        <div className="gem-showcase-header">
          <div
            className="gem-showcase-heading"
            data-reveal="up"
          >
            <p className="gem-showcase-label">
              <span />
              Our Gemstones
            </p>

            <h2>
              Nature’s Finest
              <br />
              <em>Masterpieces</em>
            </h2>

            <p className="gem-showcase-copy">
              A focused selection of natural
              gemstones presented with clarity,
              discretion and respect for their
              individual character.
            </p>

            <Link
              to="/contact"
              className="gem-showcase-link"
            >
              Enquire About the Collection

              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
              />
            </Link>
          </div>

          <div
            className="gemstone-grid"
            aria-label="Featured gemstones"
          >
            {gemstones.map(
              (gemstone, index) => (
                <article
                  className="gemstone-card"
                  key={gemstone.id}
                  data-reveal="up"
                  style={{
                    "--reveal-delay": `${index * 90}ms`,
                  }}
                >
                  <div className="gemstone-image-wrapper">
                    <button
                      type="button"
                      className="gemstone-image-button"
                      onClick={() => {
                        onOpenGemstone(index);
                      }}
                      aria-label={`View ${gemstone.name}`}
                    >
                      <img
                        src={gemstone.image}
                        alt={`${gemstone.name} gemstone`}
                        className="gemstone-image"
                        loading="lazy"
                        decoding="async"
                      />

                      <span
                        className="gemstone-overlay"
                        aria-hidden="true"
                      />

                      <span className="gemstone-caption">
                        <span>
                          {gemstone.origin}
                        </span>

                        <strong>
                          {gemstone.name}
                        </strong>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="gemstone-arrow"
                      onClick={() => {
                        onOpenGemstone(index);
                      }}
                      aria-label={`Open ${gemstone.name} details`}
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function GemLightbox({
  activeIndex,
  onClose,
  onNext,
  onPrevious,
  onEnquire,
}) {
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const isOpen = activeIndex !== null;

  const gemstone = isOpen
    ? gemstones[activeIndex]
    : null;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const body = document.body;
    const html = document.documentElement;

    previousFocusRef.current =
      document.activeElement;

    const previousBodyOverflow =
      body.style.overflow;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousBodyPaddingRight =
      body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth -
      html.clientWidth;

    const currentPaddingRight =
      Number.parseFloat(
        window.getComputedStyle(body).paddingRight
      ) || 0;

    if (scrollbarWidth > 0) {
      body.style.paddingRight =
        `${currentPaddingRight + scrollbarWidth}px`;
    }

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    const focusFrame =
      window.requestAnimationFrame(() => {
        closeButtonRef.current?.focus({
          preventScroll: true,
        });
      });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.cancelAnimationFrame(focusFrame);

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      body.style.overflow =
        previousBodyOverflow;

      html.style.overflow =
        previousHtmlOverflow;

      body.style.paddingRight =
        previousBodyPaddingRight;

      window.requestAnimationFrame(() => {
        previousFocusRef.current?.focus?.({
          preventScroll: true,
        });
      });
    };
  }, [
    isOpen,
    onClose,
    onNext,
    onPrevious,
  ]);

  if (!gemstone) {
    return null;
  }

  const lightbox = (
    <div
      className="gem-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gem-lightbox-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="gem-lightbox-panel"
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="gem-lightbox-close"
          onClick={onClose}
          aria-label="Close gemstone viewer"
        >
          <X
            size={21}
            strokeWidth={1.6}
          />
        </button>

        <div className="gem-lightbox-media">
          <img
            src={gemstone.image}
            alt={`${gemstone.name} close-up`}
          />
        </div>

        <div className="gem-lightbox-content">
          <p className="gem-lightbox-eyebrow">
            Featured natural gemstone
          </p>

          <h2 id="gem-lightbox-title">
            {gemstone.name}
          </h2>

          <p className="gem-lightbox-origin">
            Origin · {gemstone.origin}
          </p>

          <p className="gem-lightbox-description">
            {gemstone.description}
          </p>

          <button
            type="button"
            className="gem-lightbox-enquire"
            onClick={() => {
              onEnquire(gemstone);
            }}
          >
            Enquire About This Gemstone

            <ArrowUpRight
              size={18}
              strokeWidth={1.6}
            />
          </button>

          <div
            className="gem-lightbox-navigation"
            aria-label="Gemstone navigation"
          >
            <button
              type="button"
              onClick={onPrevious}
              aria-label="View previous gemstone"
            >
              <ArrowLeft size={18} />
              Previous
            </button>

            <span>
              {activeIndex + 1} /{" "}
              {gemstones.length}
            </span>

            <button
              type="button"
              onClick={onNext}
              aria-label="View next gemstone"
            >
              Next
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(
    lightbox,
    document.body
  );
}

function HomeContactPreview() {
  return (
    <section className="home-contact-preview">
      <div className="container home-contact-preview-inner">
        <div data-reveal="left">
          <p className="section-label">
            Begin a Conversation
          </p>

          <h2>
            Looking for something
            <em> genuinely rare?</em>
          </h2>
        </div>

        <div
          className="home-contact-preview-content"
          data-reveal="right"
        >
          <p>
            Connect with Suranga Gems for private
            gemstone sourcing, professional
            partnerships and discreet consultations.
          </p>

          <div className="home-contact-preview-actions">
            <Link
              to="/contact"
              className="primary-button"
            >
              Contact Us

              <ArrowUpRight
                size={18}
                strokeWidth={1.6}
              />
            </Link>

            <a
              href="https://wa.me/94000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const [
    activeGemstoneIndex,
    setActiveGemstoneIndex,
  ] = useState(null);

  const closeLightbox = useCallback(() => {
    setActiveGemstoneIndex(null);
  }, []);

  const showNextGemstone = useCallback(() => {
    setActiveGemstoneIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (
        (current + 1) % gemstones.length
      );
    });
  }, []);

  const showPreviousGemstone =
    useCallback(() => {
      setActiveGemstoneIndex((current) => {
        if (current === null) {
          return gemstones.length - 1;
        }

        return (
          current -
          1 +
          gemstones.length
        ) % gemstones.length;
      });
    }, []);

  const handleGemstoneEnquiry =
    useCallback(
      (gemstone) => {
        setActiveGemstoneIndex(null);

        window.setTimeout(() => {
          navigate("/contact", {
            state: {
              selectedGemstone: gemstone,
            },
          });
        }, 0);
      },
      [navigate]
    );

  return (
    <div className="site-page home-page">
      <Hero />
      <Founder />
      <Values />

      <GemShowcase
        onOpenGemstone={
          setActiveGemstoneIndex
        }
      />

      <HomeContactPreview />

      <GemLightbox
        activeIndex={activeGemstoneIndex}
        onClose={closeLightbox}
        onNext={showNextGemstone}
        onPrevious={showPreviousGemstone}
        onEnquire={handleGemstoneEnquiry}
      />
    </div>
  );
}

export default HomePage;