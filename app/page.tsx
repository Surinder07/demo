export default function Page() {
  return (
    <>
      {/* Top bar */}
      <div className="brand-gradient text-white text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center">
          🎉 Admissions Open • 6–12 Week Cohorts • Live + Recordings • 95% Placements
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/20 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full brand-gradient shadow-[0_0_18px_rgba(56,189,248,.35)]" />
            <span className="font-extrabold tracking-tight text-lg">
              <span className="text-white">Next</span> <span className="text-gradient">Boolean</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#courses" className="hover:text-white">Courses</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#placements" className="hover:text-white">Placements</a>
            <a href="#contact" className="px-4 py-2 rounded-xl brand-gradient text-white font-semibold">Enroll</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
              Limited seats — apply now
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Become <span className="text-gradient">Job-Ready</span> with NextBoolean
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Instructor-led cohorts with live sessions, recordings, coding labs and placement support.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#courses" className="rounded-xl px-5 py-3 font-semibold brand-gradient text-white shadow-[0_0_18px_rgba(56,189,248,.35)]">Explore Courses</a>
              <a href="#contact" className="rounded-xl px-5 py-3 font-semibold border border-white/10 hover:border-white/30">Free Demo</a>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm">
              <div><div className="text-3xl font-extrabold text-white">95%</div><div className="text-slate-400">Placement record</div></div>
              <div><div className="text-3xl font-extrabold text-white">10k+</div><div className="text-slate-400">Learners</div></div>
              <div><div className="text-3xl font-extrabold text-white">200+</div><div className="text-slate-400">Hiring partners</div></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="aspect-[4/3] w-full rounded-xl brand-gradient grid place-items-center">
                <div className="text-center text-white/90">
                  <svg className="mx-auto mb-3" width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="12" rx="2" stroke="white" strokeOpacity=".9" strokeWidth="1.2" />
                    <path d="M3 17h18v2H3z" fill="white" fillOpacity=".85" />
                    <circle cx="8" cy="9" r="1" fill="white" />
                    <rect x="10" y="8" width="8" height="2" fill="white" />
                    <rect x="6" y="12" width="12" height="2" fill="white" />
                  </svg>
                  <p className="text-sm">Live classes • Recordings • Coding labs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Popular Courses</h2>
          <p className="text-slate-400 mb-8">6 weeks to 3 months • Online & In-person • Placement support</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {["Java Full Stack", "React Web Dev", "AWS Cloud", "GCP Cloud", "Business Analyst", "Salesforce Dev", "ServiceNow Dev"].map((t, i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:shadow-[0_0_18px_rgba(37,99,235,.35)] transition">
                <h3 className="text-white font-semibold text-lg mb-1">{t}</h3>
                <p className="text-slate-400 text-sm">Hands-on projects, mock interviews, resume help and capstone.</p>
                <div className="mt-4 flex gap-3">
                  <a href="#contact" className="rounded-xl px-4 py-2 text-sm brand-gradient text-white">Enroll</a>
                  <a href="#contact" className="rounded-xl px-4 py-2 text-sm border border-white/10">Syllabus</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-16 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Learning That Gets You Hired</h2>
          <p className="text-slate-400 mb-8">Live sessions, recordings, hands-on labs, and placement prep.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[{ i: "🎥", t: "Live Sessions" }, { i: "📼", t: "Recordings" }, { i: "🧪", t: "Hands-on Labs" }, { i: "🧭", t: "Mock Interviews" }].map((f, idx) => (
              <article key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-3xl mb-2">{f.i}</div>
                <h3 className="font-semibold text-white">{f.t}</h3>
                <p className="text-slate-400 text-sm mt-1">Everything you need to be job-ready.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section id="placements" className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">95% Placements After Graduation</h2>
            <p className="text-slate-400 mt-3">We partner with 200+ companies. Get resume reviews, mock interviews and drives.</p>
            <ul className="mt-4 space-y-2 text-slate-400 text-sm list-disc list-inside">
              <li>1:1 mentorship • Resume workshops</li>
              <li>DSA & System Design practice</li>
              <li>On-campus & virtual drives</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div><div className="text-3xl font-extrabold text-white">95%</div><div className="text-xs text-slate-400">Placement</div></div>
              <div><div className="text-3xl font-extrabold text-white">10k+</div><div className="text-xs text-slate-400">Alumni</div></div>
              <div><div className="text-3xl font-extrabold text-white">200+</div><div className="text-xs text-slate-400">Partners</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Book a Free Demo</h2>
            <p className="text-slate-400 mt-2">Tell us your goals — we’ll recommend the right track and batch.</p>
          </div>
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input placeholder="Name" className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <input type="email" placeholder="Email" className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <div className="grid grid-cols-2 gap-4">
                <select className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Java Full Stack</option>
                  <option>React Web Development</option>
                  <option>AWS Cloud</option>
                  <option>GCP Cloud</option>
                  <option>Business Analyst</option>
                  <option>Salesforce Developer</option>
                  <option>ServiceNow Developer</option>
                </select>
                <select className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Online</option>
                  <option>In-person</option>
                </select>
              </div>
              <textarea rows={4} placeholder="Tell us about your goals" className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <button type="button" className="rounded-xl px-5 py-3 font-semibold brand-gradient text-white">Request a Call</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} NextBoolean</div>
          <nav className="flex justify-center gap-6 text-sm text-slate-400">
            <a href="#courses" className="hover:text-white">Courses</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#placements" className="hover:text-white">Placements</a>
          </nav>
          <div className="flex md:justify-end gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
