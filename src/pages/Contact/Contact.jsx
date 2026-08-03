import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaCheck,
} from "react-icons/fa";

import "./Contact.css";

/* =========================================================
   LOCATION: src/pages/Contact/Contact.jsx
   ROUTES:   /contact  AND  /request-quote

   Deliberately self-contained — no data/ imports, no
   framer-motion. Only react, react-router-dom and
   react-icons, all of which you already use in the navbar.
   Fewer moving parts, fewer ways for it to fail silently.

   ⚠ HOW THIS FORM SENDS
   There's no backend, so the form composes the enquiry and
   hands it to WhatsApp or the user's email client. To send
   straight to an inbox instead, see the note in handleSubmit.
========================================================= */

const CONTACT = {
  phoneDisplay: "+92 371 9222993", 
  phoneDial: "+92 371 9222993",
  whatsapp: "+92 371 9222993",
  email: "info@unitedthermalpaper.com",
  address: "Main Pine Avenue Road, Lahore, Punjab, Pakistan",
  hours: "Monday – Saturday, 9:00 AM – 9:00 PM",
};

/* kept local so this page has no external dependency —
   keep in step with data/products.js if you add a category */
const PRODUCT_OPTIONS = [
  { value: "pos-thermal-rolls", label: "POS Thermal Rolls" },
  { value: "atm-thermal-rolls", label: "ATM Thermal Rolls" },
  { value: "credit-card-machine-rolls", label: "Credit Card Machine Rolls" },
  { value: "kiosk-rolls", label: "Kiosk Rolls" },
  { value: "weighing-scale-rolls", label: "Weighing Scale Rolls" },
  { value: "custom-thermal-rolls", label: "Custom Thermal Rolls" },
  { value: "jumbo-rolls-bulk-supply", label: "Jumbo Rolls & Bulk Supply" },
];

const NEXT_STEPS = [
  {
    title: "We read it and reply",
    body: "Usually the same working day. A person, not an autoresponder.",
  },
  {
    title: "We confirm the specification",
    body: "Width, core, length, coating grade — written down so there's no ambiguity.",
  },
  {
    title: "You test a sample",
    body: "Run it on your own printers before committing to any quantity.",
  },
];

const EMPTY_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  message: "",
};

