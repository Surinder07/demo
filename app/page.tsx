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
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-[#f8fafc]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-lg p-1.5">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                {/* Main circular path - simplified and better positioned */}
                <path d="M20 8 A12 12 0 0 1 32 20 A12 12 0 0 1 20 32 A12 12 0 0 1 8 20 A12 12 0 0 1 20 8" 
                      stroke="url(#logoGradient)" 
                      strokeWidth="2.5" 
                      fill="none" 
                      strokeDasharray="38 38" 
                      strokeDashoffset="9.5" />
                {/* Arrow inside - better positioned */}
                <path d="M16 20 L24 20 M24 20 L21 17 M24 20 L21 23" 
                      stroke="url(#logoGradient)" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-tight">Next</span>
              <span className="font-semibold text-sm text-gray-300 leading-tight">Boolean</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            {['Home', 'Courses', 'Placements', 'Admissions', 'Pricing', 'FAQ', 'Demos', 'Team', 'Careers', 'Contact'].map(x =>
              <a key={x} href={'#' + x.toLowerCase()} className="hover:text-emerald-300 transition-colors">{x}</a>
            )}
          </nav>
          <a href="#admissions" className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl">Enroll Now</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Launch your tech career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">12 weeks</span></h1>
          <p className="mt-4 text-lg opacity-90">Live classes, recordings, real projects, mock interviews, and 95% placement support after graduation.</p>
          <div className="mt-6 flex gap-3">
            <a href="#admissions" className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl">Apply Now</a>
            <a href="#demos" className="px-5 py-3 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-300 transition-all duration-200">Watch a Demo</a>
          </div>
          <div className="mt-6 text-sm opacity-80">Next cohorts: <span className="font-semibold">Java (Sep 2)</span> • <span className="font-semibold">React (Sep 9)</span> • <span className="font-semibold">AWS (Sep 16)</span></div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-4 border border-emerald-500/20">
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-emerald-900/30 to-teal-900/30 relative overflow-hidden group cursor-pointer">
            {/* Video Thumbnail - Simulated Classroom */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-900/40">
              {/* Instructor Section */}
              <div className="absolute top-3 left-3 right-3 h-16 bg-emerald-800/40 rounded-lg border border-emerald-500/30 flex items-center p-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center mr-3">
                  <span className="text-emerald-100 text-sm font-bold">👨‍🏫</span>
                </div>
                <div className="flex-1">
                  <div className="w-24 h-2 bg-emerald-400/60 rounded mb-1"></div>
                  <div className="w-16 h-1 bg-emerald-400/40 rounded"></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Students Grid */}
              <div className="absolute top-24 left-3 right-3 bottom-3 grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-emerald-700/30 rounded border border-emerald-500/20 flex items-center justify-center p-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                      <span className="text-emerald-100 text-xs">👤</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[8px] border-l-emerald-400 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5"></div>
                </div>
                <div className="w-16 h-1 bg-emerald-400/40 rounded-full"></div>
                <div className="text-emerald-200 text-xs">1:00</div>
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-emerald-500 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-white font-semibold">Play Demo</p>
                <p className="text-emerald-200 text-sm">1 min preview</p>
              </div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-emerald-200 font-medium text-sm">Live Java Class - Spring Boot</p>
              <p className="text-emerald-200/70 text-xs">Instructor: David Johnson</p>
            </div>
            <div className="text-right">
              <p className="text-emerald-200/70 text-xs">Duration: 1:00 min</p>
              <p className="text-emerald-200/70 text-xs">Students: 12 online</p>
            </div>
          </div>
          
          {/* Video Stats */}
          <div className="mt-2 flex items-center justify-between text-xs text-emerald-200/60">
            <span>📹 Live Recording</span>
            <span>🎯 Week 1 - Introduction</span>
            <span>💻 Hands-on Coding</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 py-8">
        {features.map(f => (
          <div key={f.title} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-emerald-500/10">
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
            <div key={c.title} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-emerald-500/10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <span className="text-xs opacity-70">{c.meta}</span>
              </div>
              <ul className="mt-3 space-y-1 list-disc list-inside opacity-95">
                {c.list.map(i => <li key={i}>{i}</li>)}
              </ul>
              <div className="mt-4 flex gap-2">
                <a href="#admissions" className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-medium transition-all duration-200">Enroll</a>
                <a href="#demos" className="px-4 py-2 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-300 text-sm transition-all duration-200">Demo</a>
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
            <div key={k} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 text-center hover:border-emerald-400/40 transition-all duration-300 hover:shadow-emerald-500/10">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{k}</div>
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
            <div key={t.name} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-emerald-500/10">
              <div className="text-2xl font-bold">{t.name}</div>
              <div className="text-3xl font-extrabold mt-2">{t.price}</div>
              <ul className="mt-3 space-y-1 list-disc list-inside opacity-95">
                {t.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#admissions" className="inline-block mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-medium transition-all duration-200">Choose</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="space-y-3">
          {[["Are classes recorded?", "Yes, every live class is recorded and shared the same day."], ["Do you offer job assistance?", "Yes — resume reviews, mock interviews, and referrals."], ["Do you provide certificates?", "Yes, a certificate is issued on course completion."]].map(([q, a]) => (
            <details key={q} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
              <summary className="cursor-pointer font-semibold hover:text-emerald-300 transition-colors">{q}</summary>
              <p className="mt-2 opacity-90">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Admissions</h2>
        <ol className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 list-decimal list-inside space-y-2">
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
          {[
            {
              title: "Java Full Stack Intro",
              image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&crop=center",
              alt: "Java programming code with Spring Boot framework"
            },
            {
              title: "React Basics",
              image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop&crop=center",
              alt: "React component structure and modern web development"
            }
          ].map((demo, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-emerald-500/10">
              <h3 className="text-xl font-semibold mb-3">{demo.title}</h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm opacity-70">Click to watch demo</span>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-medium transition-all duration-200">
                  Play Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        <p className="text-center text-lg opacity-90 mb-12 max-w-3xl mx-auto">
          Meet the passionate professionals behind Nextboolean. Our diverse team brings together expertise in technology, education, and business to deliver exceptional learning experiences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sunny Singh",
              role: "CEO",
              description: "Visionary leader driving Nextboolean's mission to democratize tech education and create career opportunities for aspiring developers.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
            },
            {
              name: "Shubham Hirpara",
              role: "Director",
              description: "Strategic leader overseeing operations and ensuring Nextboolean delivers world-class educational experiences.",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
            },
            {
              name: "Rachna Singh",
              role: "Manager",
              description: "Operations expert managing day-to-day activities and ensuring smooth delivery of our programs.",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
            },
            {
              name: "Sachin Singh",
              role: "Full Stack Developer",
              description: "Technical expert building robust learning platforms and innovative educational tools.",
              image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
            },
            {
              name: "David Johnson",
              role: "DevOps Engineer",
              description: "Infrastructure specialist ensuring our platforms run smoothly and securely in the cloud.",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
            },
            {
              name: "Mukesh Sharma",
              role: "Front End Engineer",
              description: "UI/UX specialist creating intuitive and engaging user experiences for our learning platform.",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
            },
            {
              name: "Amit Singh",
              role: "Sales Coordinator",
              description: "Relationship builder helping students find the perfect learning path and career opportunities.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 text-center hover:transform hover:scale-105 transition-all duration-300 hover:border-emerald-400/40 hover:shadow-emerald-500/10">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-lg">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-emerald-400 font-medium mb-3">{member.role}</p>
              <p className="text-sm opacity-90 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Careers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
            <p className="opacity-90 mb-6">We're building the future of tech education. Join us in empowering the next generation of developers and engineers.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="opacity-90">Remote-first culture</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="opacity-90">Competitive compensation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="opacity-90">Professional development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="opacity-90">Flexible work hours</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Open Positions</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Senior Full Stack Developer",
                  type: "Full-time • Remote",
                  salary: "$120K USD",
                  description: "Lead development of our learning platform and mentor junior developers."
                },
                {
                  title: "DevOps Engineer",
                  type: "Full-time • Hybrid",
                  description: "Manage cloud infrastructure and CI/CD pipelines for our applications."
                },
                {
                  title: "Content Creator",
                  type: "Contract • Remote",
                  description: "Create engaging technical content and course materials."
                },
                {
                  title: "Software Development Intern",
                  type: "Internship • Remote/Hybrid",
                  description: "Learn real-world development skills while contributing to our educational platform."
                }
              ].map((job, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-emerald-500/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">{job.title}</h4>
                    {job.salary && (
                      <span className="text-emerald-400 font-semibold text-sm bg-emerald-900/20 px-3 py-1 rounded-lg">
                        {job.salary}
                      </span>
                    )}
                  </div>
                  <p className="text-sm opacity-70 mt-1">{job.type}</p>
                  <p className="opacity-90 mt-2">{job.description}</p>
                  <a href="/careers" className="inline-block mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-medium transition-all duration-200">Apply Now</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="opacity-80 mb-4">Don't see a position that fits? We're always looking for talented individuals!</p>
          <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium transition-all duration-200">Send Us Your Resume</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="grid md:grid-cols-2 gap-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-emerald-500/20">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-emerald-500/20 focus:border-emerald-400 focus:outline-none transition-colors" placeholder="Name" />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-emerald-500/20 focus:border-emerald-400 focus:outline-none transition-colors" placeholder="Email" type="email" />
          <input className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-emerald-500/20 focus:border-emerald-400 focus:outline-none transition-colors" placeholder="Subject" />
          <textarea className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-emerald-500/20 focus:border-emerald-400 focus:outline-none transition-colors" rows={5} placeholder="Message"></textarea>
          <button className="md:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium transition-all duration-200">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-sm grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 grid place-items-center font-bold text-white">N</div>
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
