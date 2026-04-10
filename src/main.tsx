import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Meta Pixel: track Contact on WhatsApp clicks
document.addEventListener('click', (e) => {
  const anchor = (e.target as HTMLElement).closest('a[href*="wa.me"]');
  if (anchor && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact');
  }
});

createRoot(document.getElementById("root")!).render(<App />);
