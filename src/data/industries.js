/* =========================================================
   INDUSTRIES — United Thermal Paper
   ---------------------------------------------------------
   EDIT CONTENT HERE. Consumed by pages/Industries/Industries.jsx

   ⚠ The "typical" widths and the roll recommendations are
   sensible defaults, not audited facts. Have someone who
   knows the accounts confirm them — a supermarket chain
   reading "80 mm" and receiving 76 mm is a returns problem.

   `icon` is a key, not a component, so this file stays free
   of React imports and could move to a CMS later. The
   mapping lives in Industries.jsx.
========================================================= */

export const industries = [
  {
    slug: "retail",
    icon: "retail",
    name: "Retail",
    summary:
      "Clothing, electronics, hardware and general stores where the till runs continuously through trading hours.",
    prints: "Receipts, returns slips, gift receipts, end-of-day reports",
    priority: "Clean feed under constant use — a jam holds up the queue",
    rolls: [
      { label: "POS Thermal Rolls", anchor: "pos-thermal-rolls" },
      { label: "Credit Card Rolls", anchor: "credit-card-machine-rolls" },
    ],
    typical: "57 & 80 mm",
  },
  {
    slug: "banking",
    icon: "banking",
    name: "Banking & Finance",
    summary:
      "Branches, ATMs and cash deposit machines, where a receipt is a record that has to stay readable.",
    prints: "ATM slips, deposit confirmations, token receipts, statements",
    priority: "Fade resistance — records are kept and referred back to",
    rolls: [
      { label: "ATM Thermal Rolls", anchor: "atm-thermal-rolls" },
      { label: "Kiosk Rolls", anchor: "kiosk-rolls" },
    ],
    typical: "80 mm, long-run",
  },
  {
    slug: "supermarkets",
    icon: "supermarket",
    name: "Supermarkets",
    summary:
      "Multi-lane checkouts plus fresh counters, usually across several branches on one specification.",
    prints: "Lane receipts, weighed-item labels, price checks, shelf tickets",
    priority: "One spec across every branch, held in buffer stock",
    rolls: [
      { label: "POS Thermal Rolls", anchor: "pos-thermal-rolls" },
      { label: "Weighing Scale Rolls", anchor: "weighing-scale-rolls" },
    ],
    typical: "80 mm + 37–57 mm labels",
  },
  {
    slug: "restaurants",
    icon: "restaurant",
    name: "Restaurants & Cafés",
    summary:
      "Front-of-house billing and kitchen order printers, often in warm, humid environments.",
    prints: "Bills, kitchen order tickets, delivery dockets, card slips",
    priority: "Heat and humidity tolerance near the kitchen line",
    rolls: [
      { label: "POS Thermal Rolls", anchor: "pos-thermal-rolls" },
      { label: "Credit Card Rolls", anchor: "credit-card-machine-rolls" },
    ],
    typical: "57 & 80 mm",
  },
  {
    slug: "pharmacies",
    icon: "pharmacy",
    name: "Pharmacies",
    summary:
      "Dispensing counters where the printed slip carries dosage information a patient will rely on.",
    prints: "Dispensing labels, receipts, insurance claim slips",
    priority: "Legibility that holds, and BPA-free handling for staff",
    rolls: [
      { label: "POS Thermal Rolls", anchor: "pos-thermal-rolls" },
      { label: "Custom Thermal Rolls", anchor: "custom-thermal-rolls" },
    ],
    typical: "57 & 80 mm, BPA-free",
  },
  {
    slug: "healthcare",
    icon: "hospital",
    name: "Hospitals & Clinics",
    summary:
      "Reception, laboratory and billing points, plus queue systems in outpatient departments.",
    prints: "Queue tokens, lab request slips, billing receipts, wristband labels",
    priority: "BPA-free grades and reliable supply against tender terms",
    rolls: [
      { label: "Kiosk Rolls", anchor: "kiosk-rolls" },
      { label: "POS Thermal Rolls", anchor: "pos-thermal-rolls" },
    ],
    typical: "80 mm, BPA-free",
  },
  {
    slug: "logistics",
    icon: "logistics",
    name: "Logistics & Warehousing",
    summary:
      "Dispatch desks, handheld devices on the floor, and vehicle-mounted printers on the road.",
    prints: "Consignment notes, proof of delivery, pick lists, weight slips",
    priority: "Rolls that survive vehicles, dust and temperature swings",
    rolls: [
      { label: "Credit Card Rolls", anchor: "credit-card-machine-rolls" },
      { label: "Weighing Scale Rolls", anchor: "weighing-scale-rolls" },
    ],
    typical: "57–80 mm",
  },
  {
    slug: "fuel-stations",
    icon: "fuel",
    name: "Fuel Stations",
    summary:
      "Forecourt pumps and shop tills, often outdoors and exposed to sunlight and fuel vapour.",
    prints: "Pump receipts, shop receipts, fleet card slips, shift reports",
    priority: "Coating that resists sun, heat and solvent exposure",
    rolls: [
      { label: "POS Thermal Rolls", anchor: "pos-thermal-rolls" },
      { label: "Kiosk Rolls", anchor: "kiosk-rolls" },
    ],
    typical: "57 & 80 mm",
  },
  {
    slug: "ecommerce",
    icon: "ecommerce",
    name: "E-commerce & Fulfilment",
    summary:
      "Packing benches printing labels and dockets at volume, where a stoppage backs up the whole line.",
    prints: "Shipping labels, packing slips, returns labels, invoices",
    priority: "High-volume supply with buffer stock on fast-moving sizes",
    rolls: [
      { label: "Jumbo Rolls & Bulk Supply", anchor: "jumbo-rolls-bulk-supply" },
      { label: "Custom Thermal Rolls", anchor: "custom-thermal-rolls" },
    ],
    typical: "80 mm + custom",
  },
  {
    slug: "ticketing",
    icon: "ticketing",
    name: "Entertainment & Ticketing",
    summary:
      "Cinemas, events, parking and transport, where unattended machines dispense tickets all day.",
    prints: "Tickets, parking stubs, queue tokens, entry passes",
    priority: "Heavier stock that won't curl or tear in unattended machines",
    rolls: [
      { label: "Kiosk Rolls", anchor: "kiosk-rolls" },
      { label: "Custom Thermal Rolls", anchor: "custom-thermal-rolls" },
    ],
    typical: "80–112 mm, 70–80 gsm",
  },
];

