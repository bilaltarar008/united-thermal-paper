import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./Aboutbrand.css";

/* src/components/home/Aboutbrand/Aboutbrand.jsx
   The client's "About Our Brand" block, and the place the
   Tenacious Global Group lockup belongs on the homepage.

   ⚠ The four figures below are placeholders. Replace them with
   real numbers, or delete any you can't substantiate. */

const facts = [
  { value: "2015", label: "Supplying since" },
  { value: "10", label: "Industries served" },
  { value: "37–210 mm", label: "Roll widths" },
  { value: "24–48 h", label: "Bulk dispatch" },
];

function Aboutbrand() {
  return (
    <section className="u-section ab" aria-labelledby="ab-title">

      <div className="u-wrap ab-grid">

        <div className="ab-copy">

          <span className="u-kicker">About our brand</span>

          <h2 className="u-title" id="ab-title">
            A converter, not a middleman
          </h2>

          <p>
            United Thermal Paper buys jumbo thermal reels, inspects them, and
            slits them to size in-house. That one fact explains most of what
            customers notice about us: we know which mill a roll came from, we
            hold a coating grade steady across reorders, and we can cut a width
            that isn&apos;t on anyone&apos;s standard list.
          </p>

          <p>
            Our customers are businesses where a bad roll costs more than the
            roll — a supermarket lane stops, an ATM stops issuing receipts, a
            pharmacy can&apos;t hand over a dispensing label. We built the
            operation around not being the reason that happens.
          </p>

          {/* Tenacious Global Group lockup */}
          <div className="ab-group">
            {/*
              Replace the TGG box with the real logo:
              <img src="/images/tenacious-global-group.png"
                   alt="Tenacious Global Group" />
            */}
            <span className="ab-group-mark" aria-hidden="true">
              TGG
            </span>
            <span className="ab-group-text">
              <b>A brand of</b>
              Tenacious Global Group
            </span>
          </div>
          

          <Link to="/about" className="u-link ab-more">
                Read our full story
            <FaArrowRight aria-hidden="true" />
          </Link>

        </div>

        <dl className="ab-facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.value}</dt>
              <dd className="u-label">{f.label}</dd>
            </div>
          ))}
        </dl>

      </div>

    </section>
  );
}

export default Aboutbrand;