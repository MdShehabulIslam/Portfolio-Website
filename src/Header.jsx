import { profile } from "./resume-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Portfolio
          </p>
          <h1 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            {profile.name}
          </h1>
        </div>
        <nav className="hidden gap-4 text-sm text-slate-300 sm:flex">
          {[
            ["about", "About"],
            ["experience", "Experience"],
            ["projects", "Projects"],
            ["skills", "Skills"],
            ["education", "Education"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full px-3 py-1 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-slate-50"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
