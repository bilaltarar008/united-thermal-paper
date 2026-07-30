import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaRegCheckCircle,
} from "react-icons/fa";


import "./About.css";

/* ---------------------------------------------------------
   EDIT EVERYTHING IN THIS BLOCK — these are placeholders.
   Replace with United Thermal Paper's real figures before
   going live. Do not publish invented certifications.
--------------------------------------------------------- */

const facts = [
  { value: "2015", label: "Supplying since" },
  { value: "9", label: "Industries served" },
  { value: "57–210 mm", label: "Roll widths" },
  { value: "24–48 h", label: "Bulk dispatch" },
];

const story = [
  {
    year: "2015",
    title: "Started as a converter",
    body:
      "We began slitting and packing rolls for retailers in Lahore who kept getting stock that jammed or printed grey.",
  },
  {
    year: "2018",
    title: "Direct jumbo sourcing",
    body:
      "We moved to buying jumbo reels straight from established mills, so we control the coating grade instead of inheriting it.",
  },
  {
    year: "2021",
    title: "Joined Tenacious Global Group",
    body:
      "Group backing gave us the import volume and warehousing to hold buffer stock, which is what keeps lead times short.",
  },
  {
    year: "Today",
    title: "Nationwide B2B supply",
    body:
      "We supply POS, ATM, kiosk and weighing-scale rolls to retail chains, banks, pharmacies and logistics operators.",
  },
];

const differences = [
  {
    title: "Coating grade we can name",
    body:
      "Every batch is tied to a known jumbo source and coating specification. If you ask what's on the paper, we can answer.",
  },
  {
    title: "Consistent image density",
    body:
      "Rolls are checked for print darkness against a reference sample, so the receipt from your tenth roll matches your first.",
  },
  {
    title: "Clean feed, no jams",
    body:
      "Tight winding tension and dust-free slitting keep the paper tracking straight through high-volume printers.",
  },
  {
    title: "Sizes cut to your printer",
    body:
      "Standard widths in stock, plus custom widths, core sizes and roll lengths for non-standard equipment.",
  },
  {
    title: "BPA-free options",
    body:
      "Phenol-free and BPA-free grades available for customers with procurement or export requirements.",
  },
  {
    title: "Stock that's actually there",
    body:
      "We hold buffer inventory on fast-moving sizes so a reorder doesn't turn into a four-week wait.",
  },
];

const specs = [
  {
    property: "Paper weight",
    standard: "48 – 80 gsm",
    why: "Matched to printer type — lighter for handhelds, heavier for kiosks",
  },
  {
    property: "Roll widths",
    standard: "57 / 76 / 80 / 110 mm",
    why: "Covers the majority of POS, ATM and scale printers in use",
  },
  {
    property: "Core diameter",
    standard: "12 / 17 / 25 mm",
    why: "Wrong core is the most common cause of feed failure",
  },
  {
    property: "Image density",
    standard: "Checked per batch",
    why: "Prevents grey, half-readable receipts",
  },
  {
    property: "Coating",
    standard: "Standard, BPA-free, phenol-free",
    why: "Lets procurement teams meet their own compliance rules",
  },
  {
    property: "Packing",
    standard: "Shrink-wrapped, carton-boxed",
    why: "Protects the coating from heat and humidity in transit",
  },
];

const process = [
  {
    title: "Source the jumbo reel",
    body:
      "We select reels by coating grade and mill, not by lowest landed cost.",
  },
  {
    title: "Inspect on arrival",
    body:
      "Reels are checked for coating uniformity, moisture and edge damage before they enter stock.",
  },
  {
    title: "Slit to width",
    body:
      "Cut on calibrated slitters with dust extraction, so edges stay clean and cores sit true.",
  },
  {
    title: "Test the print",
    body:
      "Sample rolls from each batch are run through reference printers and compared for image density and fade.",
  },
  {
    title: "Pack for transit",
    body:
      "Shrink-wrapped in fixed counts, boxed, and labelled with size and batch.",
  },
  {
    title: "Dispatch and hold buffer",
    body:
      "Orders ship in 24–48 hours on stocked sizes, with buffer inventory kept for repeat customers.",
  },
];

