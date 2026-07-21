# Full checklist — status

This list is mostly a digital-marketing/SEO agency retainer scope (the kind
sold as a monthly package), not a one-time codebase task list. Sorted
honestly into three buckets:

- **✅ Done** — real code/content change made in this repo, verified.
- **🔧 Needs your account access** — the work itself would be trivial, but it
  requires logging into a Google/Meta/hosting account this agent doesn't
  have and shouldn't be asked to create on your behalf.
- **🔁 Recurring service, not a one-time task** — "weekly monitoring,"
  "monthly reports" describe an ongoing process. A chat session can produce
  the *first* instance of a report/audit, never promise to keep doing it
  every week forever. Flagging these honestly rather than pretending a
  single pass satisfies a recurring commitment.

---

## Website Technical SEO

| Item | Status |
|---|---|
| Technical SEO audit | ✅ Done — see 
| Fix crawl and indexing issues | ✅ Done |
| Internal linking optimization | ✅ Done |
| Broken link fixes | ✅ Done |
| Technical SEO reports | ✅ Done — this doc + the others in `docs/audit/` |
| Competitor SEO benchmarking | ✅ Done (one-time) — see `COMPETITOR-BENCHMARK.md` |
| Topical authority architecture | ✅ Done |
| Site health monitoring | 🔁 Recurring — first-instance baseline delivered; ongoing checks need Search Console or an uptime tool |
| Keyword rank tracking | 🔧 Needs Search Console / a paid rank tracker (Ahrefs/SEMrush) |

## Website Performance Optimization

| Item | Status |
|---|---|
| Improve Core Web Vitals | ✅ Done |
| Website speed optimization | ✅ Done |
| Mobile optimization | ✅ Done |
| Mobile-first optimization | ✅ Done |
| Performance monitoring | 🔁 Recurring — baseline (Lighthouse) delivered, ongoing tracking needs Search Console's CWV report |
| Monthly performance audits | 🔁 Recurring — this session = month-1 data point, not a standing commitment |

## Google Analytics & Tracking

| Item | Status |
|---|---|
| GA4 setup | 🔧 Needs a Google account to create the GA4 property + Measurement ID. **Once you have the ID**, I can wire the tracking snippet into all 28 pages in minutes — that part IS code work. |
| Lead form conversion tracking | 🔧 Depends on GA4 existing first (needs the Measurement ID above); the form-submit event hook itself is code I can add once GA4 exists |
| Event tracking | 🔧 Same — depends on GA4 existing |
| Funnel tracking | 🔧 Same |
| Conversion verification | 🔧 Needs live GA4 data to verify against |
| Monthly analytics reporting | 🔁 Recurring, and depends on GA4 existing |
| Google Search Console setup | 🔧 Needs your Google account + DNS/HTML-file domain verification |

## Google Search Console

| Item | Status |
|---|---|
| Coverage issue monitoring, index monitoring, crawl issue fixes, search performance monitoring, Search Console reports | 🔧 All depend on Search Console being set up (your account) first. `robots.txt` + `sitemap.xml` are already correctly configured for it to consume the moment it's connected. |

## Schema Implementation (structured data)

| Item | Status |
|---|---|
| Organization | ✅ Already present on homepage (`EducationalOrganization` + `LocalBusiness` combined type, real address/phone/email) |
| Local Business | ✅ Same block as above — `LocalBusiness` type included |
| Course | ✅ Present and valid on all 22 course/combo pages |
| FAQ / FAQPage | ✅ Present and valid on all 24 content pages (7-20 Q&As each) |
| Review Schema | ❌ **Not done, deliberately.** No real, consented student reviews exist yet on the site (flagged since Part 2 of the earlier rebuild). Google's guidelines explicitly penalize fabricated `Review`/`AggregateRating` schema. This gets added the moment real reviews exist — not before. |

## AI Search Optimization (AEO/GEO)

