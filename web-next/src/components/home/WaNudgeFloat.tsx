"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WaNudgeFloat() {
  const [isDismissed, setIsDismissed] = useState(false);

  // If dismissed by the 'x' button, hide the hover tooltip completely
  if (isDismissed) return null;

  return (
    <div className="wa-container">
      {/* Tooltip message - controlled via CSS hover */}
      <a
        className="wa-float"
        href="https://wa.me/919949494020?text=Hi%20Placeonix%2C%20I%27m%20interested%20in%20your%20SAP%20%26%20IT%20training%20programs."
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} color="#ffffff" />
      </a>
      <div className="wa-nudge" role="status">
        <button
          className="wa-nudge-close"
          type="button"
          aria-label="Dismiss"
          onClick={() => setIsDismissed(true)}
        >
          ×
        </button>
        <div className="wa-nudge-content">
          <span>👋 Questions about a course?</span>
          <p>Chat with us on WhatsApp.</p>
        </div>
      </div>
    </div>
  );
}