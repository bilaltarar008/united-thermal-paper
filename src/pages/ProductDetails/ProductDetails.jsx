// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link, useParams } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaWhatsapp,
//   FaChevronRight,
//   FaRegCheckCircle,
//   FaPrint,
//   FaBoxOpen,
// } from "react-icons/fa";

// import { getProduct, getRelated } from "../../data/products";
// import "./Products.css";

// /* =========================================================
//    LOCATION: src/pages/Products/ProductDetails.jsx
//    Sits next to Products.jsx and Products.css.

//    ROUTE: /products/:slug
//    The param must be named "slug" to match useParams() below.
// ========================================================= */

// const WHATSAPP_NUMBER = "923001234567"; // ← change once, applies everywhere

// const reveal = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// const viewport = { once: true, margin: "-70px" };

// /* Fades out an image that fails to load so the striped placeholder
//    behind it shows, instead of the browser's broken-image icon. */
// const hideIfBroken = (e) => {
//   e.currentTarget.style.opacity = 0;
// };

// function ProductDetails() {
//   const { slug } = useParams();
//   const product = getProduct(slug);

//   const [active, setActive] = useState(0);

//   /* Per-page title. On a brochure SPA this is what appears in the
//      browser tab and in search results — React won't set it for you. */
//   useEffect(() => {
//     document.title = product
//       ? `${product.name} | United Thermal Paper`
//       : "Product not found | United Thermal Paper";
//   }, [product]);

//   /* ---------------- unknown slug ---------------- */

//   if (!product) {
//     return (
//       <main className="prod pd">
//         <div className="prod-wrap pd-missing">
//           <h1>We don&apos;t have that product page</h1>
//           <p>
//             The link may be out of date. Browse the full range, or tell us the
//             roll size you need and we&apos;ll point you to it.
//           </p>
//           <Link to="/products" className="prod-btn-solid">
//             View all products
//             <FaArrowRight aria-hidden="true" />
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const related = getRelated(product.slug);
//   const gallery = product.gallery?.length ? product.gallery : [product.image];

//   /* Derived, not stored. Keeps the index valid when navigating to a
//      product that has fewer images than the one you came from — no
//      effect needed, and no extra render pass. */
//   const activeIndex = Math.min(active, gallery.length - 1);

//   const quoteLink = `/request-quote?product=${product.slug}`;
//   const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//     `Hi, I'd like a quote for ${product.name}.`
//   )}`;

//   return (
//     <main className="prod pd">

//       {/* ===================================================
//             BREADCRUMB
//       =================================================== */}

//       <nav className="pd-crumbs" aria-label="Breadcrumb">
//         <div className="prod-wrap">
//           <ol>
//             <li>
//               <Link to="/">Home</Link>
//               <FaChevronRight aria-hidden="true" />
//             </li>
//             <li>
//               <Link to="/products">Products</Link>
//               <FaChevronRight aria-hidden="true" />
//             </li>
//             <li aria-current="page">{product.name}</li>
//           </ol>
//         </div>
//       </nav>

//       {/* ===================================================
//             OVERVIEW — gallery + summary
//       =================================================== */}

//       <section className="pd-top">

//         <div className="prod-wrap pd-top-grid">

//           <motion.div
//             className="pd-gallery"
//             initial="hidden"
//             animate="show"
//             variants={reveal}
//             transition={{ duration: 0.55, ease: "easeOut" }}
//           >

//             <div className="pd-stage">
//               <img
//                 src={gallery[activeIndex]}
//                 alt={`${product.name} — view ${activeIndex + 1}`}
//                 width="720"
//                 height="540"
//                 decoding="async"
//                 onError={hideIfBroken}
//               />
//             </div>

