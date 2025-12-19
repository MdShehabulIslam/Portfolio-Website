import { motion } from "framer-motion";
import { skills } from "../../data/resume-data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 py-10 sm:py-12"
      aria-labelledby="skills"
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
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Skills
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-900/50 dark:hover:shadow-slate-900/50"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-50 transition-colors group-hover:bg-sky-50 dark:bg-slate-800/50 dark:group-hover:bg-sky-900/10" />

              <div className="relative">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + itemIndex * 0.05,
                        duration: 0.3,
                      }}
                      className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 transition-colors group-hover:bg-sky-100 group-hover:text-sky-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-sky-900/30 dark:group-hover:text-sky-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
