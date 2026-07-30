import {
  Link,
  Navigate,
  useParams,
} from "react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import {
  articles,
  getArticleBySlug,
} from "../data/articles";

function JournalPostPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const more = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="site-page journal-post-page">
      <section className="journal-post-hero">
        <div className="container journal-post-hero-grid">
          <div
            className="journal-post-hero-copy"
            data-reveal="left"
          >
            <Link
              to="/journal"
              className="journal-back-link"
            >
              <ArrowLeft size={16} />
              Back to Journal
            </Link>

            <p className="section-label">
              {article.category}
            </p>

            <h1>{article.title}</h1>
            <p className="journal-post-intro">
              {article.excerpt}
            </p>

            <div className="journal-post-meta">
              <span>
                <Clock3 size={15} />
                {article.readTime}
              </span>
              <span>Updated {article.updated}</span>
              <span>By Suranga Gems</span>
            </div>
          </div>

          <div
            className="journal-post-hero-media"
            data-reveal="right"
          >
            <img
              src={article.image}
              alt={article.imageAlt}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section journal-post-body">
        <div className="container journal-post-layout">
          <article className="journal-post-content">
            {article.body.map((block, blockIndex) => (
              <div
                className="journal-post-block"
                key={block.heading}
                data-reveal="up"
                style={{
                  "--reveal-delay": `${blockIndex * 70}ms`,
                }}
              >
                <span className="journal-post-number">
                  {String(blockIndex + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2>{block.heading}</h2>

                  {block.paragraphs.map(
                    (paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            <div className="journal-post-cta" data-reveal="up">
              <p>
                Have a question about natural
                gemstones or the collection?
              </p>

              <Link
                to="/contact"
                className="primary-button"
              >
                Contact Suranga Gems
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                />
              </Link>
            </div>
          </article>

          <aside className="journal-post-aside">
            <div className="journal-aside-card">
              <p className="section-label">
                Suranga Gems Journal
              </p>
              <h3>Natural knowledge, shared clearly.</h3>
              <p>
                Practical guidance from a business
                connected to Madagascar and Sri
                Lanka.
              </p>
              <Link to="/about">
                Discover our story
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section journal-post-more">
          <div className="container">
            <p className="section-label">
              Continue reading
            </p>

            <div className="journal-grid journal-grid-visual">
              {more.map((item) => (
                <Link
                  to={`/journal/${item.slug}`}
                  className="journal-card journal-card-with-image"
                  key={item.slug}
                >
                  <div className="journal-card-image">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="journal-card-content">
                    <p className="journal-card-category">
                      {item.category}
                    </p>
                    <h2>{item.title}</h2>
                    <p className="journal-card-excerpt">
                      {item.excerpt}
                    </p>

                    <span className="journal-card-meta">
                      {item.readTime}
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
      )}
    </div>
  );
}

export default JournalPostPage;
