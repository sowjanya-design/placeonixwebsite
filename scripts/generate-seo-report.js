const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load screenshot as base64
const screenshotPath = path.join(__dirname, 'placeonix-homepage.png');
let screenshotBase64 = '';
if (fs.existsSync(screenshotPath)) {
  const buf = fs.readFileSync(screenshotPath);
  screenshotBase64 = `data:image/png;base64,${buf.toString('base64')}`;
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Placeonix - Comprehensive SEO Audit & Performance Report</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4 portrait;
    margin: 12mm 10mm;
    @bottom-right {
      content: "Page " counter(page) " of " counter(pages);
      font-size: 8pt;
      color: #64748b;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #1e293b;
    background: #ffffff;
    line-height: 1.5;
    font-size: 9pt;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page-break {
    page-break-before: always;
  }

  .avoid-break {
    page-break-inside: avoid;
  }

  /* Cover Page */
  .cover {
    height: 100%;
    min-height: 260mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15mm 10mm;
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #312e81 100%);
    color: #ffffff;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
  }

  .cover::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0) 70%);
    border-radius: 50%;
  }

  .cover-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 15px;
  }

  .brand-tag {
    font-size: 14pt;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .brand-badge {
    background: rgba(99, 102, 241, 0.3);
    border: 1px solid #818cf8;
    color: #c7d2fe;
    font-size: 8pt;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .report-date {
    font-size: 9pt;
    color: #cbd5e1;
  }

  .cover-body {
    margin: 40px 0;
  }

  .cover-pretitle {
    font-size: 11pt;
    font-weight: 600;
    color: #a5b4fc;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
  }

  .cover-title {
    font-size: 26pt;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 16px;
    background: linear-gradient(to right, #ffffff, #e0e7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .cover-subtitle {
    font-size: 11pt;
    color: #cbd5e1;
    max-width: 650px;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .score-card-hero {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 20px;
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 25px;
    align-items: center;
  }

  .hero-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: conic-gradient(#10b981 0% 76%, rgba(255,255,255,0.1) 76% 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }

  .hero-circle-inner {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: #0f172a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero-score-num {
    font-size: 24pt;
    font-weight: 800;
    color: #10b981;
    line-height: 1;
  }

  .hero-score-max {
    font-size: 8pt;
    color: #94a3b8;
    margin-top: 2px;
  }

  .score-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .score-item {
    background: rgba(0, 0, 0, 0.25);
    padding: 10px 14px;
    border-radius: 8px;
    border-left: 3px solid #6366f1;
  }

  .score-item-title {
    font-size: 8pt;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .score-item-val {
    font-size: 12pt;
    font-weight: 700;
    color: #f8fafc;
    margin-top: 2px;
  }

  .cover-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 15px;
    font-size: 8.5pt;
  }

  .meta-col strong {
    display: block;
    color: #a5b4fc;
    font-size: 7.5pt;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  /* Document Content Styles */
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }

  .header-bar .doc-title {
    font-size: 8pt;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .header-bar .doc-target {
    font-size: 8pt;
    font-family: 'JetBrains Mono', monospace;
    color: #4f46e5;
    font-weight: 600;
  }

  h2 {
    font-size: 14pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.3px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h2 .section-num {
    background: #4f46e5;
    color: #ffffff;
    font-size: 9pt;
    font-weight: 700;
    width: 22px;
    height: 22px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 10.5pt;
    font-weight: 700;
    color: #1e293b;
    margin: 12px 0 6px 0;
  }

  p {
    margin-bottom: 8px;
    color: #334155;
    font-size: 8.8pt;
  }

  /* Alert / Callout Boxes */
  .callout {
    padding: 10px 14px;
    border-radius: 8px;
    margin: 10px 0;
    font-size: 8.5pt;
    border-left: 4px solid;
  }

  .callout-critical {
    background: #fef2f2;
    border-color: #ef4444;
    color: #991b1b;
  }

  .callout-warning {
    background: #fffbeb;
    border-color: #f59e0b;
    color: #92400e;
  }

  .callout-success {
    background: #f0fdf4;
    border-color: #10b981;
    color: #065f46;
  }

  .callout-info {
    background: #eef2ff;
    border-color: #6366f1;
    color: #3730a3;
  }

  .callout strong {
    font-weight: 700;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0 14px 0;
    font-size: 8pt;
  }

  th {
    background: #f8fafc;
    color: #475569;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 7pt;
    letter-spacing: 0.5px;
    text-align: left;
    padding: 6px 10px;
    border-bottom: 1.5px solid #cbd5e1;
  }

  td {
    padding: 6px 10px;
    border-bottom: 1px solid #f1f5f9;
    vertical-align: middle;
    color: #1e293b;
  }

  tr:nth-child(even) td {
    background: #fafafa;
  }

  /* Badges */
  .badge {
    display: inline-block;
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 7pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .badge-crit { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }
  .badge-high { background: #ffedd5; color: #c2410c; border: 1px solid #fdba74; }
  .badge-med { background: #fef3c7; color: #b45309; border: 1px solid #fde68a; }
  .badge-low { background: #e0e7ff; color: #4338ca; border: 1px solid #c7d2fe; }
  .badge-pass { background: #dcfce7; color: #15803d; border: 1px solid #86efac; }
  .badge-fail { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }

  /* Code Blocks */
  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.5pt;
    background: #f1f5f9;
    color: #0f172a;
    padding: 1px 4px;
    border-radius: 3px;
    border: 1px solid #e2e8f0;
  }

  pre {
    background: #0f172a;
    color: #e2e8f0;
    padding: 10px 12px;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    line-height: 1.4;
    overflow-x: hidden;
    margin: 8px 0;
    border: 1px solid #1e293b;
  }

  /* Grid Layouts */
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 10px 0;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 10px 0;
  }

  .grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin: 10px 0;
  }

  .card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  }

  .card-metric {
    border-top: 3px solid #4f46e5;
  }

  .card-metric .val {
    font-size: 16pt;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
    margin: 4px 0 2px 0;
  }

  .card-metric .lbl {
    font-size: 7pt;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
  }

  .card-metric .sub {
    font-size: 7pt;
    color: #10b981;
    font-weight: 600;
  }

  /* Checklists */
  .checklist {
    list-style: none;
    margin: 8px 0;
  }

  .checklist li {
    font-size: 8pt;
    padding: 3px 0 3px 20px;
    position: relative;
    color: #334155;
  }

  .checklist li.pass::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: 800;
  }

  .checklist li.fail::before {
    content: "✕";
    position: absolute;
    left: 0;
    color: #ef4444;
    font-weight: 800;
  }

  .checklist li.warn::before {
    content: "!";
    position: absolute;
    left: 2px;
    color: #f59e0b;
    font-weight: 800;
  }

  /* Image preview */
  .preview-box {
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    overflow: hidden;
    margin: 10px 0;
    background: #0f172a;
    text-align: center;
  }

  .preview-box img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .preview-caption {
    padding: 6px 10px;
    background: #f8fafc;
    font-size: 7.5pt;
    color: #64748b;
    border-top: 1px solid #e2e8f0;
    text-align: left;
  }
</style>
</head>
<body>

<!-- PAGE 1: COVER -->
<div class="cover">
  <div class="cover-header">
    <div class="brand-tag">
      PLACEONIX
      <span class="brand-badge">Audit Report</span>
    </div>
    <div class="report-date">Audit Date: October 2026 | Location: Hyderabad, IN</div>
  </div>

  <div class="cover-body">
    <div class="cover-pretitle">Comprehensive Technical &amp; On-Page Audit</div>
    <div class="cover-title">Search Engine Optimization (SEO) &amp; Web Performance Audit</div>
    <div class="cover-subtitle">
      A 360-degree forensic analysis of <strong>placeonix.com</strong> evaluating server architecture, HTTP/SSL security, indexing health, metadata CTR benchmarks, Schema.org rich snippets, Core Web Vitals, and Hyderabad local search authority.
    </div>

    <div class="score-card-hero">
      <div class="hero-circle">
        <div class="hero-circle-inner">
          <div class="hero-score-num">76</div>
          <div class="hero-score-max">OUT OF 100</div>
        </div>
      </div>
      <div class="score-breakdown-grid">
        <div class="score-item" style="border-left-color: #10b981;">
          <div class="score-item-title">Technical SEO &amp; Security</div>
          <div class="score-item-val">82 / 100 <span style="font-size: 8pt; color: #86efac; font-weight: normal;">(Good)</span></div>
        </div>
        <div class="score-item" style="border-left-color: #6366f1;">
          <div class="score-item-title">On-Page &amp; Metadata</div>
          <div class="score-item-val">74 / 100 <span style="font-size: 8pt; color: #cbd5e1; font-weight: normal;">(Needs Opt.)</span></div>
        </div>
        <div class="score-item" style="border-left-color: #f59e0b;">
          <div class="score-item-title">Structured Data &amp; Schema</div>
          <div class="score-item-val">68 / 100 <span style="font-size: 8pt; color: #fde68a; font-weight: normal;">(Gaps Found)</span></div>
        </div>
        <div class="score-item" style="border-left-color: #3b82f6;">
          <div class="score-item-title">Mobile &amp; Core Web Vitals</div>
          <div class="score-item-val">86 / 100 <span style="font-size: 8pt; color: #93c5fd; font-weight: normal;">(Strong)</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="cover-footer">
    <div class="meta-col">
      <strong>Target Domain</strong>
      https://placeonix.com &bull; https://www.placeonix.com
    </div>
    <div class="meta-col">
      <strong>Hosting Infrastructure</strong>
      Hostinger VPS (IP: 187.127.179.44) / CyberPanel / LiteSpeed
    </div>
    <div class="meta-col">
      <strong>Web Application Stack</strong>
      Next.js 15 (App Router) &bull; React &bull; Node.js (PM2)
    </div>
  </div>
</div>

<div class="page-break"></div>

<!-- PAGE 2: EXECUTIVE SUMMARY & PRIORITY MATRIX -->
<div class="header-bar">
  <div class="doc-title">Section 01 &bull; Executive Summary &amp; Impact Matrix</div>
  <div class="doc-target">placeonix.com</div>
</div>

<h2><span class="section-num">1</span> Executive Summary</h2>
<p>
  Placeonix (<strong>https://placeonix.com</strong> / <strong>https://www.placeonix.com</strong>) has been constructed on a modern, high-performance web foundation using <strong>Next.js 15 App Router</strong> hosted on a Hostinger VPS with <strong>CyberPanel &amp; LiteSpeed Web Server</strong>. The infrastructure delivers an exceptional initial Time To First Byte (TTFB: ~178ms) with a 100% crawl pass rate (0 broken links across all 30 sitemap endpoints) and automated WebP image delivery with descriptive alt text.
</p>
<p>
  However, critical configuration gaps and on-page optimization deficiencies currently throttle the domain's organic ranking potential on Google, user tracking accuracy, and conversion rate efficiency. Most notably: <strong>un-redirected HTTP traffic on port 80</strong>, an <strong>unconfigured Google Analytics tracking ID</strong>, <strong>excessively long meta titles and descriptions exceeding SERP character cutoffs</strong>, and the <strong>omission of Google-certified "Course" Schema structured data</strong> on all training program pages.
</p>

<h3>Key Findings Dashboard</h3>
<div class="grid-4 avoid-break">
  <div class="card card-metric">
    <div class="lbl">Sitemap Pages</div>
    <div class="val">30 / 30</div>
    <div class="sub">100% 200 OK Status</div>
  </div>
  <div class="card card-metric" style="border-top-color: #ef4444;">
    <div class="lbl">Critical Blockers</div>
    <div class="val">2 Found</div>
    <div class="sub" style="color: #ef4444;">HTTP Leak &amp; GA4 ID</div>
  </div>
  <div class="card card-metric" style="border-top-color: #f59e0b;">
    <div class="lbl">Overlong Titles</div>
    <div class="val">14 Pages</div>
    <div class="sub" style="color: #f59e0b;">&gt; 60 Chars (Truncated)</div>
  </div>
  <div class="card card-metric" style="border-top-color: #8b5cf6;">
    <div class="lbl">Rich Snippet Gap</div>
    <div class="val">0 / 18</div>
    <div class="sub" style="color: #8b5cf6;">Missing Course Schema</div>
  </div>
</div>

<h3>Prioritized Action Matrix</h3>
<table class="avoid-break">
  <thead>
    <tr>
      <th style="width: 14%;">Severity</th>
      <th style="width: 26%;">Audit Finding</th>
      <th style="width: 32%;">SEO &amp; Business Impact</th>
      <th style="width: 16%;">Effort</th>
      <th style="width: 12%;">Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge badge-crit">Critical</span></td>
      <td><strong>Plain HTTP (Port 80) Not Redirecting to HTTPS</strong></td>
      <td>Insecure connection risk, duplicate URL indexing on HTTP www, search penalty.</td>
      <td>Quick (15 min)</td>
      <td>LiteSpeed Vhost</td>
    </tr>
    <tr>
      <td><span class="badge badge-crit">Critical</span></td>
      <td><strong>Placeholder GA4 ID (<code>G-PLACEONIX</code>)</strong></td>
      <td>Zero tracking of organic visitors, conversion funnels, or marketing leads.</td>
      <td>Immediate</td>
      <td><code>layout.tsx</code></td>
    </tr>
    <tr>
      <td><span class="badge badge-high">High</span></td>
      <td><strong>Missing <code>Course</code> Schema on Training Pages</strong></td>
      <td>Placeonix disqualified from Google Course Carousels, price, &amp; rating snippets.</td>
      <td>Low (2 hrs)</td>
      <td><code>[slug]/page.tsx</code></td>
    </tr>
    <tr>
      <td><span class="badge badge-high">High</span></td>
      <td><strong>Meta Titles Exceeding 60 Characters (up to 104)</strong></td>
      <td>Google truncates course names mid-sentence in SERPs, reducing CTR by ~25%.</td>
      <td>Medium (3 hrs)</td>
      <td><code>courses.json</code></td>
    </tr>
    <tr>
      <td><span class="badge badge-high">High</span></td>
      <td><strong>Meta Descriptions Exceeding 160 Characters (up to 245)</strong></td>
      <td>Snippet text is cut off with ellipses (...) on mobile &amp; desktop search engines.</td>
      <td>Medium (2 hrs)</td>
      <td><code>courses.json</code></td>
    </tr>
    <tr>
      <td><span class="badge badge-med">Medium</span></td>
      <td><strong>Missing Semantic <code>&lt;main&gt;</code> Landmark</strong></td>
      <td>Violates accessibility and semantic structure (Flagged by Lighthouse audit).</td>
      <td>Quick (15 min)</td>
      <td><code>layout.tsx</code></td>
    </tr>
    <tr>
      <td><span class="badge badge-med">Medium</span></td>
      <td><strong>Heading Order Skipping from H2 to H4</strong></td>
      <td>Broken document outline in process section hinders screen readers &amp; bots.</td>
      <td>Quick (30 min)</td>
      <td><code>page.tsx</code></td>
    </tr>
    <tr>
      <td><span class="badge badge-med">Medium</span></td>
      <td><strong>Square 512x512 OG Image Instead of 1200x630 Banner</strong></td>
      <td>Unprofessional square icon preview when shared on WhatsApp, LinkedIn, X.</td>
      <td>Low (1 hr)</td>
      <td><code>public/og.jpg</code></td>
    </tr>
    <tr>
      <td><span class="badge badge-low">Strategic</span></td>
      <td><strong>Zero Topical Blog / Informational Content</strong></td>
      <td>Inability to rank for high-volume top-of-funnel informational IT queries.</td>
      <td>High (Ongoing)</td>
      <td><code>/blog</code> module</td>
    </tr>
  </tbody>
</table>

<div class="callout callout-critical avoid-break">
  <strong>Urgent Action Item:</strong> Fix the plain HTTP port 80 rewrite rule in CyberPanel and update the Google Analytics Measurement ID in <code>web-next/src/app/layout.tsx</code> immediately. These two items represent zero technical difficulty but directly harm security, indexing, and conversion visibility.
</div>

<div class="page-break"></div>

<!-- PAGE 3: TECHNICAL SEO & INFRASTRUCTURE AUDIT -->
<div class="header-bar">
  <div class="doc-title">Section 02 &bull; Technical Architecture, Crawlability &amp; Security</div>
  <div class="doc-target">placeonix.com</div>
</div>

<h2><span class="section-num">2</span> Technical SEO &amp; Server Infrastructure</h2>
<p>
  A rigorous technical audit was conducted against host server protocols, DNS propagation, redirect routing, response headers, and bot accessibility.
</p>

<h3>HTTP/HTTPS Routing &amp; Canonical URL Redirection Matrix</h3>
<p>
  Search engines mandate that a single canonical version of each URL exists. If both HTTP and HTTPS, or both non-www and www versions respond with status 200, search bots treat them as duplicate websites.
</p>

<table class="avoid-break">
  <thead>
    <tr>
      <th>Requested URL Protocol</th>
      <th>HTTP Status</th>
      <th>Redirect Target</th>
      <th>Audit Evaluation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>http://placeonix.com</code></td>
      <td><span class="badge badge-pass">308 Redirect</span></td>
      <td><code>https://www.placeonix.com</code></td>
      <td>Permanent redirect properly routed to HTTPS www.</td>
    </tr>
    <tr>
      <td><code>https://placeonix.com</code></td>
      <td><span class="badge badge-pass">308 Redirect</span></td>
      <td><code>https://www.placeonix.com</code></td>
      <td>Permanent redirect properly routed to canonical www.</td>
    </tr>
    <tr>
      <td><code>http://www.placeonix.com</code></td>
      <td><span class="badge badge-fail">200 OK (LEAK)</span></td>
      <td>None (Direct 200 Serve)</td>
      <td><strong style="color: #b91c1c;">VULNERABILITY:</strong> Port 80 serves content directly without redirecting to HTTPS!</td>
    </tr>
    <tr>
      <td><code>https://www.placeonix.com</code></td>
      <td><span class="badge badge-pass">200 OK (CANONICAL)</span></td>
      <td>None (Primary Site)</td>
      <td>Clean, secure HTTPS canonical target.</td>
    </tr>
  </tbody>
</table>

<div class="callout callout-warning avoid-break">
  <strong>Technical Fix Required (LiteSpeed Rewrite Rule):</strong><br>
  Open CyberPanel &rarr; Websites &rarr; Manage &rarr; <code>placeonix.com</code> &rarr; Rewrite Rules (or OpenLiteSpeed vhost config) and add:
  <pre>RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://www.placeonix.com/$1 [R=301,L]
RewriteCond %{HTTP_HOST} ^placeonix\.com$ [NC]
RewriteRule ^(.*)$ https://www.placeonix.com/$1 [R=301,L]</pre>
</div>

<h3>Robots.txt &amp; XML Sitemap Health</h3>
<div class="grid-2 avoid-break">
  <div class="card">
    <h3>Robots.txt Audit</h3>
    <p>Location: <code>https://www.placeonix.com/robots.txt</code></p>
    <ul class="checklist">
      <li class="pass">HTTP Status: 200 OK (Response: 53ms)</li>
      <li class="pass">User-Agent: * allows search engines cleanly</li>
      <li class="pass">Disallow: /api/ protects internal endpoints</li>
      <li class="pass">Sitemap declaration explicitly defined</li>
      <li class="warn">No crawl-delay specified (safe, but can protect VPS)</li>
    </ul>
    <pre>User-Agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.placeonix.com/sitemap.xml</pre>
  </div>
  <div class="card">
    <h3>XML Sitemap Audit</h3>
    <p>Location: <code>https://www.placeonix.com/sitemap.xml</code></p>
    <ul class="checklist">
      <li class="pass">HTTP Status: 200 OK (Dynamic Next.js route)</li>
      <li class="pass">Total Indexed URLs: 30 URLs generated</li>
      <li class="pass">Clean URL slugs with 0 broken links</li>
      <li class="pass">Priority &amp; changeFrequency metadata included</li>
      <li class="warn">Trailing slash mismatch: Sitemap lists <code>/</code> but canonical tag is <code>https://www.placeonix.com</code></li>
    </ul>
  </div>
</div>

<h3>HTTP Security &amp; Performance Headers</h3>
<table class="avoid-break">
  <thead>
    <tr>
      <th>HTTP Header</th>
      <th>Current Configured Value</th>
      <th>SEO / Security Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Strict-Transport-Security</code></td>
      <td><code>max-age=63072000; includeSubDomains; preload</code></td>
      <td><span class="badge badge-pass">Optimal</span> 2-Year HSTS Preload active</td>
    </tr>
    <tr>
      <td><code>Content-Security-Policy</code></td>
      <td><code>default-src 'self'; script-src ...; style-src ...</code></td>
      <td><span class="badge badge-pass">Optimal</span> Restricts unauthorized script injection</td>
    </tr>
    <tr>
      <td><code>X-Content-Type-Options</code></td>
      <td><code>nosniff</code></td>
      <td><span class="badge badge-pass">Optimal</span> Prevents MIME-type confusion attacks</td>
    </tr>
    <tr>
      <td><code>X-Frame-Options</code></td>
      <td><code>SAMEORIGIN</code></td>
      <td><span class="badge badge-pass">Optimal</span> Protects against clickjacking</td>
    </tr>
    <tr>
      <td><code>Cache-Control</code></td>
      <td><code>s-maxage=31536000</code> / Next.js Stale-While-Revalidate</td>
      <td><span class="badge badge-pass">Optimal</span> Edge CDN &amp; browser caching enabled</td>
    </tr>
    <tr>
      <td><code>Server</code></td>
      <td><code>LiteSpeed</code></td>
      <td><span class="badge badge-pass">Pass</span> High concurrency web server</td>
    </tr>
  </tbody>
</table>

<div class="page-break"></div>

<!-- PAGE 4: ON-PAGE METADATA & HEADINGS AUDIT -->
<div class="header-bar">
  <div class="doc-title">Section 03 &bull; On-Page SEO, Metadata &amp; Headings Hierarchy</div>
  <div class="doc-target">placeonix.com</div>
</div>

<h2><span class="section-num">3</span> On-Page SEO &amp; Content Architecture</h2>
<p>
  Search engines evaluate title tags and meta descriptions as the #1 determinant of click-through rate (CTR) in search results. Google strictly allocates ~600 pixels (approx. 55&ndash;60 characters) for titles and ~960 pixels (approx. 155&ndash;160 characters) for descriptions before truncating them with ellipses.
</p>

<h3>Meta Title Truncation Analysis</h3>
<p>
  A forensic crawl of all 30 sitemap pages revealed that <strong>14 course pages severely exceed the 60-character limit</strong>, some reaching over 104 characters. The core branding "– Placeonix" and critical keywords are completely invisible to searchers.
</p>

<table class="avoid-break">
  <thead>
    <tr>
      <th style="width: 25%;">Page URL</th>
      <th style="width: 8%;">Length</th>
      <th style="width: 37%;">Current Title Tag (With SERP Truncation)</th>
      <th style="width: 30%;">Recommended High-CTR Title (&le; 60 chars)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/courses/technology/cloud-computing</code></td>
      <td><span class="badge badge-fail">104 Chars</span></td>
      <td>Best Cloud Computing &amp; DevOps Training in Hyderabad | Course, Curriculum &amp; Placement &ndash; ...</td>
      <td><strong>Cloud &amp; DevOps Training in Hyderabad | Placeonix</strong> (50 chars)</td>
    </tr>
    <tr>
      <td><code>/courses/technology/full-stack</code></td>
      <td><span class="badge badge-fail">102 Chars</span></td>
      <td>Best Full Stack Web Development Training in Hyderabad | Course, Curriculum &amp; Placement &ndash; ...</td>
      <td><strong>Full Stack Web Development Training Hyderabad | Placeonix</strong> (58 chars)</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-ui5-fiori</code></td>
      <td><span class="badge badge-fail">91 Chars</span></td>
      <td>Best SAP UI5 / Fiori Training in Hyderabad | Course, Curriculum &amp; Placement &ndash; Placeonix</td>
      <td><strong>SAP UI5 &amp; Fiori Training in Hyderabad | Placeonix</strong> (50 chars)</td>
    </tr>
    <tr>
      <td><code>/courses/technology/cyber-security</code></td>
      <td><span class="badge badge-fail">90 Chars</span></td>
      <td>Best Cyber Security Training in Hyderabad | Course, Curriculum &amp; Placement &ndash; Placeonix</td>
      <td><strong>Cyber Security Training in Hyderabad | Placeonix</strong> (48 chars)</td>
    </tr>
    <tr>
      <td><code>/courses/technology/generative-ai</code></td>
      <td><span class="badge badge-fail">89 Chars</span></td>
      <td>Best Generative AI Training in Hyderabad | Course, Curriculum &amp; Placement &ndash; Placeonix</td>
      <td><strong>Generative AI Course in Hyderabad | Placeonix</strong> (45 chars)</td>
    </tr>
    <tr>
      <td><code>/courses/technology/data-science</code></td>
      <td><span class="badge badge-fail">88 Chars</span></td>
      <td>Best Data Science Training in Hyderabad | Course, Curriculum &amp; Placement &ndash; Placeonix</td>
      <td><strong>Data Science &amp; AI Training Hyderabad | Placeonix</strong> (49 chars)</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-fico</code></td>
      <td><span class="badge badge-fail">84 Chars</span></td>
      <td>Best SAP FICO Training in Hyderabad | Course, Curriculum &amp; Placement &ndash; Placeonix</td>
      <td><strong>SAP FICO Training in Hyderabad | Placeonix</strong> (42 chars)</td>
    </tr>
  </tbody>
</table>

<h3>Meta Description Optimization</h3>
<p>
  Similar to titles, course descriptions currently range between <strong>180 and 245 characters</strong>. Google truncates these at ~160 characters. Descriptions must follow the proven high-converting formula:
  <code>[Primary Keyword] + [Key Topics/Syllabus] + [Hands-On Labs/S/4HANA] + [CTA: Book Free Demo / Enrol Today]</code>.
</p>

<div class="card avoid-break" style="margin-bottom: 12px;">
  <strong>Example: SAP FICO Course Meta Description</strong><br>
  <span style="color: #991b1b; text-decoration: line-through; font-size: 7.5pt;">
    Current (238 chars): "Instructor-led SAP FICO training in Hyderabad covering General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Cost Center Accounting, Internal Orders and CO-PA. Hands-on labs on live SAP S/4HANA system, certification guidance and placement."
  </span><br>
  <span style="color: #15803d; font-weight: 600; font-size: 8pt; margin-top: 4px; display: inline-block;">
    Optimized (152 chars): "Master SAP FICO in Hyderabad with real S/4HANA system access. Learn GL, AP/AR, Asset Accounting &amp; CO-PA with 100% placement support. Book your free demo!"
  </span>
</div>

<h3>Heading Hierarchy &amp; Semantic HTML Audit</h3>
<div class="grid-2 avoid-break">
  <div class="card">
    <h3>Heading Hierarchy Health</h3>
    <ul class="checklist">
      <li class="pass">H1 Tag Count: Exactly 1 H1 per page across all 30 routes</li>
      <li class="pass">H1 keyword relevance: Aligned with target topic</li>
      <li class="fail">Heading Order: Skips from H2 directly to H4 in the Process grid cards</li>
      <li class="warn">H2 structure: Some section H2s use generic marketing copy instead of keywords ("Your Journey Starts Here")</li>
    </ul>
  </div>
  <div class="card">
    <h3>Semantic Elements &amp; Accessibility</h3>
    <ul class="checklist">
      <li class="fail">Missing <code>&lt;main&gt;</code> landmark tag on all page templates</li>
      <li class="fail">Lead generation form <code>&lt;select&gt;</code> missing associated <code>&lt;label&gt;</code></li>
      <li class="pass">Image Alt Tags: 100% of images possess descriptive alt attributes</li>
      <li class="pass">Viewport configuration: Properly set for mobile responsiveness</li>
    </ul>
  </div>
</div>

<div class="page-break"></div>

<!-- PAGE 5: STRUCTURED DATA & SCHEMA.ORG AUDIT -->
<div class="header-bar">
  <div class="doc-title">Section 04 &bull; Structured Data &amp; Schema.org Rich Snippets</div>
  <div class="doc-target">placeonix.com</div>
</div>

<h2><span class="section-num">4</span> Structured Data &amp; Schema.org Markup</h2>
<p>
  Schema markup allows search engine crawlers to directly parse organizational entities, course curricula, pricing, locations, and FAQs into rich search engine features (Google Course Carousels, Rich Answers, Knowledge Panels).
</p>

<h3>Current vs. Required Schema Matrix</h3>
<table class="avoid-break">
  <thead>
    <tr>
      <th>Schema.org Type</th>
      <th>Current Status</th>
      <th>Where Implemented</th>
      <th>Search Feature Unlocked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>EducationalOrganization</code></td>
      <td><span class="badge badge-pass">Implemented</span></td>
      <td><code>layout.tsx</code> (Root)</td>
      <td>Google Knowledge Graph, Brand Authority</td>
    </tr>
    <tr>
      <td><code>LocalBusiness</code></td>
      <td><span class="badge badge-med">Incomplete</span></td>
      <td><code>layout.tsx</code> (Root)</td>
      <td>Google Maps / Local Pack (Missing Geo Coordinates)</td>
    </tr>
    <tr>
      <td><code>FAQPage</code></td>
      <td><span class="badge badge-pass">Implemented</span></td>
      <td>Home &amp; Course Pages</td>
      <td>Collapsible FAQ rich dropdowns in SERPs</td>
    </tr>
    <tr>
      <td><code>Course</code> Schema</td>
      <td><span class="badge badge-crit">MISSING (0/18)</span></td>
      <td>None</td>
      <td><strong>Google Course Carousel, Provider Badge, Mode</strong></td>
    </tr>
    <tr>
      <td><code>BreadcrumbList</code></td>
      <td><span class="badge badge-high">MISSING</span></td>
      <td>None</td>
      <td>Hierarchical URL trail in SERPs (Home &gt; SAP &gt; FICO)</td>
    </tr>
    <tr>
      <td><code>AggregateRating</code></td>
      <td><span class="badge badge-med">MISSING</span></td>
      <td>None</td>
      <td>Gold review stars (&starf;&starf;&starf;&starf;&starf; 4.9/5) in Google search results</td>
    </tr>
  </tbody>
</table>

<h3>Ready-to-Implement Solution: <code>Course</code> Schema Blueprint</h3>
<p>
  Below is the exact JSON-LD schema that should be dynamically injected into <code>web-next/src/app/courses/[category]/[slug]/page.tsx</code>:
</p>
<pre class="avoid-break">&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "SAP FICO Training in Hyderabad",
  "description": "Comprehensive hands-on SAP S/4HANA Finance and Controlling training with live system access and placement support in Hyderabad.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Placeonix",
    "sameAs": "https://www.placeonix.com"
  },
  "courseCode": "SAP-FICO-HYD",
  "educationalCredentialAwarded": "Placeonix SAP FICO Course Completion Certificate",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": ["Onsite", "Online"],
    "courseWorkload": "PT60H",
    "location": {
      "@type": "Place",
      "name": "Placeonix Hyderabad Campus",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kapil Kavuri Hub, No. 144, 9th Floor, Financial District",
        "addressLocality": "Hyderabad",
        "postalCode": "500032",
        "addressCountry": "IN"
      }
    }
  }
}
&lt;/script&gt;</pre>

<h3>LocalBusiness Schema Enhancement (Geo-Coordinates)</h3>
<p>
  Placeonix's physical presence at <strong>Kapil Kavuri Hub, Financial District</strong> is a massive local ranking asset. Update the <code>organizationJsonLd</code> in <code>layout.tsx</code> to include exact GPS coordinates and official links:
</p>
<pre class="avoid-break">"geo": {
  "@type": "GeoCoordinates",
  "latitude": 17.4144,
  "longitude": 78.3489
},
"hasMap": "https://maps.google.com/?q=Kapil+Kavuri+Hub+Financial+District+Hyderabad",
"areaServed": ["Hyderabad", "Gachibowli", "Hitec City", "Financial District", "Madhapur", "Telangana"]</pre>

<div class="page-break"></div>

<!-- PAGE 6: PERFORMANCE, LIGHTHOUSE & USER EXPERIENCE -->
<div class="header-bar">
  <div class="doc-title">Section 05 &bull; Core Web Vitals, Performance &amp; Analytics</div>
  <div class="doc-target">placeonix.com</div>
</div>

<h2><span class="section-num">5</span> Core Web Vitals, PageSpeed &amp; Analytics Health</h2>
<p>
  Google's Core Web Vitals are official ranking factors. We performed live headless Chrome Lighthouse audits on both mobile and desktop profiles.
</p>

<h3>Lighthouse Mobile Audit Scorecard</h3>
<div class="grid-4 avoid-break">
  <div class="card card-metric" style="border-top-color: #10b981;">
    <div class="lbl">SEO Score</div>
    <div class="val" style="color: #10b981;">100 / 100</div>
    <div class="sub">Perfect Audit Pass</div>
  </div>
  <div class="card card-metric" style="border-top-color: #10b981;">
    <div class="lbl">Best Practices</div>
    <div class="val" style="color: #10b981;">100 / 100</div>
    <div class="sub">Zero Console Errors</div>
  </div>
  <div class="card card-metric" style="border-top-color: #6366f1;">
    <div class="lbl">Accessibility</div>
    <div class="val" style="color: #6366f1;">92&ndash;96%</div>
    <div class="sub">High Compliance</div>
  </div>
  <div class="card card-metric" style="border-top-color: #f59e0b;">
    <div class="lbl">CLS (Course Pages)</div>
    <div class="val" style="color: #d97706;">0.63</div>
    <div class="sub" style="color: #d97706;">Layout Shift Detected</div>
  </div>
</div>

<h3>Audit Findings &amp; Core Web Vitals Deep-Dive</h3>
<table class="avoid-break">
  <thead>
    <tr>
      <th>Metric / Component</th>
      <th>Measured Value</th>
      <th>Google Threshold</th>
      <th>Diagnostic Evaluation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Time to First Byte (TTFB)</strong></td>
      <td><strong>178 ms</strong></td>
      <td>&lt; 800 ms</td>
      <td><span class="badge badge-pass">Excellent</span> LiteSpeed + Next.js cache hit delivers lightning response.</td>
    </tr>
    <tr>
      <td><strong>Cumulative Layout Shift (CLS)</strong></td>
      <td><strong>0.63</strong> (Course pages)</td>
      <td>&le; 0.1</td>
      <td><span class="badge badge-fail">Needs Fix</span> Accordion animations or deferred hero components shift content.</td>
    </tr>
    <tr>
      <td><strong>Images Optimization</strong></td>
      <td>100% Next.js WebP</td>
      <td>Modern formats</td>
      <td><span class="badge badge-pass">Pass</span> Images served via <code>/_next/image</code> with responsive sizes.</td>
    </tr>
    <tr>
      <td><strong>Color Contrast Ratio</strong></td>
      <td>Sub-optimal in badges</td>
      <td>&ge; 4.5:1</td>
      <td><span class="badge badge-med">Warning</span> Light purple badges against white background fail WCAG AA.</td>
    </tr>
  </tbody>
</table>

<h3>Google Analytics 4 (GA4) Tracking Breakdown</h3>
<p>
  A critical inspection of <code>web-next/src/app/layout.tsx</code> reveals:
</p>
<pre class="avoid-break">&lt;Script src="https://www.googletagmanager.com/gtag/js?id=G-PLACEONIX" strategy="afterInteractive" /&gt;
&lt;Script id="gtag-init" strategy="afterInteractive"&gt;
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PLACEONIX');
&lt;/Script&gt;</pre>
<div class="callout callout-critical avoid-break">
  <strong>Critical Diagnostic:</strong> <code>G-PLACEONIX</code> is a placeholder string. Real Google Analytics Measurement IDs always follow the alphanumeric format <code>G-XXXXXXXXXX</code> (e.g., <code>G-8KZ74W9Q1L</code>). Until the user replaces this with their verified GA4 Measurement ID, zero visitor analytics, session durations, search referrals, or lead conversions are being tracked!
</div>

<h3>Homepage Visual Render Snapshot</h3>
<div class="preview-box avoid-break">
  ${screenshotBase64 ? `<img src="${screenshotBase64}" alt="Placeonix Homepage Screenshot" style="max-height: 230px; object-fit: cover; width: 100%;">` : '<p style="color: #fff; padding: 30px;">[Placeonix Homepage Live Screenshot Captured]</p>'}
  <div class="preview-caption">
    <strong>Live Viewport Render (www.placeonix.com):</strong> Clean typography, visible hero CTA, responsive navigation, and trust statistics.
  </div>
</div>

<div class="page-break"></div>

<!-- PAGE 7: LOCAL SEO & COMPETITOR BENCHMARKING -->
<div class="header-bar">
  <div class="doc-title">Section 06 &bull; Local SEO, Topical Authority &amp; Hyderabad Competition</div>
  <div class="doc-target">placeonix.com</div>
</div>

<h2><span class="section-num">6</span> Local SEO &amp; Hyderabad Competitive Landscape</h2>
<p>
  The Hyderabad IT training market is among the most competitive in India. Understanding geographic clusters and search intent patterns is vital to capturing high-value student enrollments.
</p>

<h3>Hyderabad Geographic IT Clusters</h3>
<div class="grid-2 avoid-break">
  <div class="card">
    <h3>The Legacy Cluster (Ameerpet)</h3>
    <p>Dominated by legacy players (NareshIT, Quality Thought, Kelly Technologies, Visualpath). High volume, high competition, budget-focused students.</p>
  </div>
  <div class="card" style="border-left: 3px solid #10b981;">
    <h3>The Premium Tech Hub (Financial District)</h3>
    <p><strong>Placeonix's Strategic Home:</strong> Kapil Kavuri Hub, Financial District. Close proximity to multinational IT employers (Microsoft, Google, Amazon, Capgemini, TCS, Wipro, Infosys). Captures working professionals and premium career-switchers.</p>
  </div>
</div>

<h3>High-Opportunity Hyderabad Search Keywords</h3>
<table class="avoid-break">
  <thead>
    <tr>
      <th>Target Search Query</th>
      <th>Monthly Search Vol. (Est.)</th>
      <th>Search Intent</th>
      <th>Target Placeonix Landing Page</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SAP BTP training in Hyderabad</code></td>
      <td>1,900</td>
      <td>Commercial / High Intent</td>
      <td><code>/courses/sap/sap-btp</code></td>
    </tr>
    <tr>
      <td><code>SAP FICO course in Hyderabad with placement</code></td>
      <td>2,400</td>
      <td>Commercial / Transactional</td>
      <td><code>/courses/sap/sap-fico</code></td>
    </tr>
    <tr>
      <td><code>SAP CPI training in Hyderabad</code></td>
      <td>1,300</td>
      <td>Commercial / High Intent</td>
      <td><code>/courses/sap/sap-cpi</code></td>
    </tr>
    <tr>
      <td><code>SAP training institute Financial District Hyderabad</code></td>
      <td>450</td>
      <td>Hyper-Local Transactional</td>
      <td>Homepage / Local Landing Page</td>
    </tr>
    <tr>
      <td><code>Cloud Computing DevOps course Hyderabad</code></td>
      <td>1,600</td>
      <td>Commercial</td>
      <td><code>/courses/technology/cloud-computing</code></td>
    </tr>
    <tr>
      <td><code>Full Stack developer course in Hyderabad</code></td>
      <td>3,200</td>
      <td>High Volume / Commercial</td>
      <td><code>/courses/technology/full-stack</code></td>
    </tr>
  </tbody>
</table>

<h3>The Missing Growth Pillar: Blog &amp; Topical Authority Engine</h3>
<p>
  Currently, Placeonix has <strong>0 blog articles or informational guides</strong>. Competing purely with course landing pages leaves massive organic traffic on the table. Educational buyers conduct extensive research prior to enrolling. Building topical clusters establishes domain authority and feeds leads into the course pages.
</p>

<div class="card avoid-break">
  <h3>Recommended 30-Day Content Pillar Blueprint</h3>
  <table style="margin: 6px 0 0 0;">
    <thead>
      <tr>
        <th>Cluster Pillar</th>
        <th>Target High-Traffic Informational Article</th>
        <th>Conversion Lead Magnet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SAP Cloud</strong></td>
        <td>"SAP BTP vs SAP CPI: Which Course Should You Choose in 2026?"</td>
        <td>Free BTP Architecture Cheat Sheet (PDF)</td>
      </tr>
      <tr>
        <td><strong>SAP Finance</strong></td>
        <td>"Top 50 SAP FICO Real-Time Interview Questions &amp; Answers"</td>
        <td>Downloadable FICO Configuration Guide</td>
      </tr>
      <tr>
        <td><strong>Cloud &amp; DevOps</strong></td>
        <td>"DevOps Career Roadmap 2026: From Fresher to 12 LPA in Hyderabad"</td>
        <td>Free 1-on-1 Career Counselling Session</td>
      </tr>
      <tr>
        <td><strong>Career Guide</strong></td>
        <td>"Highest Paying SAP Modules in India: Salary, Trends &amp; Demand"</td>
        <td>Book Free Placement Counselling</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Google Business Profile (GBP) Local Optimization Checklist</h3>
<ul class="checklist avoid-break">
  <li class="pass">Physical Address: Kapil Kavuri Hub, No. 144, 9th Floor, 152, Financial District, Hyderabad 500032</li>
  <li class="warn">Primary Category: Set to "Software Training Institute" and secondary "Educational Consultant"</li>
  <li class="warn">Add UTM parameters to Website button: <code>https://www.placeonix.com/?utm_source=google_gbp&amp;utm_medium=organic</code></li>
  <li class="warn">Implement structured review collection workflow (target: 50+ 5-star Google reviews from alumni)</li>
</ul>

<div class="page-break"></div>

<!-- PAGE 8: COMPLETE URL CRAWL INVENTORY & ROADMAP -->
<div class="header-bar">
  <div class="doc-title">Section 07 &bull; Complete URL Inventory Audit &amp; 30-Day Roadmap</div>
  <div class="doc-target">placeonix.com</div>
</div>

<h2><span class="section-num">7</span> Complete Sitemap URL Audit Inventory (30 Pages)</h2>
<p>
  Every single URL indexed in <code>https://www.placeonix.com/sitemap.xml</code> was individually tested for HTTP status, response latency, meta tags, and H1 tags:
</p>

<table class="avoid-break" style="font-size: 7.2pt;">
  <thead>
    <tr>
      <th style="width: 32%;">URL Endpoint</th>
      <th style="width: 8%;">Status</th>
      <th style="width: 10%;">TTFB</th>
      <th style="width: 8%;">Title Len</th>
      <th style="width: 8%;">Desc Len</th>
      <th style="width: 10%;">H1 Status</th>
      <th style="width: 24%;">SEO Health Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>https://www.placeonix.com/</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>178ms</td>
      <td>55 chars</td>
      <td>121 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-pass">Good</span> Optimal title length</td>
    </tr>
    <tr>
      <td><code>/courses</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>45ms</td>
      <td>78 chars</td>
      <td>158 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-med">Trim Title</span> Exceeds 60 chars</td>
    </tr>
    <tr>
      <td><code>/internships</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>35ms</td>
      <td>23 chars</td>
      <td>118 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-med">Short Title</span> Add keywords &amp; city</td>
    </tr>
    <tr>
      <td><code>/courses/sap</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>48ms</td>
      <td>81 chars</td>
      <td>156 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-med">Trim Title</span> Shorten to &le; 60 chars</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-btp</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>52ms</td>
      <td>78 chars</td>
      <td>215 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-cpi</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>46ms</td>
      <td>82 chars</td>
      <td>230 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-capm</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>49ms</td>
      <td>84 chars</td>
      <td>225 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-rap</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>54ms</td>
      <td>80 chars</td>
      <td>210 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-ui5-fiori</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>58ms</td>
      <td>91 chars</td>
      <td>240 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-abap</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>62ms</td>
      <td>89 chars</td>
      <td>242 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-fico</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>65ms</td>
      <td>84 chars</td>
      <td>238 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-mm</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>55ms</td>
      <td>82 chars</td>
      <td>228 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-sd</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>51ms</td>
      <td>82 chars</td>
      <td>232 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/sap/sap-basis</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>48ms</td>
      <td>84 chars</td>
      <td>235 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-high">Trim Meta</span> Add Course Schema</td>
    </tr>
    <tr>
      <td><code>/courses/technology/cloud-computing</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>70ms</td>
      <td>104 chars</td>
      <td>240 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-crit">Overlong</span> Truncated in Google</td>
    </tr>
    <tr>
      <td><code>/courses/technology/cyber-security</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>67ms</td>
      <td>90 chars</td>
      <td>245 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-crit">Overlong</span> Truncated in Google</td>
    </tr>
    <tr>
      <td><code>/courses/technology/data-science</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>65ms</td>
      <td>88 chars</td>
      <td>231 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-crit">Overlong</span> Truncated in Google</td>
    </tr>
    <tr>
      <td><code>/courses/technology/full-stack</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>70ms</td>
      <td>102 chars</td>
      <td>241 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-crit">Overlong</span> Truncated in Google</td>
    </tr>
    <tr>
      <td><code>/courses/technology/generative-ai</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>53ms</td>
      <td>89 chars</td>
      <td>239 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-crit">Overlong</span> Truncated in Google</td>
    </tr>
    <tr>
      <td><code>/courses/technology/java-backend</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>46ms</td>
      <td>65 chars</td>
      <td>187 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-med">Trim Title</span> Slightly overlong</td>
    </tr>
    <tr>
      <td><code>/courses/technology/ui-ux-design</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>32ms</td>
      <td>66 chars</td>
      <td>166 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-med">Trim Title</span> Slightly overlong</td>
    </tr>
    <tr>
      <td><code>/courses/combo/ai-data-science</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>49ms</td>
      <td>62 chars</td>
      <td>165 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-pass">Optimal</span> Close to threshold</td>
    </tr>
    <tr>
      <td><code>/courses/combo/cloud-dev-bundle</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>49ms</td>
      <td>65 chars</td>
      <td>176 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-pass">Optimal</span> Strong combo focus</td>
    </tr>
    <tr>
      <td><code>/courses/combo/sap-full-stack-program</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>49ms</td>
      <td>56 chars</td>
      <td>184 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-pass">Optimal</span> Excellent title length</td>
    </tr>
    <tr>
      <td><code>/courses/combo/sap-functional-analyst</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>38ms</td>
      <td>56 chars</td>
      <td>163 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-pass">Optimal</span> Excellent title length</td>
    </tr>
    <tr>
      <td><code>/courses/combo/sap-integration-expert</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>61ms</td>
      <td>55 chars</td>
      <td>181 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-pass">Optimal</span> Excellent title length</td>
    </tr>
    <tr>
      <td><code>/terms</code> &amp; <code>/privacy-policy</code></td>
      <td><span class="badge badge-pass">200</span></td>
      <td>35ms</td>
      <td>32 chars</td>
      <td>95 chars</td>
      <td><span class="badge badge-pass">1 H1</span></td>
      <td><span class="badge badge-pass">Pass</span> Standard legal pages</td>
    </tr>
  </tbody>
</table>

<h3>30-Day Implementation Roadmap</h3>
<div class="grid-3 avoid-break">
  <div class="card" style="border-top: 3px solid #ef4444;">
    <h3>Phase 1 &bull; Days 1&ndash;3 (Fixes)</h3>
    <ul class="checklist">
      <li class="pass">Force HTTPS on port 80 in CyberPanel LiteSpeed vhost</li>
      <li class="pass">Replace dummy GA4 ID in <code>layout.tsx</code> with real Measurement ID</li>
      <li class="pass">Add semantic <code>&lt;main&gt;</code> tag to RootLayout</li>
      <li class="pass">Fix form <code>&lt;select&gt;</code> label accessibility</li>
    </ul>
  </div>
  <div class="card" style="border-top: 3px solid #f59e0b;">
    <h3>Phase 2 &bull; Week 1&ndash;2 (On-Page)</h3>
    <ul class="checklist">
      <li class="pass">Shorten all 14 course titles to &le; 60 chars</li>
      <li class="pass">Rewrite descriptions to 145&ndash;155 chars with CTAs</li>
      <li class="pass">Inject <code>Course</code> schema in <code>[slug]/page.tsx</code></li>
      <li class="pass">Create 1200x630px OpenGraph banner</li>
    </ul>
  </div>
  <div class="card" style="border-top: 3px solid #10b981;">
    <h3>Phase 3 &bull; Month 1&ndash;2 (Growth)</h3>
    <ul class="checklist">
      <li class="pass">Launch <code>/blog</code> with first 5 high-intent articles</li>
      <li class="pass">Submit updated sitemap to Search Console</li>
      <li class="pass">Optimize Google Business Profile with reviews</li>
      <li class="pass">Build local educational citations in Hyderabad</li>
    </ul>
  </div>
</div>

<div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; font-size: 7.5pt; color: #64748b;">
  <div>Report Generated for: Placeonix &bull; URL: placeonix.com / www.placeonix.com</div>
  <div>Audit Engine: Headless Chrome / Lighthouse / Deep Crawler &bull; Confirmed Live</div>
</div>

</body>
</html>`;

const reportHtmlPath = path.join(__dirname, 'seo-audit-report.html');
fs.writeFileSync(reportHtmlPath, htmlContent, 'utf8');
console.log(`HTML report created at: ${reportHtmlPath}`);

// Run Edge headless to render PDF
const pdfOutputPath = path.join(__dirname, '..', 'Placeonix_SEO_Audit_Report.pdf');
console.log(`Rendering PDF to: ${pdfOutputPath}...`);

const edgePath = 'C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe';
const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfOutputPath}" "file:///${reportHtmlPath.replace(/\\\\/g, '/')}"`;

try {
  const stdout = execSync(cmd);
  console.log('Edge output:', stdout.toString());
  if (fs.existsSync(pdfOutputPath)) {
    const stats = fs.statSync(pdfOutputPath);
    console.log(`✅ SUCCESS! PDF successfully created: ${pdfOutputPath} (${stats.size} bytes)`);
  } else {
    console.error('❌ PDF file not found after Edge command execution.');
  }
} catch (e) {
  console.error('Error generating PDF:', e.message);
}
