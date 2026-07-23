'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORY_MAP: Record<string, string> = {
  'data-science': '/courses/technology/data-science',
  genai: '/courses/technology/generative-ai',
  fullstack: '/courses/technology/full-stack',
  cloud: '/courses/technology/cloud-computing',
  java: '/courses/technology/java-backend',
  cyber: '/courses/technology/cyber-security',
  uiux: '/courses/technology/ui-ux-design',
};

const SAP_COURSES = [
  { label: 'SAP BTP', href: '/courses/sap/sap-btp' },
  { label: 'SAP CPI', href: '/courses/sap/sap-cpi' },
  { label: 'SAP CAPM', href: '/courses/sap/sap-capm' },
  { label: 'SAP RAP', href: '/courses/sap/sap-rap' },
  { label: 'SAP UI5 / Fiori', href: '/courses/sap/sap-ui5-fiori' },
  { label: 'SAP ABAP on S/4HANA', href: '/courses/sap/sap-abap' },
  { label: 'SAP FICO', href: '/courses/sap/sap-fico' },
  { label: 'SAP MM', href: '/courses/sap/sap-mm' },
  { label: 'SAP SD', href: '/courses/sap/sap-sd' },
  { label: 'SAP BASIS', href: '/courses/sap/sap-basis' },
];

export default function CourseFinder() {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [showSapSub, setShowSapSub] = useState(false);
  const [sapCourse, setSapCourse] = useState(SAP_COURSES[0].href);
  const selectRef = useRef<HTMLSelectElement>(null);

  function handleFind() {
    if (!category) { selectRef.current?.focus(); return; }
    if (category === 'sap') { setShowSapSub(true); return; }
    setShowSapSub(false);
    if (category === 'unsure') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const url = CATEGORY_MAP[category];
    if (url) router.push(url);
  }

  return (
    <div className="finder-widget" id="courseFinder">
      <label htmlFor="finderCategory">I&apos;m looking for</label>
      <div className="finder-row">
        <select id="finderCategory" ref={selectRef} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category…</option>
          <option value="sap">SAP</option>
          <option value="data-science">Data Science</option>
          <option value="genai">Generative AI</option>
          <option value="fullstack">Full Stack</option>
          <option value="cloud">DevOps / Cloud</option>
          <option value="java">Java Backend</option>
          <option value="cyber">Cybersecurity</option>
          <option value="uiux">UI/UX Design</option>
          <option value="unsure">Not sure yet</option>
        </select>
        <button type="button" className="clean-btn-primary finder-btn" onClick={handleFind}>Find My Course →</button>
      </div>
      {showSapSub && (
        <div className="finder-sub">
          <label htmlFor="finderSapCourse">Choose your SAP track</label>
          <div className="finder-row">
            <select id="finderSapCourse" value={sapCourse} onChange={(e) => setSapCourse(e.target.value)}>
              {SAP_COURSES.map((c) => <option key={c.href} value={c.href}>{c.label}</option>)}
            </select>
            <a href={sapCourse} className="clean-btn-primary finder-btn">Go →</a>
          </div>
        </div>
      )}
    </div>
  );
}
