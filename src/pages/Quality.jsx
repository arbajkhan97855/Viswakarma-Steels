import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Flame,
  Sparkles,
  Award,
  CheckSquare,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { qualityPillars } from '../data/factory';
import { openWhatsApp, CONTACT_NUMBERS } from '../utils/whatsapp';

export default function Quality() {
  const handleQualityInquiry = () => {
    openWhatsApp(
      CONTACT_NUMBERS.primary.international,
      "Hello Viswakarma Steels, I would like to inquire about your material gauge certification, sheet grades, and quality inspection standards."
    );
  };

  const checklistItems = [
    { title: "Incoming Sheet Micrometer Gauging", desc: "Every steel coil and sheet bundle is measured for exact nominal thickness (no substandard thin gauges)." },
    { title: "Zero Distortion Press Bending", desc: "Computerized press brake setup ensures 90-degree corners are straight without stress cracks." },
    { title: "Shielded MIG & Resistance Spot Seams", desc: "Welds are thoroughly checked for deep penetration, zero porous bubbles, and clean grinding." },
    { title: "Complete 7-Stage Pre-Treatment", desc: "Thorough chemical degreasing, acid descaling, and zinc phosphating to permanently seal out moisture." },
    { title: "Uniform High-Bake Powder Deposition", desc: "Micron-level dry powder thickness testing ensuring uniform scratch-resistant coating across all faces." },
    { title: "Hydrostatic Pressure Testing on Water Tanks", desc: "All steel water tanks undergo continuous 24-hour full-water head leak test before clearance." },
    { title: "Lock & Hinge Fatigue Cycling", desc: "Master brass locks and multi-point shoot bolts are tested multiple times for smooth effortless engagement." },
  ];

  return (
    <div className="quality-page section-padding">
      <div className="container">
        {/* Header */}
        <SectionTitle
          eyebrow="Our Engineering Discipline"
          title="Quality &"
          highlight="Manufacturing Standards"
          description="At Viswakarma Steels, quality is not a sticker — it is the thickness of the metal, the penetration of the weld, and the integrity of the finish."
        />

        {/* Quality Pillars Grid */}
        <div className="grid-3" style={{ marginBottom: '5rem' }}>
          {qualityPillars.map((q, idx) => (
            <motion.div
              key={idx}
              className="steel-card"
              style={{ padding: '2.25rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  background: 'rgba(0, 210, 255, 0.12)',
                  border: '1px solid var(--accent-blue-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)',
                  marginBottom: '1.25rem',
                }}
              >
                <ShieldCheck size={26} />
              </div>

              <span className="metal-badge" style={{ marginBottom: '0.75rem' }}>
                {q.metric}
              </span>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.35rem', color: '#ffffff' }}>
                {q.title}
              </h3>

              <div style={{ fontSize: '0.82rem', color: 'var(--steel-400)', textTransform: 'uppercase', marginBottom: '0.85rem', letterSpacing: '0.05em' }}>
                {q.subtitle}
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--steel-300)', lineHeight: '1.6' }}>
                {q.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Multi-point Quality Checklist */}
        <div
          className="steel-card"
          style={{
            padding: '3.5rem 2.5rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-steel)',
            marginBottom: '5rem',
          }}
        >
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="metal-badge" style={{ marginBottom: '0.75rem' }}>
                Zero Defect Policy
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                Our 7-Point Quality Checksheet
              </h2>
              <p style={{ color: 'var(--steel-300)', lineHeight: '1.7', marginBottom: '2rem' }}>
                Every single item that leaves our factory floor in Ajitgarh Industrial Area must pass these 7 stringent checkpoints before packaging.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {checklistItems.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-blue)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>{item.title}</strong>
                      <p style={{ fontSize: '0.85rem', color: 'var(--steel-400)', marginTop: '2px' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-steel)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80"
                  alt="Quality Inspection"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ffffff' }}>
            Have Specific Gauge or Material Requirements?
          </h3>
          <p style={{ color: 'var(--steel-400)', maxWidth: '580px', margin: '0 auto 2rem' }}>
            Contact our factory technical desk directly to discuss customized steel grades, heavy 14/16 gauge sheets, or stainless steel options.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleQualityInquiry} className="btn btn-whatsapp btn-lg">
              <MessageCircle size={18} /> Inquire About Material Specs
            </button>
            <a href="tel:9461695205" className="btn btn-primary btn-lg">
              <PhoneCall size={18} /> Speak with Plant Manager
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
