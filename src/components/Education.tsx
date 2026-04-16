export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="h-full rounded-2xl border border-slate-200/70 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/80 p-7">
            <h2 className="section-title text-3xl font-semibold mb-5">Education</h2>
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800 px-3 py-1 text-xs font-bold tracking-wide">
                2015 - 2019
              </span>
                <h3 className="section-title text-2xl font-semibold">
                  Bachelor of Engineering in Mechatronics
              </h3>
              <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
                  CETI Colomos - Guadalajara, Mexico
              </p>
            </div>
          </article>

          <article className="h-full rounded-2xl border border-slate-200/70 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/80 p-7">
            <h2 className="section-title text-3xl font-semibold mb-5">Languages</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="section-title text-lg font-medium">Spanish</p>
                  <span className="rounded-full px-3 py-1 text-xs font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">Native</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="section-title text-lg font-medium">English</p>
                  <span className="rounded-full px-3 py-1 text-xs font-bold bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">Advanced</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}