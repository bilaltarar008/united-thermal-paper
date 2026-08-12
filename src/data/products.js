/* =========================================================
   PRODUCT CATALOGUE — United Thermal Paper
   src/data/products.js
   ---------------------------------------------------------
   THIS IS THE ONLY FILE YOU EDIT TO CHANGE PRODUCT CONTENT.

   ⚠ EVERY SPEC BELOW IS A PLACEHOLDER. Replace with the real
   ranges you actually stock. Do not publish the compatibility
   brand lists or the BPA-free claims until someone has
   confirmed them — procurement buyers in banking and pharma
   will ask for documentation.

   ---------------------------------------------------------
   IMAGES — WHY THERE IS NO import STATEMENT HERE
   ---------------------------------------------------------
   Files in public/ are served straight to the browser and never
   pass through Vite's module system, so they cannot be imported.
   `import x from './public/...'` will always fail. Instead the
   path is written as a URL string, and IMG below is the single
   place that path is defined.

   PUT YOUR FILES HERE, with exactly these names:

     public/images/products/pos-rolls.jpg
     public/images/products/atm-rolls.jpg
     public/images/products/card-machine-rolls.jpg
     public/images/products/kiosk-rolls.jpg
     public/images/products/scale-rolls.jpg
     public/images/products/custom-rolls.jpg
     public/images/products/jumbo-rolls.jpg

   Create the folders if they don't exist. `public` sits at the
   project root, beside `src` — not inside it.

   A missing file shows a styled placeholder rather than breaking
   the build, which is why this approach suits a site whose
   photography is still being produced.

   ---------------------------------------------------------
   IF YOU WANT BUNDLED IMAGES INSTEAD
   ---------------------------------------------------------
   Move the files to src/assets/images/products/ and import each
   one individually at the top of this file:

     import posRolls from "../assets/images/products/pos-rolls.jpg";
     ...then use  image: posRolls,

   You gain build-time optimisation and cache-busting hashes, but
   every referenced file MUST exist or the build fails outright.
   Only switch once all the photography has landed.
========================================================= */

const IMG = "/images/products";

