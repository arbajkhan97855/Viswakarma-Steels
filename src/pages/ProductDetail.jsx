import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  ArrowLeft,
  Check,
  ShieldCheck,
  Plus,
  Truck,
  Sparkles,
  Share2,
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { openWhatsApp, CONTACT_NUMBERS, generateProductInquiry } from '../utils/whatsapp';
import { useEnquiry } from '../context/EnquiryContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToEnquiry, enquiryItems } = useEnquiry();

  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState('');
  const [selectedWhatsAppTarget, setSelectedWhatsAppTarget] = useState('primary');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="section-padding container text-center">
        <h2 style={{ marginBottom: '1rem' }}>Product Not Found</h2>
        <p style={{ color: 'var(--steel-400)', marginBottom: '2rem' }}>
          The requested steel product could not be located in our factory catalog.
        </p>
        <Link to="/products" className="btn btn-primary">
          <ArrowLeft size={16} /> Return to Products
        </Link>
      </div>
    );
  }

  const isInEnquiry = enquiryItems.some((item) => item.id === product.id);

  // Related products from the same category or other featured
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleWhatsAppInquiry = () => {
    const phone =
      selectedWhatsAppTarget === 'secondary'
        ? CONTACT_NUMBERS.secondary.international
        : CONTACT_NUMBERS.primary.international;

    const message = generateProductInquiry(product);
    openWhatsApp(phone, message);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="product-detail-page section-padding">
      <div className="container">
        {/* Back Link & Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--steel-300)',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            <ArrowLeft size={16} /> Back to Products
          </button>

          <button
            onClick={handleShare}
            className="btn btn-outline btn-sm"
            style={{ fontSize: '0.8rem' }}
          >
            {copiedLink ? <Check size={14} /> : <Share2 size={14} />}
            {copiedLink ? 'Link Copied!' : 'Share Product'}
          </button>
        </div>

        {/* Main Product Layout */}
        <div className="product-detail-grid">
          {/* Left Column: Image Gallery */}
          <div>
            <motion.div
              className="detail-main-image"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={activeImage || product.image}
                alt={product.name}
              />
            </motion.div>

            {/* Thumbnail switcher if gallery has multiple photos */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="detail-thumbnails">
                {product.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className={`detail-thumb ${activeImage === imgUrl ? 'active' : ''}`}
                    onClick={() => setActiveImage(imgUrl)}
                  >
                    <img src={imgUrl} alt={`${product.name} thumbnail ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}

            {/* Factory Direct Assurance Card */}
            <div
              className="steel-card"
              style={{
                marginTop: '2rem',
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                textAlign: 'center',
                background: 'var(--bg-surface)',
              }}
            >
              <div>
                <ShieldCheck size={22} style={{ color: 'var(--accent-blue)', margin: '0 auto 0.4rem' }} />
                <div style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 700 }}>Prime Steel</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--steel-400)' }}>Certified Gauge</div>
              </div>
              <div>
                <Sparkles size={22} style={{ color: 'var(--accent-blue)', margin: '0 auto 0.4rem' }} />
                <div style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 700 }}>Bake Cured</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--steel-400)' }}>Anti-Rust Powder</div>
              </div>
              <div>
                <Truck size={22} style={{ color: 'var(--accent-blue)', margin: '0 auto 0.4rem' }} />
                <div style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 700 }}>Rajasthan Wide</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--steel-400)' }}>Safe Dispatch</div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span className="metal-badge">{product.category}</span>
              {product.badge && (
                <span className="metal-badge metal-badge-solid">{product.badge}</span>
              )}
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '0.75rem' }}>
              {product.name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--accent-blue)' }}>
                {product.price}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--steel-400)' }}>
                • Built at Ajitgarh Plant
              </span>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--steel-300)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {product.description}
            </p>

            {/* Key Features List */}
            {product.features && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: '#ffffff' }}>
                  Manufacturing Features
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {product.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--steel-200)' }}>
                      <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Specifications Table */}
            {product.specifications && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: '#ffffff' }}>
                  Technical Specifications
                </h3>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Action Buttons Box */}
            <div
              className="steel-card"
              style={{
                padding: '1.75rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--accent-blue-border)',
              }}
            >
              {/* WhatsApp Receiver Picker */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--steel-400)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: 600 }}>
                  Select Factory WhatsApp Contact:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => setSelectedWhatsAppTarget('primary')}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: `1px solid ${selectedWhatsAppTarget === 'primary' ? 'var(--wa-green)' : 'var(--border-steel)'}`,
                      background: selectedWhatsAppTarget === 'primary' ? 'rgba(37, 211, 102, 0.12)' : 'var(--bg-darkest)',
                      color: selectedWhatsAppTarget === 'primary' ? '#ffffff' : 'var(--steel-300)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--wa-green)' }}>
                      Factory Desk (Main)
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--steel-400)' }}>
                      +91 94616 95205
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedWhatsAppTarget('secondary')}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: `1px solid ${selectedWhatsAppTarget === 'secondary' ? 'var(--wa-green)' : 'var(--border-steel)'}`,
                      background: selectedWhatsAppTarget === 'secondary' ? 'rgba(37, 211, 102, 0.12)' : 'var(--bg-darkest)',
                      color: selectedWhatsAppTarget === 'secondary' ? '#ffffff' : 'var(--steel-300)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--steel-100)' }}>
                      Proprietor Desk (Father)
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--steel-400)' }}>
                      +91 76150 11370
                    </div>
                  </button>
                </div>
              </div>

              {/* Primary Buying & WhatsApp Inquiry Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <button
                  onClick={handleWhatsAppInquiry}
                  className="btn btn-whatsapp btn-lg"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={20} /> Buy / Enquire on WhatsApp
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <button
                    onClick={() => addToEnquiry(product, 1)}
                    className={`btn ${isInEnquiry ? 'btn-outline' : 'btn-steel'}`}
                    style={{ width: '100%' }}
                  >
                    {isInEnquiry ? (
                      <>
                        <Check size={16} style={{ color: 'var(--accent-blue)' }} /> In Enquiry List
                      </>
                    ) : (
                      <>
                        <Plus size={16} /> Add to Enquiry
                      </>
                    )}
                  </button>

                  <a
                    href="tel:9461695205"
                    className="btn btn-steel"
                    style={{ width: '100%' }}
                  >
                    <Phone size={16} /> Call: 9461695205
                  </a>
                </div>
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--steel-400)', marginTop: '1rem', textAlign: 'center' }}>
                No prepayment required online. Click opens WhatsApp directly with product specifications pre-filled.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: '6rem' }}>
            <SectionTitle
              eyebrow="Similar Steel Products"
              title="Related"
              highlight="Recommendations"
              description="Other high-strength models in this category manufactured with matching precision."
            />

            <div className="grid-4">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
