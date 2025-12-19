import { motion } from "framer-motion";
import { education } from "../../data/resume-data";
export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-28 py-10 sm:py-12"
      aria-labelledby="education"
    >
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl"
        >
          Education
        </motion.h2>
        <div className="space-y-4">
          {education.map((item, index) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-slate-100/60 p-4 dark:border-slate-800 dark:bg-slate-900/60 sm:p-5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {item.school} - {item.location}
                  </p>
                </div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {item.start} - {item.end}
                </p>
              </div>
              <p className="mt-2 text-sm font-medium text-sky-600 dark:text-sky-300">
                GPA: {item.gpa}
              </p>
              {item.details && item.details.length > 0 && (
                <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 flex-none rounded-full bg-sky-600 dark:bg-sky-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