| Item | Status |
|---|---|
| AI crawler configuration (GPTBot, Google-Extended, PerplexityBot, ClaudeBot access) | ✅ **Done this session** — `robots.txt` updated with explicit `Allow` rules for the major AI crawlers |
| llms.txt implementation | ✅ **Done this session** — created `/llms.txt` summarizing the site, courses and key facts for LLM consumption |
| Entity optimization | 🟡 Partial — JSON-LD already names the org/courses clearly; couldn't add `sameAs` links to real social profiles because none were provided (flagging rather than inventing fake social URLs) |
| Knowledge Graph optimization | 🔧 Requires claiming/verifying a Google Knowledge Panel — needs Google account access |
| Structured data optimization | ✅ Reviewed as part of the schema audit above — all valid, no changes needed beyond what's listed |
| AI citation optimization | 🟡 Partial — good structured data + FAQ content is what actually drives this; there's no separate "AI citation" toggle to configure |
| Share of Voice tracking, Competitor AI benchmarking | 🔧 Needs a paid AI-visibility tool (e.g. Profound, Otterly) — doesn't exist yet as a self-serve free option |
| AI visibility monitoring | 🔁 Recurring, same tooling gap as above |

## Google Business Profile Technical Setup

| Item | Status |
|---|---|
| Initial GBP setup, optimization, local SEO configuration, profile management, performance tracking | 🔧 All require your Google account to claim/manage the actual GBP listing. Nothing here is a codebase task. |

## Website Security

| Item | Status |
|---|---|
| Malware scanning, firewall (WAF), 24×7 monitoring, uptime monitoring, backup verification, security verification | 🔧 These require a hosting-level or third-party security service (Cloudflare, Sucuri, UptimeRobot, etc.) tied to your account and the production domain — not something addable to a static site's source code. **What I can and did check**: `vercel.json` already sets HSTS, X-Frame-Options, nosniff and a Permissions-Policy header (confirmed present from the original audit at the start of this engagement). |

## Landing Page Development

| Item | Status |
|---|---|
| Course landing pages | ✅ Done — all 22 exist |
| Dedicated/campaign landing pages | 🟡 Partial — the 22 course pages ARE dedicated landing pages; if you mean paid-ad-specific variants (different headline/offer per campaign), that's new pages I can build once you tell me which campaigns |
| Conversion optimization (CRO) | ✅ Done — see CRO section below |
| Landing page optimization | ✅ Done as part of the SEO/mobile passes |

## Conversion Rate Optimization (CRO)

| Item | Status |
|---|---|
| Lead form optimization | ✅ Done — validated required-field order, mobile stacking fixed, WhatsApp added as a lower-friction alternative channel |
| Conversion tracking | 🔧 Needs GA4 (see above) |
| Funnel optimization, landing page optimization | ✅ Done within what's buildable without real conversion data |
| CRO improvements | ✅ Ongoing items already applied (WhatsApp CTA, sticky mobile CTA bar, clear pricing-TODOs rather than fake urgency) |

## Local SEO

| Item | Status |
|---|---|
| Hyderabad local SEO | ✅ Done — geo meta tags, `PostalAddress` schema, "Hyderabad" in every title, Financial District address sitewide |
| Hyper-local SEO ("Ameerpet" specifically) | ❌ **Not done, deliberately.** The keyword research flagged "software course in Ameerpet" as a target term, but Placeonix's real address is Financial District — adding "Ameerpet" copy without confirming it's an accurate service area would be misleading. Flagged in `COMPETITOR-BENCHMARK.md` already; needs your confirmation. |
| Google Business optimization, local keyword optimization | 🔧 GBP part needs your account (see above); on-page local keyword use is done |
| Location-specific pages | 🟡 Not built — would only make sense if Placeonix serves multiple named localities; flagging as a question, not assuming |

## Weekly Technical Monitoring / Monthly Technical Reports

| Item | Status |
|---|---|
| Everything in both sections | 🔁 **All recurring by definition.** A chat session can produce one report/audit (which this engagement has, repeatedly — see `docs/audit/`), but "weekly" and "monthly" describe a standing commitment that needs either a scheduled process on your side or a paid monitoring service. I'm not going to claim these as "done" when what's actually true is "one baseline instance exists." |

---

## What's genuinely new/actionable this round

Executed below: AI crawler `robots.txt` rules + `llms.txt`. Everything else
marked ✅ was already done in earlier sessions (see `FINAL-REPORT.md`,
`SEO-PERFORMANCE-CHECKLIST.md`, `COMPETITOR-BENCHMARK.md`, `mobile-report.md`).
