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
    slug: "weighing-scale-rolls",
    name: "Weighing Scale Rolls",
    tagline: "Fresh counters and packing floors",
    blurb:
      "Label and receipt stock for weighing systems, cut to the widths that scale printers actually use.",
    image: `${IMG}/scale-rolls.jpg`,
    gallery: [`${IMG}/scale-rolls.jpg`],
    highlights: ["37–60 mm", "Label or plain", "Adhesive options"],
    specs: {
      "Roll widths": "37 mm, 40 mm, 50 mm, 57 mm, 60 mm",
      "Paper weight": "55 – 80 gsm",
      "Core diameter": "12 mm, 25 mm, 40 mm",
      "Roll length": "20 m – 120 m",
      "Roll diameter": "40 mm – 110 mm",
      Coating: "Thermal plain, thermal self-adhesive label",
      "Print side": "Outside wound",
    },
    sizes: [
      { width: "37 mm", core: "12 mm", length: "20 m", diameter: "40 mm" },
      { width: "50 mm", core: "25 mm", length: "60 m", diameter: "70 mm" },
      { width: "57 mm", core: "40 mm", length: "120 m", diameter: "110 mm" },
    ],
    packing: [
      "Shrink-wrapped per roll",
      "40 or 60 rolls per carton",
      "Core size printed on every wrapper",
    ],
    applications: [
      "Supermarket fresh and deli counters",
      "Butchery and fish counters",
      "Fruit and vegetable weighing",
      "Warehouse and packing lines",
    ],
    compatibility: [
      "Toledo and Mettler Toledo scales",
      "Digi SM series",
      "CAS and Aclas scales",
      "Most thermal label scale printers",
    ],
  },

  {
    slug: "custom-thermal-rolls",
    name: "Custom Thermal Rolls",
    tagline: "Your width, your core, your branding",
    blurb:
      "When the printer doesn't take a standard size, or you want your logo and terms printed on the reverse.",
    image: `${IMG}/custom-rolls.jpg`,
    gallery: [`${IMG}/custom-rolls.jpg`],
    highlights: ["Any width", "Back printing", "Own branding"],
    specs: {
      "Roll widths": "37 mm – 210 mm, cut to order",
      "Paper weight": "48 – 80 gsm",
      "Core diameter": "12 mm – 40 mm",
      "Roll length": "To your specification",
      "Roll diameter": "To your specification",
      Coating: "Standard, BPA-free, phenol-free, top-coated",
      "Back printing": "Up to 2 colours",
    },
    sizes: [
      {
        width: "Any 37–210 mm",
        core: "12–40 mm",
        length: "On request",
        diameter: "On request",
      },
    ],
    packing: [
      "Packing configuration to your requirement",
      "Branded wrappers and cartons available",
      "Minimum order quantity applies — ask us",
    ],
    applications: [
      "Non-standard or legacy printers",
      "Promotional receipts and coupons",
      "Branded receipts with terms on the reverse",
      "OEM and white-label supply",
    ],
    compatibility: [
      "Send us a sample roll or your printer model",
      "We match width, core, length and wind direction",
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