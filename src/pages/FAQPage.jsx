import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { faqList } from '../data/faq';
import { openWhatsApp, CONTACT_NUMBERS } from '../utils/whatsapp';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const handleAskWhatsApp = () => {
    openWhatsApp(
      CONTACT_NUMBERS.primary.international,
      "Hello Viswakarma Steels, I have a specific question about your steel products."
    );
  };

  return (
    <div className="faq-page section-padding">
      <div className="container container-narrow">
        <SectionTitle
          eyebrow="Help & Information"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you need to know about our factory direct manufacturing, delivery across Rajasthan, gauge specs, and pricing."
        />

        <div className="faq-list" style={{ marginBottom: '4rem' }}>
          {faqList.map((item, idx) => (
            <div
              key={item.id}
              className={`faq-item ${openFaq === idx ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  style={{
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: openFaq === idx ? 'var(--accent-blue)' : 'var(--steel-400)',
                  }}
                />
              </button>
              {openFaq === idx && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions card */}
        <div
          className="steel-card"
          style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'var(--bg-surface)',
            border: '1px solid var(--accent-blue-border)',
          }}
        >
          <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.75rem' }}>
            Still Have Questions?
          </h3>
          <p style={{ color: 'var(--steel-400)', maxWidth: '520px', margin: '0 auto 1.75rem' }}>
            We're happy to answer questions regarding steel thickness, delivery logistics, or custom drawings over WhatsApp or direct call.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleAskWhatsApp} className="btn btn-whatsapp">
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
            <a href="tel:9461695205" className="btn btn-primary">
              <Phone size={18} /> Call: 9461695205
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
