import type { Metadata } from 'next';
import Link from 'next/link';
import { getCoursesByCategory } from '@/lib/courses';
import MegaNav from '@/components/layout/MegaNav';
import SiteFooter from '@/components/layout/SiteFooter';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import BackToTop from '@/components/ui/BackToTop';
import ProgramCard from '@/components/shared/ProgramCard';

export const metadata: Metadata = {
  title: 'All Courses in Hyderabad | SAP, Technology & Combo Programs – Placeonix',
  description: 'Browse all 21 training programs at Placeonix, Hyderabad — 10 SAP courses, 6 technology courses (Data Science, Cloud, Full Stack, Java, Cybersecurity, UI/UX) and 5 bundled combo packages. Instructor-led with placement assistance.',
  alternates: { canonical: '/courses' },
};

export default function AllCoursesPage() {
  const sap = getCoursesByCategory('sap');
  const technology = getCoursesByCategory('technology');
  const combo = getCoursesByCategory('combo');

  return (
    <>
      <MegaNav />
      <main>
        <section className="course-hero" style={{ paddingBottom: '1.5rem' }}>
          <div className="inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Courses</li>
              </ol>
            </nav>
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Training Programs · Hyderabad</span>
              <h1>All Courses</h1>
              <p className="lead">SAP, technology programs and combo packages — pick your track and see the full curriculum. 21 instructor-led programs with real hands-on projects and placement assistance.</p>
            </div>
          </div>
        </section>

        <section className="section" id="sap-courses">
          <div className="inner">
            <div className="sec-hdr">
              <span className="eyebrow">SAP Courses</span>
              <h2>SAP Courses</h2>
              <p className="sec-desc">10 programs — cloud, functional and core modules for every SAP career path.</p>
            </div>
            <div className="prog-grid">
              {sap.map((course) => <ProgramCard course={course} key={course.slug} />)}
            </div>
          </div>
        </section>

        <section className="section bg-soft" id="technology-courses">
          <div className="inner">
            <div className="sec-hdr">
              <span className="eyebrow">Technology Courses</span>
              <h2>Technology Courses</h2>
              <p className="sec-desc">6 programs — Data Science, Cloud/DevOps, Full Stack, Java Backend, Cybersecurity and UI/UX Design.</p>
            </div>
            <div className="prog-grid">
              {technology.map((course) => <ProgramCard course={course} key={course.slug} />)}
            </div>
          </div>
        </section>

        <section className="section" id="combo-programs">
          <div className="inner">
            <div className="sec-hdr">
              <span className="eyebrow">Combo Programs</span>
              <h2>Combo Programs</h2>
              <p className="sec-desc">5 bundled packages — save more, learn more.</p>
            </div>
            <div className="prog-grid">
              {combo.map((course) => <ProgramCard course={course} key={course.slug} />)}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat message="Hi Placeonix, I'm interested in your SAP & IT training programs." />
      <BackToTop />
    </>
  );
}
