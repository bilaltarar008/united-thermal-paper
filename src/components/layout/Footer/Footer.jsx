import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaArrowUp,
} from "react-icons/fa";

import "./Footer.css";

/* =========================================================
   src/components/layout/Footer/Footer.css + Footer.jsx

   Self-contained: own wrap width, own tokens, ft- prefixed
   classes. Nothing here depends on a global .container or on
   styles/variables.css.

   ⚠ Replace the SITE values below. These same details are
   hardcoded in the navbar, Contact page and home CTA — worth
   moving to src/data/site.js and importing in all four.
========================================================= */

const SITE = {
  phoneDisplay: "+92 311 7728217",
  phoneDial: "+92 311 7728217",
  whatsapp: "+92 311 7728217",
  email: "info@unitedthermalpaper.com",
  address: "Lahore, Punjab, Pakistan",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
  facebook: "#",
  linkedin: "#",
  instagram: "#",
};

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

const productLinks = [
  { label: "POS Rolls", to: "/products#pos-thermal-rolls" },
  { label: "ATM Rolls", to: "/products#atm-thermal-rolls" },
  { label: "Card Machine", to: "/products#credit-card-machine-rolls" },
  { label: "Kiosk Rolls", to: "/products#kiosk-rolls" },
  { label: "Scale Rolls", to: "/products#weighing-scale-rolls" },
  { label: "Custom Rolls", to: "/products#custom-thermal-rolls" },
  { label: "Jumbo & Bulk", to: "/products#jumbo-rolls-bulk-supply" },
];

function Footer() {
  const year = new Date().getFullYear();

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="ft">

      <div className="ft-inner">

        {/* ===================================================
              MAIN GRID
        =================================================== */}

        <div className="ft-grid">

          {/* ---------- brand ---------- */}

          <div className="ft-col ft-col--brand">

            <h2 className="ft-name">United Thermal Paper</h2>

            <span className="ft-parent">A Brand of Tenacious Global Group</span>

            <p className="ft-blurb">
              Thermal rolls for retail, banking, healthcare, restaurants and
              logistics — slit and inspected in-house, held in stock, delivered
              on time.
            </p>

            <ul className="ft-social">
              <li>
                <a
                  href={SITE.facebook}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
              </li>
            </ul>

          </div>

          {/* ---------- quick links ---------- */}

          <nav className="ft-col" aria-labelledby="ft-quick">
            <h3 className="ft-head" id="ft-quick">
              Quick links
            </h3>
            <ul className="ft-links ft-links--split">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- products ---------- */}

          <nav className="ft-col" aria-labelledby="ft-prod">
            <h3 className="ft-head" id="ft-prod">
              Products
            </h3>
            <ul className="ft-links ft-links--split">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- contact ---------- */}

          <div className="ft-col ft-col--contact">

            <h3 className="ft-head">Get in touch</h3>

            <ul className="ft-contact">

              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>

              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href={`tel:${SITE.phoneDial}`}>{SITE.phoneDisplay}</a>
              </li>

              <li>
                <FaEnvelope aria-hidden="true" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>

              <li>
                <FaRegClock aria-hidden="true" />
                <span>{SITE.hours}</span>
              </li>

            </ul>

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ft-wa"
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp us
            </a>

          </div>

        </div>

        {/* ===================================================
              BOTTOM BAR
        =================================================== */}

        <div className="ft-bottom">

          <p>© {year} United Thermal Paper. All rights reserved.</p>

          <div className="ft-bottom-right">
            <span className="ft-parent-inline">
              A brand of Tenacious Global Group
            </span>

            <button type="button" className="ft-top" onClick={toTop}>
              Back to top
              <FaArrowUp aria-hidden="true" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;