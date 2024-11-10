export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 relative animate-pulse">
            Abdul Qadeer
          </h1>
          <p className="text-2xl text-slate-400 mb-8">
            React Native Developer
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" 
               className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              View My Work
            </a>
            <a href="/contact"
               className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:-translate-y-1 transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform">
              <div className="h-48 overflow-hidden">
                <img src={`/1.webp`} alt={`Project ${num}`} 
                     className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {num}</h3>
                <p className="text-slate-400 mb-4">
                  A modern android application built with React native and Expo
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React Native', 'Expo', 'TypeScript'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-300 hover:text-blue-500 transition-colors">View Project</a>
                  <a href="#" className="text-slate-300 hover:text-blue-500 transition-colors">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}