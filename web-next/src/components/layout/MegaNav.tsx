"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sapLinks, technologyLinks, comboLinks } from "@/data/nav";

export default function MegaNav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/" aria-label="Placeonix home">
          <Image
            src="/assets/img/logo-transparent.png"
            className="nav-logo"
            alt="Placeonix — IT Training & Placement Institute"
            width={400}
            height={107}
            style={{ width: "auto", height: "120px" }}
            priority
          />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <ul className={`nav-menu${open ? " open" : ""}`} id="navMenu">
          <li className="has-dropdown">
            <Link href="/courses/sap" aria-haspopup="true">
              SAP Courses
            </Link>
            <ul className="dropdown wide">
              {sapLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/courses/sap">
                  <strong>View All SAP Courses →</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="/courses/technology" aria-haspopup="true">
              Technology Courses
            </Link>
            <ul className="dropdown wide">
              {technologyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/courses/technology">
                  <strong>View All Technology Courses →</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="/courses/combo" aria-haspopup="true">
              Combo Programs
            </Link>
            <ul className="dropdown wide">
              {comboLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/courses/combo">
                  <strong>View All Combo Programs →</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/internships">Internships</Link>
          </li>
          <li>
            <Link href="/#internship">Placements</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li>
            <Link href="/?intent=demo#contact" className="nav-cta">
              Book a Demo Class
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