export const products = [
  {
    slug: "pos-thermal-rolls",
    name: "POS Thermal Rolls",
    tagline: "Retail counters and restaurant terminals",
    blurb:
      "The everyday receipt roll. Built for tills that run from open to close without a jam or a grey print.",
    image: `${IMG}/pos-rolls.jpg`,
    gallery: [`${IMG}/pos-rolls.jpg`],
    highlights: ["57 & 80 mm", "48–70 gsm", "BPA-free option"],
    specs: {
      "Roll widths": "57 mm, 76 mm, 80 mm",
      "Paper weight": "48 – 70 gsm",
      "Core diameter": "12 mm, 17 mm",
      "Roll length": "15 m – 80 m",
      "Roll diameter": "40 mm – 80 mm",
      Coating: "Standard thermal, BPA-free, phenol-free",
      "Print side": "Outside wound",
    },
    sizes: [
      { width: "57 mm", core: "12 mm", length: "15 m", diameter: "38 mm" },
      { width: "57 mm", core: "12 mm", length: "25 m", diameter: "45 mm" },
      { width: "80 mm", core: "12 mm", length: "50 m", diameter: "60 mm" },
      { width: "80 mm", core: "17 mm", length: "80 m", diameter: "80 mm" },
    ],
    packing: [
      "Individually shrink-wrapped",
      "50 or 100 rolls per carton",
      "Carton labelled with width, length and batch",
    ],
    applications: [
      "Supermarket and retail checkouts",
      "Restaurant and café billing",
      "Kitchen order printers",
      "Pharmacy dispensing slips",
      "Salon and service counters",
    ],
    compatibility: [
      "Epson TM series",
      "Star TSP series",
      "Bixolon SRP series",
      "Xprinter and generic 58/80 mm printers",
    ],
  },

  {
    slug: "atm-thermal-rolls",
    name: "ATM Thermal Rolls",
    tagline: "Cash machines and self-service banking",
    blurb:
      "Longer rolls and tighter tolerances, because refilling an ATM is a scheduled visit and not a two-minute job.",
    image: `${IMG}/atm-rolls.jpg`,
    gallery: [`${IMG}/atm-rolls.jpg`],
    highlights: ["80 mm standard", "Long-run rolls", "Low-dust slitting"],
    specs: {
      "Roll widths": "80 mm (57 mm on request)",
      "Paper weight": "55 – 70 gsm",
      "Core diameter": "17 mm, 25 mm",
      "Roll length": "80 m – 220 m",
      "Roll diameter": "up to 140 mm",
      Coating: "Standard thermal, BPA-free",
      "Print side": "Outside wound",
    },
    sizes: [
      { width: "80 mm", core: "17 mm", length: "80 m", diameter: "80 mm" },
      { width: "80 mm", core: "25 mm", length: "150 m", diameter: "110 mm" },
      { width: "80 mm", core: "25 mm", length: "220 m", diameter: "140 mm" },
    ],
    packing: [
      "Individually shrink-wrapped",
      "24 or 36 rolls per carton",
      "Moisture-barrier packing available for outdoor sites",
    ],
    applications: [
      "Bank ATM receipt printers",
      "Cash deposit machines",
      "Self-service banking kiosks",
      "Passbook and statement printers",
    ],
    compatibility: [
      "NCR SelfServ series",
      "Diebold Nixdorf",
      "Wincor Nixdorf ProCash",
      "Hyosung and GRG terminals",
    ],
  },

  {
    slug: "credit-card-machine-rolls",
    name: "Credit Card Machine Rolls",
    tagline: "Card terminals and mobile POS",
    blurb:
      "Small-diameter rolls for handheld and countertop card machines, wound to feed cleanly in compact print heads.",
    image: `${IMG}/card-machine-rolls.jpg`,
    gallery: [`${IMG}/card-machine-rolls.jpg`],
    highlights: ["57 mm", "Compact diameter", "High-clarity print"],
    specs: {
      "Roll widths": "57 mm, 58 mm",
      "Paper weight": "48 – 60 gsm",
      "Core diameter": "12 mm",
      "Roll length": "10 m – 30 m",
      "Roll diameter": "30 mm – 50 mm",
      Coating: "Standard thermal, BPA-free",
      "Print side": "Outside wound",
    },
    sizes: [
      { width: "57 mm", core: "12 mm", length: "10 m", diameter: "30 mm" },
      { width: "57 mm", core: "12 mm", length: "15 m", diameter: "38 mm" },
      { width: "57 mm", core: "12 mm", length: "30 m", diameter: "50 mm" },
    ],
    packing: [
      "Shrink-wrapped in packs of 10",
      "100 rolls per carton",
      "Counter-display packs available",
    ],
    applications: [
      "Card payment terminals",
      "Mobile and wireless POS devices",
      "Delivery rider handheld printers",
      "Field sales receipting",
    ],
    compatibility: [
      "Verifone VX and Engage series",
      "Ingenico Move and Desk series",
      "PAX A and S series",
      "Most 57 mm handheld terminals",
    ],
  },

  {
    slug: "kiosk-rolls",
    name: "Kiosk Rolls",
    tagline: "Ticketing, queueing and self-service",
    blurb:
      "Heavier stock for unattended machines, where a torn or curled receipt means a service call rather than a reprint.",
    image: `${IMG}/kiosk-rolls.jpg`,
    gallery: [`${IMG}/kiosk-rolls.jpg`],
    highlights: ["Up to 112 mm", "70–80 gsm", "Long-run rolls"],
    specs: {
      "Roll widths": "80 mm, 82.5 mm, 112 mm",
      "Paper weight": "70 – 80 gsm",
      "Core diameter": "25 mm",
      "Roll length": "100 m – 300 m",
      "Roll diameter": "up to 180 mm",
      Coating: "Standard thermal, BPA-free, top-coated on request",
      "Print side": "Outside or inside wound",
    },
    sizes: [
      { width: "80 mm", core: "25 mm", length: "150 m", diameter: "110 mm" },
      { width: "82.5 mm", core: "25 mm", length: "200 m", diameter: "130 mm" },
      { width: "112 mm", core: "25 mm", length: "300 m", diameter: "180 mm" },
    ],
    packing: [
      "Individually shrink-wrapped",
      "12 or 24 rolls per carton",
      "Pallet quantities for rollout projects",
    ],
    applications: [
      "Queue management and token dispensers",
      "Cinema and event ticketing",
      "Parking and toll machines",
      "Airport check-in kiosks",
      "Bill payment machines",
    ],
    compatibility: [
      "Custom VKP and TG series",
      "Nippon Primex kiosk printers",
      "Star and Citizen kiosk modules",
      "Most 80–112 mm kiosk print engines",
    ],
  },

  {
    slug: "jumbo-rolls-bulk-supply",
    name: "Jumbo Rolls & Bulk Supply",
    tagline: "For converters and high-volume buyers",
    blurb:
      "Full jumbo reels and pallet-scale supply for businesses that slit their own stock or consume by the tonne.",
    image: `${IMG}/jumbo-rolls.jpg`,
    gallery: [`${IMG}/jumbo-rolls.jpg`],
    highlights: ["Jumbo reels", "Pallet supply", "Contract supply"],
    specs: {
      "Reel width": "Up to 1000 mm",
      "Paper weight": "48 – 80 gsm",
      "Core diameter": "76 mm (3 inch)",
      "Reel diameter": "Up to 1000 mm",
      "Reel weight": "On specification",
      Coating: "Standard, BPA-free, phenol-free",
      "Supply basis": "Per reel, per pallet, or contract volume",
    },
    sizes: [
      {
        width: "Up to 1000 mm",
        core: "76 mm",
        length: "On request",
        diameter: "Up to 1000 mm",
      },
    ],
    packing: [
      "Reels wrapped and edge-protected",
      "Palletised for forklift handling",
      "Scheduled deliveries against contract volume",
    ],
    applications: [
      "Converters slitting their own rolls",
      "Large retail chains with in-house packing",
      "Print and stationery distributors",
      "Export and re-supply",
    ],
    compatibility: [
      "Specify coating grade, gsm and reel width",
      "Sample reels available before contract",
    ],
  },

    {
    slug: "barcode-label-rolls",
    name: "Barcode Label Rolls",
    tagline: "High-quality labels for barcode and product printing",
    blurb:
      "High-quality barcode label rolls designed for sharp, clear printing, strong adhesion and reliable performance across label printing applications.",
    image: `${IMG}/Barcode-label-rolls.jpeg`,
    gallery: [`${IMG}/Barcode-label-rolls.jpeg`],

    highlights: [
      "Multiple sizes",
      "Strong adhesion",
      "Smooth finish",
      "Sharp & clear prints",
    ],

    specs: {
      // Add confirmed specifications here
      "Label type": "Barcode labels",
      "Labels per roll": "100 labels per roll",
      "Sizes": "Multiple sizes available",
      "Finish": "Smooth finish",
      "Adhesion": "Strong adhesion",
      "Compatibility": "Compatible with major barcode & label printers",
    },

    sizes: [
      // Add actual sizes here
      {
        width: "To be confirmed",
        height: "To be confirmed",
        labelsPerRoll: "100",
      },
    ],

    packing: [
      "Neatly wound rolls",
      "Bulk supply available",
      "Packaging according to order requirements",
    ],

    applications: [
      "Barcode labeling",
      "Product labeling",
      "Retail labeling",
      "Warehouse labeling",
      "Inventory management",
      "Shipping and logistics",
    ],

    compatibility: [
      "Compatible with major barcode and label printers",
      // Add confirmed printer brands/models here
    ],
  },

  {
    slug: "barcode-ribbon-rolls",
    name: "Barcode Ribbon Rolls",
    tagline: "High-performance ribbons for sharp and durable printing",
    blurb:
      "High-performance barcode ribbon rolls designed for sharp, clear and durable prints with reliable performance for high-volume label printing.",
    image: `${IMG}/barcode-ribbon-rolls.jpeg`,
    gallery: [`${IMG}/barcode-ribbon-rolls.jpeg`],

    highlights: [
      "Smooth & clear printing",
      "Strong & durable",
      "Wide compatibility",
      "Long-lasting quality",
    ],

    specs: {
      // Add confirmed specifications here
      "Ribbon type": "Barcode printing ribbon",
      "Sizes": "Multiple sizes available",
      "Print quality": "Sharp and clear",
      "Performance": "Long-lasting",
      "Compatibility": "Compatible with major barcode & label printers",
    },

    sizes: [
      // Add actual ribbon sizes here
      {
        width: "To be confirmed",
        length: "To be confirmed",
        core: "To be confirmed",
      },
    ],

    packing: [
      "Individually packed rolls",
      "Bulk supply available",
      "Packaging according to order requirements",
    ],

    applications: [
      "Barcode label printing",
      "Product labeling",
      "Retail labeling",
      "Warehouse labeling",
      "Shipping and logistics",
      "High-volume printing",
    ],

    compatibility: [
      "Compatible with major barcode and label printers",
      // Add confirmed printer brands/models here
    ],
  },
];