const trust = [
  "You deal with the same person from first enquiry to repeat order — no ticket queue.",
  "Samples before commitment, so you test on your own printers first.",
  "Batch labelling means any complaint can be traced to a specific reel.",
  "Group backing behind supply commitments, not a one-man importer.",
];

/* --------------------------------------------------------- */

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-70px" };

function About() {
  return (
    <main className="about">

      {/* =====================================================
            PAGE HEADER — dark band
      ===================================================== */}

      <header className="about-head">

        <div className="about-wrap about-head-grid">

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            <span className="about-eyebrow">
              <i />
              About the company
            </span>

            <h1>
              We supply thermal paper that
              <span className="about-accent"> prints the same every time.</span>
            </h1>

            <p className="about-lede">
              United Thermal Paper converts and supplies thermal rolls for
              businesses that print all day — retail counters, bank machines,
              pharmacy dispensaries and weighing floors. No guesswork on
              grade, no surprises on lead time.
            </p>

            {/* Group lockup */}
            <div className="about-group">

{/*               
                Drop the Tenacious Global Group logo in and swap this block:
                <img src={tggLogo} alt="Tenacious Global Group" />
              */}
              <span className="about-group-mark" aria-hidden="true">TGG</span>

              <span className="about-group-text">
                <b>A Brand of</b>
                Tenacious Global Group
              </span>

            </div>

          </motion.div>

          <motion.dl
            className="about-facts"
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >

            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}

          </motion.dl>

        </div>

      </header>

      {/* =====================================================
            WHO WE ARE
      ===================================================== */}

      <section className="about-section" aria-labelledby="who">

        <div className="about-wrap about-split">

          <motion.div
            className="about-split-head"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            transition={{ duration: 0.55 }}
          >
            <span className="about-kicker">Who we are</span>
            <h2 id="who">A converter, not a middleman</h2>
          </motion.div>

          <motion.div
            className="about-split-body"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            transition={{ duration: 0.55, delay: 0.1 }}
          >

            <p>
              We buy jumbo thermal reels, inspect them, and slit them to size
              in-house. That single fact explains most of what customers
              notice about us: we know which mill a roll came from, we can
              hold a coating grade steady across reorders, and we can cut a
              width that isn't on anyone's standard list.
            </p>

            <p>
              Our customers are businesses where a bad roll costs more than
              the roll. A supermarket lane stops. An ATM stops dispensing
              receipts. A pharmacy can't hand over a dispensing label. We
              built the operation around not being the reason that happens.
            </p>

            <p>
              United Thermal Paper is a brand of Tenacious Global Group,
              which gives us the import volume and warehouse capacity to keep
              fast-moving sizes on the shelf rather than on order.
            </p>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
            STORY — receipt tape
      ===================================================== */}

      <section className="about-section about-tint" aria-labelledby="story">

        <div className="about-wrap">

          <div className="about-split-head about-center">
            <span className="about-kicker">Our story</span>
            <h2 id="story">How we got here</h2>
          </div>

          <ol className="about-tape">

            {story.map((item, i) => (
              <motion.li
                key={item.year}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={reveal}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <span className="about-tape-year">{item.year}</span>
                <div className="about-tape-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </motion.li>
            ))}

          </ol>

        </div>

      </section>

      {/* =====================================================
            MISSION & VISION
      ===================================================== */}

      <section className="about-section" aria-labelledby="mv">

        <div className="about-wrap">

          <div className="about-split-head">
            <span className="about-kicker">What drives us</span>
            <h2 id="mv">Mission &amp; vision</h2>
          </div>

          <div className="about-mv">

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={reveal}
              transition={{ duration: 0.55 }}
            >
              <span className="about-mv-tag">Mission</span>
              <p>
                Make reliable thermal paper the boring part of our customers'
                operations — specified clearly, delivered on time, and
                identical from one order to the next.
              </p>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={reveal}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <span className="about-mv-tag">Vision</span>
              <p>
                To be the supplier Pakistani businesses name first when they
                need thermal media at scale, and to move our customers toward
                BPA-free grades as standard rather than as an upgrade.
              </p>
            </motion.article>

          </div>

        </div>

      </section>

      {/* =====================================================
            WHAT MAKES OUR PAPER DIFFERENT
      ===================================================== */}

      <section className="about-section about-tint" aria-labelledby="diff">

        <div className="about-wrap">

          <div className="about-split-head">
            <span className="about-kicker">The difference</span>
            <h2 id="diff">What sets our rolls apart</h2>
          </div>

          <div className="about-grid">

            {differences.map((d, i) => (
              <motion.article
                key={d.title}
                className="about-card"
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={reveal}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </motion.article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
            QUALITY STANDARDS — spec sheet
      ===================================================== */}

      <section className="about-section" aria-labelledby="quality">

        <div className="about-wrap">

          <div className="about-split-head">
            <span className="about-kicker">Quality standards</span>
            <h2 id="quality">What we hold constant</h2>
            <p className="about-section-note">
              These are the properties we specify and check. If your printers
              need something outside these ranges, tell us — most of it is
              adjustable.
            </p>
          </div>

          <div className="about-sheet" role="table" aria-label="Quality standards">

            <div className="about-sheet-head" role="row">
              <span role="columnheader">Property</span>
              <span role="columnheader">Our standard</span>
              <span role="columnheader">Why it matters</span>
            </div>

            {specs.map((s) => (
              <div className="about-sheet-row" role="row" key={s.property}>
                <span className="about-sheet-prop" role="cell">{s.property}</span>
                <span className="about-sheet-val" role="cell">{s.standard}</span>
                <span className="about-sheet-why" role="cell">{s.why}</span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
            PROCESS — a real sequence, so it gets numbers
      ===================================================== */}

      <section className="about-section about-tint" aria-labelledby="process">

        <div className="about-wrap">

          <div className="about-split-head">
            <span className="about-kicker">Sourcing &amp; manufacturing</span>
            <h2 id="process">From jumbo reel to your counter</h2>
          </div>

          <ol className="about-steps">

            {process.map((step, i) => (
              <motion.li
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={reveal}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <span className="about-step-no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.li>
            ))}

          </ol>

        </div>

      </section>

      {/* =====================================================
            WHY CUSTOMERS TRUST US
      ===================================================== */}

      <section className="about-section" aria-labelledby="trust">

        <div className="about-wrap about-split">

          <motion.div
            className="about-split-head"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            transition={{ duration: 0.55 }}
          >
            <span className="about-kicker">Working with us</span>
            <h2 id="trust">Why customers stay</h2>
          </motion.div>

          <motion.ul
            className="about-trust"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            transition={{ duration: 0.55, delay: 0.1 }}
          >

            {trust.map((t) => (
              <li key={t}>
                <FaRegCheckCircle aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}

          </motion.ul>

        </div>

      </section>

      {/* =====================================================
            CTA — dark band
      ===================================================== */}

      <section className="about-cta" aria-labelledby="cta">

        <div className="about-wrap about-cta-inner">

          <div>
            <h2 id="cta">Tell us what your printers need</h2>
            <p>
              Send us the width, core size and rough monthly volume, and we'll
              come back with a specification and a sample.
            </p>
          </div>

          <div className="about-cta-actions">

            <Link to="/request-quote" className="about-btn-solid">
              Request a quote
              <FaArrowRight aria-hidden="true" />
            </Link>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn-wa"
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;