import { profile } from "./resume-data";

export default function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-12" aria-labelledby="contact">
      <div className="space-y-6">
        <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Contact
        </h2>
        <div className="grid gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              I am open to opportunities in software development, QA
              engineering, and front-end roles where I can contribute to
              building reliable, well-tested web applications.
            </p>
            <p>
              Feel free to reach out if you'd like to discuss roles,
              collaborations, or projects.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
            <div>
              <p className="text-xs font-medium text-slate-400">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-sky-300 hover:text-sky-200"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Phone</p>
              <p>{profile.phone}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Location</p>
              <p>{profile.location}</p>
            </div>
            <p className="pt-1 text-[11px] text-slate-400">
              References available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
