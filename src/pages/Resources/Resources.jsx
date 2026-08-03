import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp, FaRegClock } from "react-icons/fa";

import {
  articles,
  categories,
  getFeatured,
  formatDate,
} from "../../data/articles";
import "./Resources.css";

/* =========================================================
   LOCATION: src/pages/Resources/Resources.jsx
   ROUTE: /resources
========================================================= */

const WHATSAPP_NUMBER = "+92 371 9222993";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-70px" };

function Resources() {
  const [filter, setFilter] = useState("All");

  const featured = getFeatured();

  /* derived in render — no effect, no duplicated state */
  const list = articles.filter(
    (a) => a.slug !== featured.slug && (filter === "All" || a.category === filter)
  );

  return (
    <main className="res">

      {/* ===================================================
            HEADER
      =================================================== */}

      <header className="res-head">

        <div className="res-wrap">

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            <span className="res-eyebrow">
              <i />
              Resources
            </span>

            <h1>
              Everything we know about
              <span className="res-accent"> thermal paper.</span>
            </h1>

            <p className="res-lede">
              Practical guides on choosing, storing and specifying thermal
              rolls — written for the people who actually buy and use them, not
              for search engines.
            </p>

          </motion.div>

        </div>

      </header>

      {/* ===================================================
            FEATURED
      =================================================== */}

      <section className="res-section" aria-labelledby="featured">

        <div className="res-wrap">

          <div className="res-section-head">
            <span className="res-kicker">Start here</span>
            <h2 id="featured">Most useful if you&apos;re buying</h2>
          </div>

          <motion.article
            className="res-featured"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            transition={{ duration: 0.55 }}
          >

            <div className="res-featured-body">

              <span className="res-tag">{featured.category}</span>

              <h3>
                <Link to={`/resources/${featured.slug}`}>
                  {featured.title}
                </Link>
              </h3>

              <p>{featured.excerpt}</p>

              <div className="res-meta">
                <time dateTime={featured.date}>
                  {formatDate(featured.date)}
                </time>
                <span className="res-dot" aria-hidden="true" />
                <span className="res-readtime">
                  <FaRegClock aria-hidden="true" />
                  {featured.readTime} read
                </span>
              </div>

              <Link to={`/resources/${featured.slug}`} className="res-link">
                Read the guide
                <FaArrowRight aria-hidden="true" />
              </Link>

            </div>

          </motion.article>

        </div>

      </section>

      {/* ===================================================
            FILTER + GRID
      =================================================== */}

      <section className="res-section res-tint" aria-labelledby="all">

        <div className="res-wrap">

          <div className="res-section-head">
            <span className="res-kicker">The library</span>
            <h2 id="all">All articles</h2>
          </div>

          {/* filter */}
          <div
            className="res-filter"
            role="group"
            aria-label="Filter articles by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={cat === filter ? "is-active" : ""}
                onClick={() => setFilter(cat)}
                aria-pressed={cat === filter}
              >
                {cat}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="res-empty">
              Nothing in that category yet — more articles are on the way.
            </p>
          ) : (
            <div className="res-grid">

              {list.map((item, i) => (
                <motion.article
                  key={item.slug}
                  className="res-card"
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={reveal}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                >

                  <span className="res-tag">{item.category}</span>

                  <h3>
                    <Link to={`/resources/${item.slug}`}>{item.title}</Link>
                  </h3>

                  <p>{item.excerpt}</p>

                  <div className="res-card-foot">
                    <div className="res-meta">
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                      <span className="res-dot" aria-hidden="true" />
                      <span className="res-readtime">{item.readTime}</span>
                    </div>

                    <Link
                      to={`/resources/${item.slug}`}
                      className="res-link res-link-sm"
                      aria-label={`Read ${item.title}`}
                    >
                      Read
                      <FaArrowRight aria-hidden="true" />
                    </Link>
                  </div>

                </motion.article>
              ))}

            </div>
          )}

        </div>

      </section>

      {/* ===================================================
            CTA
      =================================================== */}

      <section className="res-cta" aria-labelledby="res-cta">

        <div className="res-wrap res-cta-inner">

          <div>
            <h2 id="res-cta">Still have a question?</h2>
            <p>
              If your question isn&apos;t answered here, ask us directly. We
              answer specification questions whether or not you end up ordering.
            </p>
          </div>

          <div className="res-cta-actions">

            <Link to="/contact" className="res-btn-solid">
              Get in touch
              <FaArrowRight aria-hidden="true" />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="res-btn-ghost"
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

export default Resources;