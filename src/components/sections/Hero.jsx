import { profile } from "../../data/resume-data";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 border-b border-slate-200 pb-10 dark:border-slate-800 sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
          {profile.location}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          {profile.name}
        </h1>
        <p className="text-base font-medium text-sky-500 dark:text-sky-300 sm:text-lg">
          {profile.title}
        </p>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          {profile.summary}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-slate-50 shadow-sm transition hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-sky-300"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-100/60 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 sm:min-w-[230px]">
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Location
          </p>
          <p className="text-sm">{profile.location}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Phone
          </p>
          <a
            href={`tel:${profile.phone}`}
            className="text-sm text-sky-600 transition-colors duration-200 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >
            {profile.phone}
          </a>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Email
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-sky-600 transition-colors duration-200 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >
            {profile.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            LinkedIn
          </p>
          <a
            href={`https://linkedin.com/in/${profile.handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sky-600 transition-colors duration-200 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >
            {profile.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
