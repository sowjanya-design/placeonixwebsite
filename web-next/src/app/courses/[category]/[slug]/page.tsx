import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllCourseParams, getCourse, getCoursesByCategory, categoryLabels } from '@/lib/courses';
import MegaNav from '@/components/layout/MegaNav';
import SiteFooter from '@/components/layout/SiteFooter';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import BackToTop from '@/components/ui/BackToTop';
import MiniNav from '@/components/layout/MiniNav';
import CurriculumAccordion from '@/components/ui/CurriculumAccordion';
import CourseFaq from '@/components/shared/CourseFaq';
import type { Course } from '@/lib/types';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCourseParams();
}

type Props = { params: Promise<{ category: string; slug: string }> };

function resolveCourse(category: string, slug: string): Course {
  const course = getCourse(category, slug);
  if (!course) notFound();
  return course;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const course = resolveCourse(category, slug);
  return {
    title: course.meta.title,
    description: course.meta.description,
    keywords: course.meta.keywords,
    alternates: { canonical: `/courses/${course.category}/${course.slug}` },
    openGraph: {
      title: course.meta.ogTitle,
      description: course.meta.ogDescription,
      url: `https://www.placeonix.com/courses/${course.category}/${course.slug}`,
      images: ['https://www.placeonix.com/logo.jpeg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.meta.twitterTitle,
      description: course.meta.twitterDescription,
      images: ['https://www.placeonix.com/logo.jpeg'],
    },
  };
}

const FACT_ICON: Record<string, React.ReactNode> = {
  Duration: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>,
  Mode: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  Level: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20V12M11 20V6M18 20v-4" /></svg>,
  Prerequisite: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l2 2 4-4" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg>,
  Projects: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" /></svg>,
  Certification: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" /></svg>,
};

export default async function CoursePage({ params }: Props) {
  const { category, slug } = await params;
  const course = resolveCourse(category, slug);
  const siblings = getCoursesByCategory(course.category).filter((c) => c.slug !== course.slug).slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: course.courseName,
        description: course.courseDescription,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Placeonix',
          url: 'https://www.placeonix.com/',
          sameAs: 'https://www.placeonix.com/',
        },
        educationalLevel: 'Beginner to Advanced',
        inLanguage: 'en',
        courseMode: ['Onsite', 'Online'],
        locationCreated: { '@type': 'Place', name: 'Hyderabad, Telangana, India' },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['Onsite', 'Online'],
          courseWorkload: course.workload,
          location: {
            '@type': 'Place',
            name: 'Placeonix, Financial District, Hyderabad',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Kapil Kavuri Hub, No. 144, 9th Floor, 152, Financial District',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500032',
              addressCountry: 'IN',
            },
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.placeonix.com/' },
          { '@type': 'ListItem', position: 2, name: course.breadcrumbCategoryName, item: `https://www.placeonix.com/courses/${course.category}` },
          { '@type': 'ListItem', position: 3, name: course.h1, item: `https://www.placeonix.com/courses/${course.category}/${course.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: course.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MegaNav />
      <main>
        <section className="course-hero">
          <div className="inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href={`/courses/${course.category}`}>{course.breadcrumbCategoryName}</Link></li>
                <li aria-current="page">{course.h1}</li>
              </ol>
            </nav>
            <div className="course-hero-grid">
              <div>
                <span className="eyebrow">{course.eyebrow}</span>
                <h1>{course.h1}</h1>
                <p className="lead">{course.lead}</p>
                <div className="hero-badges">
                  {course.badges.map((b) => <span className="badge" key={b}>{b}</span>)}
                </div>
                <div className="hero-actions">
                  {course.heroActions.map((a) => (
                    <a key={a.href} href={a.href} className={a.text.includes('Book') ? 'btn btn-primary btn-lg' : 'btn btn-outline btn-lg'}>{a.text}</a>
                  ))}
                </div>
              </div>
              <aside className="hero-card" aria-label="Course snapshot">
                <h2>Course Snapshot</h2>
                <ul className="hero-facts">
                  {course.heroFacts.map((f) => (
                    <li key={f.label}>
                      <span className="fact-label">{FACT_ICON[f.label]}{f.label}</span>
                      <span>{f.value}</span>
                    </li>
                  ))}
                </ul>
                <a href="#enquire" className="btn btn-primary" style={{ width: '100%', marginTop: '1.1rem' }}>Request Brochure</a>
              </aside>
            </div>
          </div>
        </section>

        <MiniNav />

        {course.curriculumImage && (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="inner">
              <Image
                src={course.curriculumImage}
                alt={course.curriculumImageAlt}
                width={1400}
                height={784}
                style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)' }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </section>
        )}

        {course.intro.paragraphs.length > 0 && (
          <section className="section">
            <div className="inner prose" style={{ maxWidth: 820 }}>
              <div className="sec-hdr">
                <span className="eyebrow">Introduction</span>
                <h2>{course.intro.heading}</h2>
              </div>
              {course.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        )}

        {course.demand.cards.length > 0 && (
          <section className="section bg-soft">
            <div className="inner">
              <div className="sec-hdr">
                <span className="eyebrow">Industry Demand</span>
                <h2>{course.demand.heading}</h2>
                {course.demand.desc && <p className="sec-desc">{course.demand.desc}</p>}
              </div>
              <div className="grid grid-3">
                {course.demand.cards.map((c, i) => (
                  <div className="card" key={i}>
                    <div className="ico">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {course.careers && (
          <section className="section" id="careers">
            <div className="inner">
              <div className="sec-hdr">
                <span className="eyebrow">Careers &amp; Salary</span>
                <h2>{course.careers.heading}</h2>
                <p className="sec-desc">{course.careers.desc}</p>
              </div>
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead><tr><th>Role</th><th>Experience</th><th>Indicative Salary (India, per year)*</th></tr></thead>
                  <tbody>
                    {course.careers.rows.map((r, i) => (
                      <tr key={i}><td>{r.role}</td><td>{r.experience}</td><td>{r.salary}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="sec-desc" style={{ marginTop: '.8rem', fontSize: '.82rem' }}>{course.careers.footnote}</p>
            </div>
          </section>
        )}

        <section className="section bg-soft" id="curriculum">
          <div className="inner">
            <div className="sec-hdr">
              <span className="eyebrow">Curriculum</span>
              <h2>{course.curriculum.heading}</h2>
              <p className="sec-desc">{course.curriculum.desc}</p>
            </div>
            <CurriculumAccordion modules={course.curriculum.modules} groupName={`curriculum-${course.slug}`} />
          </div>
        </section>

        {course.tools.tags.length > 0 && (
          <section className="section">
            <div className="inner">
              <div className="sec-hdr">
                <span className="eyebrow">Tools Covered</span>
                <h2>{course.tools.heading}</h2>
              </div>
              <div className="tags">
                {course.tools.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </section>
        )}

        <section className="section bg-soft">
          <div className="inner grid grid-2" style={{ alignItems: 'start', gap: '2rem' }}>
            <div className="prose">
              <span className="eyebrow">Hands-on Projects</span>
              <h2>{course.projects.heading}</h2>
              <ul>
                {course.projects.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
              </ul>
            </div>
            <div className="prose">
              <span className="eyebrow">Eligibility</span>
              <h2>{course.eligibility.heading}</h2>
              <ul>
                {course.eligibility.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
              </ul>
            </div>
          </div>
        </section>

        {course.certPlacement.length > 0 && (
          <section className="section">
            <div className="inner grid grid-2" style={{ gap: '1.2rem' }}>
              {course.certPlacement.map((c, i) => (
                <div className="card" key={i}>
                  <div className="ico">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="section bg-soft">
          <div className="inner">
            <div className="sec-hdr">
              <span className="eyebrow">Student Reviews</span>
              <h2>What our {course.h1} learners say</h2>
            </div>
            <div className="placeholder">
              <strong>Reviews section ready for your real data.</strong> Add genuine, consented student reviews here (name, role, company, quote). Once real reviews exist we will add <code>Review</code> and <code>AggregateRating</code> schema — we deliberately avoid publishing invented reviews or ratings, which violate Google&apos;s guidelines and can trigger a penalty.
            </div>
          </div>
        </section>

        {siblings.length > 0 && (
          <section className="section">
            <div className="inner">
              <div className="sec-hdr">
                <span className="eyebrow">Explore More {categoryLabels[course.category]}</span>
                <h2>Related {categoryLabels[course.category].toLowerCase()} &amp; resources</h2>
              </div>
              <div className="grid grid-4">
                {siblings.map((s) => (
                  <Link className="card" href={`/courses/${s.category}/${s.slug}`} key={s.slug}>
                    <h3>{s.h1.replace(' Training', '')} →</h3>
                    <p>{s.lead.slice(0, 60)}…</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section" id="enquire">
          <div className="inner grid grid-2" style={{ gap: '1.2rem' }}>
            <div className="card">
              <div className="ico">📜</div>
              <h3>{course.enquire.heading || `Start your ${course.h1.replace(' Training', '')} journey`}</h3>
              <p>Contact our admissions team for the syllabus, next batch dates and a free counselling session.</p>
              <div style={{ display: 'flex', gap: '.8rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+919949494020" className="btn btn-outline btn-lg">Call +91 99494 94020</a>
                {course.enquire.whatsappHref && (
                  <a href={course.enquire.whatsappHref} className="btn btn-primary btn-lg" style={{ background: '#25D366', boxShadow: 'none' }}>Chat on WhatsApp</a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft" id="faq">
          <div className="inner">
            <div className="sec-hdr center">
              <span className="eyebrow">FAQs</span>
              <h2>{course.h1} — Frequently Asked Questions</h2>
            </div>
            <CourseFaq items={course.faq} />
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat message={`Hi Placeonix, I'm interested in the ${course.h1}.`} />
      <BackToTop />
      <div className="sticky-cta">
        <a href="tel:+919949494020" className="btn btn-outline">Call</a>
        <a href="#enquire" className="btn btn-primary">Book Free Demo</a>
      </div>
    </>
  );
}
