import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-4 border-blue-600 hover:border-blue-700 transition-all duration-300
              bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 -ml-4
              hover:shadow-xl hover:-translate-y-1"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                    {job.company}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {job.period}
                  </span>
                  {job.location && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {job.location}
                    </p>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}