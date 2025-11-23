import { profile } from "../../data/resume-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/90 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-[11px] text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
