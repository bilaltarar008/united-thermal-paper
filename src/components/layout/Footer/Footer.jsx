import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Company */}

        <div className="footer-column">

          <h2>United Thermal Paper</h2>

          <p className="brand">
            A Brand of Tenacious Global Group
          </p>

          <p>
            Premium thermal paper solutions for retail,
            banking, healthcare, restaurants,
            logistics and industrial businesses.
          </p>

          <div className="socials">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaInstagram /></a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/products">Products</Link>

          <Link to="/industries">Industries</Link>

          <Link to="/resources">Resources</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Products */}

        <div className="footer-column">

          <h3>Products</h3>

          <Link to="/products">POS Rolls</Link>

          <Link to="/products">ATM Rolls</Link>

          <Link to="/products">Credit Card Rolls</Link>

          <Link to="/products">Kiosk Rolls</Link>

          <Link to="/products">Custom Rolls</Link>

          <Link to="/products">Jumbo Rolls</Link>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact Us</h3>

          <p>

            <FaMapMarkerAlt />

            Lahore, Pakistan

          </p>

          <p>

            <FaPhoneAlt />

            +92 XXX XXXXXXX

          </p>

          <p>

            <FaEnvelope />

            info@unitedthermalpaper.com

          </p>

          <a
            href="https://wa.me/923001234567"
            className="whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />

            WhatsApp Us

          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} United Thermal Paper.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;