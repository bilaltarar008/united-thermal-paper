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
    body: "Every batch traces back to a named jumbo source and coating grade, so roll fifty behaves like roll one.",
  },
  {
    icon: FaPrint,
    title: "Clear, reliable printing",
    body: "Image density is checked against a reference sample before a batch ships. No grey, half-readable receipts.",
  },
  {
    icon: FaRulerCombined,
    title: "Multiple sizes and specs",
    body: "Widths from 37 to 210 mm, cores from 12 to 40 mm, and paper from 48 to 80 gsm — held in stock, not on order.",
  },
  {
    icon: FaSlidersH,
    title: "Custom solutions",
    body: "Non-standard widths, your own branding printed on the reverse, and BPA-free or phenol-free grades on request.",
  },
  {
    icon: FaTruck,
    title: "Reliable supply",
    body: "Buffer stock held on fast-moving sizes, so a reorder ships in 24 to 48 hours instead of waiting on an import cycle.",
  },
  {
    icon: FaHeadset,
    title: "People who answer",
    body: "The same contact from first enquiry to repeat order. Send a photo of your roll and you'll get a straight answer.",
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