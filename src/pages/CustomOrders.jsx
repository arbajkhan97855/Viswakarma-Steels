import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Send, CheckCircle2, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { openWhatsApp, CONTACT_NUMBERS, generateCustomOrderMessage } from '../utils/whatsapp';

export default function CustomOrders() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productType: 'Custom Steel Almirah / Wardrobe',
    quantity: '1',
    dimensions: '',
    gauge: 'Standard Heavy Duty (20/22 Gauge)',
    location: '',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [targetNumber, setTargetNumber] = useState('primary');
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.productType.trim()) errs.productType = 'Please specify product requirement';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    const phone =
      targetNumber === 'secondary'
        ? CONTACT_NUMBERS.secondary.international
        : CONTACT_NUMBERS.primary.international;

    const message = generateCustomOrderMessage(formData);
    openWhatsApp(phone, message);
    setSubmitted(true);
  };

  return (
    <div className="custom-orders-page section-padding">
      <div className="container container-narrow">
        <SectionTitle
          eyebrow="Bespoke Metal Fabrication"
          title="Custom Steel"
          highlight="Orders & Fabrication"
          description="Have unique room dimensions, heavy gauge storage requirements, architectural gate designs, or industrial tanks? Submit your specs below to receive a custom factory estimate."
        />

        <div
          className="steel-card"
          style={{
            padding: '3rem 2.5rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--accent-blue-border)',
            boxShadow: 'var(--shadow-steel)',
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '2rem 1rem' }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid var(--wa-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--wa-green)',
                  margin: '0 auto 1.5rem',
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                WhatsApp Enquiry Initiated!
              </h2>

              <p style={{ color: 'var(--steel-300)', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Your custom specifications have been pre-filled into WhatsApp. If WhatsApp did not open automatically, click the button below to send your details directly to our factory team.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    const phone =
                      targetNumber === 'secondary'
                        ? CONTACT_NUMBERS.secondary.international
                        : CONTACT_NUMBERS.primary.international;
                    openWhatsApp(phone, generateCustomOrderMessage(formData));
                  }}
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={18} /> Open WhatsApp Chat
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-steel btn-lg"
                >
                  Submit Another Custom Order
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Name */}
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rameshwar Choudhary"
                    className="form-input"
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{errors.name}</span>
                  )}
                </div>

                {/* Mobile */}
                <div className="form-group">
                  <label className="form-label">Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit number (e.g. 98290XXXXX)"
                    className="form-input"
                  />
                  {errors.phone && (
                    <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{errors.phone}</span>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Product Requirement */}
                <div className="form-group">
                  <label className="form-label">Product Requirement *</label>
                  <select
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                    className="form-select"
                  >
                    <option value="Custom Steel Almirah / Wardrobe">Custom Steel Almirah / Wardrobe</option>
                    <option value="Industrial / Desert Cooler">Industrial / Desert Cooler</option>
                    <option value="Water Storage Tank (Overhead/Skid)">Water Storage Tank (Overhead/Skid)</option>
                    <option value="Warehouse Pallet / Shop Display Rack">Warehouse Pallet / Shop Display Rack</option>
                    <option value="Steel Bed / Table / Institutional Furniture">Steel Bed / Table / Institutional Furniture</option>
                    <option value="Architectural Gate / Security Grille">Architectural Gate / Security Grille</option>
                    <option value="Machine Enclosure / Industrial Hopper">Machine Enclosure / Industrial Hopper</option>
                    <option value="Other Custom Metal Fabrication">Other Custom Metal Fabrication</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="form-group">
                  <label className="form-label">Estimated Quantity</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 1 unit, 10 units, 50 units"
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Size / Dimensions */}
                <div className="form-group">
                  <label className="form-label">Dimensions / Size (If known)</label>
                  <input
                    type="text"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    placeholder="e.g. 84in H x 48in W x 22in D or 2000L"
                    className="form-input"
                  />
                </div>

                {/* Preferred Sheet Gauge */}
                <div className="form-group">
                  <label className="form-label">Preferred Sheet Gauge / Thickness</label>
                  <select
                    value={formData.gauge}
                    onChange={(e) => setFormData({ ...formData, gauge: e.target.value })}
                    className="form-select"
                  >
                    <option value="Standard Heavy Duty (20/22 Gauge)">Standard Heavy Duty (20/22 Gauge)</option>
                    <option value="Extra Heavy Duty (18 Gauge)">Extra Heavy Duty (18 Gauge)</option>
                    <option value="Ultra Heavy Industrial (14/16 Gauge Plates)">Ultra Heavy Industrial (14/16 Gauge Plates)</option>
                    <option value="Stainless Steel 304/316">Stainless Steel 304/316</option>
                    <option value="Factory Recommendation Needed">Factory Recommendation Needed</option>
                  </select>
                </div>
              </div>

              {/* Delivery Location */}
              <div className="form-group">
                <label className="form-label">Delivery Location / City</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Sikar, Ringas, Shahpura, Jaipur, etc."
                  className="form-input"
                />
              </div>

              {/* Additional Details */}
              <div className="form-group">
                <label className="form-label">Additional Details / Custom Specifications</label>
                <textarea
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Specify lock type, secret drawers, color shade, site requirements, drawing notes, etc."
                  className="form-textarea"
                />
              </div>

              {/* Contact Selection */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--steel-400)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                  Direct WhatsApp Routing:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setTargetNumber('primary')}
                    style={{
                      padding: '0.85rem',
                      borderRadius: '8px',
                      border: `1px solid ${targetNumber === 'primary' ? 'var(--wa-green)' : 'var(--border-steel)'}`,
                      background: targetNumber === 'primary' ? 'rgba(37, 211, 102, 0.12)' : 'var(--bg-darkest)',
                      color: targetNumber === 'primary' ? '#ffffff' : 'var(--steel-300)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--wa-green)' }}>
                      Main Factory Desk
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--steel-400)' }}>
                      +91 94616 95205
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTargetNumber('secondary')}
                    style={{
                      padding: '0.85rem',
                      borderRadius: '8px',
                      border: `1px solid ${targetNumber === 'secondary' ? 'var(--wa-green)' : 'var(--border-steel)'}`,
                      background: targetNumber === 'secondary' ? 'rgba(37, 211, 102, 0.12)' : 'var(--bg-darkest)',
                      color: targetNumber === 'secondary' ? '#ffffff' : 'var(--steel-300)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--steel-100)' }}>
                      Proprietor Desk (Father)
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--steel-400)' }}>
                      +91 76150 11370
                    </div>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', padding: '1rem' }}
              >
                <Send size={18} /> Submit Custom Requirements to WhatsApp
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', fontSize: '0.78rem', color: 'var(--steel-400)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent-blue)' }} />
                Your details are sent directly to the factory owner via encrypted WhatsApp message.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
