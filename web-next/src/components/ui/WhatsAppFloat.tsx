"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppFloat({ message }: { message: string }) {
  const href = `https://wa.me/919949494020?text=${encodeURIComponent(message)}`;

  return (
    <a 
      className="wa-float" 
      href={href} 
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} color="#ffffff" />
    </a>
  );
}