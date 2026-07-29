import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
// import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Industries from "../pages/Industries/Industries";
import Resources from "../pages/Resources/Resources";
import Contact from "../pages/Contact/Contact";
import Quote from "../pages/Quote/Quote";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
      <Route path="/industries" element={<Industries />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-quote" element={<Quote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}