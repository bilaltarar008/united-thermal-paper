import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./Hero.css";
import HERO_IMAGE from "../Articles/thermalpaper.png";

const specs = [
  { value: "57 – 80 mm", label: "Roll widths" },
  { value: "BPA-Free", label: "Coating options" },
  { value: "24 – 48 h", label: "Bulk dispatch" },
];

function Hero() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <section className="hero">

      <div className="hero-overlay" />

      <div className="hero-container">

        {/* ================= LEFT ================= */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >

          <span className="hero-tag">
            <i />
            Premium Thermal Paper Manufacturer
          </span>

          <h1>
            Reliable thermal paper.
            <br />
            Clear prints, <span className="accent">every time.</span>
          </h1>

          <p className="lede">
            Thermal rolls built for businesses that print all day — steady
            image density, clean feed, and stock that arrives when you need
            it.
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="primary-btn">
              Explore products
              <FaArrowRight aria-hidden="true" />
            </Link>

            <Link to="/request-quote" className="secondary-btn">
              Request a quote
            </Link>

          </div>

          <div className="hero-specs">
            {specs.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* ================= RIGHT ================= */}

        {hasImage && (
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >

            <img
              src={HERO_IMAGE}
              alt="United Thermal Paper receipt rolls in a range of sizes"
              width="1253"
              height="1254"
              decoding="async"
              onError={() => setHasImage(false)}
            />

            {/*
              .hero-badge REMOVED ON PURPOSE.

              The current artwork already contains its own badge,
              bullet list and "A-Grade Quality" tag, so the overlay
              was landing on top of them — you can see the collision
              in the bottom-left of the rendered hero.

              If you later swap in a plain product photograph with no
              baked-in text, put it back:

              <div className="hero-badge">
                <b>Tested per batch</b>
                Image density · Fade resistance
                <br />
                Core fit · Roll length tolerance
              </div>
            */}

          </motion.div>
        )}

      </div>

    </section>
  );
}

export default Hero;