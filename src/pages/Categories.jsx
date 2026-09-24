import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';

export default function Categories() {
  return (
    <div className="categories-page section-padding">
      <div className="container">
        <SectionTitle
          eyebrow="Specialized Manufacturing Segments"
          title="Product"
          highlight="Categories"
          description="From household security almirahs to commercial cooling, industrial water storage tanks, and heavy warehouse racking systems."
        />

        <div className="grid-3" style={{ gap: '2rem' }}>
          {categories.map((cat, idx) => (
            <CategoryCard key={cat.id} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
