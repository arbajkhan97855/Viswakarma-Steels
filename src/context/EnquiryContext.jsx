import React, { createContext, useContext, useState, useEffect } from 'react';
import { openWhatsApp, CONTACT_NUMBERS, generateCartInquiry } from '../utils/whatsapp';

const EnquiryContext = createContext();

const STORAGE_KEY = 'viswakarma_enquiry_cart_v1';

export function EnquiryProvider({ children }) {
  const [enquiryItems, setEnquiryItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiryItems));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [enquiryItems]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const addToEnquiry = (product, quantity = 1) => {
    setEnquiryItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showNotification(`Updated quantity for "${product.name}" in enquiry list`);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        showNotification(`Added "${product.name}" to enquiry list`);
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            slug: product.slug,
            category: product.category,
            image: product.image,
            specifications: product.specifications,
            quantity: quantity,
          },
        ];
      }
    });
  };

  const updateQuantity = (id, delta) => {
    setEnquiryItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromEnquiry = (id) => {
    setEnquiryItems((prev) => prev.filter((item) => item.id !== id));
    showNotification("Removed item from enquiry list", "info");
  };

  const clearEnquiry = () => {
    setEnquiryItems([]);
    showNotification("Enquiry list cleared", "info");
  };

  const sendEnquiryToWhatsApp = (phoneKey = 'primary', customerInfo = {}) => {
    if (enquiryItems.length === 0) return;
    const phone =
      phoneKey === 'secondary'
        ? CONTACT_NUMBERS.secondary.international
        : CONTACT_NUMBERS.primary.international;

    const message = generateCartInquiry(enquiryItems, customerInfo);
    openWhatsApp(phone, message);
  };

  const totalItemsCount = enquiryItems.reduce((acc, curr) => acc + (curr.quantity || 1), 0);

  return (
    <EnquiryContext.Provider
      value={{
        enquiryItems,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        clearEnquiry,
        sendEnquiryToWhatsApp,
        totalItemsCount,
        isDrawerOpen,
        setIsDrawerOpen,
        notification,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
