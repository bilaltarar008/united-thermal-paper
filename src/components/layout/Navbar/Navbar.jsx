import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Industries",
      path: "/industries",
    },
    {
      title: "Articles",
      path: "/resources",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* ===================== TOP BAR ===================== */}

      <div className="topbar">

        <div className="marquee">

          <div className="marquee-content">

            <span>
              <FaPhoneAlt />
              +92 XXX XXXXXXX
            </span>

            <span>
              <FaEnvelope />
              info@unitedthermalpaper.com
            </span>

            <span>
              <FaClock />
              Mon - Sat | 9:00 AM - 6:00 PM
            </span>

            {/* Duplicate for infinite scrolling */}

            <span>
              <FaPhoneAlt />
              +92 XXX XXXXXXX
            </span>

            <span>
              <FaEnvelope />
              info@unitedthermalpaper.com
            </span>

            <span>
              <FaClock />
              Mon - Sat | 9:00 AM - 6:00 PM
            </span>

          </div>

        </div>

      </div>

      {/* ===================== NAVBAR ===================== */}

      <header className={`navbar ${isSticky ? "sticky" : ""}`}>

        <div className="container navbar-container">

          {/* LOGO */}

          <Link to="/" className="logo" onClick={closeMenu}>

            <div className="logo-text">

              <h2>United Thermal Paper</h2>

              <span>
                A Brand of Tenacious Global Group
              </span>

            </div>

          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="desktop-nav">

            {navLinks.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.title}
              </NavLink>
            ))}

          </nav>

          {/* RIGHT SIDE BUTTONS */}

          <div className="nav-actions">

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp />

              <span>Get Quotes</span>
            </a>

            <Link
              to="/request-quote"
              className="quote-btn"
            >
              Request Quote
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            className="hamburger"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>

        </div>

      </header>

      {/* ===================== MOBILE DRAWER ===================== */}

      <AnimatePresence>

        {isOpen && (
          <>
            {/* Overlay */}

            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Drawer */}

            <motion.aside
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
              }}
            >
              {/* HEADER */}

              <div className="mobile-header">

                <h2>Menu</h2>

                <button
                  onClick={closeMenu}
                  className="close-btn"
                >
                  <FaTimes />
                </button>

              </div>

              {/* LINKS */}

              <div className="mobile-links">

                {navLinks.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "mobile-link active"
                        : "mobile-link"
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}

              </div>

              {/* BUTTONS */}

              <div className="mobile-buttons">

                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-whatsapp"
                >
                  <FaWhatsapp />

                  WhatsApp
                </a>

                <Link
                  to="/request-quote"
                  className="mobile-quote"
                  onClick={closeMenu}
                >
                  Request Quote
                </Link>

              </div>

            </motion.aside>
          </>
        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;