import { Gem, Globe2, Handshake, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Authentic & Natural",
    description:
      "A commitment to genuine natural gemstones, professional knowledge and authenticity.",
  },
  {
    icon: ShieldCheck,
    title: "Expertise You Can Trust",
    description:
      "Industry experience developed through years of sourcing and trusted global relationships.",
  },
  {
    icon: Globe2,
    title: "Global Connections",
    description:
      "Connecting Madagascar and Sri Lanka with clients and partners around the world.",
  },
  {
    icon: Handshake,
    title: "Personalized Service",
    description:
      "Every relationship is approached with respect, responsibility and personal care.",
  },
];

function Values() {
  return (
    <section className="values-section section" id="values">
      <div className="container">
        <div className="section-heading centered" data-reveal="up">
          <p className="section-label">Our Values</p>
          <h2>Refined Sourcing. Exceptional Gems.</h2>
        </div>

        <div className="values-grid">
          {values.map(({ icon: Icon, title, description }, index) => (
            <article
              className="value-card"
              key={title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <div className="value-icon-wrap">
                <Icon className="value-icon" strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
