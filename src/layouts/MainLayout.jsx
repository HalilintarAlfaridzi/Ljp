import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigationItems } from "../constants/navigation";
import { siteConfig } from "../constants/siteConfig";
import { publicImages } from "../constants/images";
import { whatsappMessages } from "../constants/whatsapp";
import { formatWhatsappUrl } from "../utils/formatWhatsappUrl";
import Button from "../components/common/Button";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";

export default function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <BrandLink />

          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navigationItems.map((item) => (
              <NavLink key={item.href} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="desktop-cta">
            <Button
              href={formatWhatsappUrl(whatsappMessages.general)}
              target="_blank"
              rel="noreferrer"
              icon={false}
            >
              Konsultasi WhatsApp
            </Button>
          </div>

          <button className="mobile-menu-button" type="button" onClick={() => setIsOpen(true)} aria-label="Buka menu">
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <div className="drawer-panel">
          <div className="drawer-head">
            <BrandLink />
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Tutup menu">
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Navigasi mobile">
            {navigationItems.map((item) => (
              <NavLink key={item.href} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button
            href={formatWhatsappUrl(whatsappMessages.general)}
            target="_blank"
            rel="noreferrer"
            className="drawer-cta"
          >
            Konsultasi WhatsApp
          </Button>
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

function BrandLink({ className = "" }) {
  const brandClassName = ["brand", className].filter(Boolean).join(" ");

  return (
    <Link className={brandClassName} to="/" aria-label="LJP Custom Furniture home">
      <img className="brand-logo" src={publicImages.logo} alt="" aria-hidden="true" />
      <strong>
        <span>LJP</span>
        <span>Custom Furniture</span>
      </strong>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLink className="brand-footer" />
          <p>
            LJP Custom Furniture menghadirkan furniture custom yang rapi, fungsional, dan berkelas
            untuk hunian serta ruang bisnis Anda.
          </p>
        </div>
        <div>
          <h2>Menu</h2>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Layanan</h2>
          <ul>
            <li>Kitchen Set</li>
            <li>Wardrobe</li>
            <li>Custom Cabinet</li>
            <li>Furniture Kantor</li>
            <li>Cafe & Restaurant Furniture</li>
          </ul>
        </div>
        <div>
          <h2>Kontak</h2>
          <ul>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.location}</li>
            <li>
              <a href={formatWhatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
                Konsultasi via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 {siteConfig.brandName}. All rights reserved.</span>
        <span>{siteConfig.tagline}</span>
      </div>
    </footer>
  );
}
