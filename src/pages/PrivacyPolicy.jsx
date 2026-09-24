import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function PrivacyPolicy() {
  return (
    <div className="section-padding">
      <div className="container container-narrow">
        <SectionTitle
          eyebrow="Legal & Transparency"
          title="Privacy"
          highlight="Policy"
          description="Last updated: September 2026. How Viswakarma Steels handles inquiries and customer information."
        />

        <div className="steel-card" style={{ padding: '3rem 2.5rem', background: 'var(--bg-surface)' }}>
          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>1. Introduction</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Viswakarma Steels ("we", "our", or "factory") respects your privacy. This website is a catalog and inquiry portal designed to display our steel manufacturing products and facilitate direct communications with our factory in Ajitgarh Industrial Area, Sikar, Rajasthan, India.
          </p>

          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>2. Data Collection</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            We do not operate backend user accounts, databases, or online payment gateways on this website. Any contact details (name, phone number, dimensions, requirement notes) entered by you are processed client-side within your browser strictly to format a pre-filled WhatsApp message or telephone call.
          </p>

          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>3. Local Storage</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            This website utilizes your browser's local storage (localStorage) exclusively to remember products added to your "Enquiry List" during your browsing session. No tracking cookies or commercial third-party trackers are deployed.
          </p>

          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>4. Communications via WhatsApp</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            When you choose to click "Buy / Enquire on WhatsApp" or send a custom quote request, your communication is transmitted directly via WhatsApp’s end-to-end encrypted messaging service to our official phone numbers (9461695205 or 7615011370).
          </p>

          <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>5. Contact Information</h3>
          <p style={{ color: 'var(--steel-300)', lineHeight: '1.8' }}>
            For privacy inquiries or business clarifications, you may write or speak to our factory management at:<br />
            <strong>Viswakarma Steels</strong><br />
            Ajitgarh Industrial Area, Sikar, Rajasthan, India - 332701<br />
            Phone: +91 94616 95205 / +91 76150 11370
          </p>
        </div>
      </div>
    </div>
  );
}
