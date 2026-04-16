import { projects, additionalGithubProjects } from '../data/resumeData';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16">
          Projects
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 text-lg">
          Featured engineering work focused on product thinking, scalable frontend architecture, and developer tooling.
        </p>

        <div className="mb-14 rounded-3xl border border-slate-200/70 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/80 p-8 md:p-10 shadow-[0_20px_70px_-30px_rgba(16,185,129,0.45)]">
          <p className="text-sm font-bold tracking-[0.18em] text-emerald-600 dark:text-emerald-300 uppercase mb-4">
            Featured Case Study
          </p>
          <h3 className="section-strong text-3xl md:text-4xl font-bold mb-4">
            Mi Dieta Ecosystem: Product + Platform + Design System
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mb-8">
            A complete ecosystem I built across three repositories: a production frontend for meal planning,
            a modular REST API with Supabase-backed catalog logic, and a reusable React component library powering
            modern UI patterns and accessibility standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <article className="rounded-xl border border-rose-200/80 dark:border-rose-900/80 bg-rose-50/70 dark:bg-rose-950/30 p-4">
              <p className="text-xs font-bold tracking-wide text-rose-700 dark:text-rose-300 uppercase mb-2">Problem</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Nutrition planning tools are often fragmented: weak meal generation logic, disconnected tracking, and poor developer ergonomics.
              </p>
            </article>
            <article className="rounded-xl border border-cyan-200/80 dark:border-cyan-900/80 bg-cyan-50/70 dark:bg-cyan-950/30 p-4">
              <p className="text-xs font-bold tracking-wide text-cyan-700 dark:text-cyan-300 uppercase mb-2">Architecture</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Frontend app + Express/Supabase API + reusable design system package, connected through typed contracts and deployment-ready workflows.
              </p>
            </article>
            <article className="rounded-xl border border-emerald-200/80 dark:border-emerald-900/80 bg-emerald-50/70 dark:bg-emerald-950/30 p-4">
              <p className="text-xs font-bold tracking-wide text-emerald-700 dark:text-emerald-300 uppercase mb-2">Outcomes</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Production-ready experience, resilient meal-slot generation, reusable accessibility-first components, and faster product iteration.
              </p>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <a
              href="https://mi-dieta.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-200 dark:border-cyan-800 bg-cyan-50/80 dark:bg-cyan-950/40 p-4 hover:-translate-y-0.5 transition"
            >
              <p className="text-sm text-cyan-700 dark:text-cyan-300 font-bold uppercase tracking-wide">Frontend</p>
              <p className="mt-2 text-slate-900 dark:text-white font-semibold">Mi Dieta Live App</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Weekly plans, nutrition flow, smart slot generation.</p>
            </a>

            <a
              href="https://github.com/onavi001/mi-dieta-api"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/40 p-4 hover:-translate-y-0.5 transition"
            >
              <p className="text-sm text-emerald-700 dark:text-emerald-300 font-bold uppercase tracking-wide">Backend</p>
              <p className="mt-2 text-slate-900 dark:text-white font-semibold">Mi Dieta API</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Express 5 + Supabase with auth, plans, and nutrition endpoints.</p>
            </a>

            <a
              href="https://www.npmjs.com/package/@navi01/react"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/80 dark:bg-violet-950/40 p-4 hover:-translate-y-0.5 transition"
            >
              <p className="text-sm text-violet-700 dark:text-violet-300 font-bold uppercase tracking-wide">UI Library</p>
              <p className="mt-2 text-slate-900 dark:text-white font-semibold">@navi01/react</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">38+ components, 4 templates, WCAG 2.2 AA-first.</p>
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/onavi001/mi-dieta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2 transition hover:border-emerald-500/60"
            >
              <Github className="w-4 h-4 mr-2" />
              Frontend Repository
            </a>
            <a
              href="https://github.com/onavi001/mi-dieta-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2 transition hover:border-emerald-500/60"
            >
              <Github className="w-4 h-4 mr-2" />
              Backend Repository
            </a>
            <a
              href="https://github.com/onavi001/navi-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2 transition hover:border-emerald-500/60"
            >
              <Github className="w-4 h-4 mr-2" />
              Navi UI Repository
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="h-full rounded-2xl border border-slate-200/70 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/80 p-7 shadow-[0_16px_55px_-28px_rgba(2,132,199,0.55)] backdrop-blur-sm transition hover:-translate-y-1"
            >
                <h3 className="section-title text-2xl font-semibold mb-4">
                  {project.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
              </p>

              {'highlights' in project && project.highlights && (
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((item) => (
                    <li key={item} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {'metrics' in project && project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-lg border border-emerald-200/70 dark:border-emerald-800/70 bg-emerald-50/70 dark:bg-emerald-950/30 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 text-center"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg px-3 py-1 text-sm font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-100/80 dark:bg-cyan-950/60 border border-cyan-200/70 dark:border-cyan-800/70"
                    >
                      {tech}
                    </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 transition"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {'liveLabel' in project && project.liveLabel ? project.liveLabel : 'Live Demo'}
                  </a>
                )}
                {'repo' in project && project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2 transition hover:border-emerald-500/60"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Repository
                  </a>
                )}
                {project.frontendRepo && (
                  <a
                    href={project.frontendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2 transition hover:border-emerald-500/60"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Frontend Repo
                  </a>
                )}
                {project.backendRepo && (
                  <a
                    href={project.backendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2 transition hover:border-emerald-500/60"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Backend Repo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {additionalGithubProjects.length > 0 && (
          <>
            <h3 className="section-title text-3xl font-semibold text-center mt-20 mb-12">
              Other GitHub Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalGithubProjects.map((project, index) => (
                <article key={index} className="h-full rounded-2xl border border-slate-200/70 dark:border-slate-800/90 bg-white/85 dark:bg-slate-950/80 p-7">
                  <h4 className="section-title text-xl font-semibold mb-3">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description || "Personal project exploring modern web technologies."}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-lg px-3 py-1 text-sm bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        {tech}
                        </span>
                    ))}
                  </div>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2 transition hover:border-emerald-500/60"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </article>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}