import { experience } from "./resume-data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-10 sm:py-12"
      aria-labelledby="experience"
    >
      <div className="space-y-6">
        <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((role) => (
            <article
              key={`${role.company}-${role.role}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    {role.role}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {role.company} - {role.location}
                  </p>
                </div>
                <p className="text-xs font-medium text-slate-400">
                  {role.start} - {role.end}
                </p>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {role.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
