'use client';

import { useEffect, useState } from 'react';

const KEY = 'placeonix_wa_nudge_dismissed';

export default function WaNudgeFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => setShow(true), 5500);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setShow(false);
    sessionStorage.setItem(KEY, '1');
  }

  return (
    <>
      <div className={`wa-nudge${show ? ' show' : ''}`} role="status">
        <button className="wa-nudge-close" type="button" aria-label="Dismiss" onClick={dismiss}>×</button>
        👋 Questions about a course? Chat with us on WhatsApp.
      </div>
      <a
        className="wa-float"
        href="https://wa.me/919949494020?text=Hi%20Placeonix%2C%20I%27m%20interested%20in%20your%20SAP%20%26%20IT%20training%20programs."
        aria-label="Chat on WhatsApp"
        onClick={dismiss}
      >
        <svg viewBox="0 0 32 32" width={30} height={30} fill="#fff" aria-hidden="true">
          <path d="M16.001 3C9.372 3 4 8.373 4 15c0 2.348.682 4.54 1.86 6.39L4 29l7.86-1.815A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.36l-.357-.212-4.664 1.077 1.107-4.545-.233-.372A9.78 9.78 0 0 1 5.18 15c0-5.964 4.856-10.818 10.821-10.818S26.82 9.036 26.82 15 21.966 24.818 16.001 24.818Zm5.55-7.847c-.304-.152-1.797-.887-2.076-.988-.279-.101-.482-.152-.685.152-.203.304-.786.987-.964 1.19-.177.203-.355.229-.659.076-.304-.152-1.283-.473-2.444-1.51-.903-.806-1.513-1.801-1.69-2.105-.178-.304-.019-.469.133-.62.137-.136.304-.355.456-.532.152-.178.203-.305.304-.508.101-.203.05-.38-.025-.532-.076-.152-.685-1.653-.939-2.263-.247-.594-.499-.514-.685-.523l-.584-.01c-.203 0-.532.076-.811.38-.279.304-1.065 1.04-1.065 2.54 0 1.5 1.09 2.947 1.242 3.15.152.203 2.147 3.28 5.204 4.6.727.314 1.294.501 1.737.641.729.232 1.393.199 1.918.121.585-.087 1.797-.735 2.05-1.444.253-.71.253-1.317.177-1.444-.076-.127-.279-.203-.583-.355Z" />
        </svg>
      </a>
    </>
  );
}
