'use client';
import { useState } from 'react';

export default function Page() {
  const [chatOpen, setChatOpen] = useState(false);
  const [enrollFormOpen, setEnrollFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (you can replace this with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and show success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      setSubmitStatus('success');
      
      // Close form after 3 seconds
      setTimeout(() => {
        setEnrollFormOpen(false);
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                {/* C-shaped circular path */}
                <path d="M20 8 A12 12 0 0 1 32 20 A12 12 0 0 1 20 32 A12 12 0 0 1 8 20 A12 12 0 0 1 20 8" 
                      stroke="url(#logoGradient)" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeDasharray="75.4 75.4" 
                      strokeDashoffset="18.85" />
                {/* Forward arrow */}
                <path d="M26 20 L30 20 M30 20 L27 17 M30 20 L27 23" 
                      stroke="url(#logoGradient)" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-tight">Next</span>
              <span className="font-semibold text-sm text-gray-300 leading-tight">Boolean</span>
            </div>
          </a>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
            <a href="#courses" className="hover:text-cyan-300 transition-colors">Courses & Demos</a>
            <a href="#admissions" className="hover:text-cyan-300 transition-colors">Admissions</a>
            <a href="#pricing" className="hover:text-cyan-300 transition-colors">Pricing</a>
            <a href="#team" className="hover:text-cyan-300 transition-colors">Team</a>
            <a href="#careers" className="hover:text-cyan-300 transition-colors">Careers</a>
            <a href="/lms" className="hover:text-cyan-300 transition-colors">LMS Portal</a>
          </nav>
          <button 
            onClick={() => setEnrollFormOpen(true)}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Enroll Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Launch your tech career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">12 weeks</span></h1>
          <p className="mt-4 text-lg opacity-90">Live classes, recordings, real projects, mock interviews, and 95% placement support after graduation.</p>
                      <div className="mt-6 flex gap-3">
              <a href="#admissions" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl">Apply Now</a>
              <a href="#demos" className="px-5 py-3 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300 transition-all duration-200">Watch a Demo</a>
            </div>
          <div className="mt-6 text-sm opacity-80">Next cohorts: <span className="font-semibold">Java (Sep 2)</span> • <span className="font-semibold">React (Sep 9)</span> • <span className="font-semibold">AWS (Sep 16)</span></div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-4 border border-cyan-500/20">
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-pink-900/30 relative overflow-hidden group cursor-pointer">
            {/* Video Thumbnail - Simulated Classroom */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-pink-900/40">
              {/* Instructor Section */}
              <div className="absolute top-3 left-3 right-3 h-16 bg-cyan-800/40 rounded-lg border border-cyan-500/30 flex items-center p-3">
                <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center mr-3">
                  <span className="text-cyan-100 text-sm font-bold">👨‍🏫</span>
                </div>
                <div className="flex-1">
                  <div className="w-24 h-2 bg-cyan-400/60 rounded mb-1"></div>
                  <div className="w-16 h-1 bg-cyan-400/40 rounded"></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Students Grid */}
              <div className="absolute top-24 left-3 right-3 bottom-3 grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-cyan-700/30 rounded border border-cyan-500/20 flex items-center justify-center p-1">
                    <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center">
                      <span className="text-cyan-100 text-xs">👤</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[8px] border-l-cyan-400 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5"></div>
                </div>
                <div className="w-16 h-1 bg-cyan-400/40 rounded-full"></div>
                <div className="text-cyan-200 text-xs">1:00</div>
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-cyan-500 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-white font-semibold">Play Demo</p>
                <p className="text-cyan-200 text-sm">1 min preview</p>
              </div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-cyan-200 font-medium text-sm">Live Java Class - Spring Boot</p>
              <p className="text-cyan-200/70 text-xs">Instructor: David Johnson</p>
            </div>
            <div className="text-right">
              <p className="text-cyan-200/70 text-xs">Duration: 1:00 min</p>
              <p className="text-cyan-200/70 text-xs">Students: 12 online</p>
            </div>
          </div>
          
          {/* Video Stats */}
          <div className="mt-2 flex items-center justify-between text-xs text-cyan-200/60">
            <span>📹 Live Recording</span>
            <span>🎯 Week 1 - Introduction</span>
            <span>💻 Hands-on Coding</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 py-8">
        {features.map(f => (
          <div key={f.title} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-cyan-500/10">
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
            <div key={c.title} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-cyan-500/10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <span className="text-xs opacity-70">{c.meta}</span>
              </div>
              <ul className="mt-3 space-y-1 list-disc list-inside opacity-95">
                {c.list.map(i => <li key={i}>{i}</li>)}
              </ul>
              <div className="mt-4 flex gap-2">
                <a href="#admissions" className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white text-sm font-medium transition-all duration-200">Enroll</a>
                <a href="#demos" className="px-4 py-2 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300 text-sm transition-all duration-200">Demo</a>
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
            <div key={k} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300 hover:shadow-cyan-500/10">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">{k}</div>
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
            <div key={t.name} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-cyan-500/10">
              <div className="text-2xl font-bold">{t.name}</div>
              <div className="text-3xl font-extrabold mt-2">{t.price}</div>
              <ul className="mt-3 space-y-1 list-disc list-inside opacity-95">
                {t.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#admissions" className="inline-block mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white text-sm font-medium transition-all duration-200">Choose</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="space-y-3">
          {[["Are classes recorded?", "Yes, every live class is recorded and shared the same day."], ["Do you offer job assistance?", "Yes — resume reviews, mock interviews, and referrals."], ["Do you provide certificates?", "Yes, a certificate is issued on course completion."]].map(([q, a]) => (
            <details key={q} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <summary className="cursor-pointer font-semibold hover:text-cyan-300 transition-colors">{q}</summary>
              <p className="mt-2 opacity-90">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Admissions</h2>
        <ol className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-cyan-500/20 list-decimal list-inside space-y-2">
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
              alt: "Java programming code with Spring Boot framework",
              logo: "☕"
            },
            {
              title: "React Basics",
              image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop&crop=center",
              alt: "React component structure and modern web development",
              logo: "⚛️"
            }
          ].map((demo, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{demo.logo}</span>
                <h3 className="text-xl font-semibold">{demo.title}</h3>
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm opacity-70">Click to watch demo</span>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white text-sm font-medium transition-all duration-200">
                  Play Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 border border-cyan-500/20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Meet Our Amazing Team</h3>
            <p className="text-lg opacity-90 mb-6">
              We're a passionate team of educators, developers, and innovators dedicated to revolutionizing tech education. 
              Every member brings unique expertise to help students succeed in their tech journey.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">🎓</span>
                <span>Expert educators with industry experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">💻</span>
                <span>Skilled developers building our platform</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">🚀</span>
                <span>Innovators pushing educational boundaries</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">🤝</span>
                <span>Collaborative culture focused on student success</span>
              </div>
            </div>
            <a href="/team" className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Meet Our Team →
            </a>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Careers</h2>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 border border-cyan-500/20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-lg opacity-90 mb-6">
              Help us revolutionize tech education and empower the next generation of developers. 
              Join a passionate team dedicated to making quality education accessible to everyone.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">🚀</span>
                <span>Growing company with exciting opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">🌍</span>
                <span>Remote-first culture with flexible hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">💡</span>
                <span>Innovation-focused environment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">📚</span>
                <span>Continuous learning and development</span>
              </div>
            </div>
            <a href="/careers" className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              View All Open Positions →
            </a>
          </div>
        </div>
      </section>



      {/* AI Chat Widget */}
      <div className="fixed top-4 right-4 z-50">
        {/* Chat Toggle Button */}
        <button 
          onClick={() => setChatOpen(!chatOpen)} 
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-white"
        >
          {chatOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>

        {/* Chat Window */}
        {chatOpen && (
          <div className="absolute top-16 right-0 w-80 bg-slate-800 border border-cyan-500/20 rounded-xl shadow-2xl">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-t-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">NextBoolean AI</h3>
                  <p className="text-cyan-100 text-sm">Ask me anything about our courses!</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {/* Welcome Message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 text-sm">🤖</span>
                </div>
                <div className="bg-slate-700 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-200">
                    Hi! I'm NextBoolean AI. I can help you with:
                  </p>
                  <ul className="text-xs text-gray-300 mt-2 space-y-1">
                    <li>• Course information and details</li>
                    <li>• Admission requirements</li>
                    <li>• Pricing and payment options</li>
                    <li>• Career opportunities</li>
                    <li>• Technical questions</li>
                  </ul>
                  <p className="text-xs text-cyan-400 mt-2">How can I assist you today?</p>
                </div>
              </div>

              {/* Sample User Message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-cyan-500 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-white">Tell me about your Java course</p>
                </div>
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">👤</span>
                </div>
              </div>

              {/* Sample AI Response */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 text-sm">🤖</span>
                </div>
                <div className="bg-slate-700 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-200">
                    Our Java Full Stack course is a comprehensive 12-week program covering:
                  </p>
                  <ul className="text-xs text-gray-300 mt-2 space-y-1">
                    <li>• Spring Boot & JPA</li>
                    <li>• Microservices architecture</li>
                    <li>• Docker & CI/CD</li>
                    <li>• Mock interviews & placement support</li>
                  </ul>
                  <p className="text-xs text-cyan-400 mt-2">Would you like to know more about pricing or enrollment?</p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-slate-700">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white text-sm transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enrollment Form Modal */}
      {enrollFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-cyan-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Enroll Now - Get Started Today!</h3>
              <button
                onClick={() => setEnrollFormOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl p-6 mb-6 border border-cyan-500/30">
              <h4 className="text-lg font-semibold mb-4 text-cyan-300">📞 Contact Us Directly</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-lg">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Call Us</p>
                    <a href="tel:+14374638537" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                      +1 (437) 463-8537
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Email Us</p>
                    <a href="mailto:info@nextboolean.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                      info@nextboolean.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-cyan-300">Mississauga, ON, Canada</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-lg">⏰</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Hours</p>
                    <p className="text-cyan-300">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <select
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors w-full"
                required
              >
                <option value="">Select a Course</option>
                <option value="java-fullstack">Java Full Stack (12 weeks)</option>
                <option value="react">React Development (8 weeks)</option>
                <option value="aws">AWS Cloud (6 weeks)</option>
                <option value="gcp">Google Cloud (6 weeks)</option>
                <option value="other">Other - Let's Discuss</option>
              </select>
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your goals and any questions you have..."
                rows={4}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors w-full"
                required
              ></textarea>
              
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enrollment Request'}
                </button>
                <button
                  type="button"
                  onClick={() => setEnrollFormOpen(false)}
                  className="px-6 py-3 border border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-300 rounded-xl transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                <div className="text-2xl mb-2">🎉</div>
                <h4 className="text-green-400 font-semibold mb-2">Enrollment Request Submitted!</h4>
                <p className="text-green-200 text-sm">We'll contact you within 24 hours to discuss your enrollment and answer any questions.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-center">
                <div className="text-2xl mb-2">❌</div>
                <h4 className="text-red-400 font-semibold mb-2">Submission Failed</h4>
                <p className="text-red-200 text-sm">Please try again or contact us directly at +1 (437) 463-8537</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-sm grid md:grid-cols-5 gap-6">
          <div>
            <a href="/" className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
              <div className="w-7 h-7 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  {/* C-shaped circular path */}
                  <path d="M20 8 A12 12 0 0 1 32 20 A12 12 0 0 1 20 32 A12 12 0 0 1 8 20 A12 12 0 0 1 20 8" 
                        stroke="url(#footerLogoGradient)" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeDasharray="75.4 75.4" 
                        strokeDashoffset="18.85" />
                  {/* Forward arrow */}
                  <path d="M26 20 L30 20 M30 20 L27 17 M30 20 L27 23" 
                        stroke="url(#footerLogoGradient)" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm leading-tight">Next</span>
                <span className="font-semibold text-xs text-gray-300 leading-tight">Boolean</span>
              </div>
            </a>
            <p className="opacity-80">Hands-on tech training with job-focused projects and placement support.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Courses</h4>
            <ul className="space-y-1 opacity-90 text-sm">
              <li><a href="#courses" className="hover:text-cyan-300 transition-colors">Java Full Stack</a></li>
              <li><a href="#courses" className="hover:text-cyan-300 transition-colors">React</a></li>
              <li><a href="#courses" className="hover:text-cyan-300 transition-colors">AWS</a></li>
              <li><a href="#courses" className="hover:text-cyan-300 transition-colors">GCP</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 opacity-90 text-sm">
              <li><a href="#home" className="hover:text-cyan-300 transition-colors">About</a></li>
              <li><a href="/careers" className="hover:text-cyan-300 transition-colors">Careers</a></li>
              <li><a href="/team" className="hover:text-cyan-300 transition-colors">Team</a></li>
              <li><a href="/contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
            </ul>
          </div>
                      <div>
              <h4 className="font-semibold mb-2">Learning Platform</h4>
              <ul className="space-y-1 opacity-90 text-sm">
                <li><a href="https://lms.nextboolean.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">LMS Portal</a></li>
                <li><a href="https://lms.nextboolean.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">Student Dashboard</a></li>
                <li><a href="https://lms.nextboolean.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">Course Materials</a></li>
                <li><a href="https://lms.nextboolean.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">Progress Tracking</a></li>
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
