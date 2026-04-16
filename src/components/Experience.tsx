import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <article
              key={index}
              className="relative rounded-2xl border border-slate-200/70 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/80 p-7 md:p-8 shadow-[0_16px_55px_-28px_rgba(2,132,199,0.55)] backdrop-blur-sm transition hover:-translate-y-1"
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-emerald-500 via-cyan-500 to-sky-500" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="section-title text-2xl font-semibold">
                    {job.title}
                  </h3>
                  <p className="text-base md:text-lg text-emerald-700 dark:text-emerald-300 font-semibold mt-1">
                    {job.company}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="inline-block rounded-full bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800 px-3 py-1 text-xs font-bold tracking-wide">
                    {job.period}
                  </span>
                  {job.location && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                      {job.location}
                    </p>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg px-3 py-1 text-sm font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}