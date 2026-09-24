import React from 'react';
import { motion } from 'framer-motion';
import {
  Factory,
  Flame,
  Sparkles,
  CheckCircle,
  Truck,
  Cpu,
  Layers,
  Wrench,
  Maximize2,
  Scissors,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { manufacturingProcess } from '../data/factory';

export default function FactoryPage() {
  const machinery = [
    {
      title: "Hydraulic Guillotine Shears",
      description: "High-tonnage mechanical and hydraulic cutting machines capable of slicing mild steel and galvanized sheets up to 6mm with extreme linear accuracy.",
      icon: Scissors,
    },
    {
      title: "CNC & Hydraulic Press Brakes",
      description: "Multi-axis sheet bending brakes that form rigid box flanges, channel stiffeners, and interlocking grooves without metal fatigue.",
      icon: Maximize2,
    },
    {
      title: "MIG / TIG / Resistance Spot Welders",
      description: "Shielded arc welders ensuring deep metallic penetration and slag-free joints, eliminating structural weakness along seams.",
      icon: Flame,
    },
    {
      title: "7-Tank Phosphating System",
      description: "Chemical dipping system including degreasing, acid pickling, and zinc phosphating to chemically arrest oxidation prior to coating.",
      icon: Sparkles,
    },
    {
      title: "Electrostatic Powder Coating Booth",
      description: "High-voltage powder spray applicators ensuring complete 360-degree wrap around flanges, edges, and internal corners.",
      icon: Cpu,
    },
    {
      title: "Industrial High-Heat Curing Oven",
      description: "Convection bake oven operating at 180°C - 200°C for thermosetting polymer powder into an impact-resistant, glass-hard protective armor.",
      icon: Factory,
    },
  ];

  return (
    <div className="factory-page section-padding">
      <div className="container">
        {/* Header */}
        <SectionTitle
          eyebrow="Inside Our Ajitgarh Works"
          title="Factory Overview &"
          highlight="Fabrication Plant"
          description="A tour of our manufacturing facility in Sikar, Rajasthan — where raw steel sheets are transformed into high-durability products through specialized machinery."
        />

        {/* Factory Hero Visual Grid */}
        <div className="grid-2" style={{ alignItems: 'center', gap: '3rem', marginBottom: '5rem' }}>
          <div>
            <span className="metal-badge" style={{ marginBottom: '1rem' }}>
              Ajitgarh Industrial Plant
            </span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>
              Heavy Fabrication Capacity Under One Roof
            </h2>
            <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', fontSize: '1.02rem', marginBottom: '1rem' }}>
              Our plant in Ajitgarh Industrial Area is specifically planned to handle both high-volume standardized product runs (such as domestic almirahs, desert coolers, and water tanks) and custom turnkey architectural projects (large sliding gates, warehouse racking, and structural assemblies).
            </p>
            <p style={{ color: 'var(--steel-400)', lineHeight: '1.8', fontSize: '0.95rem' }}>
              Every work station is staffed by skilled artisans who have spent years in metal fabrication. From plate rolling to final lock alignment, quality is supervised at each station.
            </p>
          </div>

          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border-steel)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
              alt="Factory Floor"
              style={{ width: '100%', height: '420px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Machinery & Technology Section */}
        <div style={{ marginBottom: '6rem' }}>
          <SectionTitle
            eyebrow="Equipment & Tooling"
            title="Machines &"
            highlight="Fabrication Systems"
            description="Our workshop utilizes specialized heavy-duty industrial machinery to maintain millimeter tolerances."
          />

          <div className="grid-3">
            {machinery.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <motion.div
                  key={idx}
                  className="steel-card"
                  style={{ padding: '2rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      background: 'rgba(0, 210, 255, 0.12)',
                      border: '1px solid var(--accent-blue-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      marginBottom: '1rem',
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--steel-400)', lineHeight: '1.6' }}>
                    {m.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Step-by-Step Manufacturing Timeline */}
        <div style={{ marginBottom: '5rem' }}>
          <SectionTitle
            eyebrow="The Full Production Chain"
            title="Comprehensive"
            highlight="Manufacturing Steps"
            description="From raw steel coils to the packaged final product ready for your doorstep."
          />

          <div className="process-timeline">
            {manufacturingProcess.map((proc, idx) => (
              <motion.div
                key={proc.step}
                className="process-step-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
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

        {/* Quality & Dispatch Card */}
        <div
          className="steel-card"
          style={{
            padding: '3rem 2rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--accent-blue-border)',
            textAlign: 'center',
          }}
        >
          <div className="metal-badge" style={{ marginBottom: '1rem' }}>
            Direct Dispatch
          </div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Visit the Factory or Order Direct
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem', color: 'var(--steel-300)' }}>
            We invite contractors, hardware stockists, and retail customers to visit our factory in Ajitgarh Industrial Area, Sikar. Inspect materials firsthand and order at direct factory prices.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:9461695205" className="btn btn-primary">
              Call Factory: 9461695205
            </a>
            <a href="tel:7615011370" className="btn btn-steel">
              Call Proprietor: 7615011370
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
