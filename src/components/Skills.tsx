import { skills } from '../data/resumeData';

export default function Skills() {
  const groups = [
    { title: 'Frontend', values: skills.frontend, tone: 'cyan' },
    { title: 'Backend', values: skills.backend, tone: 'emerald' },
    { title: 'Databases', values: skills.databases, tone: 'amber' },
    { title: 'Tools, APIs & Methodologies', values: [...skills.tools, ...skills.other], tone: 'violet' },
  ];

  const chipClassByTone: Record<string, string> = {
    cyan: 'bg-cyan-100/80 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200/70 dark:border-cyan-800/70',
    emerald: 'bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-800/70',
    amber: 'bg-amber-100/80 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200/70 dark:border-amber-800/70',
    violet: 'bg-violet-100/80 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border-violet-200/70 dark:border-violet-800/70',
  };

  return (
    <section id="skills" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group) => (
            <article
              key={group.title}
              className="h-full rounded-2xl border border-slate-200/70 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/80 p-6 md:p-7 shadow-[0_16px_55px_-28px_rgba(2,132,199,0.45)]"
            >
              <h3 className="section-title text-2xl font-semibold mb-5">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.values.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${chipClassByTone[group.tone]}`}
                    >
                      {skill}
                    </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <article className="rounded-2xl border border-slate-200/70 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/80 p-6 md:p-7">
            <h3 className="section-title text-2xl font-semibold text-center mb-5">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg px-3 py-1.5 text-sm font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {skill}
                  </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}