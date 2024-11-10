export default function About() {
    return (
      <main className="pt-20">
        <section className="px-4 py-24 min-h-[60vh]">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">About Me</h1>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-xl text-slate-400 mb-6">
                  I&apos;m an android developer passionate about creating beautiful, 
                  functional, and user-friendly android applications.
                </p>
                <p className="text-slate-300">
                  With over 1 year of experience in android development, I specialize 
                  in building modern applications using React Native, Expo, and Typescript.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['React', 'React Native', 'Expo', 'TypeScript', 'Rest API', 'Next JS'].map((skill) => (
                    <div key={skill} className="bg-slate-800 p-4 rounded-lg text-center font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }