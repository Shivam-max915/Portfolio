const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Techknowit",
      location: "Akluj, India",
      period: "2026",
      description: "Gained hands-on industry experience in web development, working on real-world projects and collaborating with the development team.",
      responsibilities: [
        "Developed and maintained responsive web applications",
        "Implemented user interface designs using HTML, CSS, and JavaScript",
        "Collaborated with team members on project requirements",
        "Debugged and resolved issues to improve application performance",
        "Learned and applied best practices in software development"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="bg-darker p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-3 md:mt-0 text-right">
                    <p className="text-purple-400 font-medium">{exp.period}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
