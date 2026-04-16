import { socialLinks, personalInfo } from '../data/resumeData';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <article className="relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/80 p-8 md:p-12 shadow-[0_20px_70px_-30px_rgba(16,185,129,0.45)]">
          <div className="absolute -top-20 right-0 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="relative z-10">
            <div className="flex justify-center mb-5">
              <span className="rounded-full border border-emerald-300/60 dark:border-emerald-700/50 bg-emerald-100/80 dark:bg-emerald-950/60 px-4 py-1 text-xs font-bold tracking-wide text-emerald-700 dark:text-emerald-300">
                AVAILABLE FOR REMOTE OPPORTUNITIES
              </span>
            </div>

            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 text-center">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto text-center leading-relaxed">
              I am currently open to new remote opportunities. Feel free to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 p-4 inline-flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 hover:border-emerald-500/60 transition"
              >
                <Mail className="w-5 h-5" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 p-4 inline-flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 hover:border-emerald-500/60 transition"
              >
                <Phone className="w-5 h-5" />
                {personalInfo.phone}
              </a>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 p-4 inline-flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-5 h-5" />
                {personalInfo.location}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 transition shadow-lg shadow-emerald-700/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center rounded-xl border border-slate-300/80 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 font-semibold px-6 py-3 transition hover:border-emerald-500/60"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </a>
            </div>

            <div className="flex justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-500/60 transition"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}