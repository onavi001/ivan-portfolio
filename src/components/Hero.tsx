import { personalInfo, socialLinks } from '../data/resumeData';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          {personalInfo.name}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
          {personalInfo.title}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {personalInfo.summary}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="/path-to-your-cv.pdf" // Cambia por tu PDF real o quita si no quieres
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-md text-gray-600 dark:text-gray-400">
          📍 {personalInfo.location} | 📞 {personalInfo.phone} | ✉️ {personalInfo.email}
        </p>
      </div>
    </section>
  );
}