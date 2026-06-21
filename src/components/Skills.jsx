const Skills = () => {
  const skills = {
    programming: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 70 }
    ],
    "web development": [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 85 }
    ]
  }

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div key={categoryIndex} className="bg-darker p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-6 capitalize text-blue-400">{category}</h3>
              <div className="space-y-5">
                {skillList.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
