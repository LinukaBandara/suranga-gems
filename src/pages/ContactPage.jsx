import { useLocation } from "react-router";

import ContactCTA from "../components/ContactCTA";

function ContactPage() {
  const location = useLocation();

  const selectedGemstone =
    location.state?.selectedGemstone || null;

  return (
    <div className="site-page contact-page">
      <section className="page-hero contact-page-hero">
        <div className="page-hero-glow" />

        <div
          className="container page-hero-content"
          data-reveal="up"
        >
          <p className="section-label">
            Contact Suranga Gems
          </p>

          <h1>
            Begin a private
            <em> conversation.</em>
          </h1>

          <p>
            Connect with us regarding natural
            gemstone sourcing, private
            consultations, professional
            partnerships or general enquiries.
          </p>
        </div>
      </section>

      <ContactCTA
        selectedGemstone={selectedGemstone}
      />
    </div>
  );
}

export default ContactPage;