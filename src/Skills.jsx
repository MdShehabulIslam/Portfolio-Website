import { skills } from "./resume-data";

export default function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-12" aria-labelledby="skills">
      <div className="space-y-6">
        <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {group.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
