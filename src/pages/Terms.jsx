import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Terms() {
  return (
    <div className="section-padding">
      <div className="container container-narrow">
        <SectionTitle
          eyebrow="Commercial Terms"
          title="Terms &"
          highlight="Conditions"
          description="Guidelines governing inquiries, orders, manufacturing tolerances, and delivery from Viswakarma Steels."
        />

        <div className="steel-card" style={{ padding: '3rem 2.5rem', background: 'var(--bg-surface)' }}>
          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>1. Product Representations & Quotes</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            All product specifications, sheet gauges, photos, and descriptions provided on this website represent our real-world factory fabrications. Quotations delivered via WhatsApp or telephone are subject to prevailing raw steel coil market rates at the time of order confirmation.
          </p>

          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>2. Custom Fabrication & Blueprints</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            For custom fabrication orders (such as custom-sized almirahs, architectural sliding gates, or industrial storage tanks), dimensional specifications and sheet gauges agreed upon in writing via WhatsApp or order challan shall be binding. Standard mechanical manufacturing tolerances of +/- 1.0mm apply to sheared and folded sheet components.
          </p>

          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>3. Inspection & Delivery</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Buyers are always encouraged to inspect finished goods at our factory premises in Ajitgarh Industrial Area prior to freight dispatch. Transit damage caused by third-party logistics should be reported immediately upon delivery.
          </p>

          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>4. Jurisdiction</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8' }}>
            Any commercial disputes or contractual matters are subject to the exclusive jurisdiction of the competent courts in Sikar District, Rajasthan, India.
          </p>
        </div>
      </div>
    </div>
  );
}
