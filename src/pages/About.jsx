import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Factory, Users, Hammer, Award, ArrowRight, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { FACTORY_INFO, CONTACT_NUMBERS, openWhatsApp } from '../utils/whatsapp';

export default function About() {
  const handleChat = () => {
    openWhatsApp(
      CONTACT_NUMBERS.primary.international,
      "Hello Viswakarma Steels, I read your company story and would like to connect regarding steel products."
    );
  };

  return (
    <div className="about-page section-padding">
      <div className="container">
        {/* Header Story */}
        <SectionTitle
          eyebrow="Our Heritage & Factory Roots"
          title="Built on Strength."
          highlight="Driven by Quality."
          description="Viswakarma Steels is a dedicated steel manufacturing enterprise based in the vibrant industrial corridor of Ajitgarh Industrial Area, Sikar, Rajasthan."
        />

        {/* Narrative Section */}
        <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem', marginBottom: '5rem' }}>
          <div>
            <span className="metal-badge" style={{ marginBottom: '1rem' }}>
              Ajitgarh, Sikar • Established Fabrication
            </span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>
              Rooted in Rajasthani Craftsmanship & Engineering Grit
            </h2>
            <p style={{ color: 'var(--steel-300)', lineHeight: '1.8', fontSize: '1.02rem', marginBottom: '1.25rem' }}>
              Founded with the singular purpose of providing families, business owners, and rural contractors with steel products that stand the test of time, <strong>Viswakarma Steels</strong> has grown into a trusted manufacturing destination in the Sikar district.
            </p>
            <p style={{ color: 'var(--steel-400)', lineHeight: '1.8', fontSize: '0.98rem', marginBottom: '1.75rem' }}>
              In a market filled with paper-thin steel sheets and cut-corner products, we maintain absolute structural integrity. We source prime cold-rolled (CR) and galvanized iron (GI) sheets, employ hydraulic shearing and press braking, and back every weld with our family reputation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-blue)' }} />
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Prime Cold-Rolled & GI Sheet Specialists</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-blue)' }} />
                <span style={{ color: '#ffffff', fontWeight: 600 }}>In-House 7-Tank Phosphating & Powder Coating</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-blue)' }} />
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Bespoke Custom Orders from Blueprint to Delivery</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary">
                Explore Products <ArrowRight size={16} />
              </Link>
              <button onClick={handleChat} className="btn btn-whatsapp">
                <MessageCircle size={16} /> Talk to Factory Head
              </button>
            </div>
          </div>

          <div>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-steel)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                alt="Viswakarma Steels Workshop"
                style={{ width: '100%', height: '480px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div style={{ marginBottom: '5rem' }}>
          <SectionTitle
            eyebrow="What Governs Our Work"
            title="Core Fabrication"
            highlight="Pillars"
            description="Our non-negotiable standards ensure that every piece leaving our factory gates is built to last decades."
          />

          <div className="grid-3">
            <div className="steel-card" style={{ padding: '2rem' }}>
              <Hammer size={32} style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffffff' }}>Certified Gauge Sheets</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--steel-400)', lineHeight: '1.6' }}>
                We test every incoming batch with micrometers. If we specify 20 gauge or 18 gauge, you receive exact honest thickness with zero thinning.
              </p>
            </div>

            <div className="steel-card" style={{ padding: '2rem' }}>
              <Factory size={32} style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffffff' }}>Zero Compromise Welds</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--steel-400)', lineHeight: '1.6' }}>
                Our fabricators employ deep penetration shielded MIG and spot welding so corners, hinges, and seams never rattle, separate, or loosen.
              </p>
            </div>

            <div className="steel-card" style={{ padding: '2rem' }}>
              <Users size={32} style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffffff' }}>Customer Centric Tailoring</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--steel-400)', lineHeight: '1.6' }}>
                Whether you need a one-of-a-kind security locker, heavy warehouse rack levels, or customized dimensions, we listen and engineer to order.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Workshop Details Box */}
        <div
          className="steel-card"
          style={{
            padding: '3rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--accent-blue-border)',
          }}
        >
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="metal-badge" style={{ marginBottom: '0.75rem' }}>Factory Coordinates</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ffffff' }}>
                Visit Our Ajitgarh Works
              </h3>
              <p style={{ color: 'var(--steel-300)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                We welcome prospective buyers, retail stockists, institutions, and architects to visit our production facility in Ajitgarh Industrial Area. Inspect our sheet stock, watch our press brakes, and test the smooth finish firsthand.
              </p>
              <div style={{ color: 'var(--steel-200)', fontSize: '0.95rem' }}>
                <strong>Location:</strong> Ajitgarh Industrial Area, Sikar, Rajasthan, India<br />
                <strong>Hours:</strong> Mon - Sat: 8:00 AM - 7:30 PM
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', justifyContent: 'center' }}>
              <a href="tel:9461695205" className="btn btn-primary" style={{ width: '100%', maxWidth: '320px' }}>
                Call Factory: +91 94616 95205
              </a>
              <a href="tel:7615011370" className="btn btn-steel" style={{ width: '100%', maxWidth: '320px' }}>
                Call Proprietor: +91 76150 11370
              </a>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', maxWidth: '320px' }}>
                View Directions & Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