//             {gallery.length > 1 && (
//               <ul className="pd-thumbs">
//                 {gallery.map((src, i) => (
//                   <li key={src}>
//                     <button
//                       type="button"
//                       className={i === activeIndex ? "is-active" : ""}
//                       onClick={() => setActive(i)}
//                       aria-label={`Show view ${i + 1}`}
//                       aria-pressed={i === activeIndex}
//                     >
//                       <img
//                         src={src}
//                         alt=""
//                         loading="lazy"
//                         decoding="async"
//                         width="140"
//                         height="110"
//                         onError={hideIfBroken}
//                       />
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}

//           </motion.div>

//           <motion.div
//             className="pd-summary"
//             initial="hidden"
//             animate="show"
//             variants={reveal}
//             transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
//           >

//             <span className="prod-kicker">{product.tagline}</span>

//             <h1>{product.name}</h1>

//             <p className="pd-blurb">{product.blurb}</p>

//             <ul className="prod-chips pd-chips">
//               {product.highlights.map((h) => (
//                 <li key={h}>{h}</li>
//               ))}
//             </ul>

//             <dl className="pd-keyspecs">
//               {Object.entries(product.specs)
//                 .slice(0, 4)
//                 .map(([label, value]) => (
//                   <div key={label}>
//                     <dt>{label}</dt>
//                     <dd>{value}</dd>
//                   </div>
//                 ))}
//             </dl>

//             <div className="pd-actions">

//               <Link to={quoteLink} className="prod-btn-solid">
//                 Request a quote
//                 <FaArrowRight aria-hidden="true" />
//               </Link>

//               <a
//                 href={waLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="prod-btn-ghost pd-btn-wa"
//               >
//                 <FaWhatsapp aria-hidden="true" />
//                 WhatsApp us
//               </a>

//             </div>

//             <p className="pd-reassure">
//               Samples available before you commit to a quantity.
//             </p>

//           </motion.div>

//         </div>

//       </section>

//       {/* ===================================================
//             FULL SPECIFICATION
//       =================================================== */}

//       <section className="prod-section" aria-labelledby="pd-spec">

//         <div className="prod-wrap">

//           <div className="prod-section-head">
//             <span className="prod-kicker">Specification</span>
//             <h2 id="pd-spec">Paper and roll details</h2>
//           </div>

//           <div className="pd-sheet">
//             {Object.entries(product.specs).map(([label, value]) => (
//               <div className="pd-sheet-row" key={label}>
//                 <span className="pd-sheet-label">{label}</span>
//                 <span className="pd-sheet-value">{value}</span>
//               </div>
//             ))}
//           </div>

//         </div>

//       </section>

//       {/* ===================================================
//             AVAILABLE SIZES
//       =================================================== */}

//       <section className="prod-section prod-tint" aria-labelledby="pd-sizes">

//         <div className="prod-wrap">

//           <div className="prod-section-head">
//             <span className="prod-kicker">Stock sizes</span>
//             <h2 id="pd-sizes">Available sizes</h2>
//             <p className="prod-note">
//               Other combinations are cut to order. If your size isn&apos;t
//               listed, it&apos;s almost certainly still possible.
//             </p>
//           </div>

//           <div className="prod-table-scroll">

//             <table className="prod-table">

//               <caption className="pd-table-caption">
//                 {product.name} — stocked size combinations
//               </caption>

//               <thead>
//                 <tr>
//                   <th scope="col">Width</th>
//                   <th scope="col">Core</th>
//                   <th scope="col">Length</th>
//                   <th scope="col">Roll diameter</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {product.sizes.map((s, i) => (
//                   <tr key={`${s.width}-${s.length}-${i}`}>
//                     <th scope="row">{s.width}</th>
//                     <td>{s.core}</td>
//                     <td>{s.length}</td>
//                     <td>{s.diameter}</td>
//                   </tr>
//                 ))}
//               </tbody>

//             </table>

//           </div>

//           <Link to={quoteLink} className="prod-link pd-inline-link">
//             Need a size that isn&apos;t here? Ask us
//             <FaArrowRight aria-hidden="true" />
//           </Link>

//         </div>

//       </section>

//       {/* ===================================================
//             APPLICATIONS / COMPATIBILITY / PACKING
//       =================================================== */}

