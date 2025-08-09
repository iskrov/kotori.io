import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element #root not found');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Simple scroll-reveal observer (run immediately; don't rely solely on DOMContentLoaded)
try {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  const observeAll = () => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll, { once: true });
  } else {
    // Document already ready; observe now
    observeAll();
  }

  // Also observe after initial React render tick
  setTimeout(observeAll, 0);
} catch {
  // Fallback: if IntersectionObserver not available, just reveal immediately
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('reveal-active'));
}


