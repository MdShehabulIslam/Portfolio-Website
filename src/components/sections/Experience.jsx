import { motion } from "framer-motion";
import { experience } from "../../data/resume-data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 py-10 sm:py-12"
      aria-labelledby="experience"
    >
      <div className="space-y-6">
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
                d="M7.5 5.25A3.25 3.25 0 0110.75 2h2.5A3.25 3.25 0 0116.5 5.25h.25A2.75 2.75 0 0119.5 8v8.25a2.75 2.75 0 01-2.75 2.75h-9.5A2.75 2.75 0 014.5 16.25V8a2.75 2.75 0 012.75-2.75h.25zm3.25-1.75a1.75 1.75 0 00-1.75 1.75h5.5a1.75 1.75 0 00-1.75-1.75h-2.5zM6 8v8.25c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75V8h-11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-900/50 dark:hover:shadow-slate-900/50 sm:p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-50 transition-colors group-hover:bg-sky-50 dark:bg-slate-800/50 dark:group-hover:bg-sky-900/10" />

              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {role.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span>{role.company}</span>
                    <span className="text-slate-300 dark:text-slate-600">
                      •
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {role.location}
                    </span>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {role.start} - {role.end}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {role.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-500 dark:bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
