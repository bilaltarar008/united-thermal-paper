import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./Hero.css";

import heroImage from "../Articles/thermalpaper.png";

const specs = [ 
  { value: "57 – 80 mm", label: "Roll widths" },
  { value: "BPA-Free", label: "Coating options" },
  { value: "24 – 48 h", label: "Bulk dispatch" },
];

function Hero() {
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
            Clear prints,{" "}
            <span className="accent">every time.</span>
          </h1>

          <p className="lede">
            Thermal rolls built for businesses that print all day — steady
            image density, clean feed, and stock that arrives when you
            need it.
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="primary-btn">
              Explore products
              <FaArrowRight />
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

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >

          <img src={heroImage} alt="United Thermal Paper roll" />

          <div className="hero-badge">
            <b>Tested per batch</b>
            Image density · Fade resistance
            <br />
            Core fit · Roll length tolerance
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;