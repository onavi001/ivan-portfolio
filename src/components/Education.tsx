export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 shadow-md">
            <p className="text-sm text-gray-600 dark:text-gray-400">2015 – 2019</p>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-2">
              Bachelor of Engineering in Mechatronics
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 mt-1">
              CETI Colomos – Guadalajara, Mexico
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Languages
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-xl font-medium text-gray-900 dark:text-white">Spanish</p>
              <p className="text-gray-600 dark:text-gray-400">Native</p>
            </div>
            <div>
              <p className="text-xl font-medium text-gray-900 dark:text-white">English</p>
              <p className="text-gray-600 dark:text-gray-400">Advanced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}