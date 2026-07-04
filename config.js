/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Nzanwe Solutions",
    phone:     "+27 82 219 9689",
    whatsapp:  "+27 82 219 9689",
    address:   "71 Juta St, Johannesburg, South Africa",
    hours:     "Mon–Fri 8am–5pm · Sat 8am–1pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg CBD",
      "Parktown",
      "Melville",
      "Westdene",
      "Brixton",
      "Newlands",
      "Sophiatown",
      "Auckland Park"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Nzanwe Solutions — Aircon & hvac in johannesburg",
    description: "Nzanwe Solutions provides professional aircon & HVAC in Johannesburg. 1 Google review. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "volt",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Aircon & HVAC · Johannesburg & surrounds",
    heroTitle:  "Stay cool, stay comfortable — <em>aircon done right.</em>",
    heroLead:   "Nzanwe Solutions installs, repairs and services air conditioning and HVAC systems for homes and businesses across Johannesburg and the surrounding suburbs.",

    googleRating: "5.0",
    reviewsCount: "1",
    featuredQuote: "Had a split unit installed — neat work, explained everything clearly and it is made a huge difference this summer.",
    featuredQuoteAuthor: "— Refilwe D., Google review",

    trustSignals: ["Aircon installation", "Repairs & servicing", "Free callout quotes", "Friendly local team"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Aircon installation, repairs and servicing.",
    servicesLead:  "Whether you are installing your first unit or your aircon has stopped cooling, we have got it covered.",
    services: [
      {
        icon:  "bolt",
        title: "Aircon installation",
        desc:  "Split units, multi-room systems and ducted aircon installed neatly and correctly from the start."
      },
      {
        icon:  "wrench",
        title: "Aircon repairs",
        desc:  "Unit not cooling, leaking water or making strange noises? We diagnose the issue and fix it properly."
      },
      {
        icon:  "calendar",
        title: "Routine servicing",
        desc:  "Regular cleaning and servicing keeps your aircon running efficiently and helps it last longer."
      },
      {
        icon:  "circuit",
        title: "Gas refills & re-gassing",
        desc:  "Low on gas and not cooling like it used to? We top up or re-gas your system to get it working again."
      },
      {
        icon:  "hardhat",
        title: "Unit replacements & upgrades",
        desc:  "Old or inefficient unit? We help you choose a suitable replacement and handle the full installation."
      },
      {
        icon:  "shield",
        title: "Office & small business aircon",
        desc:  "Installation and maintenance for offices, shops and small commercial spaces, not just homes."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Installation",
        title:   "Mounted and connected cleanly",
        caption: "Split unit indoor head and outdoor compressor installed on correct brackets with neatly run linesets."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Repairs",
        title:   "Diagnosed and fixed",
        caption: "Fault diagnosis on units that are not cooling, leaking or making noise — repaired rather than replaced where possible."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Servicing",
        title:   "Cleaned and checked",
        caption: "Filters cleaned, coils checked, refrigerant pressure verified — a serviced unit runs more efficiently and lasts longer."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Re-gassing",
        title:   "Refrigerant level restored",
        caption: "Gas pressure checked with manifold gauges and recharged to the correct level for the unit model."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Office aircon",
        title:   "Commercial installation",
        caption: "Multi-head systems for offices and commercial spaces — correct placement, clean installation, proper commissioning."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Nzanwe Solutions team at work in Johannesburg",
      text:  "Keep your home or office comfortable all year round."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Serving the surrounding area.",
    areasLead:  "We cover Johannesburg CBD, Parktown, Melville and the wider region for installations, repairs and servicing.",
    areasNote:  "Not sure if your area is covered? Send us a message and we will confirm.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why people choose us for aircon.",
    why: [
      {
        title: "Local and easy to reach",
        desc:  "We are close by and can get to most of our service area without delay."
      },
      {
        title: "Honest advice, fair pricing",
        desc:  "We tell you what is actually needed and quote clearly upfront."
      },
      {
        title: "Friendly, professional service",
        desc:  "From first contact to finished job, we keep you informed and treat your property with care."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 1 verified Google review.",
    reviews: [
      {
        body:   "Had a split unit installed — neat work, explained everything clearly and it is made a huge difference this summer.",
        name:   "Refilwe D.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Our office aircon had not worked properly in months. They found the issue quickly, re-gassed it and it is been perfect since.",
        name:   "Marco F.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Quick response, fair quote and a clean installation. Would recommend to anyone.",
        name:   "Lerato S.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Common aircon questions.",
    faqLead:  "What most people ask before booking.",
    faq: [
      {
        q: "How long does an aircon installation take?",
        a: "A standard split unit installation typically takes 2–4 hours. More complex or multi-room systems may take a full day."
      },
      {
        q: "My aircon is running but not cooling — what could it be?",
        a: "Common causes are low refrigerant gas, a dirty filter or a faulty component. We diagnose on site and quote before starting any repair."
      },
      {
        q: "How often should I service my aircon?",
        a: "Once a year is the minimum for most home units. Regular servicing keeps it efficient and extends its lifespan."
      },
      {
        q: "Which brands of aircon do you install and service?",
        a: "We work with all major brands including Samsung, LG, Midea, Carrier, Daikin and more."
      },
      {
        q: "Can you install aircon in a small office or shop?",
        a: "Yes — we install and maintain aircon for small offices, shops and commercial spaces as well as homes."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us about your aircon.",
    contactLead:  "Send through the details and we will get back to you with a quote.",
    contactPlaceholder: "e.g. new installation, unit not cooling, servicing — the more detail the better",

    // ─── CLOSING CTA BAND ──────────────────────────────────
    ctaBannerTitle: "Aircon down <em>in this heat?</em>",
    ctaBannerSub:   "One call and a technician is on the way with the common parts on board."
  }
};
