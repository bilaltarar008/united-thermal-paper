import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaRulerHorizontal,
  FaRegCheckCircle,
  FaPrint,
  FaBoxOpen,
} from "react-icons/fa";

import { products, productFaqs } from "../../data/products";
import "./Products.css";

/* =========================================================
   LOCATION: src/pages/Products/Products.jsx
   ROUTE: /products   (single route — no detail pages)

   The card grid links to anchors further down the same page,
   so every category's full specification lives here.
========================================================= */

const WHATSAPP_NUMBER = "+92 371 9222993"; // ← change once, applies everywhere

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-70px" };

const hideIfBroken = (e) => {
  e.currentTarget.style.opacity = 0;
};

/* three real steps, in order — so numbering is earned */
const finder = [
  {
    title: "Measure the width",
    body: "Across the paper in millimetres. 57 and 80 mm cover most terminals.",
  },
  {
    title: "Measure the core",
    body: "The inner cardboard tube. Wrong core is the most common feed failure.",
  },
  {
    title: "Tell us the volume",
    body: "Rough rolls per month. That decides packing and delivery schedule.",
  },
];

const waLink = (name) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    name ? `Hi, I'd like a quote for ${name}.` : "Hi, I'd like a quote."
  )}`;

function Products() {
  return (
    <main className="prod">

      {/* ===================================================
            CATEGORY GRID — jumps to the spec blocks below
      =================================================== */}

      <section className="prod-section" aria-labelledby="range">

        <div className="prod-wrap">

          <div className="prod-section-head">
            <span className="prod-kicker">Browse the range</span>
            <h2 id="range">Choose your roll type</h2>
            <p className="prod-note">
              Every category below lists available sizes, paper specification,
              core options, packing and printer compatibility. We don&apos;t
              publish prices — quotes are based on your size and volume.
            </p>
          </div>

          <div className="prod-grid">

            {products.map((item, i) => (
              <motion.article
                key={item.slug}
                className="prod-card"
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={reveal}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              >

                <div className="prod-card-media">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="480"
                    height="360"
                    onError={hideIfBroken}
                  />
                </div>

                <div className="prod-card-body">

                  <h3>
                    <a href={`#${item.slug}`}>{item.name}</a>
                  </h3>

                  <span className="prod-card-tagline">{item.tagline}</span>

                  <p>{item.blurb}</p>

                  <ul className="prod-chips">
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <div className="prod-card-actions">

                    <a href={`#${item.slug}`} className="prod-link">
                      View specifications
                      <FaArrowRight aria-hidden="true" />
                    </a>

                    <Link
                      to={`/request-quote?product=${item.slug}`}
                      className="prod-btn-mini"
                    >
                      Request quote
                    </Link>

                  </div>

                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
            SIZE FINDER
      =================================================== */}

      <section className="prod-section prod-tint" aria-labelledby="finder">

        <div className="prod-wrap">

          <div className="prod-section-head">
            <span className="prod-kicker">Not sure which one</span>
            <h2 id="finder">Three numbers and we can quote</h2>
          </div>

          <ol className="prod-steps">

            {finder.map((step, i) => (
              <motion.li
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={reveal}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="prod-step-no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.li>
            ))}

          </ol>

          <div className="prod-helper">

            <FaRulerHorizontal aria-hidden="true" />

            <p>
              Still unsure? Send a photo of the roll you use now, or your
              printer model. We&apos;ll identify it and send a matching sample.
            </p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="prod-btn-mini prod-btn-mini-wa"
            >
              <FaWhatsapp aria-hidden="true" />
              Send a photo
            </a>

          </div>

        </div>

      </section>

      {/* ===================================================
            SIZE OVERVIEW TABLE
      =================================================== */}

      <section className="prod-section" aria-labelledby="overview">

        <div className="prod-wrap">

          <div className="prod-section-head">
            <span className="prod-kicker">At a glance</span>
            <h2 id="overview">Size overview</h2>
            <p className="prod-note">
              Common ranges per category. Custom widths are available
              throughout.
            </p>
          </div>

          <div className="prod-table-scroll">

            <table className="prod-table">

              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Widths</th>
                  <th scope="col">Core</th>
                  <th scope="col">Length</th>
                </tr>
              </thead>

              <tbody>
                {products.map((item) => (
                  <tr key={item.slug}>
                    <th scope="row">
                      <a href={`#${item.slug}`}>{item.name}</a>
                    </th>
                    <td>
                      {item.specs["Roll widths"] || item.specs["Reel width"]}
                    </td>
                    <td>{item.specs["Core diameter"]}</td>
                    <td>{item.specs["Roll length"] || "On request"}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* ===================================================
            FULL SPECIFICATIONS — one block per category
      =================================================== */}

      <section className="prod-section prod-tint" aria-labelledby="specs">

        <div className="prod-wrap">

          <div className="prod-section-head">
            <span className="prod-kicker">Full detail</span>
            <h2 id="specs">Specifications by category</h2>
          </div>

          <div className="prod-specs">

            {products.map((item) => (
              <motion.article
                key={item.slug}
                id={item.slug}
                className="prod-spec"
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={reveal}
                transition={{ duration: 0.5 }}
              >

                {/* ---- heading row ---- */}

                <div className="prod-spec-head">

                  <div className="prod-spec-media">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width="360"
                      height="270"
                      onError={hideIfBroken}
                    />
                  </div>

                  <div className="prod-spec-intro">
                    <span className="prod-kicker">{item.tagline}</span>
                    <h3>{item.name}</h3>
                    <p>{item.blurb}</p>
                    <ul className="prod-chips">
                      {item.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* ---- paper & roll specification ---- */}

                <div className="prod-spec-block">

                  <h4>Paper and roll specification</h4>

                  <dl className="prod-sheet">
                    {Object.entries(item.specs).map(([label, value]) => (
                      <div className="prod-sheet-row" key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>

                </div>

                {/* ---- available sizes ---- */}

                <div className="prod-spec-block">

                  <h4>Available sizes</h4>

                  <div className="prod-table-scroll">
                    <table className="prod-table">
                      <thead>
                        <tr>
                          <th scope="col">Width</th>
                          <th scope="col">Core</th>
                          <th scope="col">Length</th>
                          <th scope="col">Roll diameter</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.sizes.map((s, i) => (
                          <tr key={`${item.slug}-${i}`}>
                            <th scope="row">{s.width}</th>
                            <td>{s.core}</td>
                            <td>{s.length}</td>
                            <td>{s.diameter}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>

                {/* ---- applications / compatibility / packing ---- */}

                <div className="prod-trio">

                  <div>
                    <h4>
                      <FaRegCheckCircle aria-hidden="true" />
                      Applications
                    </h4>
                    <ul>
                      {item.applications.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>
                      <FaPrint aria-hidden="true" />
                      Compatibility
                    </h4>
                    <ul>
                      {item.compatibility.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>
                      <FaBoxOpen aria-hidden="true" />
                      Packing
                    </h4>
                    <ul>
                      {item.packing.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* ---- per-category CTA ---- */}

                <div className="prod-spec-actions">

                  <Link
                    to={`/request-quote?product=${item.slug}`}
                    className="prod-btn-mini"
                  >
                    Request a quote for {item.name}
                  </Link>

                  <a
                    href={waLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prod-btn-mini prod-btn-mini-wa"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    WhatsApp
                  </a>

                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
            FAQ — native details, no JS needed
      =================================================== */}

      <section className="prod-section" aria-labelledby="faq">

        <div className="prod-wrap prod-narrow">

          <div className="prod-section-head">
            <span className="prod-kicker">Questions we get</span>
            <h2 id="faq">Before you order</h2>
          </div>

          <div className="prod-faq">

            {productFaqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
            CTA
      =================================================== */}

      <section className="prod-cta" aria-labelledby="prod-cta">

        <div className="prod-wrap prod-cta-inner">

          <div>
            <h2 id="prod-cta">Ready to get a specification?</h2>
            <p>
              Send us the width, core size and rough monthly volume. We&apos;ll
              come back with a spec, a sample and a delivery date.
            </p>
          </div>

          <div className="prod-cta-actions">

            <Link to="/request-quote" className="prod-btn-solid">
              Request a quote
              <FaArrowRight aria-hidden="true" />
            </Link>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="prod-btn-ghost"
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

export default Products;