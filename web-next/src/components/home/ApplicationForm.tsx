'use client';

import { useRef, useState } from 'react';

const PROGRAMS = [
  'SAP Full Stack Program', 'SAP BTP (Cloud Platform)', 'SAP CPI (Integration Suite)', 'SAP CAPM', 'SAP RAP',
  'SAP UI5 / Fiori', 'SAP ABAP / S/4HANA', 'SAP FICO', 'SAP MM', 'SAP SD', 'SAP BASIS',
  'Data Science & Analytics', 'DevOps & Cloud Engineering', 'Full Stack Web Development',
  'Java & Backend Development', 'Cybersecurity Fundamentals', 'UI/UX Design',
  'SAP Integration Expert', 'AI + Data Science', 'Cloud Dev Bundle', 'SAP Functional Analyst',
];

export default function ApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    const formData = Object.fromEntries(new FormData(formRef.current).entries());
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Submission failed');
      alert('Application submitted successfully. Our team will contact you shortly.');
      formRef.current.reset();
    } catch {
      alert('Sorry, your application could not be submitted. Please call +91 9949494020 or +91 9121759191.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="reveal" ref={formRef} onSubmit={onSubmit}>
      <div className="f-row">
        <div className="f-group"><label>First Name</label><input name="fullName" type="text" placeholder="Rahul" required /></div>
        <div className="f-group"><label>Last Name</label><input name="lastName" type="text" placeholder="Kumar" required /></div>
      </div>
      <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="f-group"><label>Email Address</label><input name="email" type="email" placeholder="you@example.com" required /></div>
      <div className="f-group"><label>Phone Number</label><input name="phone" type="tel" placeholder="+91 9876543210" required /></div>
      <div className="f-group">
        <label>Program of Interest</label>
        <select name="program" defaultValue="">
          <option value="">Select a program…</option>
          {PROGRAMS.map((p) => <option key={p}>{p}</option>)}
        </select>
      </div>
      <div className="f-group"><label>About You</label><textarea name="message" placeholder="Your degree, background, Experience or any questions…" /></div>
      <button type="submit" className="f-btn" disabled={submitting}>{submitting ? 'Submitting…' : 'Submit Application →'}</button>
    </form>
  );
}
