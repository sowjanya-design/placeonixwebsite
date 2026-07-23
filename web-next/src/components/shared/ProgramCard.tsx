import Link from 'next/link';
import type { Course } from '@/lib/types';

const TAG_CLASS: Record<string, string> = {
  'Very High Demand': 'pt-slate',
  'High Demand': 'pt-slate',
  'Growing Demand': 'pt-slate',
  'Core Module': 'pt-slate',
  'SAP Core': 'pt-warm',
  Technology: 'pt-slate',
  Design: 'pt-warm',
};

const DEMAND_TAG: Record<string, string> = {
  'sap-btp': 'Very High Demand',
  'sap-cpi': 'Very High Demand',
  'sap-capm': 'Very High Demand',
  'sap-rap': 'High Demand',
  'sap-ui5-fiori': 'Growing Demand',
  'sap-abap': 'Core Module',
  'sap-fico': 'SAP Core',
  'sap-mm': 'SAP Core',
  'sap-sd': 'SAP Core',
  'sap-basis': 'SAP Core',
  'ui-ux-design': 'Design',
};

function iconFor(slug: string) {
  const map: Record<string, string> = {
    'sap-btp': '☁️ BTP + HANA', 'sap-cpi': '🔗 Flows + APIs', 'sap-capm': '💻 Node + CDS',
    'sap-rap': '⚙️ OData v4', 'sap-ui5-fiori': '🖥️ Fiori Apps', 'sap-abap': '🏢 RICEF + CDS',
    'sap-fico': '📊 Finance', 'sap-mm': '📦 Supply Chain', 'sap-sd': '📈 Sales', 'sap-basis': '🛠️ IT Admin',
    'data-science': '🐍 Python + ML', 'cloud-computing': '☁️ AWS + Azure', 'full-stack': '💻 MERN / Java',
    'java-backend': '☕ Java + Spring', 'cyber-security': '🔐 AI + Web', 'ui-ux-design': '🎨 All Levels',
  };
  return map[slug] || '';
}

export default function ProgramCard({ course }: { course: Course }) {
  const isCombo = course.category === 'combo';
  const isHighlight = course.slug === 'sap-full-stack-program';
  const tag = isCombo ? 'Combo Package' : (DEMAND_TAG[course.slug] || 'Technology');
  const tagClass = isCombo ? '' : (TAG_CLASS[tag] || '');
  const title = course.h1.replace(' Training', '').replace(' Combo', '');
  const shortLead = course.lead.split(/(?<=[.!?])\s/)[0];

  if (isHighlight) {
    return (
      <Link className="prog-card sap-highlight reveal" href={`/courses/${course.category}/${course.slug}`}>
        <div className="sap-inner">
          <div className="sap-icon">🏆</div>
          <div>
            <span className="prog-tag" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', marginBottom: '.7rem' }}>Highest Demand — 5 Modules</span>
            <h3>{title}</h3>
            <p>{shortLead}</p>
            <div className="prog-meta">
              <span>⏱ {course.badges[0]}</span><span>☁️ SAP Cloud</span><span>💻 Modern Dev Stack</span><span>🎯 Placement Support</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      className={`prog-card reveal${isCombo ? ' combo-card' : ''}${course.slug === 'sap-integration-expert' || course.slug === 'ai-data-science' ? ' combo-featured' : ''}`}
      href={`/courses/${course.category}/${course.slug}`}
    >
      <span className={`prog-tag ${tagClass}`}>{tag}</span>
      <h3>{title}</h3>
      <p>{shortLead}</p>
      <div className="prog-meta">
        <span>⏱ {course.badges[0]}</span>
        {!isCombo && iconFor(course.slug) && <span>{iconFor(course.slug)}</span>}
      </div>
    </Link>
  );
}
