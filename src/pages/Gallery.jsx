import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { galleryItems } from '../data/gallery';

const GALLERY_CATEGORIES = ['All', 'Factory', 'Products', 'Manufacturing', 'Finished Products'];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="gallery-page section-padding">
      <div className="container">
        <SectionTitle
          eyebrow="Inside The Workshop"
          title="Factory &"
          highlight="Fabrication Gallery"
          description="A visual look into our Ajitgarh works — sheet metal cutting, sparks flying from MIG welding, hydraulic forming, and completed steel products."
        />

        {/* Filter Buttons */}
        <div className="filter-btn-group">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`filter-pill ${selectedFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="gallery-grid">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                className="gallery-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActiveModalItem(item)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-card-info">
                  <span className="metal-badge" style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--steel-300)', lineHeight: '1.4' }}>
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Modal Lightbox */}
        <AnimatePresence>
          {activeModalItem && (
            <div
              className="enquiry-drawer-overlay"
              style={{ justifyContent: 'center', alignItems: 'center', padding: '1.5rem' }}
              onClick={() => setActiveModalItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="steel-card"
                style={{
                  maxWidth: '800px',
                  width: '100%',
                  background: 'var(--bg-surface)',
                  overflow: 'hidden',
                  border: '1px solid var(--accent-blue-border)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="metal-badge">{activeModalItem.category}</span>
                    <button
                      onClick={() => setActiveModalItem(null)}
                      style={{ color: 'var(--steel-400)', fontSize: '0.9rem', cursor: 'pointer' }}
                    >
                      Close ✕
                    </button>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                    {activeModalItem.title}
                  </h3>
                  <p style={{ color: 'var(--steel-300)', fontSize: '0.92rem' }}>
                    {activeModalItem.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
