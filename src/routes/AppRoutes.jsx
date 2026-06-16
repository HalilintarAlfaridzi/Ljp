import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";

const Services = lazy(() => import("../pages/Services.jsx"));
const Catalog = lazy(() => import("../pages/Catalog.jsx"));
const Portfolio = lazy(() => import("../pages/Portfolio.jsx"));
const PortfolioDetail = lazy(() => import("../pages/PortfolioDetail.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const FAQ = lazy(() => import("../pages/FAQ.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

function lazyPage(element) {
  return <Suspense fallback={<div className="route-loading" aria-live="polite" />}>{element}</Suspense>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={lazyPage(<Services />)} />
        <Route path="/catalog" element={lazyPage(<Catalog />)} />
        <Route path="/portfolio" element={lazyPage(<Portfolio />)} />
        <Route path="/portfolio/:slug" element={lazyPage(<PortfolioDetail />)} />
        <Route path="/about" element={lazyPage(<About />)} />
        <Route path="/faq" element={lazyPage(<FAQ />)} />
        <Route path="/contact" element={lazyPage(<Contact />)} />
        <Route path="*" element={lazyPage(<NotFound />)} />
      </Route>
    </Routes>
  );
}
