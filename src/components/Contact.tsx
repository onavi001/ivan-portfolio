import { socialLinks, personalInfo } from '../data/resumeData';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm currently open to new remote opportunities. Feel free to reach out!
        </p>

        <div className="flex justify-center gap-12 mb-12">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Mail className="w-6 h-6" />
            <span>{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Phone className="w-6 h-6" />
            <span>{personalInfo.phone}</span>
          </a>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <MapPin className="w-6 h-6" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition"
              aria-label={link.label}
            >
              <link.icon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}