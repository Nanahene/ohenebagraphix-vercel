// Single source of truth for editable business details.
// Update phone numbers, links, stats and copy here and every page picks it up.

export const siteConfig = {
  name: 'Ohenebagraphix',
  founder: 'Prince Adjei-Addo',
  tagline: 'Creative. Professional. Impactful.',
  heroHeadline: 'Design that moves people. Crafted, not templated.',
  heroIntro:
    "I'm Prince Adjei-Addo, founder of Ohenebagraphix. For two years I've been designing flyers, citations, brand designs and print collateral that Ghanaian brands and creators actually want to share.",
  description:
    'Ohenebagraphix is a one-person design studio in Accra, Ghana, crafting flyers, brands designs and print collateral for clients across Ghana and around the world.',
  url: 'https://www.ohenebagraphix.com',
  location: 'Dansoman, Accra, Ghana',
  email: 'adjeiaddoprince@gmail.com',
  phoneDisplay: '+233 (0) 533 021 050',
  whatsappNumber: '233533021050',
     web3formsAccessKey: '12a71d73-784e-4e34-82eb-a443bf72c2fc',
  heroImages: [
    '/images/brand/prince-adjei-addo.webp',
    '/images/brand/hero-2.webp',
    '/images/brand/hero-3.webp',
    '/images/brand/hero-4.webp',
  ],
  stats: [
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Happy Clients', value: '110+' },
    { label: 'Years of Craft', value: '2+' },
  ],
  social: {
    instagram: 'https://instagram.com/ohenebagraphix',
    tiktok: 'https://tiktok.com/@ohenebagraphix',
    facebook: 'https://facebook.com/ohenebagraphixgh',
    pinterest: 'https://pinterest.com/ohenebagraphix',
    youtube: 'https://youtube.com/@ohenebagraphix',
    linkedin: 'https://www.linkedin.com/in/prince-adjei-addo-24451132b',
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
      description: 'Files exported for both print and social media use.',
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
  payment: {
    momo: {
      number: '0533 021 050',
      name: 'Abigail Ababio',
    },
    bank: {
      bankName: 'Ecobank',
      accountName: 'Prince Adjei - Addo',
      accountNumber: '1441005229599',
    },
  },
  howItWorks: [
    {
      title: 'Send your brief',
      description: 'Tell me what you need via the contact form or WhatsApp.',
    },
    {
      title: 'Get a quote',
      description: "I'll reply with pricing and scope, usually within a day.",
    },
    {
      title: 'Design & revise',
      description: 'Work begins after the deposit. Standard delivery is 72 hours, with reasonable revisions included.',
    },
    {
      title: 'Receive final files',
      description: 'Print and social media ready files delivered once the balance is settled.',
    },
  ],
  about: {
    intro: "Hi, I'm Prince.",
    paragraphs: [
      "I run Ohenebagraphix from Dansoman, Accra. What started as a curiosity turned into a practice. Two years, over a hundred happy clients, and one belief that hasn't changed: a great design should feel inevitable, like it was always meant to look this way.",
      'I design flyers, business cards, letterheads, citations, social media graphics and print collateral for churches, brands, creators and families, from a single flyer to a full event campaign.',
      "Every project is built from scratch around the client's story, with no recycled templates. Standard delivery is 72 hours, reasonable revisions are included, and files come ready for both print and social media.",
      "So far that has meant 150+ projects for over 110 clients across Ghana and beyond, including the event branding and campaign design for GRADFERENCE'26 and the TC Shine Awards. I've also been recognized at the TC Shine Awards, named Youth Leader of the Year and nominated for Best Graphic Designer.",
      "Have a project in mind? Send me a message on WhatsApp or through the contact form and I'll reply with a quote, usually within a day.",
    ],
        awards: [
      {
        title: 'Youth Leader of the Year',
        description: "Recognized for community impact at Gradference'24 by TCSHINEAWARDS.",
        image: '/images/brand/award-youth-leader-trophy.webp',
      },
      {
        title: 'Best Graphic Designer - Nominee',
        description: "Certificate of nomination at Gradference'25 by TCSHINEAWARDS.",
        image: '/images/brand/award-best-designer-certificate.webp',
      },
    ],
    location: 'Based in Dansoman, Accra: working with clients worldwide.',
  },
} as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
        }