/* ---- helpers ---- */

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const getRelated = (slug, count = 3) =>
  products.filter((p) => p.slug !== slug).slice(0, count);

/* ---- FAQ shown on the products index ---- */

export const productFaqs = [
  {
    q: "How do I work out which roll size I need?",
    a: "Measure the paper width in millimetres, then the inner core diameter. Those two numbers identify almost every roll. If you're unsure, send us a photo of the roll you're using now or your printer model number.",
  },
  {
    q: "Can I get samples before ordering?",
    a: "Yes. We send sample rolls so you can test print quality and feed on your own machines before committing to a quantity.",
  },
  {
    q: "Do you supply BPA-free paper?",
    a: "BPA-free and phenol-free grades are available across most categories. Tell us if your procurement or export requirements call for it and we'll quote that grade specifically.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "It depends on the category. Standard sizes are available in carton quantities. Custom widths and back-printed rolls carry a minimum run — ask us and we'll confirm for your specification.",
  },
  {
    q: "How quickly can you deliver?",
    a: "Stocked sizes usually ship within 24 to 48 hours. Custom widths and printed rolls depend on the run, and we'll give you a date with the quote.",
  },
  {
    q: "How should thermal paper be stored?",
    a: "Keep it out of direct sunlight and away from heat, solvents and PVC. Cool, dry storage in the original wrapper protects the coating. Our resources section covers this in detail.",
  },
];