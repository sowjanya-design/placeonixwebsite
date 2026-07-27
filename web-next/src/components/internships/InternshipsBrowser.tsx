"use client";

import { useMemo, useState } from "react";
import {
  internshipTracks,
  categoryLabels,
  statusLabels,
  type InternshipCategory,
  type InternshipStatus,
} from "@/lib/internships";
import InternIcon from "@/components/shared/InternIcon";

const CATEGORY_FILTERS: { value: InternshipCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "sap", label: "SAP" },
  { value: "development", label: "Development" },
  { value: "data", label: "Data" },
  { value: "cloud", label: "Cloud" },
  { value: "security", label: "Security" },
];

const STATUS_FILTERS: { value: InternshipStatus | "all"; label: string }[] = [
  { value: "all", label: "Batch Availability" },
  { value: "available", label: statusLabels.available },
  { value: "eligibility", label: statusLabels.eligibility },
  { value: "limited", label: statusLabels.limited },
];

export default function InternshipsBrowser() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<InternshipCategory | "all">("all");
  const [status, setStatus] = useState<InternshipStatus | "all">("all");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return internshipTracks.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (status !== "all" && t.status !== status) return false;
      if (!q) return true;
      const haystack = `${t.name} ${t.techTags.join(" ")} ${categoryLabels[t.category]}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [search, category, status]);

  return (
    <>
      <div className="internships-toolbar">
        <div className="internships-toolbar-row">
          <div className="internships-search">
            <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search internships, skills or tools…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search internships"
            />
          </div>
        </div>
        <div className="internships-toolbar-row">
        <div className="filter-chips">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`filter-chip${category === f.value ? " active" : ""}`}
              onClick={() => setCategory(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <select
          className="internships-select"
          value={status}
          onChange={(e) => setStatus(e.target.value as InternshipStatus | "all")}
          aria-label="Filter by batch availability"
        >
          {STATUS_FILTERS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
        </div>
      </div>

      <div className="intern-panel">
        {filtered.length === 0 && (
          <div className="intern-empty">
            No internships match your filters. Try a different search or
            reset the filters.
          </div>
        )}
        {filtered.map((t) => (
          <div className="intern-row-full" key={t.slug}>
            <div className="intern-row-full-head">
              <div className={`intern-badge intern-badge-${t.iconTint}`}>
                <InternIcon category={t.category} />
              </div>
              <div className="intern-row-main">
                <h4>{t.name}</h4>
                <div className="sub">{t.techTags.join(" · ")}</div>
              </div>
              <div className="intern-row-status">
                <span className={`status-pill status-${t.status}`}>
                  {t.statusLabel}
                </span>
                <span className="intern-apply-by">Apply by {t.applyBy}</span>
              </div>
            </div>
            <div className="intern-row-full-body">
              <div className="intern-row-full-desc">{t.description}</div>
              <div className="intern-row-full-meta">
                <div>
                  <span>Eligibility</span>
                  {t.eligibility}
                </div>
                <div>
                  <span>Duration</span>
                  {t.duration}
                </div>
                <div>
                  <span>Mode</span>
                  {t.mode}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="intern-footer-note">
          Statuses are reviewed periodically. Please check this page for the
          latest availability.
        </div>
      </div>
    </>
  );
}
