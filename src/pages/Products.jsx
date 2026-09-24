import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, ShoppingBag } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products, CATEGORY_LIST } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORY_LIST.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.specifications?.Material?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'name-desc') {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="products-page section-padding">
      <div className="container">
        {/* Page Header */}
        <SectionTitle
          eyebrow="Factory Direct Catalog"
          title="All Steel"
          highlight="Products"
          description="Explore our range of heavy-gauge steel almirahs, desert coolers, water storage tanks, warehouse racks, metal beds, and architectural fabrications."
        />

        {/* Filter and Search Bar Controls */}
        <div
          className="steel-card"
          style={{
            padding: '1.5rem',
            marginBottom: '2.5rem',
            background: 'var(--bg-surface)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '1.25rem',
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '14px',
                  transform: 'translateY(-50%)',
                  color: 'var(--steel-400)',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, gauge, material, or keyword..."
                className="form-input"
                style={{ paddingLeft: '2.75rem' }}
              />
            </div>

            {/* Sort Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <SlidersHorizontal size={18} style={{ color: 'var(--steel-400)' }} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select"
                style={{ width: 'auto', minWidth: '180px' }}
              >
                <option value="featured">Featured First</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--steel-400)', textTransform: 'uppercase', marginRight: '0.5rem', fontWeight: 600 }}>
              Category:
            </span>
            {CATEGORY_LIST.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count & Active Filters Banner */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', color: 'var(--steel-400)', fontSize: '0.92rem' }}>
          <div>
            Showing <strong style={{ color: '#ffffff' }}>{filteredProducts.length}</strong> of {products.length} steel products
            {selectedCategory !== 'All' && (
              <span> in <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{selectedCategory}</span></span>
            )}
            {searchQuery && (
              <span> matching "<span style={{ color: '#ffffff' }}>{searchQuery}</span>"</span>
            )}
          </div>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
              style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', textDecoration: 'underline' }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div
            className="steel-card"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              color: 'var(--steel-400)',
            }}
          >
            <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
            <h3 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>No Products Found</h3>
            <p style={{ maxWidth: '450px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
              We could not find any steel products matching your search criteria. You can clear filters or request custom fabrication.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-primary btn-sm"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid-4">
            {filteredProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
