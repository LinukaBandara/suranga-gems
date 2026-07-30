import { Link } from "react-router";
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
} from "lucide-react";

import { articles } from "../data/articles";

function JournalPage() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="site-page journal-page">
      <section className="page-hero journal-hero">
        <div className="page-hero-glow" />

        <div className="container journal-hero-layout">
          <div
            className="page-hero-content journal-hero-copy"
            data-reveal="left"
          >
            <p className="section-label">
              The Journal
            </p>

            <h1>
              Notes on
              <em> natural gemstones.</em>
            </h1>

            <p>
              Guidance on buying, caring for and
              understanding natural sapphire, ruby
              and emerald from Suranga Gems.
            </p>
          </div>

          <div
            className="journal-hero-collage"
            data-reveal="right"
            aria-hidden="true"
          >
            {articles.map((article, index) => (
              <div
                className={`journal-hero-stone journal-hero-stone-${index + 1}`}
                key={article.slug}
              >
                <img
                  src={article.image}
                  alt=""
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section journal-featured-section">
        <div className="container">
          <Link
            to={`/journal/${featuredArticle.slug}`}
            className="journal-featured-card"
            data-reveal="up"
          >
            <div className="journal-featured-media">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="journal-featured-copy">
              <div className="journal-featured-topline">
                <span>Featured guide</span>
                <span>
                  <Clock3 size={14} />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>

              <span className="journal-read-link">
                Read the guide
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section journal-list">
        <div className="container">
          <div className="journal-section-heading" data-reveal="up">
            <div>
              <p className="section-label">
                More from the journal
              </p>
              <h2>Practical knowledge, carefully shared.</h2>
            </div>

            <BookOpen
              size={42}
              strokeWidth={1.1}
              aria-hidden="true"
            />
          </div>

          <div className="journal-grid journal-grid-visual">
            {remainingArticles.map((article, index) => (
              <Link
                to={`/journal/${article.slug}`}
                className="journal-card journal-card-with-image"
                key={article.slug}
                data-reveal="up"
                style={{
                  "--reveal-delay": `${index * 90}ms`,
                }}
              >
                <div className="journal-card-image">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="journal-card-content">
                  <p className="journal-card-category">
                    {article.category}
                  </p>
                  <h2>{article.title}</h2>
                  <p className="journal-card-excerpt">
                    {article.excerpt}
                  </p>

                  <span className="journal-card-meta">
                    {article.readTime}
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default JournalPage;
