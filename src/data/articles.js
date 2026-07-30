import blueGem from "../assets/blue-gem.webp";
import pinkGem from "../assets/pink-gem.webp";
import greenGem from "../assets/green-gem.webp";

export const articles = [
  {
    slug: "understanding-the-4cs-of-natural-gemstones",
    title: "Understanding the 4Cs of Natural Gemstones",
    metaTitle:
      "The 4Cs of Natural Gemstones Explained | Suranga Gems",
    metaDescription:
      "A clear guide to colour, clarity, cut and carat weight, and how each factor affects the value of a natural gemstone.",
    category: "Buying Guides",
    readTime: "5 min read",
    updated: "July 2026",
    image: greenGem,
    imageAlt:
      "Faceted natural green gemstone illustrating colour, clarity and cut",
    excerpt:
      "Colour, clarity, cut and carat weight each play a different role in what makes a natural gemstone valuable. Here is how to think about all four together.",
    body: [
      {
        heading: "Colour comes first",
        paragraphs: [
          "For coloured gemstones, colour is usually the single biggest driver of value — more so than for diamonds, where cut and clarity dominate. Tone, saturation and hue all matter: a sapphire that is too dark loses brilliance, while one that is too light can look washed out. The most valuable stones sit in a narrow band of rich, even colour.",
          "Origin can influence colour expectations too. Sri Lankan sapphires are often prized for a bright, lively blue, while Madagascar has become known for rich ruby and emerald tones. Origin alone does not determine quality, but it does shape what buyers typically expect to see.",
        ],
      },
      {
        heading: "Clarity is about character, not perfection",
        paragraphs: [
          "Unlike diamonds, natural coloured gemstones are rarely judged against a standard of flawlessness. Small internal features, sometimes called inclusions, are expected and often help confirm that a stone is natural rather than lab-created. What matters is whether these features affect brilliance or durability, not whether they exist at all.",
          "Emeralds in particular are known for visible inclusions, often described as a jardin, or garden, within the stone. This is normal and widely accepted in the trade rather than a defect.",
        ],
      },
      {
        heading: "Cut determines brilliance",
        paragraphs: [
          "A well-cut gemstone reflects light evenly across its surface. A poor cut can make even a well-coloured stone look dull, while a considered cut can make a more modestly coloured stone come alive. Proportion, symmetry and polish all contribute here, and this is often the factor most affected by the skill of the cutter rather than the stone itself.",
        ],
      },
      {
        heading: "Carat weight is only part of the story",
        paragraphs: [
          "Carat weight measures a gemstone's mass, not its size or value on its own. Two stones of the same weight can look and cost very differently depending on their colour, clarity and cut. As a rule, buyers are better served choosing the combination of factors that suits their eye and budget, rather than prioritising carat weight in isolation.",
        ],
      },
    ],
  },
  {
    slug: "blue-sapphire-vs-ruby-how-to-choose",
    title: "Blue Sapphire vs Ruby: How to Choose",
    metaTitle: "Blue Sapphire vs Ruby: How to Choose | Suranga Gems",
    metaDescription:
      "Comparing blue sapphire and ruby across colour, durability, price and everyday wear to help you choose between the two.",
    category: "Buying Guides",
    readTime: "4 min read",
    updated: "July 2026",
    image: blueGem,
    imageAlt:
      "Royal-blue sapphire photographed against a dark mineral background",
    excerpt:
      "Both are corundum, both rank 9 on the Mohs scale, and both suit daily wear. The decision usually comes down to colour preference and personality.",
    body: [
      {
        heading: "The same mineral, two different characters",
        paragraphs: [
          "Sapphire and ruby are technically the same mineral, corundum, with colour determined by trace elements. Chromium produces ruby's red, while other trace elements produce sapphire's blue. This shared structure means both stones share the same hardness and durability, ranking 9 on the Mohs scale, just below diamond.",
        ],
      },
      {
        heading: "Choosing by personality",
        paragraphs: [
          "Ruby tends to read as bold and energetic, often chosen for statement pieces and occasions that call for warmth and presence. Sapphire, particularly in its classic blue form, tends to read as calmer and more versatile, working equally well in formal and everyday settings.",
          "Sapphire is also available in colours beyond blue, including the golden tones featured in this collection, giving more room to match a specific taste.",
        ],
      },
      {
        heading: "Price considerations",
        paragraphs: [
          "Fine ruby in larger sizes with strong colour and clarity is often rarer, and can command a higher price per carat than a comparable sapphire. At smaller carat weights the two are often more closely matched, and the deciding factor tends to be colour preference rather than budget.",
        ],
      },
      {
        heading: "There is no wrong choice",
        paragraphs: [
          "Both stones are well suited to daily wear, both hold their value over time, and both carry centuries of cultural significance. The most reliable way to choose is simply to see both in natural light and notice which one holds your attention.",
        ],
      },
    ],
  },
  {
    slug: "how-to-care-for-your-natural-gemstones",
    title: "How to Care for Your Natural Gemstones",
    metaTitle:
      "How to Care for Natural Gemstones | Suranga Gems",
    metaDescription:
      "Practical care guidance for natural sapphire, ruby and emerald, covering cleaning, storage and everyday wear.",
    category: "Care & Maintenance",
    readTime: "4 min read",
    updated: "July 2026",
    image: pinkGem,
    imageAlt:
      "Natural ruby gemstone photographed in a luxury macro setting",
    excerpt:
      "Simple habits around cleaning, storage and wear will keep a natural gemstone looking its best for generations.",
    body: [
      {
        heading: "Everyday cleaning",
        paragraphs: [
          "For sapphire and ruby, warm water, a mild soap and a soft-bristled brush is usually all that is needed to remove everyday oils and residue. Rinse thoroughly and dry with a soft, lint-free cloth. Emerald requires a gentler approach — avoid soaking, and simply wipe with a soft damp cloth instead.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Ultrasonic and steam cleaners are common in jewellery shops but are not suitable for every stone. Emeralds, and any gemstone that has been treated with oil or resin to improve clarity, can be damaged by the vibration or heat these methods produce. When in doubt, hand cleaning is the safer choice.",
          "Household chemicals, including chlorine and some perfumes, can also affect certain gemstone treatments over time. It is good practice to put jewellery on after applying perfume or lotion, not before.",
        ],
      },
      {
        heading: "Storage",
        paragraphs: [
          "Store gemstones separately from one another, ideally in individual soft pouches or lined compartments. Because sapphire and ruby are extremely hard, they can scratch softer stones, including emerald, if left in direct contact.",
        ],
      },
      {
        heading: "Wear with confidence",
        paragraphs: [
          "Sapphire and ruby are among the most durable gemstones available and are well suited to rings worn daily. Emerald, being somewhat softer and more prone to internal inclusions, is often better suited to earrings, pendants or occasional-wear rings where the risk of knocks is lower.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
