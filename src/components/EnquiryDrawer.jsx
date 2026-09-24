import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Send, Plus, Minus, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { CONTACT_NUMBERS } from '../utils/whatsapp';

export default function EnquiryDrawer() {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    enquiryItems,
    removeFromEnquiry,
    updateQuantity,
    clearEnquiry,
    sendEnquiryToWhatsApp,
  } = useEnquiry();

  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('primary');

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    sendEnquiryToWhatsApp(selectedNumber, {
      name: customerName,
      city: customerCity,
      phone: customerPhone,
      notes: customerNotes,
    });
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div
          className="enquiry-drawer-overlay"
          onClick={() => setIsDrawerOpen(false)}
        >
          <motion.div
            className="enquiry-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShoppingBag size={22} style={{ color: 'var(--accent-blue)' }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>Enquiry List</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--steel-400)' }}>
                    {enquiryItems.length} Products Selected
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                style={{ color: 'var(--steel-300)', padding: '4px' }}
                aria-label="Close Drawer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="drawer-body">
              {enquiryItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--steel-400)' }}>
                  <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
                  <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--steel-200)' }}>
                    Your Enquiry List is Empty
                  </p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.4rem' }}>
                    Browse our steel products and click "Enquire" or "Add to Enquiry" to build your custom factory quote request.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--steel-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Selected Items
                    </span>
                    <button
                      onClick={clearEnquiry}
                      style={{ fontSize: '0.8rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <Trash2 size={14} /> Clear All
                    </button>
                  </div>

                  {enquiryItems.map((item) => (
                    <div key={item.id} className="cart-item-card">
                      <div className="cart-item-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--accent-blue)', textTransform: 'uppercase', fontWeight: 700 }}>
                          {item.category}
                        </div>
                        <h4 style={{ fontSize: '0.92rem', color: '#ffffff', lineHeight: '1.3', marginBottom: '0.35rem' }}>
                          {item.name}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '4px',
                              background: 'var(--bg-surface)',
                              border: '1px solid var(--border-steel)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--steel-200)',
                            }}
                          >
                            <Minus size={12} />
                          </button>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '4px',
                              background: 'var(--bg-surface)',
                              border: '1px solid var(--border-steel)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--steel-200)',
                            }}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromEnquiry(item.id)}
                        style={{ color: 'var(--steel-500)', padding: '6px' }}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}

                  {/* Customer Info Form */}
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                      Customer / Site Info (Optional)
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '0.6rem' }}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="form-input"
                        style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}
                      />
                      <input
                        type="text"
                        placeholder="City / Area"
                        value={customerCity}
                        onChange={(e) => setCustomerCity(e.target.value)}
                        className="form-input"
                        style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="form-input"
                      style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem', marginBottom: '0.6rem' }}
                    />
                    <textarea
                      placeholder="Custom gauge, size or requirement notes..."
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      className="form-textarea"
                      style={{ minHeight: '65px', padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}
                    />

                    {/* WhatsApp Receiver Selection */}
                    <div style={{ marginTop: '0.75rem' }}>
                      <label style={{ fontSize: '0.78rem', color: 'var(--steel-400)', display: 'block', marginBottom: '0.4rem' }}>
                        Send Quote Request To:
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        <button
                          type="button"
                          onClick={() => setSelectedNumber('primary')}
                          style={{
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: `1px solid ${selectedNumber === 'primary' ? 'var(--wa-green)' : 'var(--border-steel)'}`,
                            background: selectedNumber === 'primary' ? 'rgba(37, 211, 102, 0.1)' : 'var(--bg-darkest)',
                            color: selectedNumber === 'primary' ? '#ffffff' : 'var(--steel-400)',
                            fontSize: '0.78rem',
                            textAlign: 'left',
                          }}
                        >
                          <div style={{ fontWeight: 700, color: 'var(--wa-green)' }}>Factory (Main)</div>
                          <div>9461695205</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedNumber('secondary')}
                          style={{
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: `1px solid ${selectedNumber === 'secondary' ? 'var(--wa-green)' : 'var(--border-steel)'}`,
                            background: selectedNumber === 'secondary' ? 'rgba(37, 211, 102, 0.1)' : 'var(--bg-darkest)',
                            color: selectedNumber === 'secondary' ? '#ffffff' : 'var(--steel-400)',
                            fontSize: '0.78rem',
                            textAlign: 'left',
                          }}
                        >
                          <div style={{ fontWeight: 700, color: 'var(--wa-green)' }}>Proprietor</div>
                          <div>7615011370</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            {enquiryItems.length > 0 && (
              <div className="drawer-footer">
                <button
                  onClick={handleSendWhatsApp}
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '0.9rem' }}
                >
                  <Send size={18} /> Send All Enquiries to WhatsApp
                </button>
                <div style={{ textAlign: 'center', marginTop: '0.6rem', fontSize: '0.75rem', color: 'var(--steel-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--accent-blue)' }} /> Direct factory quote with zero middleman commissions
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
