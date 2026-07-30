import blueGem from "../assets/blue-gem.webp";
import pinkGem from "../assets/pink-gem.webp";
import greenGem from "../assets/green-gem.webp";
import goldGem from "../assets/gold-gem.webp";

export const gemstones = [
  {
    id: "blue-sapphire",
    name: "Blue Sapphire",
    origin: "Sri Lanka",
    image: blueGem,
    description:
      "A vivid natural sapphire selected for its deep royal-blue character, crisp brilliance and timeless presence.",
    metaDescription:
      "Natural blue sapphire sourced from Sri Lanka. Deep royal-blue colour, high clarity and timeless brilliance for collectors and designers.",
    characteristics: [
      { label: "Origin", value: "Sri Lanka" },
      { label: "Colour", value: "Royal blue" },
      { label: "Availability", value: "Enquire for current selection" },
      { label: "Treatment", value: "Disclosed individually" },
    ],
    longDescription:
      "Sri Lanka has produced some of the world's most admired blue sapphires for centuries, prized for a clarity and colour saturation that is difficult to find elsewhere. Each stone in this selection is chosen individually for its depth of blue, brilliance under light and overall proportion, making it suited to both fine jewellery and considered collections.",
    careNote:
      "Sapphires rank 9 on the Mohs hardness scale, making them highly resistant to everyday wear. Clean with warm water and a soft brush, and store away from harder gemstones to avoid surface contact.",
  },
  {
    id: "ruby",
    name: "Ruby",
    origin: "Madagascar",
    image: pinkGem,
    description:
      "A richly saturated natural ruby with luminous red-pink tones, strong personality and exceptional visual energy.",
    metaDescription:
      "Natural ruby sourced from Madagascar. Rich red-pink saturation, strong brilliance and individual character for discerning buyers.",
    characteristics: [
      { label: "Origin", value: "Madagascar" },
      { label: "Colour", value: "Red to pinkish-red" },
      { label: "Availability", value: "Enquire for current selection" },
      { label: "Treatment", value: "Disclosed individually" },
    ],
    longDescription:
      "Madagascar has emerged as a significant source of natural ruby, valued for a distinctive red-pink saturation and strong internal brilliance. Each stone is reviewed for colour consistency, cut precision and overall character before being included in the collection.",
    careNote:
      "Rubies rank 9 on the Mohs hardness scale and are well suited to daily wear. Avoid harsh chemicals and ultrasonic cleaners if the stone has been treated; a soft cloth and mild soap is always safe.",
  },
  {
    id: "emerald",
    name: "Emerald",
    origin: "Madagascar",
    image: greenGem,
    description:
      "A striking natural emerald admired for its vivid green colour, architectural cut and distinctive internal character.",
    metaDescription:
      "Natural emerald sourced from Madagascar. Vivid green colour and distinctive internal character for fine jewellery and collections.",
    characteristics: [
      { label: "Origin", value: "Madagascar" },
      { label: "Colour", value: "Vivid green" },
      { label: "Availability", value: "Enquire for current selection" },
      { label: "Treatment", value: "Disclosed individually" },
    ],
    longDescription:
      "Natural emeralds are prized as much for their character as their colour — the internal inclusions often referred to as a \"jardin\" are part of what makes each stone genuinely one of a kind. This selection favours vivid green tone, strong transparency and a cut that lets the stone's natural personality show through.",
    careNote:
      "Emeralds are softer and more included than sapphire or ruby, ranking 7.5–8 on the Mohs scale. Avoid ultrasonic cleaners and sudden temperature changes; clean gently with a soft, damp cloth.",
  },
  {
    id: "golden-sapphire",
    name: "Golden Sapphire",
    origin: "Sri Lanka",
    image: goldGem,
    description:
      "A warm natural sapphire with golden depth, lively reflections and a refined glow suited to exceptional collections.",
    metaDescription:
      "Natural golden sapphire sourced from Sri Lanka. Warm tone, lively brilliance and understated luxury for collectors.",
    characteristics: [
      { label: "Origin", value: "Sri Lanka" },
      { label: "Colour", value: "Golden yellow" },
      { label: "Availability", value: "Enquire for current selection" },
      { label: "Treatment", value: "Disclosed individually" },
    ],
    longDescription:
      "Golden sapphire offers an understated alternative to more commonly seen blue sapphire, with a warm tone that suits both classic and contemporary settings. Each stone is selected for even colour distribution and strong brilliance.",
    careNote:
      "Sapphires rank 9 on the Mohs hardness scale, making them highly resistant to everyday wear. Clean with warm water and a soft brush, and store away from harder gemstones to avoid surface contact.",
  },
];

export function getGemstoneById(id) {
  return gemstones.find((gemstone) => gemstone.id === id);
}
