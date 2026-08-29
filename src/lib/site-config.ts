// Single source of truth for editable business details.
// Update phone numbers, links, stats and copy here and every page picks it up.

export const siteConfig = {
  name: 'Ohenebagraphix',
  founder: 'Prince Adjei-Addo',
  tagline: 'Creative. Professional. Impactful.',
  heroHeadline: 'Design that moves people. Crafted, not templated.',
  heroIntro:
    "I'm Prince Adjei-Addo, founder of Ohenebagraphix. For two years I've been designing flyers, citations, brand identity and print collateral that Ghanaian brands and creators actually want to share.",
  description:
    'Ohenebagraphix is a one-person design studio in Accra, Ghana, crafting flyers, brand identity and print collateral for clients across Ghana and around the world.',
  url: 'https://ohenebagraphix.vercel.app',
  location: 'Dansoman, Accra, Ghana',
  email: 'adjeiaddoprince@gmail.com',
  phoneDisplay: '+233 (0) 533 021 050',
  whatsappNumber: '233533021050',
     web3formsAccessKey: '12a71d73-784e-4e34-82eb-a443bf72c2fc',
  stats: [
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Happy Clients', value: '110+' },
    { label: 'Years of Craft', value: '2+' },
  ],
  social: {
    instagram: 'https://instagram.com/ohenebayaw20',
    tiktok: 'https://tiktok.com/@ohenebayaw20',
    facebook: 'https://facebook.com/ohenebayaw20',
    pinterest: 'https://pinterest.com/ohenebagraphix',
  },
  whatIYouGet: [
    {
      title: 'Distinct visual voice',
      description:
        "Every design is built from scratch to fit the client's story, no recycled templates or generic look.",
    },
    {
      title: '72-hour standard delivery',
      description: 'Fast without sacrificing quality. Express delivery is available.',
    },
    {
      title: 'Revisions included',
      description: 'Reasonable revisions within 72 hours of delivery.',
    },
    {
      title: 'Print + social ready',
      description: 'Files exported for both press and screen.',
    },
  ],
  pricingTerms: [
    '50% non-refundable deposit before work begins.',
    'Final files delivered after full payment.',
    'Standard turnaround: 72 hours after payment.',
    'Reasonable revisions within 72 hours.',
    'Final quotes may vary slightly depending on project complexity.',
  ],
  addOns: [
    { title: 'Express Delivery', price: 'GH₵30' },
    { title: 'Extra Revision After 72 Hours', price: 'GH₵20' },
  ],
  about: {
    intro: "Hi, I'm Prince.",
    paragraphs: [
      "I run Ohenebagraphix from Dansoman, Accra. What started as a curiosity turned into a practice. Two years, over a hundred happy clients, and one belief that hasn't changed: a great design should feel inevitable, like it was always meant to look this way.",
      'Two years designing across print, brand and social. 150+ projects shipped for churches, brands, creators & families.',
    ],
    highlights: [
      'Youth Leader of the Year: recognized for community impact at Gradference’24 by TCSHINEAWARDS.',
      'Based in Dansoman, Accra: working with clients worldwide.',
    ],
  },
} as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
