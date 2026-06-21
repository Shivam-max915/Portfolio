const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-2 border border-gray-800">
              <img 
                src="/Shivam.jpg" 
                alt="Shivam Somnath Waghe" 
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Web Developer Based in India</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Hi, I'm Shivam Somnath Waghe, a passionate web developer currently pursuing a Diploma in Computer Science at Sanjay Ghodawat Institute. 
              I love building modern, responsive web applications and turning ideas into reality through code.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With hands-on experience from my internship at Techknowit and personal projects like the Resort Management System and Online Voting System, 
              I'm continuously learning and improving my skills in web development.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-darker p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-gradient mb-1">3</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="bg-darker p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-gradient mb-1">10+</div>
                <div className="text-gray-400 text-sm">Technologies Learned</div>
              </div>
              <div className="bg-darker p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-gradient mb-1">1</div>
                <div className="text-gray-400 text-sm">Internship Completed</div>
              </div>
              <div className="bg-darker p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-gradient mb-1">2024-2027</div>
                <div className="text-gray-400 text-sm">Diploma Pursuing</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Let's Talk
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Download Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
