import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./Aboutbrand.css";
import aboutImage from "../Articles/ourbrand.png";

/* =========================================================
   src/components/home/Aboutbrand/Aboutbrand.jsx

   Image left, copy right. Self-contained — all tokens live in
   Aboutbrand.css.

   REMOVED, deliberately:
   • The figure caption. The artwork already carries its own
     body copy, so a caption underneath was a second voice
     saying the same thing.
   • The "A brand of / Tenacious Global Group" lockup box. The
     artwork states that relationship in its own headline and
     shows the group logo — repeating it in a bordered box beside
     it made the section say one fact three times.

   If you later swap in a plain product photo with no text, both
   are worth restoring. The CSS for the lockup is still in the
   stylesheet, commented, for that reason.

   ⚠ The four figures below are placeholders. Replace with real
   numbers, or delete any you can't substantiate.
========================================================= */

const facts = [
  { value: "2015", label: "Supplying since" },
  { value: "10", label: "Industries served" },
  { value: "37–210 mm", label: "Roll widths" },
  { value: "24–48 h", label: "Bulk dispatch" },
];

function Aboutbrand() {
  const reduce = useReducedMotion();
  const [hasImage, setHasImage] = useState(true);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const frame = {
    hidden: { opacity: 0, x: reduce ? 0 : -24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="ab" aria-labelledby="ab-title">

      <motion.div
        className="ab-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-90px" }}
      >

        {/* ================= LEFT — image ================= */}

        {hasImage && (
          <motion.div className="ab-media" variants={frame}>
            <img
              src={aboutImage}
              alt="United Thermal Paper, a brand of Tenacious Global Group"
              decoding="async"
              loading="lazy"
              onError={() => setHasImage(false)}
            />
          </motion.div>
        )}

        {/* ================= RIGHT — copy ================= */}

        <div className="ab-copy">

          <motion.span className="ab-kicker" variants={item}>
            About our brand
          </motion.span>

          <motion.h2 className="ab-title" id="ab-title" variants={item}>
            A converter,
            <span className="ab-accent"> not a middleman.</span>
          </motion.h2>

          <motion.p variants={item}>
            United Thermal Paper buys jumbo thermal reels, inspects them, and
            slits them to size in-house. That one fact explains most of what
            customers notice about us: we know which mill a roll came from, we
            hold a coating grade steady across reorders, and we can cut a width
            that isn&apos;t on anyone&apos;s standard list.
          </motion.p>

          <motion.p variants={item}>
            Our customers are businesses where a bad roll costs more than the
            roll — a supermarket lane stops, an ATM stops issuing receipts, a
            pharmacy can&apos;t hand over a dispensing label. We built the
            operation around not being the reason that happens.
          </motion.p>

          {/* fact strip — reads like printed receipt copy */}
          <motion.dl className="ab-facts" variants={item}>
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={item}>
            <Link to="/about" className="ab-more">
              Read our full story
              <FaArrowRight aria-hidden="true" />
            </Link>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}

export default Aboutbrand;