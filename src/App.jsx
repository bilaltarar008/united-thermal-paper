import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Industries from "./pages/Industries/Industries";
import Resources from "./pages/Resources/Resources";
import ArticleDetail from "./pages/Resources/ArticleDetail";
import Contact from "./pages/Contact/Contact";


/*
  NOT YET BUILT — uncomment each line as you create the page.
  Leaving them commented means the build stays green; importing an
  empty file would fail at render with "type is invalid".

  import Contact from "./pages/Contact/Contact";
  import Quote from "./pages/Quote/Quote";
  import NotFound from "./pages/NotFound/NotFound";
*/

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />

        {/* index + article pages */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:slug" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-quote" element={<Contact />} />


        {/*
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;