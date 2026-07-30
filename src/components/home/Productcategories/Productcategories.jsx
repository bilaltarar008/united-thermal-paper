import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { products } from "../../../data/products";
import "./ProductCategories.css";

/* src/components/home/ProductCategories/ProductCategories.jsx
   Shows the first six categories. Add a seventh to data/products.js
   and it appears on /products but not here — deliberate, so the
   homepage stays scannable. */

const hideIfBroken = (e) => {
  e.currentTarget.style.opacity = 0;
};

function ProductCategories() {
  const featured = products.slice(0, 6);

  return (
    <section className="u-section pc" aria-labelledby="pc-title">

      <div className="u-wrap">

        <div className="u-head u-head--row">

          <div>
            <span className="u-kicker">Our products</span>
            <h2 className="u-title" id="pc-title">
              Rolls for every counter you run
            </h2>
            <p className="u-note">
              Seven categories, cut to the widths and cores your printers
              actually take. No prices published — we quote against your size
              and volume.
            </p>
          </div>

          <Link to="/products" className="u-link pc-all">
            View all products
            <FaArrowRight aria-hidden="true" />
          </Link>

        </div>

        <div className="pc-grid">

          {featured.map((item) => (
            <article className="u-card u-card--lift pc-card" key={item.slug}>

              <Link
                to={`/products#${item.slug}`}
                className="pc-media"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="420"
                  height="315"
                  onError={hideIfBroken}
                />
              </Link>

              <div className="pc-body">

                <h3>
                  <Link to={`/products#${item.slug}`}>{item.name}</Link>
                </h3>

                <span className="u-label pc-tagline">{item.tagline}</span>

                <ul className="u-chips pc-chips">
                  {item.highlights.slice(0, 2).map((h) => (
                    <li className="u-chip" key={h}>
                      {h}
                    </li>
                  ))}
                </ul>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductCategories;