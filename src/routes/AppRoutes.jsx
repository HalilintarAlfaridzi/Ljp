import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Catalog from "../pages/Catalog.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import PortfolioDetail from "../pages/PortfolioDetail.jsx";
import About from "../pages/About.jsx";
import FAQ from "../pages/FAQ.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<Services />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
