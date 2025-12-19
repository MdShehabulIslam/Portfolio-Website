import { motion } from "framer-motion";
import { profile } from "../../data/resume-data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 py-10 sm:py-12"
      aria-labelledby="contact"
    >
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl"
        >
          Contact
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-3 text-sm text-slate-600 dark:text-slate-300"
          >
            <p>
              I am open to opportunities in software development, QA
              engineering, and front-end roles where I can contribute to
              building reliable, well-tested web applications.
            </p>
            <p>
              Feel free to reach out if you&apos;d like to discuss roles,
              collaborations, or projects.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-3 rounded-2xl border border-slate-200 bg-slate-100/60 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Phone
              </p>
              <p className="text-slate-700 dark:text-slate-200">
                {profile.phone}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Location
              </p>
              <p className="text-slate-700 dark:text-slate-200">
                {profile.location}
              </p>
            </div>
            <p className="pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              References available upon request.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