function Contact() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const isQuote = pathname === "/request-quote";

  /* prefill the product when arriving from a product CTA —
     read once at mount, so no effect is needed */
  const [form, setForm] = useState(() => ({
    ...EMPTY_FORM,
    product: searchParams.get("product") || "",
  }));

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};

    if (!form.name.trim()) next.name = "Please tell us your name";
    if (!form.phone.trim()) next.phone = "We need a phone or WhatsApp number";

    if (!form.email.trim()) {
      next.email = "Please add an email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email doesn't look right";
    }

    if (!form.message.trim()) {
      next.message = "Tell us what you need — even one line is fine";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const composeMessage = () => {
    const productName =
      PRODUCT_OPTIONS.find((p) => p.value === form.product)?.label ||
      "Not specified";

    return [
      "New enquiry from the website",
      "",
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Phone / WhatsApp: ${form.phone}`,
      `Email: ${form.email}`,
      `Product: ${productName}`,
      form.quantity ? `Quantity: ${form.quantity}` : null,
      "",
      "Message:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSubmit = (channel) => (e) => {
    e.preventDefault();

    if (!validate()) return;

    const body = composeMessage();

    /*
      REAL BACKEND SWAP — sign up for Web3Forms or Formspree,
      put the endpoint in .env as VITE_FORM_ENDPOINT, then
      replace the two window calls below with:

      await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    */

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      const subject = isQuote
        ? "Quote request from website"
        : "Enquiry from website";

      window.location.href =
        `mailto:${CONTACT.email}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
    }

    setSent(true);
  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSent(false);
  };

  return (
    <main className="con">

      {/* ===================================================
            HEADER
      =================================================== */}

      <header className="con-head">

        <div className="con-wrap">

          <span className="con-eyebrow">
            <i />
            {isQuote ? "Request a quote" : "Get in touch"}
          </span>

          <h1>
            {isQuote ? (
              <>
                Send us your sizes.
                <span className="con-accent"> We&apos;ll send a quote.</span>
              </>
            ) : (
              <>
                Talk to someone who
                <span className="con-accent"> knows the paper.</span>
              </>
            )}
          </h1>

          <p className="con-lede">
            Tell us the roll width, core size and rough monthly volume, and
            we&apos;ll come back with a specification, a sample and a delivery
            date. We answer specification questions whether or not you order.
          </p>

          <ul className="con-quick">

            <li>
              <a href={`tel:${CONTACT.phoneDial}`}>
                <FaPhoneAlt aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>
            </li>

            <li>
              <a href={`mailto:${CONTACT.email}`}>
                <FaEnvelope aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>

            <li>
              <span>
                <FaRegClock aria-hidden="true" />
                {CONTACT.hours}
              </span>
            </li>

          </ul>

        </div>

      </header>

      {/* ===================================================
            FORM + DETAILS
      =================================================== */}

      <section className="con-section" aria-labelledby="enquiry">

        <div className="con-wrap con-grid">

          {/* ---------------- FORM ---------------- */}

          <div className="con-form-panel">

            {sent ? (
              <div className="con-sent" role="status">

                <span className="con-sent-icon" aria-hidden="true">
                  <FaCheck />
                </span>

                <h2>Your enquiry is ready to send</h2>

                <p>
                  We&apos;ve opened WhatsApp or your email app with the details
                  filled in — press send there and it reaches us. If nothing
                  opened, message us on{" "}
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>{" "}
                  or email{" "}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                </p>

                <button type="button" className="con-btn-mini" onClick={reset}>
                  Send another enquiry
                </button>

              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit("whatsapp")}>

                <div className="con-form-head">
                  <span className="con-kicker">Enquiry form</span>
                  <h2 id="enquiry">
                    {isQuote ? "Request a quote" : "Send us a message"}
                  </h2>
                  <p className="con-note">
                    Only four fields are required. The more you tell us, the
                    more precise the quote.
                  </p>
                </div>

                {/* name */}
                <div className="con-field">
                  <label htmlFor="name">
                    Your name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  {errors.name && (
                    <span className="con-error" id="err-name">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* company */}
                <div className="con-field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={update("company")}
                  />
                </div>

                {/* phone + email */}
                <div className="con-row">

                  <div className="con-field">
                    <label htmlFor="phone">
                      Phone / WhatsApp <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "err-phone" : undefined}
                    />
                    {errors.phone && (
                      <span className="con-error" id="err-phone">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="con-field">
                    <label htmlFor="email">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "err-email" : undefined}
                    />
                    {errors.email && (
                      <span className="con-error" id="err-email">
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* product + quantity */}
                <div className="con-row">

                  <div className="con-field">
                    <label htmlFor="product">Product of interest</label>
                    <select
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={update("product")}
                    >
                      <option value="">Not sure yet</option>
                      {PRODUCT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="con-field">
                    <label htmlFor="quantity">Approximate quantity</label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      placeholder="e.g. 500 rolls per month"
                      value={form.quantity}
                      onChange={update("quantity")}
                    />
                  </div>

                </div>

                {/* message */}
                <div className="con-field">
                  <label htmlFor="message">
                    What do you need? <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Roll width, core size, printer model, how many sites — whatever you know."
                    value={form.message}
                    onChange={update("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "err-message" : undefined
                    }
                  />
                  {errors.message && (
                    <span className="con-error" id="err-message">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* actions */}
                <div className="con-actions">

                  <button type="submit" className="con-btn-solid">
                    <FaWhatsapp aria-hidden="true" />
                    Send on WhatsApp
                  </button>

                  <button
                    type="button"
                    className="con-btn-outline"
                    onClick={handleSubmit("email")}
                  >
                    <FaEnvelope aria-hidden="true" />
                    Send by email
                  </button>

                </div>

                <p className="con-reassure">
                  We reply within one working day. We don&apos;t publish
                  prices — quotes are based on your size and volume.
                </p>

              </form>
            )}

          </div>

          {/* ---------------- DETAILS ---------------- */}

          <aside className="con-side" aria-label="Contact details">

            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="con-wa-card"
            >
              <span className="con-wa-icon" aria-hidden="true">
                <FaWhatsapp />
              </span>
              <span className="con-wa-text">
                <b>Message us on WhatsApp</b>
                Fastest reply, and you can send a photo of your roll
              </span>
              <FaArrowRight aria-hidden="true" />
            </a>

            <div className="con-details">

              <div>
                <span className="con-detail-label">
                  <FaPhoneAlt aria-hidden="true" />
                  Phone
                </span>
                <a href={`tel:${CONTACT.phoneDial}`}>{CONTACT.phoneDisplay}</a>
              </div>

              <div>
                <span className="con-detail-label">
                  <FaEnvelope aria-hidden="true" />
                  Email
                </span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>

              <div>
                <span className="con-detail-label">
                  <FaMapMarkerAlt aria-hidden="true" />
                  Location
                </span>
                <p>{CONTACT.address}</p>
              </div>

              <div>
                <span className="con-detail-label">
                  <FaRegClock aria-hidden="true" />
                  Opening hours
                </span>
                <p>{CONTACT.hours}</p>
              </div>

            </div>

            {/*
              MAP SLOT — once the full address is confirmed, drop a
              Google Maps iframe in here with loading="lazy".
            */}

            <div className="con-links">
              <span className="con-detail-label">Before you write</span>
              <ul>
                <li>
                  <Link to="/products">Browse the product range</Link>
                </li>
                <li>
                  <Link to="/resources">How to measure your roll size</Link>
                </li>
                <li>
                  <Link to="/industries">Find your industry</Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>

      </section>

      {/* ===================================================
            WHAT HAPPENS NEXT
      =================================================== */}

      <section className="con-section con-tint" aria-labelledby="next">

        <div className="con-wrap">

          <div className="con-section-head">
            <span className="con-kicker">What happens next</span>
            <h2 id="next">After you hit send</h2>
          </div>

          <ol className="con-steps">

            {NEXT_STEPS.map((step, i) => (
              <li key={step.title}>
                <span className="con-step-no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}

          </ol>

        </div>

      </section>

      {/* ===================================================
            STICKY MOBILE BAR
      =================================================== */}

      <div className="con-sticky" role="region" aria-label="Quick contact">

        <a href={`tel:${CONTACT.phoneDial}`} className="con-sticky-call">
          <FaPhoneAlt aria-hidden="true" />
          Call us
        </a>

        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="con-sticky-wa"
        >
          <FaWhatsapp aria-hidden="true" />
          WhatsApp
        </a>

      </div>

    </main>
  );
}

export default Contact;