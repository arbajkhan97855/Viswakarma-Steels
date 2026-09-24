import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  return (
    <div
      className={`section-header ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '2px' }} />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}{' '}
        {highlight && (
          <span className="text-blue-gradient">{highlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
