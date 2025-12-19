import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { profile } from "../../data/resume-data";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Data:", data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: "Message is required" })}
          className="w-full resize-none rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400"
          placeholder="How can I help you?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-slate-800 disabled:opacity-70 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-green-500/10 p-3 text-center text-sm font-medium text-green-600 dark:text-green-400"
        >
          Message sent successfully!
        </motion.div>
      )}
    </form>
  );
}

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
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 text-sm text-slate-600 dark:text-slate-300"
          >
            <div className="space-y-4">
              <p className="leading-relaxed">
                I am open to opportunities in software development, QA
                engineering, and front-end roles where I can contribute to
                building reliable, well-tested web applications.
              </p>
              <p className="leading-relaxed">
                Feel free to reach out if you&apos;d like to discuss roles,
                collaborations, or projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:bg-slate-100/50 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-800/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
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
                    className="text-sm font-medium text-slate-900 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:bg-slate-100/50 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-800/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
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
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                    {profile.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:bg-slate-100/50 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-800/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
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
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-900/50"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/5"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5"></div>
            <div className="relative">
              <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-slate-50">
                Send me a message
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
