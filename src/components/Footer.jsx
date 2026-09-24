import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, MapPin, MessageCircle, Clock, ChevronRight, Mail } from 'lucide-react';
import { FACTORY_INFO, CONTACT_NUMBERS, openWhatsApp } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppChat = (phone) => {
    openWhatsApp(phone, "Hello Viswakarma Steels! I would like to enquire about your steel manufacturing products and pricing.");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-logo-icon">
                <Shield size={24} />
              </div>
              <div>
                <div className="brand-title">VISWAKARMA STEELS</div>
                <div className="brand-subtitle">Steel Manufacturing Factory</div>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--steel-400)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Specialized steel products manufacturing factory located in Ajitgarh Industrial Area, Sikar, Rajasthan. Delivering heavy-gauge almirahs, coolers, water tanks, storage racks, and custom fabrication built for lifelong strength.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                onClick={() => handleWhatsAppChat(CONTACT_NUMBERS.primary.international)}
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={15} /> 9461695205
              </button>
              <button
                onClick={() => handleWhatsAppChat(CONTACT_NUMBERS.secondary.international)}
                className="btn btn-steel btn-sm"
              >
                <MessageCircle size={15} /> 7615011370
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/"><ChevronRight size={14} /> Home</Link>
              </li>
              <li className="footer-link">
                <Link to="/products"><ChevronRight size={14} /> All Products</Link>
              </li>
              <li className="footer-link">
                <Link to="/categories"><ChevronRight size={14} /> Product Categories</Link>
              </li>
              <li className="footer-link">
                <Link to="/about"><ChevronRight size={14} /> About Factory</Link>
              </li>
              <li className="footer-link">
                <Link to="/factory"><ChevronRight size={14} /> Our Plant & Process</Link>
              </li>
              <li className="footer-link">
                <Link to="/quality"><ChevronRight size={14} /> Quality Standards</Link>
              </li>
              <li className="footer-link">
                <Link to="/gallery"><ChevronRight size={14} /> Photo Gallery</Link>
              </li>
              <li className="footer-link">
                <Link to="/custom-orders"><ChevronRight size={14} /> Custom Fabrication</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Steel Categories */}
          <div>
            <h4 className="footer-col-title">Manufacturing</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/products?category=Almirah"><ChevronRight size={14} /> Steel Almirahs</Link>
              </li>
              <li className="footer-link">
                <Link to="/products?category=Cooler"><ChevronRight size={14} /> Desert Coolers</Link>
              </li>
              <li className="footer-link">
                <Link to="/products?category=Water%20Tank"><ChevronRight size={14} /> Water Storage Tanks</Link>
              </li>
              <li className="footer-link">
                <Link to="/products?category=Rack"><ChevronRight size={14} /> Heavy Storage Racks</Link>
              </li>
              <li className="footer-link">
                <Link to="/products?category=Furniture"><ChevronRight size={14} /> Steel Furniture & Beds</Link>
              </li>
              <li className="footer-link">
                <Link to="/products?category=Custom%20Products"><ChevronRight size={14} /> Architectural Gates</Link>
              </li>
              <li className="footer-link">
                <Link to="/faq"><ChevronRight size={14} /> Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Factory Location & Contact */}
          <div>
            <h4 className="footer-col-title">Factory Address</h4>

            <div className="footer-contact-item">
              <MapPin size={20} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#ffffff', display: 'block' }}>Viswakarma Steels</strong>
                <span>Ajitgarh Industrial Area, Sikar, Rajasthan, India - 332701</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <div>
                <a href="tel:9461695205" style={{ color: '#ffffff', fontWeight: 600 }}>+91 94616 95205</a>
                <span style={{ fontSize: '0.8rem', color: 'var(--steel-400)', display: 'block' }}>Sales & Factory Head</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <div>
                <a href="tel:7615011370" style={{ color: '#ffffff', fontWeight: 600 }}>+91 76150 11370</a>
                <span style={{ fontSize: '0.8rem', color: 'var(--steel-400)', display: 'block' }}>Proprietor Desk (Father)</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <div>
                <span style={{ color: 'var(--steel-300)' }}>Mon - Sat: 8:00 AM - 7:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {currentYear} <strong>Viswakarma Steels</strong>. All rights reserved. Made for durable Indian engineering.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--steel-400)' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: 'var(--steel-400)' }}>
              Terms & Conditions
            </Link>
            <Link to="/contact" style={{ color: 'var(--steel-400)' }}>
              Location & Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