/* Cross-sector requirements — the things that come up in
   procurement conversations regardless of industry. */

export const requirements = [
  {
    title: "BPA-free where staff handle rolls all day",
    body:
      "Pharmacies, healthcare and food service increasingly specify BPA-free or phenol-free grades. Available across most categories — tell us and we quote that grade.",
  },
  {
    title: "Records that stay readable",
    body:
      "Banking, fuel and fleet receipts get filed and referred back to. We match coating grade to how long the print needs to survive.",
  },
  {
    title: "One specification across every site",
    body:
      "Multi-branch operations get a fixed spec, so a roll delivered to one branch behaves identically in another.",
  },
  {
    title: "Buffer stock on fast-moving sizes",
    body:
      "We hold inventory for repeat customers, so a reorder ships in 24 to 48 hours instead of waiting on an import cycle.",
  },
];

/* How we support multi-site and high-volume accounts */

export const supply = [
  {
    title: "Site survey",
    body:
      "We identify every printer model and roll size you're running, including the ones nobody documented.",
  },
  {
    title: "Standardise the spec",
    body:
      "Consolidate down to the fewest sizes that cover your estate, which cuts stockholding and ordering errors.",
  },
  {
    title: "Sample and approve",
    body:
      "You test on your own machines before anything is committed to a contract.",
  },
  {
    title: "Scheduled supply",
    body:
      "Agreed volumes, agreed intervals, with buffer stock held against your account.",
  },
];