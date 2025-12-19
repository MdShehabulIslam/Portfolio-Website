import { motion } from "framer-motion";
import { otherExperience } from "../../data/resume-data";

export default function OtherExperience() {
  if (!otherExperience.length) return null;
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM9 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 019 15zm0-9a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 019 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-2xl">
          Other Experience
        </h3>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {otherExperience.map((role, index) => (
          <motion.article
            key={`${role.company}-${role.role}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-900/50 dark:hover:shadow-slate-900/50"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-50 transition-colors group-hover:bg-sky-50 dark:bg-slate-800/50 dark:group-hover:bg-sky-900/10" />

            <div className="relative flex flex-col gap-1">
              <h4 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                {role.role}
              </h4>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                <span>{role.company}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-slate-500 dark:text-slate-400">
                  {role.location}
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-sky-600 dark:text-sky-400">
                {role.start} - {role.end}
              </p>
            </div>

            <ul className="relative mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {role.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-sky-500 dark:bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
