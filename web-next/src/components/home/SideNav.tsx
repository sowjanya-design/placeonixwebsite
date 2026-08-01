"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sapLinks, technologyLinks, comboLinks } from "@/data/nav";

export default function SideNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <Image
          src="/assets/img/logo-transparent.png"
          className="nav-logo"
          alt="Placeonix — IT Training & Placement Institute"
          width={220}
          height={74}
          style={{ width: "auto", height: "100px" }}
          priority
        />
        <div className="nav-right">
          <a href="tel:+919949494020" className="nav-phone">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 99494 94020</span>
          </a>
          <div className="nav-social">
            <a
              href="https://www.instagram.com/_placeonix?igsh=bTJkMW82a2E1cTNt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Placeonix on Instagram"
              title="Follow us on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Placeonix on LinkedIn"
              title="LinkedIn link coming soon"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <button
              className="mobile-menu-btn"
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="sideNav"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`sidenav-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`side-nav${open ? " open" : ""}`}
        id="sideNav"
        aria-label="Site menu"
      >
        <div className="side-nav-head">
          <Image
            src="/assets/img/logo-transparent.png"
            className="side-nav-logo"
            alt="Placeonix"
            width={140}
            height={38}
            style={{ width: "auto", height: "38px" }}
          />
          <button
            className="side-nav-close"
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <ul className="side-nav-list">
          <li>
            <a href="#features" onClick={() => setOpen(false)}>
              Why Us
            </a>
          </li>
          <li className="side-group">
            <details>
              <summary>SAP Courses</summary>
              <ul>
                {sapLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={() => setOpen(false)}>
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/courses/sap" onClick={() => setOpen(false)}>
                    <strong>View All SAP Courses →</strong>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="side-group">
            <details>
              <summary>Technology Courses</summary>
              <ul>
                {technologyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={() => setOpen(false)}>
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/courses/technology"
                    onClick={() => setOpen(false)}
                  >
                    <strong>View All Technology Courses →</strong>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="side-group">
            <details>
              <summary>Combo Programs</summary>
              <ul>
                {comboLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={() => setOpen(false)}>
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/courses/combo" onClick={() => setOpen(false)}>
                    <strong>View All Combo Programs →</strong>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#internship" onClick={() => setOpen(false)}>
              Internship
            </a>
          </li>
          <li>
            <Link href="/internships" onClick={() => setOpen(false)}>
              All Internship Tracks
            </Link>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setOpen(false)}>
              Alumni
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="side-nav-contact">
          <a href="tel:+919949494020" className="nav-phone">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 99494 94020</span>
          </a>
          <div className="nav-social">
            <a
              href="https://www.instagram.com/_placeonix?igsh=bTJkMW82a2E1cTNt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Placeonix on Instagram"
              title="Follow us on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Placeonix on LinkedIn"
              title="LinkedIn link coming soon"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <a
          href="?intent=demo#contact"
          className="side-nav-cta"
          onClick={() => setOpen(false)}
        >
          Book a Demo Class
        </a>
      </aside>
    </>
  );
}
