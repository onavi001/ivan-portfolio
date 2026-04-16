import { personalInfo, socialLinks } from '../data/resumeData';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import resume from '../assets/resume.pdf';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-4 mx-auto max-w-3xl rounded-xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg px-4 py-2 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">
            GLOBAL AVAILABILITY: Remote-ready across the Americas and Europe time zones.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 dark:border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 backdrop-blur-xl px-6 py-10 md:px-12 md:py-14 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)]">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="flex justify-center flex-wrap gap-2 mb-6">
              <span className="rounded-full border border-emerald-300/60 dark:border-emerald-700/50 bg-emerald-100/80 dark:bg-emerald-950/60 px-4 py-1 text-xs font-bold tracking-wide text-emerald-700 dark:text-emerald-300">
                OPEN TO REMOTE ROLES
              </span>
              <span className="rounded-full border border-cyan-300/60 dark:border-cyan-700/50 bg-cyan-100/80 dark:bg-cyan-950/60 px-4 py-1 text-xs font-bold tracking-wide text-cyan-700 dark:text-cyan-300">
                8+ YEARS EXPERIENCE
              </span>
              <span className="rounded-full border border-violet-300/60 dark:border-violet-700/50 bg-violet-100/80 dark:bg-violet-950/60 px-4 py-1 text-xs font-bold tracking-wide text-violet-700 dark:text-violet-300">
                REACT 19 + TYPESCRIPT EXPERT
              </span>
              <span className="rounded-full border border-amber-300/60 dark:border-amber-700/50 bg-amber-100/80 dark:bg-amber-950/60 px-4 py-1 text-xs font-bold tracking-wide text-amber-700 dark:text-amber-300">
                ACCESSIBILITY & DESIGN SYSTEMS
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-[0_2px_24px_rgba(56,189,248,0.2)]">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-3xl text-slate-100 mb-5 font-semibold">
              {personalInfo.title}
            </p>
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <a
                href={resume}
                download="Ivan_Resume.pdf"
                className="inline-flex items-center rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 transition shadow-lg shadow-emerald-700/20"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center rounded-xl border border-slate-300/80 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 font-semibold px-6 py-3 transition hover:border-emerald-500/60"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </div>

            <div className="flex gap-3 justify-center mb-8">
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

            <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center text-sm md:text-base text-slate-300">
              <p className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}