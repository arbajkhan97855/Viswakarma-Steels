import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section-padding container text-center" style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(0, 210, 255, 0.12)',
          border: '1px solid var(--accent-blue-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-blue)',
          marginBottom: '1.5rem',
        }}
      >
        <ShieldAlert size={40} />
      </div>

      <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '0.5rem', color: '#ffffff' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--steel-200)' }}>
        Steel Component Not Found
      </h2>
      <p style={{ color: 'var(--steel-400)', maxWidth: '480px', margin: '0 auto 2rem', fontSize: '1rem' }}>
        The page you are trying to visit has either moved or does not exist in the Viswakarma Steels catalog.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">
          <Home size={18} /> Return Home
        </Link>
        <Link to="/products" className="btn btn-steel">
          <ShoppingBag size={18} /> Browse Products
        </Link>
      </div>
    </div>
  );
}
