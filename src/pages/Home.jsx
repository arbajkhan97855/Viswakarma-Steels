import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle,
  Flame,
  Layers,
  Wrench,
  Factory,
  ChevronDown,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Compass,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { whyChooseUs, manufacturingProcess, qualityPillars, factoryStats } from '../data/factory';
import { testimonials } from '../data/testimonials';
import { faqList } from '../data/faq';
import { galleryItems } from '../data/gallery';
import { openWhatsApp, CONTACT_NUMBERS, generateGeneralInquiry } from '../utils/whatsapp';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);
  const homeGallery = galleryItems.slice(0, 6);

  const handleHeroWhatsApp = () => {
    openWhatsApp(
      CONTACT_NUMBERS.primary.international,
      "Hello Viswakarma Steels, I would like to get a direct factory price quote for steel products."
    );
  };

  const handleCustomWhatsApp = () => {
    openWhatsApp(
      CONTACT_NUMBERS.primary.international,
      "Hello Viswakarma Steels, I need a custom steel product manufactured. Let's discuss dimensions, gauge, and pricing."
    );
  };

  return (
    <div className="home-page">
      {/* =================================================================
          1. HERO SECTION
          ================================================================= */}
      <section className="hero-section">
        <div className="hero-bg-glow" />
        <div className="container">
          <div className="hero-grid">
            {/* Hero Left Content */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <div className="metal-badge" style={{ alignSelf: 'flex-start' }}>
                <Shield size={14} /> Factory Direct Manufacturing • Sikar, Rajasthan
              </div>

              <h1>
                Strong Steel.{' '}
                <span className="text-blue-gradient">Built for Everyday Life.</span>
              </h1>

              <p className="hero-subtitle">
                Premium steel products manufactured with precision, durability and trusted craftsmanship in Ajitgarh Industrial Area. Engineered to outlast generations.
              </p>

              <div className="hero-cta-group">
                <Link to="/products" className="btn btn-primary btn-lg">
                  Explore Products <ArrowRight size={18} />
                </Link>

                <button
                  onClick={handleHeroWhatsApp}
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={19} /> Get a Quote on WhatsApp
                </button>
              </div>

              {/* Quick trust bullet points */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.88rem',
                  color: 'var(--steel-300)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-blue)' }} /> Prime Cold-Rolled Steel
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-blue)' }} /> Powder-Coated Anti-Rust
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-blue)' }} /> Zero Middleman Markup
                </div>
              </div>
            </motion.div>

            {/* Hero Right Visual */}
            <motion.div
              className="hero-visual-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Viswakarma Steels Factory Manufacturing"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="hero-float-card">
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(0, 210, 255, 0.15)',
                    border: '1px solid var(--accent-blue-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                  }}
                >
                  <Factory size={24} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>
                    Ajitgarh Industrial Plant
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--steel-400)' }}>
                    Serving Sikar, Jaipur & All Rajasthan
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================================
          2. TRUST / STATS SECTION
          ================================================================= */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <div className="stats-grid">
            {factoryStats.map((item, idx) => (
              <motion.div
                key={idx}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="stat-value">{item.value}</span>
                <span className="stat-label">{item.label}</span>
                <span className="stat-sub">{item.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          3. PRODUCT CATEGORIES SECTION
          ================================================================= */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionTitle
            eyebrow="Our Manufacturing Range"
            title="Engineered Steel"
            highlight="Product Categories"
            description="Explore our complete lineup of heavy-gauge home wardrobes, industrial coolers, water vessels, retail racks, and custom architectural ironwork."
          />

          <div className="grid-3">
            {categories.map((cat, idx) => (
              <CategoryCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          4. FEATURED PRODUCTS SECTION
          ================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="section-eyebrow">
                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '2px' }} />
                Handcrafted & Machine-Formed
              </div>
              <h2>
                Featured <span className="text-blue-gradient">Steel Products</span>
              </h2>
              <p className="section-desc">
                Proven models built with high-yield prime steel sheets and tested for extreme durability.
              </p>
            </div>

            <Link to="/products" className="btn btn-steel">
              View All 17+ Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-4">
            {featuredProducts.map((prod, idx) => (
              <ProductCard key={prod.id} product={prod} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          5. WHY VISWAKARMA STEELS
          ================================================================= */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionTitle
            eyebrow="The Viswakarma Advantage"
            title="Why Choose"
            highlight="Viswakarma Steels"
            description="We combine old-world Rajasthani craftsmanship with modern hydraulic metal-forming technology for unyielding strength."
          />

          <div className="grid-3">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                className="steel-card"
                style={{ padding: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: 'rgba(0, 210, 255, 0.1)',
                    border: '1px solid var(--accent-blue-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Sparkles size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#ffffff' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--steel-400)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          6. FACTORY SECTION
          ================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-eyebrow">
                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '2px' }} />
                Inside Our Ajitgarh Works
              </div>

              <h2>
                Manufactured With Strength.{' '}
                <span className="text-blue-gradient">Finished With Precision.</span>
              </h2>

              <p style={{ marginTop: '1rem', color: 'var(--steel-300)', lineHeight: '1.7', fontSize: '1.02rem' }}>
                At Viswakarma Steels, we maintain full control over the complete fabrication lifecycle. From inspecting incoming coils to hydraulic shearing, press brake forming, MIG welding, and electrostatic powder coating, every piece reflects our obsession with structural durability.
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-blue)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff' }}>High-Tonnage Hydraulic Shearing & Bending</strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--steel-400)' }}>Clean, burr-free cuts and accurate 90° stiffener folds.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-blue)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff' }}>Industrial Surface Treatment & Phosphating</strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--steel-400)' }}>Chemical wash to eliminate rust before paint is applied.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-blue)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff' }}>Trained Craftsmen with Decades of Experience</strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--steel-400)' }}>Personal oversight by the proprietor on all critical joints.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/factory" className="btn btn-primary">
                  Explore Our Factory <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              style={{ position: 'relative' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-steel)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Machine Shop"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  right: '-25px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--accent-blue-border)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '300px',
                }}
              >
                <Flame size={32} style={{ color: 'var(--accent-blue)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>
                    100% Weld Integrity
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--steel-400)' }}>
                    Deep penetration MIG welded seams
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================================
          7. MANUFACTURING PROCESS TIMELINE
          ================================================================= */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionTitle
            eyebrow="Step-by-Step Excellence"
            title="Our Manufacturing"
            highlight="Process"
            description="How prime Indian steel coil transforms into lifetime products through 7 rigorous production milestones."
          />

          <div className="process-timeline">
            {manufacturingProcess.map((proc, idx) => (
              <motion.div
                key={proc.step}
                className="process-step-item"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="step-num-box">{proc.step}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <h3 style={{ fontSize: '1.3rem', color: '#ffffff' }}>{proc.title}</h3>
                    <span className="metal-badge">{proc.badge}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {proc.short}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--steel-300)' }}>
                    {proc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          8. QUALITY SECTION
          ================================================================= */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Quality Assurance"
            title="Uncompromising"
            highlight="Standards"
            description="Every Viswakarma Steels product is built to fulfill five strict pillars of durability and structural honesty."
          />

          <div className="grid-3">
            {qualityPillars.map((q, idx) => (
              <motion.div
                key={idx}
                className="steel-card"
                style={{ padding: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <span className="metal-badge" style={{ marginBottom: '1rem' }}>
                  {q.metric}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.3rem', color: '#ffffff' }}>
                  {q.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--steel-400)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  {q.subtitle}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--steel-300)', lineHeight: '1.6' }}>
                  {q.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          9. CUSTOM ORDER SECTION
          ================================================================= */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div
            className="steel-card"
            style={{
              padding: '3.5rem 2.5rem',
              background: 'linear-gradient(135deg, rgba(19, 25, 36, 0.95) 0%, rgba(13, 20, 32, 0.95) 100%)',
              border: '1px solid var(--accent-blue-border)',
              boxShadow: 'var(--shadow-steel)',
            }}
          >
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="metal-badge" style={{ marginBottom: '0.75rem' }}>
                  <Wrench size={14} /> Bespoke Steel Fabrication
                </span>
                <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>
                  Need a Custom Steel Product?
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--steel-300)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  We manufacture customized steel products according to your specific requirements — custom height, heavy gauge thickness, internal security lockers, warehouse rack dimensions, or architectural boundary gates.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <button
                    onClick={handleCustomWhatsApp}
                    className="btn btn-whatsapp btn-lg"
                  >
                    <MessageCircle size={18} /> Discuss on WhatsApp
                  </button>

                  <Link to="/custom-orders" className="btn btn-steel btn-lg">
                    Submit Custom Form <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '2rem',
                    background: 'var(--bg-darkest)',
                    borderRadius: '16px',
                    border: '1px solid var(--border-steel)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--steel-400)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Direct Factory Phone Line
                  </div>
                  <a
                    href="tel:9461695205"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--accent-blue)',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    94616 95205
                  </a>
                  <a
                    href="tel:7615011370"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      display: 'block',
                    }}
                  >
                    76150 11370
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--steel-500)', marginTop: '0.75rem' }}>
                    Ajitgarh Industrial Area, Sikar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          10. GALLERY PREVIEW
          ================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="section-eyebrow">
                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '2px' }} />
                Real Workshop Imagery
              </div>
              <h2>
                Factory & <span className="text-blue-gradient">Product Gallery</span>
              </h2>
            </div>
            <Link to="/gallery" className="btn btn-steel">
              View All Photos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="gallery-grid">
            {homeGallery.map((item) => (
              <div key={item.id} className="gallery-card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-card-info">
                  <span className="metal-badge" style={{ alignSelf: 'flex-start', marginBottom: '0.4rem' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '1rem', color: '#ffffff' }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          11. TESTIMONIALS
          ================================================================= */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionTitle
            eyebrow="Customer Feedback"
            title="Real Words from"
            highlight="Local Buyers"
            description="Honest feedback from homeowners, grocery merchants, and institutions across Rajasthan."
          />

          <div className="grid-2">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                className="steel-card"
                style={{ padding: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#ffffff' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--steel-400)' }}>
                      {t.role} • {t.location}
                    </span>
                  </div>
                  <span className="metal-badge" style={{ fontSize: '0.72rem' }}>
                    {t.product}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--steel-300)', fontStyle: 'italic', lineHeight: '1.6' }}>
                  "{t.message}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          12. FAQ ACCORDION
          ================================================================= */}
      <section className="section-padding">
        <div className="container container-narrow">
          <SectionTitle
            eyebrow="Got Questions?"
            title="Frequently Asked"
            highlight="Questions"
            description="Answers to common questions regarding our manufacturing plant, custom sizing, pricing, and dispatch."
          />

          <div className="faq-list">
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
        </div>
      </section>

      {/* =================================================================
          13. FINAL CTA
          ================================================================= */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container">
          <div
            className="steel-card"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #111722 0%, #07090d 100%)',
              border: '1px solid var(--accent-blue-border)',
            }}
          >
            <div className="metal-badge" style={{ marginBottom: '1rem' }}>
              Viswakarma Steels • Ajitgarh
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
              Looking for Strong & Reliable Steel Products?
            </h2>
            <p style={{ maxWidth: '620px', margin: '0 auto 2.5rem', color: 'var(--steel-300)', fontSize: '1.05rem' }}>
              Get direct factory rates with guaranteed gauge thickness. Call or chat with us right now for instant quotes and prompt dispatch.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:9461695205" className="btn btn-primary btn-lg">
                <Phone size={18} /> Call Now: 9461695205
              </a>
              <button
                onClick={handleHeroWhatsApp}
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} /> WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
