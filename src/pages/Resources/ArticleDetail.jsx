import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaChevronRight,
  FaRegClock,
} from "react-icons/fa";

import {
  getArticle,
  getRelatedArticles,
  formatDate,
} from "../../data/articles";
import "./Resources.css";

/* =========================================================
   LOCATION: src/pages/Resources/ArticleDetail.jsx
   ROUTE: /resources/:slug
   Param MUST be named "slug" to match useParams() below.
========================================================= */

const WHATSAPP_NUMBER = "923001234567";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

/* renders one content block from the article body */
function Block({ block }) {
  if (block.type === "h") {
    return <h2>{block.text}</h2>;
  }

  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "note") {
    return (
      <aside className="art-note">
        <p>{block.text}</p>
      </aside>
    );
  }

  return <p>{block.text}</p>;
}

function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useEffect(() => {
    document.title = article
      ? `${article.title} | United Thermal Paper`
      : "Article not found | United Thermal Paper";
  }, [article]);

  /* ---------------- unknown slug ---------------- */

  if (!article) {
    return (
      <main className="res art">
        <div className="res-wrap art-missing">
          <h1>We can&apos;t find that article</h1>
          <p>
            The link may be out of date. Browse everything we&apos;ve published,
            or ask us the question directly.
          </p>
          <Link to="/resources" className="res-btn-solid">
            All articles
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </main>
    );
  }

  const related = getRelatedArticles(article.slug);

  return (
    <main className="res art">

      {/* ===================================================
            BREADCRUMB
      =================================================== */}

      <nav className="art-crumbs" aria-label="Breadcrumb">
        <div className="res-wrap">
          <ol>
            <li>
              <Link to="/">Home</Link>
              <FaChevronRight aria-hidden="true" />
            </li>
            <li>
              <Link to="/resources">Resources</Link>
              <FaChevronRight aria-hidden="true" />
            </li>
            <li aria-current="page">{article.category}</li>
          </ol>
        </div>
      </nav>

      {/* ===================================================
            ARTICLE HEADER
      =================================================== */}

      <header className="art-head">

        <div className="res-wrap art-measure">

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >

            <span className="res-tag art-tag-dark">{article.category}</span>

            <h1>{article.title}</h1>

            <p className="art-excerpt">{article.excerpt}</p>

            <div className="art-meta">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span className="res-dot" aria-hidden="true" />
              <span className="res-readtime">
                <FaRegClock aria-hidden="true" />
                {article.readTime} read
              </span>
            </div>

          </motion.div>

        </div>

      </header>

      {/* ===================================================
            BODY
      =================================================== */}

      <article className="art-body">

        <div className="res-wrap art-measure">

          {article.body.map((block, i) => (
            <Block key={`${block.type}-${i}`} block={block} />
          ))}

          {/* inline conversion prompt at the end of the read */}
          <div className="art-inline-cta">
            <h3>Need this specified for your printers?</h3>
            <p>
              Send us the roll width, core size and rough monthly volume, and
              we&apos;ll come back with a specification and a sample.
            </p>
            <div className="art-inline-actions">
              <Link to="/request-quote" className="res-btn-mini">
                Request a quote
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="res-btn-mini res-btn-mini-wa"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

        </div>

      </article>

      {/* ===================================================
            RELATED
      =================================================== */}

      <section className="res-section res-tint" aria-labelledby="art-related">

        <div className="res-wrap">

          <div className="res-section-head">
            <span className="res-kicker">Keep reading</span>
            <h2 id="art-related">Related articles</h2>
          </div>

          <div className="res-grid">

            {related.map((item) => (
              <article className="res-card" key={item.slug}>

                <span className="res-tag">{item.category}</span>

                <h3>
                  <Link to={`/resources/${item.slug}`}>{item.title}</Link>
                </h3>

                <p>{item.excerpt}</p>

                <div className="res-card-foot">
                  <div className="res-meta">
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                    <span className="res-dot" aria-hidden="true" />
                    <span className="res-readtime">{item.readTime}</span>
                  </div>

                  <Link
                    to={`/resources/${item.slug}`}
                    className="res-link res-link-sm"
                    aria-label={`Read ${item.title}`}
                  >
                    Read
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
            CTA
      =================================================== */}

      <section className="res-cta" aria-labelledby="art-cta">

        <div className="res-wrap res-cta-inner">

          <div>
            <h2 id="art-cta">Talk to someone who knows the paper</h2>
            <p>
              Samples before you commit, and straight answers on specification
              whether or not you order.
            </p>
          </div>

          <div className="res-cta-actions">

            <Link to="/request-quote" className="res-btn-solid">
              Request a quote
              <FaArrowRight aria-hidden="true" />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="res-btn-ghost"
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ArticleDetail;