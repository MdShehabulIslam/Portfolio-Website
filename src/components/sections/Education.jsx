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
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.182-.311a51.002 51.002 0 016.814-3.383.75.75 0 00-.722-1.34 52.51 52.51 0 00-6.814 3.383l-.34.18a.75.75 0 01-.707 0 50.009 50.009 0 00-2.96-1.562l-.003-.002A60.65 60.65 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-5.861 2.518.75.75 0 01-.666.066 47.878 47.878 0 00-5.861-2.518.75.75 0 01-.46-.71 48.45 48.45 0 01.387-1.068z" />
              <path d="M16.469 17.434a49.963 49.963 0 00-4.469 1.933 49.963 49.963 0 00-4.469-1.933c.36-.16.732-.303 1.11-.427a49.39 49.39 0 016.718 0c.378.124.75.267 1.11.427z" />
            </svg>
          </div>
          <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Education
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((item, index) => (
            <motion.article
              key={item.school}
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
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 text-sky-500 dark:text-sky-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item.school}</span>
                    <span className="text-slate-300 dark:text-slate-600">
                      •
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {item.start} - {item.end}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                  GPA: {item.gpa}
                </p>
                {item.details && item.details.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-500 dark:bg-sky-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
