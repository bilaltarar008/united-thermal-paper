import {
  FaAward,
  FaPrint,
  FaRulerCombined,
  FaSlidersH,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

import "./Whychooseus.css";

/* src/components/home/Whychooseus/Whychooseus.jsx
   The six points the client asked for, written as specifics rather
   than adjectives — a buyer can't verify "premium quality" but can
   verify "checked against a reference sample per batch". */

const reasons = [
  {
    icon: FaAward,
    title: "Consistent quality",
    body: "Manufactured under strict quality control to ensure consistent quality and reliable performance in every roll.",
  },
  {
    icon: FaPrint,
    title: "Clear, reliable printing",
    body: "Delivers sharp, dark, and long-lasting prints with smooth paper feeding and reliable performance.",
  },
  {
    icon: FaRulerCombined,
    title: "Multiple sizes and specs",
    body: "Available in standard 57 mm and 80 mm thermal paper rolls with various length options (e.g. 10 m, 12 m, 14 m, 40 m, 60 m, 80 m and more). Other sizes and specifications are available on request.",
  },
  {
    icon: FaSlidersH,
    title: "Custom solutions",
    body: "Non-standard widths, your own branding printed on the reverse, and BPA-free or phenol-free grades on request.",
  },
  {
    icon: FaTruck,
    title: "Reliable supply",
    body: "We maintain ready stock of standard thermal paper rolls to ensure fast dispatch and consistent availability across Pakistan.",
  },  
  {
    icon: FaHeadset,
    title: "Dedicated Customer Support",
    body: "Our team is always ready to assist you with product inquiries, quotations, and order support.",
  },
];

function Whychooseus() {
  return (
    <section
      className="u-section u-section--tint wcu"
      aria-labelledby="wcu-title"
    >

      <div className="u-wrap">

        <div className="u-head">
          <span className="u-kicker">Why choose us</span>
          <h2 className="u-title" id="wcu-title">
            Why Choose United Thermal Paper ⭐
 
          </h2>
          <p className="u-note">
            We import premium grade thermal paper from China and manufacture high-quality thermal paper rollsunder strict quality control, ensuring reliable performance and consistent quality for businesses
              across Pakistan.
          </p>
        </div>

        <ul className="wcu-grid">

          {reasons.map(({ icon: Icon, title, body }) => (
            <li className="wcu-item" key={title}>

              <span className="wcu-icon" aria-hidden="true">
                <Icon />
              </span>

              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>

            </li>
          ))}

        </ul>

      </div>

    </section>
  );
}

export default Whychooseus;