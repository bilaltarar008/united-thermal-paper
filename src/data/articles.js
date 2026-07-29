/* =========================================================
   ARTICLES — United Thermal Paper
   ---------------------------------------------------------
   Consumed by pages/Resources/Resources.jsx and ArticleDetail.jsx

   The bodies below are written to be genuinely useful and are
   technically accurate as general industry background. Two
   things to check before publishing:

   1. REGULATORY CLAIMS. The BPA article references EU limits.
      Confirm current wording, and confirm what applies in
      Pakistan and in your customers' export markets, before
      this goes live. Don't let a marketing page become a
      compliance statement.
   2. AUTHOR / DATES. Set real publish dates. Search engines
      and readers both treat a stale date badly.

   Body blocks:
     { type: "p",    text }        paragraph
     { type: "h",    text }        subheading
     { type: "ul",   items: [] }   bullet list
     { type: "note", text }        highlighted aside
========================================================= */

export const categories = [
  "All",
  "Basics",
  "Buying guide",
  "Care & storage",
  "Compliance",
  "How it's made",
];

export const articles = [
  {
    slug: "how-to-choose-the-right-thermal-paper-roll",
    title: "How to Choose the Right Thermal Paper Roll",
    category: "Buying guide",
    featured: true,
    date: "2026-06-18",
    readTime: "6 min",
    excerpt:
      "Four measurements decide whether a roll fits your printer. Get them right and reordering becomes trivial; get one wrong and you have a drawer full of paper you can't use.",
    body: [
      {
        type: "p",
        text: "Most thermal paper complaints aren't about paper quality at all. They're about fit. A roll that is two millimetres too wide binds against the housing, a core that is too small won't seat on the spindle, and a diameter that is too large simply won't close the lid. Before you compare grades or prices, get the dimensions right.",
      },
      { type: "h", text: "1. Paper width" },
      {
        type: "p",
        text: "Measure straight across the paper, not the roll housing, in millimetres. The two widths that cover most equipment are 57 mm for handheld and card terminals and 80 mm for countertop receipt printers. You'll also encounter 76 mm on older impact-style units and 112 mm on kiosk machines.",
      },
      { type: "h", text: "2. Core diameter" },
      {
        type: "p",
        text: "This is the inner cardboard tube, measured across the hole. Common sizes are 12 mm, 17 mm and 25 mm. It matters more than people expect: the wrong core either won't mount at all or wobbles as it unwinds, which shows up as skewed printing and eventually a jam.",
      },
      { type: "h", text: "3. Roll diameter" },
      {
        type: "p",
        text: "The outside measurement of the full roll. This is what determines whether the printer lid closes. If you want longer rolls to reduce how often staff change them, this is the constraint you'll hit first — check the maximum diameter your printer accepts before ordering.",
      },
      { type: "h", text: "4. Length and paper weight" },
      {
        type: "p",
        text: "Length follows from diameter and paper weight. Lighter stock at 48 gsm gives you more metres in the same diameter; heavier stock at 70 to 80 gsm gives fewer metres but handles better and resists curling. High-traffic tills favour length. Unattended kiosks favour weight, because a torn ticket means a service call rather than a reprint.",
      },
      {
        type: "note",
        text: "Fastest route: photograph the roll you're using now beside a ruler, and send us your printer model. We can identify the specification from that alone and send a matching sample.",
      },
      { type: "h", text: "Then think about the environment" },
      {
        type: "p",
        text: "Once the dimensions are settled, the coating grade is what's left to decide, and it depends on where the roll lives:",
      },
      {
        type: "ul",
        items: [
          "Receipts that get filed and referred back to — bank, fuel, fleet — need a coating chosen for image stability.",
          "Outdoor or vehicle-mounted printers need tolerance for heat, sunlight and humidity.",
          "Pharmacy, healthcare and food service increasingly specify BPA-free or phenol-free grades.",
          "Anywhere staff handle rolls all day is worth reviewing for coating chemistry.",
        ],
      },
      {
        type: "p",
        text: "Finally, standardise. If you run several sites, consolidating down to the fewest sizes that cover your equipment cuts stockholding, reduces ordering mistakes, and makes it far easier to hold buffer stock against your account.",
      },
    ],
  },

  {
    slug: "what-is-thermal-paper-and-how-does-it-work",
    title: "What Is Thermal Paper and How Does It Work?",
    category: "Basics",
    date: "2026-06-02",
    readTime: "5 min",
    excerpt:
      "There's no ink in a thermal printer. The image is already in the paper, waiting for heat to reveal it — which explains most of thermal paper's strengths and every one of its weaknesses.",
    body: [
      {
        type: "p",
        text: "A thermal printer has no ink, no toner and no ribbon. Everything needed to form the image is already coated onto the paper. The printer simply applies heat in the right places, and the paper darkens where it was heated.",
      },
      { type: "h", text: "What's in the coating" },
      {
        type: "p",
        text: "The active layer holds two key ingredients kept apart at room temperature: a colourless dye, and an acidic compound called a developer. When the print head heats a spot past a threshold, a binder in the coating melts, the two ingredients meet, and the dye changes structure and turns dark. Cool it again and the mark stays.",
      },
      {
        type: "p",
        text: "Most rolls are built in layers. A base paper carries a precoat that smooths the surface and insulates it, then the thermal layer, and often a protective top coat that shields against abrasion, moisture and oils.",
      },
      { type: "h", text: "How the printer forms characters" },
      {
        type: "p",
        text: "The print head is a line of tiny heating elements. As the paper feeds past, the printer switches individual elements on and off to build the image one row of dots at a time. Nothing is deposited on the paper — which is why thermal printers are fast, quiet, and have so few consumables to replace.",
      },
      { type: "h", text: "The trade-off" },
      {
        type: "p",
        text: "Because the image is a chemical reaction rather than a deposit of ink, anything that supplies heat or dissolves the coating can affect it. A receipt left on a car dashboard darkens. One pressed against certain plastics fades. This isn't a defect; it's the mechanism working as designed, in the wrong conditions.",
      },
      {
        type: "note",
        text: "Direct thermal is what receipts use — heat-sensitive paper, no ribbon. Thermal transfer is different: it melts a wax or resin ribbon onto ordinary stock, and lasts far longer. Choose transfer when a label has to survive years, direct thermal when it has to be produced instantly and cheaply.",
      },
      {
        type: "p",
        text: "For the applications thermal paper is built for — receipts, tickets, tokens, dispensing labels — that trade-off is the right one. You get instant printing with almost no maintenance, and the print lasts long enough for the job.",
      },
    ],
  },

  {
    slug: "thermal-paper-vs-regular-paper",
    title: "Thermal Paper vs Regular Paper: What's the Difference?",
    category: "Basics",
    date: "2026-06-06",
    readTime: "4 min",
    excerpt:
      "They look similar in the box. One carries its image chemistry in a coating; the other needs a printer that supplies the ink. Using the wrong one wastes a roll and can damage a print head.",
    body: [
      {
        type: "p",
        text: "Regular paper is a passive surface. It holds whatever a printer puts on it — ink, toner, ribbon pigment. Thermal paper is active: it carries a heat-sensitive coating that produces the image itself. Put plain paper in a thermal printer and you get a blank slip, because there's nothing to react.",
      },
      { type: "h", text: "Telling them apart" },
      {
        type: "ul",
        items: [
          "Scratch test: drag a coin or fingernail firmly across the surface. Thermal paper leaves a dark line from friction heat. Plain paper doesn't.",
          "Feel: thermal paper is usually smoother and slightly slick on the coated side.",
          "One side only: thermal paper prints on the coated face. Load it the wrong way round and it comes out blank.",
        ],
      },
      { type: "h", text: "Where each belongs" },
      {
        type: "p",
        text: "Thermal suits anything printed in high volume, at speed, and read soon after: receipts, kitchen tickets, queue tokens, weighing labels, parking stubs. There's no ribbon to change and no cartridge to run dry, which is why a busy supermarket lane uses it.",
      },
      {
        type: "p",
        text: "Regular paper suits documents that must last, need colour, or will be handled and filed for years — invoices, contracts, reports. Archival life is where plain paper wins decisively.",
      },
      {
        type: "note",
        text: "Cost comparison catches people out. Thermal paper costs more per metre than plain bond, but the total cost is often lower because there are no ribbons, cartridges or toner to buy, and far less downtime replacing them.",
      },
      {
        type: "p",
        text: "One practical warning: don't feed thermal paper through a laser printer. The fuser's heat will blacken the whole sheet, and in the worst case the melted coating leaves residue inside the machine.",
      },
    ],
  },

  {
    slug: "how-to-store-thermal-paper-properly",
    title: "How to Store Thermal Paper Properly",
    category: "Care & storage",
    date: "2026-06-11",
    readTime: "4 min",
    excerpt:
      "Most rolls that print grey or blotchy were fine when they shipped. Storage did the damage — and almost all of it is avoidable with a shelf in the right place.",
    body: [
      {
        type: "p",
        text: "Unprinted thermal paper keeps well for years in the right conditions. It degrades quickly in the wrong ones. If you buy in bulk to get better terms, storage is what protects that investment.",
      },
      { type: "h", text: "The four things to control" },
      {
        type: "ul",
        items: [
          "Heat. Keep storage cool — comfortable room temperature is fine; a hot store room in summer is not. Heat is what the coating reacts to, so sustained warmth degrades sensitivity even before anything visibly darkens.",
          "Humidity. Moderate and stable is what you want. Damp air makes paper cockle and can mottle the coating; very dry air encourages static and dust.",
          "Light. Keep rolls out of direct sunlight and away from strong fluorescent light. Leave them in their original wrapper until use — that wrapper is protection, not just packaging.",
          "Chemicals. Solvents, cleaning products, adhesives and fuel vapour all attack the coating. Don't store rolls in a chemical cupboard or next to a cleaning station.",
        ],
      },
      { type: "h", text: "The plastics problem" },
      {
        type: "p",
        text: "Soft PVC is the one people don't expect. Plasticisers migrate out of PVC and into the thermal coating, and printed areas fade where they touched. Avoid PVC document wallets, PVC-lined binders and soft plastic sleeves for anything you need to keep.",
      },
      {
        type: "note",
        text: "For receipts that must be retained — warranty, tax, reimbursement — photocopy or scan them on arrival and file the copy. Treat the thermal original as temporary regardless of how well you store it.",
      },
      { type: "h", text: "Rotate your stock" },
      {
        type: "p",
        text: "Use oldest first. Label cartons with the date they arrived, keep them off the floor and away from exterior walls where damp collects, and don't open more than you'll get through. A roll left unwrapped on a counter for a month is already compromised.",
      },
    ],
  },

  {
    slug: "why-does-thermal-paper-fade",
    title: "Why Does Thermal Paper Fade?",
    category: "Care & storage",
    date: "2026-06-14",
    readTime: "5 min",
    excerpt:
      "A receipt that's blank three months later hasn't lost its ink — there was never any ink. Understanding the mechanism tells you exactly which conditions to avoid.",
    body: [
      {
        type: "p",
        text: "Thermal print isn't a layer sitting on the paper. It's a chemical state the coating has been pushed into. Anything that lets that reaction reverse, or that dissolves the coating, makes the image disappear.",
      },
      { type: "h", text: "The five usual culprits" },
      {
        type: "ul",
        items: [
          "Heat. A dashboard, a windowsill, a pocket beside a phone. Sustained warmth eventually darkens the whole surface or wipes the image entirely.",
          "Sunlight and UV. Direct light bleaches printed areas and can yellow the paper.",
          "Plasticisers. Contact with soft PVC — wallets, sleeves, some binder covers — pulls the image out over weeks.",
          "Solvents and oils. Hand sanitiser, cleaning spray, adhesive tape, cooking oil, fuel. Localised patches vanish where contact occurred.",
          "Abrasion. Rubbing removes coating physically. Rolls without a protective top coat show this fastest.",
        ],
      },
      { type: "h", text: "What extends print life" },
      {
        type: "p",
        text: "Two things matter most. First, coating specification: top-coated grades resist moisture, oils and abrasion considerably better than uncoated ones, and are worth specifying wherever receipts get kept. Second, storage: cool, dark, dry, and away from plastics and chemicals.",
      },
      {
        type: "p",
        text: "Printer settings play a smaller but real part. A print head running too cool produces a weak image that has less to lose before becoming unreadable. If receipts look grey from new, that's usually a density setting rather than a paper fault.",
      },
      {
        type: "note",
        text: "If a document must survive years — a warranty, a tax record, a signed agreement — thermal paper is the wrong medium regardless of grade. Scan it, or print it on plain paper. Specify a stable grade for the receipts that matter and accept that months, not decades, is the working assumption.",
      },
    ],
  },

  {
    slug: "bpa-free-thermal-paper-what-you-need-to-know",
    title: "BPA-Free Thermal Paper: What You Need to Know",
    category: "Compliance",
    date: "2026-06-22",
    readTime: "6 min",
    excerpt:
      "Procurement teams increasingly ask for it, and the terminology gets muddled. Here's what BPA-free actually means, what phenol-free adds, and what to ask a supplier for.",
    body: [
      {
        type: "p",
        text: "The developer in a thermal coating is an acidic compound, and for decades the most common one was bisphenol A — BPA. Because it sits in the coating rather than being chemically bound into it, small amounts can transfer to skin on handling. That is the concern driving the shift, particularly for staff who handle receipts all day.",
      },
      { type: "h", text: "The three terms, and why they differ" },
      {
        type: "ul",
        items: [
          "BPA-free means bisphenol A has been replaced. It does not tell you what replaced it.",
          "BPS-based is the most common substitution — bisphenol S. It is legitimately BPA-free, but it's a closely related compound, and some buyers specifically exclude it too.",
          "Phenol-free goes further, using a developer from a different chemical family altogether. This is what a buyer usually means when they say they want the substitution done thoroughly.",
        ],
      },
      {
        type: "note",
        text: "If your specification says only 'BPA-free', you may receive BPS. If that matters to your procurement policy or your export market, write 'phenol-free' explicitly and ask for documentation.",
      },
      { type: "h", text: "Regulation" },
      {
        type: "p",
        text: "The European Union has restricted BPA in thermal paper placed on its market, and several other jurisdictions have introduced their own rules and labelling requirements. Requirements differ by country and change over time, so if you export, or supply businesses that do, confirm the current position for each destination market rather than relying on a general statement.",
      },
      { type: "h", text: "What to ask your supplier" },
      {
        type: "ul",
        items: [
          "Which developer is used, by name — not just the category.",
          "Documentation you can hand to your own compliance function.",
          "Whether print performance and image stability differ from the standard grade.",
          "Whether the grade is held in stock or made to order, since that affects lead time.",
        ],
      },
      {
        type: "p",
        text: "One practical note: alternative developers can behave differently in the printer, sometimes needing a small adjustment to print density. Always run a sample on your own machines before committing an estate to a new grade.",
      },
      {
        type: "note",
        text: "This article is general background, not compliance advice. For obligations that apply to your business, check with your compliance function or the relevant regulator.",
      },
    ],
  },

  {
    slug: "the-complete-guide-to-pos-thermal-rolls",
    title: "The Complete Guide to POS Thermal Rolls",
    category: "Buying guide",
    date: "2026-06-26",
    readTime: "7 min",
    excerpt:
      "The everyday receipt roll, examined properly: sizes, weights, what changes between a café till and a supermarket lane, and how to stop reordering the wrong thing.",
    body: [
      {
        type: "p",
        text: "POS rolls are the highest-volume thermal product in most businesses, which makes them the one where small specification errors cost the most. This is what to know before you place a standing order.",
      },
      { type: "h", text: "Sizes that cover most equipment" },
      {
        type: "p",
        text: "Two widths dominate. 80 mm is the countertop standard for supermarkets, retail and restaurants. 57 mm covers card terminals, handhelds and compact tills. 76 mm turns up on older equipment. Core sizes are typically 12 mm or 17 mm, and roll length usually runs from about 15 m on small terminals up to 80 m on countertop units.",
      },
      { type: "h", text: "Paper weight, and what it changes" },
      {
        type: "p",
        text: "Between roughly 48 and 70 gsm, the trade-off is metres versus handling. Lighter paper gets more length into the same roll diameter, so staff change rolls less often. Heavier paper feeds more reliably, curls less, and produces a receipt that feels substantial — which matters more than it sounds for premium retail.",
      },
      { type: "h", text: "Choose by environment, not by price" },
      {
        type: "ul",
        items: [
          "Supermarket lanes: 80 mm, longer rolls, prioritise uninterrupted running and consistent feed.",
          "Restaurants and cafés: heat and humidity near the kitchen, so a top-coated grade earns its cost.",
          "Card terminals and handhelds: 57 mm, small diameter, and check the maximum the device accepts.",
          "Pharmacies and healthcare: legibility that holds, and increasingly a BPA-free or phenol-free grade.",
        ],
      },
      {
        type: "note",
        text: "Print density is the setting to check first when receipts look grey. It's a printer configuration far more often than a paper fault, and it's free to fix.",
      },
      { type: "h", text: "Buying and holding stock" },
      {
        type: "p",
        text: "Standardise across sites wherever you can. Every additional size multiplies your stockholding, your chance of a wrong delivery, and the odds of a lane sitting idle because the right roll is in another branch. Consolidating to two sizes is usually achievable and pays for itself.",
      },
      {
        type: "p",
        text: "Order against consumption, not intuition. Count rolls used per week per site, add a buffer for peak trading, and set a reorder point from that. Ask your supplier whether they'll hold buffer stock against your account — it converts a four-week import wait into a two-day delivery.",
      },
      { type: "h", text: "Before you commit" },
      {
        type: "p",
        text: "Always test on your own machines. Print a full receipt, check the density, feel the feed, and leave one on a warm surface for a day to see how it holds. A sample takes a week; the wrong standing order takes a year to work through.",
      },
    ],
  },

  {
    slug: "how-thermal-paper-is-made",
    title: "How Thermal Paper Is Made",
    category: "How it's made",
    date: "2026-06-29",
    readTime: "5 min",
    excerpt:
      "From base paper to the roll on your counter: what each coating layer does, and why the slitting stage decides whether your printer jams.",
    body: [
      {
        type: "p",
        text: "Thermal paper starts as ordinary base paper and becomes a coated product through several distinct stages. Knowing them helps when you're comparing suppliers, because most quality differences trace back to a specific stage.",
      },
      { type: "h", text: "1. Base paper" },
      {
        type: "p",
        text: "A wood-free base is manufactured to a target weight and smoothness. Consistency here matters — variation in the base shows up later as uneven print.",
      },
      { type: "h", text: "2. Precoat" },
      {
        type: "p",
        text: "A layer applied beneath the thermal coating that smooths the surface and insulates it. Insulation means heat from the print head stays where it's applied instead of dissipating into the paper, which sharpens the image and lets the printer run cooler.",
      },
      { type: "h", text: "3. Thermal coating" },
      {
        type: "p",
        text: "The active layer: dye, developer, a binder that melts at the target temperature, and additives controlling sensitivity and stability. This is where grade is decided, and where BPA-free or phenol-free formulations differ from standard ones.",
      },
      { type: "h", text: "4. Top coat" },
      {
        type: "p",
        text: "An optional protective layer over the thermal coating, guarding against moisture, oils, plasticisers and abrasion. It also protects the print head from wear. Top-coated grades cost more and are worth it wherever receipts are handled or kept.",
      },
      { type: "h", text: "5. Jumbo reels" },
      {
        type: "p",
        text: "The coated web is wound into large-diameter jumbo reels, up to around a metre wide, and tested for coating uniformity, sensitivity and image density. Reels are then supplied to converters — or bought by them directly, which is how we source.",
      },
      { type: "h", text: "6. Slitting and winding" },
      {
        type: "p",
        text: "Jumbos are slit to finished widths and wound onto cores. This is the stage that most often explains a jam. Clean, dust-extracted cutting keeps edges sharp and stops paper dust reaching the print head, and correct winding tension keeps the roll tracking straight instead of telescoping.",
      },
      {
        type: "note",
        text: "When a roll feeds badly but prints fine, suspect slitting and winding rather than coating. It's a converting problem, not a paper-mill one — which is exactly why we slit in-house rather than buying finished rolls.",
      },
      { type: "h", text: "7. Packing" },
      {
        type: "p",
        text: "Finished rolls are shrink-wrapped in fixed counts, boxed, and labelled with size and batch. Wrapping isn't cosmetic — it shields the coating from humidity and light in transit and storage, and batch labelling means any complaint can be traced back to a specific reel.",
      },
    ],
  },
];

/* ---- helpers ---- */

export const getArticle = (slug) =>
  articles.find((a) => a.slug === slug);

export const getFeatured = () =>
  articles.find((a) => a.featured) || articles[0];

export const getRelatedArticles = (slug, count = 3) =>
  articles.filter((a) => a.slug !== slug).slice(0, count);

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });