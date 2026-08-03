import type { CurriculumModule } from "@/lib/types";

export default function CurriculumAccordion({
  modules,
  groupName,
}: {
  modules: CurriculumModule[];
  groupName: string;
}) {
  return (
    <div className="curriculum">
      {modules.map((m, i) => (
        // `name` groups these <details> as a native exclusive accordion —
        // opening one auto-closes the others, no JS needed (modern browsers).
        <details className="mod" name={groupName} key={i} open={m.open}>
          <summary>
            <span className="wk">{m.week}</span> {m.title}
          </summary>
          <ul>
            {m.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
