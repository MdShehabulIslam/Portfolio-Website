import { motion } from "framer-motion";
import { projects } from "../../data/resume-data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 py-10 sm:py-12"
      aria-labelledby="projects"
    >
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl"
        >
          Projects
        </motion.h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-100/60 p-4 dark:border-slate-800 dark:bg-slate-900/60 sm:p-5"
            >
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {project.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 flex-none rounded-full bg-sky-600 dark:bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
