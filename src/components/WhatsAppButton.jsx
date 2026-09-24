import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, PhoneCall, ExternalLink, ShieldCheck } from 'lucide-react';
import { openWhatsApp, CONTACT_NUMBERS, FACTORY_INFO, generateGeneralInquiry } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChat = (phoneKey) => {
    const phone =
      phoneKey === 'secondary'
        ? CONTACT_NUMBERS.secondary.international
        : CONTACT_NUMBERS.primary.international;
    openWhatsApp(phone, generateGeneralInquiry("Factory Steel Products & Pricing"));
    setIsOpen(false);
  };

  return (
    <div className="floating-wa-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-wa-popup"
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--wa-green)' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                  Direct Factory WhatsApp
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{ color: 'var(--steel-400)', padding: '2px' }}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--steel-300)', lineHeight: '1.4' }}>
              Connect directly with our manufacturing desk in Ajitgarh Industrial Area for immediate quotes and custom sizing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {/* Primary Contact */}
              <button
                onClick={() => handleOpenChat('primary')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0.9rem',
                  background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(18, 140, 126, 0.2) 100%)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--wa-green)' }}>
                    Sales & Factory Office
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--steel-300)' }}>
                    +91 94616 95205
                  </div>
                </div>
                <ExternalLink size={16} style={{ color: 'var(--wa-green)' }} />
              </button>

              {/* Secondary Contact (Father) */}
              <button
                onClick={() => handleOpenChat('secondary')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0.9rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-steel)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--steel-100)' }}>
                    Proprietor Desk (Father)
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--steel-400)' }}>
                    +91 76150 11370
                  </div>
                </div>
                <ExternalLink size={16} style={{ color: 'var(--steel-400)' }} />
              </button>
            </div>

            <div style={{ fontSize: '0.72rem', color: 'var(--steel-400)', display: 'flex', alignItems: 'center', gap: '0.4rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.6rem' }}>
              <ShieldCheck size={14} style={{ color: 'var(--accent-blue)' }} /> 100% Genuine Factory Direct Quotes
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="floating-wa-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp Contact"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={30} />}
      </motion.button>
    </div>
  );
}
