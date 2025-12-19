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
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-100/60 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 sm:min-w-[230px]"
      >
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
      </motion.div>
    </section>
  );
}
