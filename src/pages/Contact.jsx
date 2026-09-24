import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send, ShieldCheck, Mail } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { FACTORY_INFO, CONTACT_NUMBERS, openWhatsApp } from '../utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Price Inquiry',
    message: '',
  });

  const [selectedContact, setSelectedContact] = useState('primary');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    const phone =
      selectedContact === 'secondary'
        ? CONTACT_NUMBERS.secondary.international
        : CONTACT_NUMBERS.primary.international;

    const text = `Hello Viswakarma Steels,

New Contact Inquiry from Website:
Name: ${formData.name}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message || 'I would like to receive product details and pricing.'}

Thank you.`;

    openWhatsApp(phone, text);
  };

  return (
    <div className="contact-page section-padding">
      <div className="container">
        <SectionTitle
          eyebrow="Direct Factory Communications"
          title="Contact"
          highlight="Viswakarma Steels"
          description="Speak directly with our factory management in Ajitgarh Industrial Area, Sikar. No call centers — honest discussions on specs and prices."
        />

        <div className="grid-2" style={{ gap: '3.5rem', marginBottom: '5rem' }}>
          {/* Left Column: Factory Contacts & Cards */}
          <div>
            <span className="metal-badge" style={{ marginBottom: '1rem' }}>
              Factory & Administration
            </span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              We're Here to Help
            </h2>
            <p style={{ color: 'var(--steel-300)', lineHeight: '1.7', marginBottom: '2rem' }}>
              Whether you are a homeowner shopping for an unbreakable almirah, a merchant seeking shop display racks, or a contractor ordering custom steel structures, our doors and phone lines are open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {/* Primary Contact Card */}
              <div
                className="steel-card"
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-steel)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>Sales & Factory Head</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)' }}>Main Direct Line</span>
                  </div>
                  <span className="metal-badge">9461695205</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href="tel:9461695205" className="btn btn-steel btn-sm" style={{ flex: 1 }}>
                    <Phone size={15} /> Call 9461695205
                  </a>
                  <button
                    onClick={() => openWhatsApp(CONTACT_NUMBERS.primary.international, "Hello Viswakarma Steels, I would like to enquire about your products.")}
                    className="btn btn-whatsapp btn-sm"
                    style={{ flex: 1 }}
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </button>
                </div>
              </div>

              {/* Secondary Contact Card */}
              <div
                className="steel-card"
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-steel)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>Proprietor Desk (Father)</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--steel-400)' }}>Senior Management</span>
                  </div>
                  <span className="metal-badge">7615011370</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href="tel:7615011370" className="btn btn-steel btn-sm" style={{ flex: 1 }}>
                    <Phone size={15} /> Call 7615011370
                  </a>
                  <button
                    onClick={() => openWhatsApp(CONTACT_NUMBERS.secondary.international, "Hello Viswakarma Steels, I would like to speak regarding factory direct steel products.")}
                    className="btn btn-whatsapp btn-sm"
                    style={{ flex: 1 }}
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </button>
                </div>
              </div>

              {/* Location Details */}
              <div
                className="steel-card"
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-surface)',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                      Viswakarma Steels
                    </strong>
                    <p style={{ color: 'var(--steel-300)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                      Ajitgarh Industrial Area, Sikar, Rajasthan, India - 332701
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--steel-400)' }}>
                      <Clock size={16} /> Mon - Sat: 8:00 AM - 7:30 PM (Sunday by Appointment)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div>
            <div
              className="steel-card"
              style={{
                padding: '2.5rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--accent-blue-border)',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Send a Message to Factory
              </h3>
              <p style={{ color: 'var(--steel-400)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                Fill in your enquiry details and hit send to route the message directly to our WhatsApp chat.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-select"
                  >
                    <option value="Price & Catalog Inquiry">Price & Catalog Inquiry</option>
                    <option value="Bulk Retail / Shop Order">Bulk Retail / Shop Order</option>
                    <option value="Custom Size Almirah / Gate">Custom Size Almirah / Gate</option>
                    <option value="Water Tank / Desert Cooler">Water Tank / Desert Cooler</option>
                    <option value="Factory Visit Request">Factory Visit Request</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Requirement Details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what product, gauge, or dimensions you are looking for..."
                    className="form-textarea"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--steel-400)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                    Send Message Via:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedContact('primary')}
                      style={{
                        padding: '0.65rem',
                        borderRadius: '6px',
                        border: `1px solid ${selectedContact === 'primary' ? 'var(--wa-green)' : 'var(--border-steel)'}`,
                        background: selectedContact === 'primary' ? 'rgba(37, 211, 102, 0.12)' : 'var(--bg-darkest)',
                        color: selectedContact === 'primary' ? '#ffffff' : 'var(--steel-400)',
                        fontSize: '0.82rem',
                        textAlign: 'left',
                      }}
                    >
                      <div style={{ fontWeight: 700, color: 'var(--wa-green)' }}>Factory (Main)</div>
                      <div>9461695205</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedContact('secondary')}
                      style={{
                        padding: '0.65rem',
                        borderRadius: '6px',
                        border: `1px solid ${selectedContact === 'secondary' ? 'var(--wa-green)' : 'var(--border-steel)'}`,
                        background: selectedContact === 'secondary' ? 'rgba(37, 211, 102, 0.12)' : 'var(--bg-darkest)',
                        color: selectedContact === 'secondary' ? '#ffffff' : 'var(--steel-400)',
                        fontSize: '0.82rem',
                        textAlign: 'left',
                      }}
                    >
                      <div style={{ fontWeight: 700, color: 'var(--steel-100)' }}>Proprietor</div>
                      <div>7615011370</div>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp btn-lg"
                  style={{ width: '100%' }}
                >
                  <Send size={18} /> Send Message on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Embedded Map Section */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-eyebrow">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '2px' }} />
            Factory Location
          </div>
          <h2 style={{ marginBottom: '1.5rem' }}>
            Find Us in <span className="text-blue-gradient">Ajitgarh Industrial Area</span>
          </h2>

          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border-steel)',
              boxShadow: 'var(--shadow-lg)',
              height: '420px',
              background: 'var(--bg-surface)',
            }}
          >
            <iframe
              title="Ajitgarh Industrial Area Sikar Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Ajitgarh%20Industrial%20Area,%20Sikar,%20Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
