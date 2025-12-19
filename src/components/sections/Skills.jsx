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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl"
        >
          Skills
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-slate-100/40 p-4 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {group.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
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
                    className="rounded-full bg-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
