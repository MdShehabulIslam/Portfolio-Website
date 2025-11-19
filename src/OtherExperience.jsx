import { otherExperience } from "./resume-data";

export default function OtherExperience() {
  if (!otherExperience.length) return null;
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Other Experience
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {otherExperience.map((role) => (
          <article
            key={`${role.company}-${role.role}`}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-slate-50">
                {role.role}
              </h4>
              <p className="text-xs text-slate-300">
                {role.company} - {role.location}
              </p>
              <p className="text-[11px] font-medium text-slate-400">
                {role.start} - {role.end}
              </p>
            </div>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              {role.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-none rounded-full bg-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
