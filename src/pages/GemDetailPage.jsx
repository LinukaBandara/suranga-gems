import {
  Link,
  Navigate,
  useNavigate,
  useParams,
} from "react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import {
  gemstones,
  getGemstoneById,
} from "../data/gemstones";

function GemDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const gemstone = getGemstoneById(slug);

  if (!gemstone) {
    return <Navigate to="/" replace />;
  }

  const related = gemstones
    .filter((item) => item.id !== gemstone.id)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${gemstone.name} (${gemstone.origin}) featured on your website. Could you share more details?`
  );

  const openSelectedEnquiry = () => {
    navigate("/contact", {
      state: {
        selectedGemstone: gemstone,
      },
    });
  };

  return (
    <div className="site-page gem-detail-page">
      <section className="gem-detail-hero">
        <div className="container gem-detail-hero-grid">
          <div
            className="gem-detail-hero-copy"
            data-reveal="left"
          >
            <Link
              to="/"
              className="gem-detail-back"
            >
              <ArrowLeft size={16} />
              Back to collection
            </Link>

            <p className="section-label">
              {gemstone.origin}
            </p>

            <h1>{gemstone.name}</h1>
            <p>{gemstone.description}</p>

            <button
              type="button"
              className="primary-button gem-detail-hero-action"
              onClick={openSelectedEnquiry}
            >
              Enquire About This Stone
              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
              />
            </button>
          </div>

          <div
            className="gem-detail-hero-media"
            data-reveal="right"
          >
            <img
              src={gemstone.image}
              alt={`${gemstone.name} natural gemstone from ${gemstone.origin}`}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section gem-detail-body">
        <div className="container gem-detail-grid">
          <div
            className="gem-detail-media"
            data-reveal="left"
          >
            <img
              src={gemstone.image}
              alt={`${gemstone.name} close-up`}
              loading="lazy"
              decoding="async"
            />

            <div className="gem-detail-trust-note">
              <ShieldCheck
                size={21}
                strokeWidth={1.5}
              />
              <span>
                Individual details and treatments are
                disclosed clearly during enquiry.
              </span>
            </div>
          </div>

          <div
            className="gem-detail-copy"
            data-reveal="right"
          >
            <p className="section-label">
              About this stone
            </p>

            <p className="gem-detail-lead">
              {gemstone.longDescription}
            </p>

            <dl className="gem-characteristics">
              {gemstone.characteristics.map((item) => (
                <div
                  className="gem-characteristic-row"
                  key={item.label}
                >
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="gem-detail-note">
              <p className="section-label">Care</p>
              <p>{gemstone.careNote}</p>
            </div>

            <div className="gem-detail-actions">
              <button
                type="button"
                className="primary-button"
                onClick={openSelectedEnquiry}
              >
                Enquire Through the Form
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                />
              </button>

              <a
                href={`https://wa.me/94000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-link"
              >
                <MessageCircle
                  size={17}
                  strokeWidth={1.6}
                />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section gem-detail-related">
        <div className="container">
          <p className="section-label">Explore more</p>
          <h2>Other gemstones in the collection</h2>

          <div className="gem-related-grid">
            {related.map((item) => (
              <Link
                to={`/gems/${item.id}`}
                className="gem-related-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={`${item.name} gemstone`}
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <strong>{item.name}</strong>
                  <em>{item.origin}</em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GemDetailPage;
