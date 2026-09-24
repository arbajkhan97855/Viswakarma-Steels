import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wind, Droplets, Layers, Armchair, Wrench } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  Wind: Wind,
  Droplets: Droplets,
  Layers: Layers,
  Armchair: Armchair,
  Wrench: Wrench,
};

export default function CategoryCard({ category, index = 0 }) {
  const IconComponent = iconMap[category.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      <Link
        to={`/products?category=${encodeURIComponent(category.filterKey)}`}
        className="category-card"
      >
        <div className="category-card-bg">
          <img src={category.image} alt={category.name} loading="lazy" />
        </div>
        <div className="category-card-overlay" />

        <div className="category-card-content">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: 'rgba(0, 210, 255, 0.15)',
                border: '1px solid var(--accent-blue-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
              }}
            >
              <IconComponent size={22} />
            </div>
            <span className="metal-badge">
              {category.productCount} Models
            </span>
          </div>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: '#ffffff' }}>
            {category.name}
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--steel-300)', marginBottom: '1.25rem' }}>
            {category.tagline}
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--accent-blue)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Explore Category <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
