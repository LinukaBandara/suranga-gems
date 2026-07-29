import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
} from "lucide-react";

import {
  useForm,
  ValidationError,
} from "@formspree/react";

function ContactCTA({ selectedGemstone }) {
  const [formState, handleFormspreeSubmit, resetFormspree] =
    useForm("xvzeybwv");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [enquiryType, setEnquiryType] =
    useState("General enquiry");

  const [message, setMessage] = useState("");

  const messageRef = useRef(null);

  const createGemstoneMessage = (gemstone) => {
    if (!gemstone) {
      return "";
    }

    return `I’m interested in the ${gemstone.name} from ${gemstone.origin}. Please share more information about availability, sourcing and consultation options.`;
  };

  useEffect(() => {
    if (!selectedGemstone) {
      return undefined;
    }

    setEnquiryType("Gemstone sourcing");
    setMessage(
      createGemstoneMessage(selectedGemstone)
    );

    const timer = window.setTimeout(() => {
      messageRef.current?.focus();
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [selectedGemstone]);

  const subject = selectedGemstone
    ? `Gemstone Enquiry — ${selectedGemstone.name}`
    : `${enquiryType} — Suranga Gems`;

  const resetContactForm = () => {
    resetFormspree();

    setName("");
    setEmail("");

    if (selectedGemstone) {
      setEnquiryType("Gemstone sourcing");
      setMessage(
        createGemstoneMessage(selectedGemstone)
      );
    } else {
      setEnquiryType("General enquiry");
      setMessage("");
    }
  };

  if (formState.succeeded) {
    return (
      <section
        className="contact-cta"
        id="contact"
      >
        <div className="container contact-success-wrapper">
          <div
            className="contact-success-card"
            role="status"
            aria-live="polite"
          >
            <div className="contact-success-icon">
              <CheckCircle2
                size={34}
                strokeWidth={1.5}
              />
            </div>

            <p className="section-label">
              Enquiry Received
            </p>

            <h2>Thank you for contacting us.</h2>

            <p>
              Your enquiry has been sent successfully
              to Suranga Gems. We will review your
              message and respond as soon as possible.
            </p>

            {selectedGemstone && (
              <div className="success-selected-gemstone">
                <img
                  src={selectedGemstone.image}
                  alt={selectedGemstone.name}
                />

                <div>
                  <span>Gemstone enquiry</span>

                  <strong>
                    {selectedGemstone.name}
                  </strong>

                  <small>
                    {selectedGemstone.origin}
                  </small>
                </div>
              </div>
            )}

            <button
              type="button"
              className="contact-reset-button"
              onClick={resetContactForm}
            >
              <RotateCcw
                size={17}
                strokeWidth={1.7}
              />

              Send Another Enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="contact-cta"
      id="contact"
    >
      <div className="container contact-cta-container">
        <div
          className="contact-copy"
          data-reveal="left"
        >
          <p className="section-label">
            Contact
          </p>

          <h2>
            Private introductions, rare sourcing
            and discreet support.
          </h2>

          <p className="contact-intro">
            For gemstone sourcing, partnership
            enquiries or bespoke consultations,
            connect with Suranga Gems and experience
            a service designed for collectors and
            trusted industry partners.
          </p>

          <div className="contact-actions">
            <a
              href="https://wa.me/94000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />

              <span>WhatsApp</span>

              <ArrowRight size={18} />
            </a>

            <a href="tel:+94000000000">
              <Phone size={20} />

              <span>Call Us</span>

              <ArrowRight size={18} />
            </a>

            <a href="mailto:info@surangagems.com">
              <Mail size={20} />

              <span>Email Us</span>

              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleFormspreeSubmit}
          noValidate
        >
          <input
            type="hidden"
            name="subject"
            value={subject}
          />

          <input
            type="hidden"
            name="source"
            value="Suranga Gems Website"
          />

          {selectedGemstone && (
            <>
              <input
                type="hidden"
                name="selectedGemstone"
                value={selectedGemstone.name}
              />

              <input
                type="hidden"
                name="gemstoneOrigin"
                value={selectedGemstone.origin}
              />
            </>
          )}

          <div
            className="form-honeypot"
            aria-hidden="true"
          >
            <label htmlFor="company-website">
              Leave this field empty
            </label>

            <input
              id="company-website"
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          {selectedGemstone && (
            <div
              className="selected-gemstone"
              aria-live="polite"
            >
              <img
                src={selectedGemstone.image}
                alt={selectedGemstone.name}
              />

              <div>
                <span>Selected gemstone</span>

                <strong>
                  {selectedGemstone.name}
                </strong>

                <small>
                  {selectedGemstone.origin}
                </small>
              </div>
            </div>
          )}

          <label htmlFor="contact-name">
            Name
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Your name"
            autoComplete="name"
            required
          />

          <ValidationError
            prefix="Name"
            field="name"
            errors={formState.errors}
            className="formspree-error"
          />

          <label htmlFor="contact-email">
            Email
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={formState.errors}
            className="formspree-error"
          />

          <label htmlFor="enquiry-type">
            Enquiry Type
          </label>

          <select
            id="enquiry-type"
            name="enquiryType"
            value={enquiryType}
            onChange={(event) => {
              setEnquiryType(event.target.value);
            }}
            required
          >
            <option value="General enquiry">
              General enquiry
            </option>

            <option value="Gemstone sourcing">
              Gemstone sourcing
            </option>

            <option value="Private consultation">
              Private consultation
            </option>

            <option value="Business partnership">
              Business partnership
            </option>
          </select>

          <ValidationError
            prefix="Enquiry type"
            field="enquiryType"
            errors={formState.errors}
            className="formspree-error"
          />

          <label htmlFor="contact-message">
            Message
          </label>

          <textarea
            ref={messageRef}
            id="contact-message"
            name="message"
            rows="6"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            placeholder="Tell us about your gemstone needs, collection or partnership enquiry."
            required
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={formState.errors}
            className="formspree-error"
          />

          <ValidationError
            errors={formState.errors}
            className="formspree-error formspree-general-error"
          />

          <button
            type="submit"
            className="contact-submit"
            disabled={formState.submitting}
          >
            {formState.submitting ? (
              <>
                <span className="submit-spinner" />
                Sending Enquiry...
              </>
            ) : (
              <>
                <Send
                  size={17}
                  strokeWidth={1.7}
                />

                Send Enquiry
              </>
            )}
          </button>

          <p className="contact-form-note">
            Your information will only be used to
            respond to this enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactCTA;