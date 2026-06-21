const Education = () => {
  const education = [
    {
      degree: "Diploma in Computer Science",
      field: "Computer Science & Engineering",
      institution: "Sanjay Ghodawat Institute",
      year: "2024 - 2027",
      description: "Pursuing a comprehensive diploma program focusing on software development, web technologies, programming fundamentals, and computer systems architecture."
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-darker"></div>
              {index !== education.length - 1 && (
                <div className="absolute left-[7px] top-4 w-0.5 h-full bg-gray-800"></div>
              )}
              <div className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-blue-400 font-medium text-sm mt-1 sm:mt-0">{edu.year}</span>
                </div>
                <p className="text-purple-400 font-medium mb-2">{edu.field}</p>
                <p className="text-gray-300 font-semibold mb-3">{edu.institution}</p>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
