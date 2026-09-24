import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ShoppingBag, MessageCircle, Phone } from 'lucide-react';
import { openWhatsApp, CONTACT_NUMBERS } from '../utils/whatsapp';
import { useEnquiry } from '../context/EnquiryContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Categories', path: '/categories' },
  { name: 'About', path: '/about' },
  { name: 'Factory', path: '/factory' },
  { name: 'Quality', path: '/quality' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, setIsDrawerOpen } = useEnquiry();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleWhatsAppClick = () => {
    openWhatsApp(
      CONTACT_NUMBERS.primary.international,
      "Hello Viswakarma Steels! I am visiting your website and would like to enquire about your steel products and factory pricing."
    );
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo">
            <div className="brand-logo-icon">
              <Shield size={24} />
            </div>
            <div>
              <div className="brand-title">VISWAKARMA STEELS</div>
              <div className="brand-subtitle">Steel Manufacturing Factory • Sikar</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav>
            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            {/* Cart / Enquiry toggle */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="cart-toggle-btn"
              title="View Enquiry List"
              aria-label="Enquiry List"
            >
              <ShoppingBag size={20} />
              {totalItemsCount > 0 && (
                <span className="cart-badge">{totalItemsCount}</span>
              )}
            </button>

            {/* Direct WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="btn btn-whatsapp btn-sm"
              style={{ display: 'none' }}
            >
              <MessageCircle size={16} /> WhatsApp Us
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="btn btn-whatsapp btn-sm"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-btn"
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="mobile-nav-overlay"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="mobile-nav-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                <div className="brand-logo">
                  <div className="brand-logo-icon" style={{ width: '36px', height: '36px' }}>
                    <Shield size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>
                      VISWAKARMA
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--steel-400)', textTransform: 'uppercase' }}>
                      Steels • Ajitgarh
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: 'var(--steel-300)', padding: '4px' }}
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="mobile-nav-panel-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.path} className="mobile-nav-item">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className="mobile-nav-item">
                  <NavLink
                    to="/custom-orders"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    Custom Orders
                  </NavLink>
                </li>
                <li className="mobile-nav-item">
                  <NavLink
                    to="/faq"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsDrawerOpen(true);
                  }}
                  className="btn btn-steel btn-sm"
                  style={{ width: '100%' }}
                >
                  <ShoppingBag size={16} /> View Enquiry List ({totalItemsCount})
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="btn btn-whatsapp btn-sm"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={16} /> WhatsApp: 9461695205
                </button>

                <div style={{ fontSize: '0.8rem', color: 'var(--steel-400)', textAlign: 'center', marginTop: '0.5rem' }}>
                  Ajitgarh Industrial Area, Sikar
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
