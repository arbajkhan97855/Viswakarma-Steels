import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import EnquiryDrawer from './components/EnquiryDrawer';
import Toast from './components/Toast';
import { EnquiryProvider } from './context/EnquiryContext';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Categories from './pages/Categories';
import About from './pages/About';
import FactoryPage from './pages/Factory';
import Quality from './pages/Quality';
import CustomOrders from './pages/CustomOrders';
import Gallery from './pages/Gallery';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <EnquiryProvider>
      <BrowserRouter>
        <ScrollToTop />

        {/* Steel Preloader animation */}
        {loading && <Loader onFinish={() => setLoading(false)} />}

        <div className="page-wrapper">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/about" element={<About />} />
              <Route path="/factory" element={<FactoryPage />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/custom-orders" element={<CustomOrders />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

          {/* Floating WhatsApp and Drawer components */}
          <WhatsAppButton />
          <EnquiryDrawer />
          <Toast />
        </div>
      </BrowserRouter>
    </EnquiryProvider>
  );
}
