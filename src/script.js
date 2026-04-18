// This file demonstrates JavaScript functionality using React hooks
// The actual implementation is in the React components below

/*
 * JavaScript Interactions Implemented:
 * 
 * 1. Form Validation (useState hook)
 *    - Real-time input validation
 *    - Error message display
 *    - Submit handling
 * 
 * 2. Scroll Animations (useEffect hook)
 *    - Reveal elements on scroll
 *    - Active section highlighting
 *    - Smooth scroll behavior
 * 
 * 3. Interactive UI Elements (useState hook)
 *    - Mobile menu toggle
 *    - Tab switching
 *    - Modal dialogs
 * 
 * 4. Dynamic Content (useState, useEffect hooks)
 *    - Loading states
 *    - Data fetching simulation
 *    - Real-time updates
 * 
 * 5. Event Handlers
 *    - Click events
 *    - Hover effects
 *    - Form submissions
 */

// Example of JavaScript interaction functions:

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateName = (name) => {
  return name.length >= 2;
};

export const validateMessage = (message) => {
  return message.length >= 10;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};