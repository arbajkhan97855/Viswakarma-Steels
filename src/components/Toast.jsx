import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export default function Toast() {
  const { notification } = useEnquiry();

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          className="toast-notification"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          {notification.type === 'info' ? (
            <Info size={18} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
          ) : (
            <CheckCircle2 size={18} style={{ color: '#22c55e', flexShrink: 0 }} />
          )}
          <span style={{ fontWeight: 500 }}>{notification.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
