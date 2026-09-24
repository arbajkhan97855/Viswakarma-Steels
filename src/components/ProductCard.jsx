import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Eye, Plus, Check } from 'lucide-react';
import { openWhatsApp, generateProductInquiry, CONTACT_NUMBERS } from '../utils/whatsapp';
import { useEnquiry } from '../context/EnquiryContext';

export default function ProductCard({ product, index = 0 }) {
  const { addToEnquiry, enquiryItems } = useEnquiry();
  const isInEnquiry = enquiryItems.some((item) => item.id === product.id);

  const handleWhatsAppEnquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const msg = generateProductInquiry(product);
    openWhatsApp(CONTACT_NUMBERS.primary.international, msg);
  };

  const handleAddEnquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToEnquiry(product, 1);
  };

  return (
    <motion.div
      className="steel-card product-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
    >
      <div className="product-card-img-wrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        {product.badge && (
          <div className="product-card-badge">
            <span className="metal-badge">{product.badge}</span>
          </div>
        )}
      </div>

      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <Link to={`/products/${product.slug}`}>
          <h3 className="product-card-title">{product.name}</h3>
        </Link>
        <p className="product-card-desc">{product.shortDescription}</p>

        <div className="product-card-actions">
          <div className="product-action-row">
            <Link
              to={`/products/${product.slug}`}
              className="btn btn-steel btn-sm"
              style={{ width: '100%' }}
            >
              <Eye size={16} /> Details
            </Link>

            <button
              onClick={handleAddEnquiry}
              className={`btn btn-sm ${isInEnquiry ? 'btn-outline' : 'btn-steel'}`}
              style={{ width: '100%' }}
              title="Add to Enquiry List"
            >
              {isInEnquiry ? (
                <>
                  <Check size={16} style={{ color: 'var(--accent-blue)' }} /> Added
                </>
              ) : (
                <>
                  <Plus size={16} /> Enquire
                </>
              )}
            </button>
          </div>

          <button
            onClick={handleWhatsAppEnquiry}
            className="btn btn-whatsapp btn-sm"
            style={{ width: '100%' }}
          >
            <MessageCircle size={16} /> WhatsApp Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}
