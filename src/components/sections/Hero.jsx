import { motion } from "framer-motion";
import { profile } from "../../data/resume-data";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 border-b border-slate-200 pb-10 dark:border-slate-800 sm:flex-row sm:items-start sm:justify-between">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl space-y-4"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400"
        >
          {profile.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base font-medium text-sky-500 dark:text-sky-300 sm:text-lg"
        >
          {profile.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base"
        >
          {profile.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-slate-50 shadow-sm transition hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            View projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-sky-300"
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-100/60 p-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 sm:min-w-[260px]"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Location
            </p>
            <p className="text-sm font-medium">{profile.location}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Phone
            </p>
            <a
              href={`tel:${profile.phone}`}
              className="text-sm font-medium text-sky-600 transition-colors duration-200 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
            >
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-sky-600 transition-colors duration-200 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              LinkedIn
            </p>
            <a
              href={`https://linkedin.com/in/${profile.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-sky-600 transition-colors duration-200 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
            >
              {profile.handle}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
