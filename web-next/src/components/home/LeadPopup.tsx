"use client";

import { useEffect, useRef, useState } from "react";

const PROGRAMS = [
  "SAP Full Stack Program",
  "SAP BTP (Cloud Platform)",
  "SAP CPI (Integration Suite)",
  "SAP CAPM",
  "SAP RAP",
  "SAP UI5 / Fiori",
  "SAP ABAP / S/4HANA",
  "SAP FICO",
  "SAP MM",
  "SAP SD",
  "SAP BASIS",
  "Data Science & Analytics",
  "DevOps & Cloud Engineering",
  "Full Stack Web Development",
  "Java & Backend Development",
  "Cybersecurity Fundamentals",
  "UI/UX Design",
  "SAP Integration Expert",
  "AI + Data Science",
  "Cloud Dev Bundle",
  "SAP Functional Analyst",
];

const DISMISS_KEY = "placeonix_lead_popup_dismissed";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const t = setTimeout(() => setVisible(true), 30000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    const formData = Object.fromEntries(
      new FormData(formRef.current).entries(),
    );
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
      sessionStorage.setItem(DISMISS_KEY, "1");
      setTimeout(close, 2500);
    } catch {
      alert(
        "Sorry, your application could not be submitted. Please call +91 9949494020 or +91 9121759191.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <>
      <div className="lead-popup-overlay show" onClick={close} />
      <form
        className="lead-popup show"
        role="dialog"
        aria-modal="true"
        aria-labelledby="leadPopupTitle"
        ref={formRef}
        onSubmit={onSubmit}
      >
        <button
          type="button"
          className="lead-popup-close"
          aria-label="Close"
          onClick={close}
        >
          ×
        </button>
        <span className="lead-popup-eyebrow">Free Career Guidance</span>
        <h3 id="leadPopupTitle">It All Starts Here</h3>
        {submitted ? (
          <p className="lead-popup-sub">
            Thanks! Our Career Guidance Team will reach out shortly.
          </p>
        ) : (
          <>
            <p className="lead-popup-sub">
              Unlock your potential — talk to our Career Guidance Team about the
              right SAP or IT programme for you.
            </p>
            <div className="f-group">
              <label>Full Name</label>
              <input
                name="fullName"
                type="text"
                required
                placeholder="Your name"
              />
            </div>
            <div className="f-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="f-group">
              <label>Mobile Number</label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="+91 9876543210"
              />
            </div>
            <div className="f-group">
              <label>Course Name</label>
              <select name="program" required defaultValue="">
                <option value="" disabled>
                  Select a program…
                </option>
                {PROGRAMS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <label className="lead-popup-agree">
              <input type="checkbox" required name="agreeTerms" />
              <span>
                I agree to the{" "}
                <a href="/terms" target="_blank" rel="noopener">
                  Terms
                </a>{" "}
                &amp;{" "}
                <a href="/privacy-policy" target="_blank" rel="noopener">
                  Privacy Policy
                </a>{" "}
                of Placeonix.
              </span>
            </label>
            <button type="submit" className="f-btn" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit →"}
            </button>
          </>
        )}
      </form>
    </>
  );
}
