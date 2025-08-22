'use client';
import { useState } from 'react';

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<string>('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time • Remote",
      salary: "$120K USD",
      description: "Lead development of our learning platform and mentor junior developers.",
      requirements: [
        "5+ years of experience in full-stack development",
        "Expertise in React, Node.js, and cloud technologies",
        "Experience with educational platforms preferred",
        "Strong leadership and mentoring skills"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Remote-first work environment",
        "Professional development budget",
        "Health insurance and benefits"
      ]
    },
    {
      title: "DevOps Engineer",
      type: "Full-time • Hybrid",
      salary: "$100K USD",
      description: "Manage cloud infrastructure and CI/CD pipelines for our applications.",
      requirements: [
        "3+ years of DevOps experience",
        "Proficiency in AWS, Docker, and Kubernetes",
        "Experience with CI/CD tools (Jenkins, GitHub Actions)",
        "Strong troubleshooting skills"
      ],
      benefits: [
        "Competitive salary package",
        "Hybrid work model",
        "Latest tools and technologies",
        "Career growth opportunities"
      ]
    },
    {
      title: "Content Creator",
      type: "Contract • Remote",
      salary: "$60-80K USD",
      description: "Create engaging technical content and course materials.",
      requirements: [
        "2+ years of technical writing experience",
        "Strong knowledge of programming concepts",
        "Experience in educational content creation",
        "Excellent communication skills"
      ],
      benefits: [
        "Flexible contract terms",
        "Remote work opportunity",
        "Creative freedom",
        "Competitive hourly rates"
      ]
    },
    {
      title: "Software Development Intern",
      type: "Internship • Remote/Hybrid",
      salary: "$25-35K USD",
      description: "Learn real-world development skills while contributing to our educational platform.",
      requirements: [
        "Currently pursuing Computer Science degree",
        "Basic knowledge of programming languages",
        "Eagerness to learn and grow",
        "Strong problem-solving skills"
      ],
      benefits: [
        "Hands-on experience with real projects",
        "Mentorship from senior developers",
        "Potential for full-time conversion",
        "Learning and development opportunities"
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: "🏠",
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous learning with latest technologies"
    },
    {
      icon: "💼",
      title: "Career Growth",
      description: "Clear path for advancement and skill development"
    },
    {
      icon: "🤝",
      title: "Collaborative Team",
      description: "Work with passionate educators and developers"
    }
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
            <a href="/" className="hover:text-emerald-300 transition-colors">← Back to Home</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Team</span>
        </h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
          Help us revolutionize tech education and empower the next generation of developers. 
          Join a passionate team dedicated to making quality education accessible to everyone.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-300 font-semibold">🚀 Growing Company</span>
          </div>
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-300 font-semibold">🌍 Remote-First</span>
          </div>
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-300 font-semibold">💡 Innovation Focus</span>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyBenefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20 text-center hover:border-emerald-400/40 transition-all duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-sm opacity-80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                  <p className="text-emerald-400 font-medium mb-2">{position.type}</p>
                  {position.salary && (
                    <span className="inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-lg text-sm font-semibold">
                      {position.salary}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSelectedPosition(position.title);
                    setShowApplicationForm(true);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </button>
              </div>
              
              <p className="text-gray-300 mb-4">{position.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-emerald-300 mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-300 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {position.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-emerald-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Apply for {selectedPosition}</h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>
              
              <input
                type="text"
                placeholder="LinkedIn Profile"
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
              />
              
              <textarea
                placeholder="Why are you interested in this position?"
                rows={4}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors w-full"
                required
              ></textarea>
              
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-xl transition-all duration-200"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 py-3 border border-slate-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-300 rounded-xl transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-80 mb-4">
            Ready to join our mission? We're always looking for passionate individuals to help us grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="px-6 py-3 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 rounded-xl transition-all duration-200">
              ← Back to Home
            </a>
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
