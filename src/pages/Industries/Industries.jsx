import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaShoppingCart,
  FaUniversity,
  FaStore,
  FaUtensils,
  FaPrescriptionBottleAlt,
  FaHospital,
  FaTruck,
  FaGasPump,
  FaShippingFast,
  FaTicketAlt,
} from "react-icons/fa";

import { industries, requirements, supply } from "../../data/industries";
import "./Industries.css";

/* =========================================================
   LOCATION: src/pages/Industries/Industries.jsx
   ROUTE: /industries
========================================================= */

const WHATSAPP_NUMBER = "923001234567"; // ← change once, applies everywhere

/* icon keys live in the data file; the components live here,
   so the data stays portable */
const icons = {
  retail: FaShoppingCart,
  banking: FaUniversity,
  supermarket: FaStore,
  restaurant: FaUtensils,
  pharmacy: FaPrescriptionBottleAlt,
  hospital: FaHospital,
  logistics: FaTruck,
  fuel: FaGasPump,
  ecommerce: FaShippingFast,
  ticketing: FaTicketAlt,
};

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-70px" };

const waLink = (sector) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    sector
      ? `Hi, I need thermal rolls for a ${sector} business.`
      : "Hi, I'd like to discuss thermal roll supply."
  )}`;

function Industries() {
  return (
    <main className="ind">

      {/* ===================================================
            HEADER
      =================================================== */}

      <header className="ind-head">

        <div className="ind-wrap">

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            <span className="ind-eyebrow">
              <i />
              Industries we serve
            </span>

            <h1>
              Every counter prints differently.
              <span className="ind-accent"> We supply for all of them.</span>
            </h1>

            <p className="ind-lede">
              A supermarket lane, a bank ATM and a fuel forecourt pump have
              almost nothing in common except that all three stop working
              without the right roll. Here&apos;s what we supply, sector by
              sector.
            </p>

            <div className="ind-head-actions">

              <Link to="/request-quote" className="ind-btn-solid">
                Request a quote
                <FaArrowRight aria-hidden="true" />
              </Link>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="ind-btn-ghost"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp us
              </a>

            </div>

          </motion.div>

        </div>

      </header>

      {/* ===================================================
            SECTOR GRID
      =================================================== */}

      <section className="ind-section" aria-labelledby="sectors">

        <div className="ind-wrap">

          <div className="ind-section-head">
            <span className="ind-kicker">By sector</span>
            <h2 id="sectors">Where our rolls are running</h2>
            <p className="ind-note">
              Each card shows what gets printed, what matters most in that
              environment, and which of our roll types fits. Not sure where you
              land? Send us your printer model and we&apos;ll tell you.
            </p>
          </div>

          <div className="ind-grid">

            {industries.map((item, i) => {
              const Icon = icons[item.icon];

              return (
                <motion.article
                  key={item.slug}
                  id={item.slug}
                  className="ind-card"
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={reveal}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                >

                  <div className="ind-card-top">

                    <span className="ind-icon" aria-hidden="true">
                      {Icon && <Icon />}
                    </span>

                    <span className="ind-card-typical">{item.typical}</span>

                  </div>

                  <h3>{item.name}</h3>

                  <p>{item.summary}</p>

                  <dl className="ind-meta">

                    <div>
                      <dt>What gets printed</dt>
                      <dd>{item.prints}</dd>
                    </div>

                    <div>
                      <dt>What matters most</dt>
                      <dd>{item.priority}</dd>
                    </div>

                  </dl>

                  <div className="ind-card-foot">

                    <span className="ind-foot-label">Recommended</span>

                    <ul className="ind-rolls">
                      {item.rolls.map((roll) => (
                        <li key={roll.anchor}>
                          <Link to={`/products#${roll.anchor}`}>
                            {roll.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>

      {/* ===================================================
            CROSS-SECTOR REQUIREMENTS
      =================================================== */}

      <section className="ind-section ind-tint" aria-labelledby="requirements">

        <div className="ind-wrap">

          <div className="ind-section-head">
            <span className="ind-kicker">What procurement asks about</span>
            <h2 id="requirements">Requirements that cut across sectors</h2>
          </div>

          <div className="ind-reqs">

            {requirements.map((req, i) => (
              <motion.article
                key={req.title}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={reveal}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              >
                <h3>{req.title}</h3>
                <p>{req.body}</p>
              </motion.article>
            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
            AT A GLANCE TABLE
      =================================================== */}

      <section className="ind-section" aria-labelledby="glance">

        <div className="ind-wrap">

          <div className="ind-section-head">
            <span className="ind-kicker">At a glance</span>
            <h2 id="glance">Sector to roll type</h2>
            <p className="ind-note">
              A starting point, not a rule. Custom widths and grades are
              available across every sector.
            </p>
          </div>

          <div className="ind-table-scroll">

            <table className="ind-table">

              <thead>
                <tr>
                  <th scope="col">Sector</th>
                  <th scope="col">Typical size</th>
                  <th scope="col">Recommended rolls</th>
                </tr>
              </thead>

              <tbody>
                {industries.map((item) => (
                  <tr key={item.slug}>
                    <th scope="row">
                      <a href={`#${item.slug}`}>{item.name}</a>
                    </th>
                    <td>{item.typical}</td>
                    <td>
                      {item.rolls.map((roll) => roll.label).join(" · ")}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* ===================================================
            MULTI-SITE SUPPLY — a real sequence, so numbered
      =================================================== */}

      <section className="ind-section ind-tint" aria-labelledby="supply">

        <div className="ind-wrap">

          <div className="ind-section-head">
            <span className="ind-kicker">Multi-site accounts</span>
            <h2 id="supply">How we onboard a chain</h2>
            <p className="ind-note">
              For businesses running more than a handful of sites, the problem
              isn&apos;t usually the paper — it&apos;s that nobody has a full
              list of which printer is where.
            </p>
          </div>

          <ol className="ind-steps">

            {supply.map((step, i) => (
              <motion.li
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={reveal}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              >
                <span className="ind-step-no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.li>
            ))}

          </ol>

        </div>

      </section>

      {/* ===================================================
            CTA
      =================================================== */}

      <section className="ind-cta" aria-labelledby="ind-cta">

        <div className="ind-wrap ind-cta-inner">

          <div>
            <h2 id="ind-cta">Tell us what your sites are running</h2>
            <p>
              Printer models, roll sizes, rough monthly volume — or just a photo
              of the roll you use now. We&apos;ll match it and send samples.
            </p>
          </div>

          <div className="ind-cta-actions">

            <Link to="/request-quote" className="ind-btn-solid">
              Request a quote
              <FaArrowRight aria-hidden="true" />
            </Link>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ind-btn-ghost"
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

export default Industries;