//       <section className="prod-section" aria-labelledby="pd-usage">

//         <div className="prod-wrap">

//           <div className="prod-section-head">
//             <span className="prod-kicker">Where it&apos;s used</span>
//             <h2 id="pd-usage">Applications, compatibility and packing</h2>
//           </div>

//           <div className="pd-trio">

//             <motion.article
//               initial="hidden"
//               whileInView="show"
//               viewport={viewport}
//               variants={reveal}
//               transition={{ duration: 0.5 }}
//             >
//               <h3>
//                 <FaRegCheckCircle aria-hidden="true" />
//                 Applications
//               </h3>
//               <ul>
//                 {product.applications.map((a) => (
//                   <li key={a}>{a}</li>
//                 ))}
//               </ul>
//             </motion.article>

//             <motion.article
//               initial="hidden"
//               whileInView="show"
//               viewport={viewport}
//               variants={reveal}
//               transition={{ duration: 0.5, delay: 0.08 }}
//             >
//               <h3>
//                 <FaPrint aria-hidden="true" />
//                 Compatibility
//               </h3>
//               <ul>
//                 {product.compatibility.map((c) => (
//                   <li key={c}>{c}</li>
//                 ))}
//               </ul>
//             </motion.article>

//             <motion.article
//               initial="hidden"
//               whileInView="show"
//               viewport={viewport}
//               variants={reveal}
//               transition={{ duration: 0.5, delay: 0.16 }}
//             >
//               <h3>
//                 <FaBoxOpen aria-hidden="true" />
//                 Packing
//               </h3>
//               <ul>
//                 {product.packing.map((p) => (
//                   <li key={p}>{p}</li>
//                 ))}
//               </ul>
//             </motion.article>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================
//             RELATED
//       =================================================== */}

//       <section className="prod-section prod-tint" aria-labelledby="pd-related">

//         <div className="prod-wrap">

//           <div className="prod-section-head">
//             <span className="prod-kicker">Also in the range</span>
//             <h2 id="pd-related">Other roll types</h2>
//           </div>

//           <div className="pd-related">

//             {related.map((item) => (
//               <Link
//                 key={item.slug}
//                 to={`/products/${item.slug}`}
//                 className="pd-related-card"
//               >
//                 <img
//                   src={item.image}
//                   alt=""
//                   loading="lazy"
//                   decoding="async"
//                   width="320"
//                   height="200"
//                   onError={hideIfBroken}
//                 />
//                 <span>
//                   <b>{item.name}</b>
//                   {item.tagline}
//                 </span>
//                 <FaArrowRight aria-hidden="true" />
//               </Link>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ===================================================
//             CTA
//       =================================================== */}

//       <section className="prod-cta" aria-labelledby="pd-cta">

//         <div className="prod-wrap prod-cta-inner">

//           <div>
//             <h2 id="pd-cta">Get a quote for {product.name}</h2>
//             <p>
//               Tell us the width, core size and rough monthly volume. We&apos;ll
//               confirm the specification and send a sample.
//             </p>
//           </div>

//           <div className="prod-cta-actions">

//             <Link to={quoteLink} className="prod-btn-solid">
//               Request a quote
//               <FaArrowRight aria-hidden="true" />
//             </Link>

//             <a
//               href={waLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="prod-btn-ghost"
//             >
//               <FaWhatsapp aria-hidden="true" />
//               WhatsApp us
//             </a>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================
//             STICKY MOBILE ACTION BAR
//       =================================================== */}

//       <div className="pd-sticky" role="region" aria-label="Contact options">

//         <Link to={quoteLink} className="pd-sticky-quote">
//           Request a quote
//         </Link>

//         <a
//           href={waLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="pd-sticky-wa"
//           aria-label="Contact us on WhatsApp"
//         >
//           <FaWhatsapp aria-hidden="true" />
//         </a>

//       </div>

//     </main>
//   );
// }

// export default ProductDetails;