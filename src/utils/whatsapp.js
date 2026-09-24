/**
 * WhatsApp Helper Utilities for Viswakarma Steels
 */

export const CONTACT_NUMBERS = {
  primary: {
    name: "Factory Manager / Sales",
    number: "9461695205",
    international: "919461695205",
    label: "Main Contact (9461695205)",
  },
  secondary: {
    name: "Proprietor (Father)",
    number: "7615011370",
    international: "917615011370",
    label: "Proprietor (7615011370)",
  },
};

export const FACTORY_INFO = {
  name: "Viswakarma Steels",
  tagline: "Strong Steel. Trusted Quality. Built to Last.",
  type: "Steel Products Manufacturing Factory",
  address: "Ajitgarh Industrial Area, Sikar, Rajasthan, India",
  pincode: "332701",
  state: "Rajasthan, India",
  primaryPhone: "9461695205",
  secondaryPhone: "7615011370",
  email: "viswakarmasteels.ajitgarh@gmail.com",
  workingHours: "Monday - Saturday: 8:00 AM - 7:30 PM",
};

/**
 * Open WhatsApp with pre-filled message
 * @param {string} phone 10-digit number or international with 91
 * @param {string} message message text
 */
export function openWhatsApp(phone = CONTACT_NUMBERS.primary.international, message = "") {
  // Normalize phone to international format without + or dashes
  let cleanPhone = phone.replace(/[^0-9]/g, "");
  if (cleanPhone.length === 10) {
    cleanPhone = "91" + cleanPhone;
  }
  const encodedMsg = encodeURIComponent(message.trim());
  const url = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Generate standard product inquiry message
 */
export function generateProductInquiry(product, customNotes = "") {
  return `Hello Viswakarma Steels,

I am interested in the following product:

Product: ${product.name}
Category: ${product.category}
Model / Ref: ${product.slug || product.name}
Material Specification: ${product.specifications?.Material || "Heavy Gauge Steel"}

Please share:
- Latest price quote (Factory Direct)
- Product specifications & thickness
- Availability & delivery timeline
- Bulk / custom sizing options
${customNotes ? `\nAdditional Requirement: ${customNotes}` : ""}

Thank you.`;
}

/**
 * Generate general inquiry message
 */
export function generateGeneralInquiry(topic = "General Inquiry") {
  return `Hello Viswakarma Steels,

I am visiting your website and would like to enquire about:
Topic: ${topic}

Please connect with me regarding your steel products and factory catalog.

Thank you.`;
}

/**
 * Generate inquiry message for multiple cart products
 */
export function generateCartInquiry(items, customerInfo = {}) {
  let list = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.name} (${item.category}) - Qty: ${item.quantity || 1}`
    )
    .join("\n");

  return `Hello Viswakarma Steels,

I would like to request a bulk quote for the following steel products:

${list}

Customer Details:
Name: ${customerInfo.name || "Customer"}
Location/Delivery Area: ${customerInfo.city || "Rajasthan"}
${customerInfo.phone ? `Phone: ${customerInfo.phone}` : ""}
${customerInfo.notes ? `Requirement Notes: ${customerInfo.notes}` : ""}

Please share availability, factory pricing, and delivery terms.

Thank you.`;
}

/**
 * Generate custom order inquiry message
 */
export function generateCustomOrderMessage(formData) {
  return `Hello Viswakarma Steels,

I would like to place a CUSTOM STEEL PRODUCT requirement:

Name: ${formData.name}
Mobile: ${formData.phone}
Product Requirement: ${formData.productType}
Quantity Required: ${formData.quantity || "1"}
Dimensions / Size: ${formData.dimensions || "Standard / Custom"}
Preferred Gauge / Thickness: ${formData.gauge || "Standard Heavy Duty"}
Delivery Location: ${formData.location || "Rajasthan"}
Details / Notes: ${formData.details || "None"}

Please review and provide a custom fabrication estimate and timeline.

Thank you.`;
}
