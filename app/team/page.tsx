'use client';
import { useState } from 'react';

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Surinder Singh",
      role: "CEO & Founder",
      description: "Visionary leader driving Next Boolean's mission to democratize tech education. 10+ years in ed-tech and software development.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Strategic Leadership", "Ed-Tech Innovation", "Product Vision", "Team Building"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Shubham Hirpara",
      role: "Director of Operations",
      description: "Operations expert ensuring smooth delivery of our educational programs and maintaining high standards across all departments.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Operations Management", "Process Optimization", "Quality Assurance", "Team Coordination"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Rachna Singh",
      role: "Program Manager",
      description: "Dedicated program manager overseeing curriculum development and ensuring student success through personalized learning paths.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      expertise: ["Program Management", "Curriculum Development", "Student Success", "Learning Analytics"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sachin Singh",
      role: "Full Stack Developer",
      description: "Experienced developer building robust learning platforms and creating interactive educational experiences for our students.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      expertise: ["React", "Node.js", "Python", "Database Design"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "David Johnson",
      role: "DevOps Engineer",
      description: "Infrastructure specialist ensuring our platforms run smoothly and securely, maintaining 99.9% uptime for seamless learning.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      expertise: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sahil Hirpara",
      role: "Frontend Engineer",
      description: "Creative developer crafting beautiful, responsive user interfaces that make learning intuitive and engaging for our students.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      expertise: ["React", "TypeScript", "UI/UX Design", "Performance Optimization"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Amit Singh",
      role: "Sales Coordinator",
      description: "Relationship builder connecting students with the right programs and ensuring exceptional customer experience throughout their journey.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      expertise: ["Sales Strategy", "Customer Relations", "Market Analysis", "Growth Hacking"],
      linkedin: "#",
      github: "#"
    }
  ];

  const companyStats = [
    { number: "500+", label: "Students Enrolled" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Corporate Partners" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-[#f8fafc]">
      {/* Header */}
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
                <path d="M20 8 A12 12 0 0 1 32 20 A12 12 0 0 1 20 32 A12 12 0 0 1 8 20 A12 12 0 0 1 20 8" 
                      stroke="url(#logoGradient)" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeDasharray="75.4 75.4" 
                      strokeDashoffset="18.85" />
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
            <a href="/" className="hover:text-cyan-300 transition-colors">← Back to Home</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                      Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Team</span>
        </h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
          We're a passionate team of educators, developers, and innovators dedicated to revolutionizing tech education. 
          Every member brings unique expertise to help students succeed in their tech journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
                      <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl px-6 py-3">
              <span className="text-cyan-300 font-semibold">🎓 Expert Educators</span>
            </div>
            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl px-6 py-3">
              <span className="text-cyan-300 font-semibold">💻 Tech Innovators</span>
            </div>
            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl px-6 py-3">
              <span className="text-cyan-300 font-semibold">🚀 Growth Mindset</span>
            </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center">
                              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership & Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
              <div className="text-center mb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-400 font-medium text-sm">{member.role}</p>
              </div>
              
              <p className="text-sm opacity-80 mb-4 text-center">{member.description}</p>
              
              {selectedMember === index && (
                <div className="mt-4 pt-4 border-t border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-300 mb-3 text-sm">Expertise</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 justify-center">
                    <a href={member.linkedin} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={member.github} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )}
              
              <div className="text-center mt-4">
                <button 
                  className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMember(selectedMember === index ? null : index);
                  }}
                >
                  {selectedMember === index ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Culture & Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/20 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Mission-Driven</h3>
            <p className="text-sm opacity-80">Every decision we make is guided by our mission to democratize quality tech education.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/20 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Collaborative</h3>
            <p className="text-sm opacity-80">We believe in the power of teamwork and diverse perspectives to solve complex challenges.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/20 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Innovative</h3>
            <p className="text-sm opacity-80">Constantly pushing boundaries to create cutting-edge educational experiences.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/20 text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3">Student-First</h3>
            <p className="text-sm opacity-80">Every feature and decision is made with our students' success in mind.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/20 text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-3">Growth Mindset</h3>
            <p className="text-sm opacity-80">We embrace challenges and see failures as opportunities to learn and improve.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/20 text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
            <p className="text-sm opacity-80">Committed to making tech education accessible to learners worldwide.</p>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-cyan-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-lg opacity-90 mb-6">
            We're always looking for passionate individuals who share our vision for the future of education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/careers" className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-200">
              View Open Positions
            </a>
            <a href="#contact" className="px-6 py-3 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-80 mb-4">
            Our team is the heart of Next Boolean. Together, we're building the future of tech education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="px-6 py-3 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition-all duration-200">
              ← Back to Home
            </a>
            <a href="/careers" className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-200">
              Join Our Team
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
