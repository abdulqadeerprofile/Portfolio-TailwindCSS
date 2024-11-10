export default function Contact() {
    return (
      <main className="pt-20">
        <section className="px-4 py-24 min-h-[60vh]">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-slate-400 mb-12">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
            
            <form className="space-y-6 mb-12">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                Send Message
              </button>
            </form>
  
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-slate-400">abdulqadeerprofile@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-slate-400">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }