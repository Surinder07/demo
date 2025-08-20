export default function Page() {
  const features = [
    { title: "Live + Recordings", desc: "Attend live, rewatch later. Every session is recorded." },
    { title: "Hands-on Projects", desc: "Real-world capstones to showcase in interviews." },
    { title: "Placement Support", desc: "Resume prep, mock interviews, and referrals." },
  ];

  const courses = [
    { title: "Java Full Stack", meta: "12 weeks • Online/In-person", list: ["Spring Boot, JPA", "Microservices", "Docker & CI/CD", "Mock interviews"] },
    { title: "React Web Dev", meta: "8 weeks • Online", list: ["Hooks & State", "Next.js", "Auth & APIs", "Deploy to Vercel"] },
    { title: "AWS Solutions", meta: "8 weeks • Online", list: ["EC2, S3, IAM", "Fargate & ECS", "CI/CD", "Monitoring"] },
    { title: "GCP Data Eng", meta: "10 weeks • Online", list: ["BigQuery, Dataflow", "Composer", "Cloud SQL", "ETL pipelines"] },
  ];

  const tiers = [
    { name: "Starter", price: "CA$1699", features: ["Any 1 course", "Live + recordings", "Community support"] },
    { name: "Pro", price: "CA$2,199", features: ["Any 2 courses", "1:1 mentor sessions", "Interview prep pack"] },
    { name: "Career+", price: "CA$2,799", features: ["6-month access", "Capstone reviews", "Placement assistance"] },
  ];

  return (
    <div className="min-h-screen bg-[#0b1020] text-[#dfe7ff]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 grid place-items-center font-bold">N</div>
            <span className="font-semibold">Nextboolean</span>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            {['Home', 'Courses', 'Placements', 'Admissions', 'Pricing', 'FAQ', 'Demos', 'Contact'].map(x =>
              <a key={x} href={'#' + x.toLowerCase()} className="hover:text-indigo-300">{x}</a>
            )}
          </nav>
          <a href="#admissions" className="ml-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm">Enroll Now</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Launch your tech career in <span className="text-indigo-400">12 weeks</span></h1>
          <p className="mt-4 text-lg opacity-90">Live classes, recordings, real projects, mock interviews, and 95% placement support after graduation.</p>
          <div className="mt-6 flex gap-3">
            <a href="#admissions" className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500">Apply Now</a>
            <a href="#demos" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/5">Watch a Demo</a>
          </div>
          <div className="mt-6 text-sm opacity-80">Next cohorts: <span className="font-semibold">Java (Sep 2)</span> • <span className="font-semibold">React (Sep 9)</span> • <span className="font-semibold">AWS (Sep 16)</span></div>
        </div>
        <div className="bg-[#121936] rounded-2xl shadow-lg p-4 border border-indigo-700/30">
          <div className="aspect-video w-full rounded-xl bg-black/30 grid place-items-center text-sm opacity-70">
            Demo video placeholder
          </div>
          <p className="text-xs opacity-70 mt-2">Sample classroom session (demo)</p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 py-8">
        {features.map(f => (
          <div key={f.title} className="bg-[#121936] rounded-2xl shadow-lg p-6 border border-indigo-700/30">
            <h3 className="font-semibold text-xl">{f.title}</h3>
            <p className="opacity-85 mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Courses */}
      <section id="courses" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map(c => (
            <div key={c.title} className="bg-[#121936] rounded-2xl shadow-lg p-6 border border-indigo-700/30">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <span className="text-xs opacity-70">{c.meta}</span>
              </div>
              <ul className="mt-3 space-y-1 list-disc list-inside opacity-95">
                {c.list.map(i => <li key={i}>{i}</li>)}
              </ul>
              <div className="mt-4 flex gap-2">
                <a href="#admissions" className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm">Enroll</a>
                <a href="#demos" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/5 text-sm">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placements */}
      <section id="placements" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Placements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[["95%", "Placement Rate"], ["60d", "Median Time to Offer"], ["120+", "Hiring Partners"]].map(([k, v]) => (
            <div key={k} className="bg-[#121936] rounded-2xl shadow-lg p-6 border border-indigo-700/30 text-center">
              <div className="text-4xl font-extrabold text-indigo-400">{k}</div>
              <div className="opacity-80">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className="bg-[#121936] rounded-2xl shadow-lg p-6 border border-indigo-700/30">
              <div className="text-2xl font-bold">{t.name}</div>
              <div className="text-3xl font-extrabold mt-2">{t.price}</div>
              <ul className="mt-3 space-y-1 list-disc list-inside opacity-95">
                {t.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#admissions" className="inline-block mt-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm">Choose</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="space-y-3">
          {[["Are classes recorded?", "Yes, every live class is recorded and shared the same day."], ["Do you offer job assistance?", "Yes — resume reviews, mock interviews, and referrals."], ["Do you provide certificates?", "Yes, a certificate is issued on course completion."]].map(([q, a]) => (
            <details key={q} className="bg-[#121936] rounded-2xl shadow-lg p-6 border border-indigo-700/30">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="mt-2 opacity-90">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Admissions</h2>
        <ol className="bg-[#121936] rounded-2xl shadow-lg p-6 border border-indigo-700/30 list-decimal list-inside space-y-2">
          <li>Submit application form</li>
          <li>Attend counseling call</li>
          <li>Enroll & reserve seat</li>
          <li>Prework + onboarding</li>
        </ol>
      </section>

      {/* Demos */}
      <section id="demos" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Demos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Java Full Stack Intro", "React Basics"].map(title => (
            <div key={title} className="bg-[#121936] rounded-2xl shadow-lg p-6 border border-indigo-700/30">
              <h3 className="text-xl font-semibold">{title}</h3>
              <div className="aspect-video w-full rounded-xl bg-black/30 grid place-items-center text-sm opacity-70 mt-2">Video placeholder</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="grid md:grid-cols-2 gap-4 bg-[#121936] rounded-2xl shadow-lg p-6 border border-indigo-700/30">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Name" />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Email" type="email" />
          <input className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Subject" />
          <textarea className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10" rows={5} placeholder="Message"></textarea>
          <button className="md:col-span-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-sm grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 grid place-items-center font-bold">N</div>
              <span className="font-semibold">Nextboolean</span>
            </div>
            <p className="opacity-80">Hands-on tech training with job-focused projects and placement support.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Courses</h4>
            <ul className="space-y-1 opacity-90 text-sm">
              <li><a href="#courses">Java Full Stack</a></li>
              <li><a href="#courses">React</a></li>
              <li><a href="#courses">AWS</a></li>
              <li><a href="#courses">GCP</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 opacity-90 text-sm">
              <li><a href="#home">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get in touch</h4>
            <p className="opacity-90">Mississauga, ON • +1 437-463-8537</p>
            <p className="opacity-90">info@nextboolean.com</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 opacity-70 text-xs">© {new Date().getFullYear()} Nextboolean. All rights reserved.</div>
      </footer>
    </div>
  );
}
