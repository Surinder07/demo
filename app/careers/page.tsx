'use client';

import { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    experience: '',
    skills: '',
    portfolio: '',
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('skills', formData.skills);
      formDataToSend.append('portfolio', formData.portfolio);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      // Send to your email using a form service
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          coverLetter: '',
          experience: '',
          skills: '',
          portfolio: '',
          resume: null
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1020] text-[#dfe7ff]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 grid place-items-center font-bold">N</div>
              <span className="font-semibold">Nextboolean</span>
            </a>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            {['Home', 'Courses', 'Placements', 'Admissions', 'Pricing', 'FAQ', 'Demos', 'Careers', 'Contact'].map(x =>
              <a key={x} href={x === 'Home' ? '/' : `/#${x.toLowerCase()}`} className="hover:text-indigo-300">{x}</a>
            )}
          </nav>
          <a href="/#admissions" className="ml-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm">Enroll Now</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">Join Our Team</h1>
        <p className="text-xl opacity-90 mb-8">We're building the future of tech education. Come help us empower the next generation of developers and engineers.</p>
        <div className="flex items-center justify-center gap-4 text-sm opacity-80">
          <span>🚀 Remote-first culture</span>
          <span>💼 Competitive compensation</span>
          <span>📚 Professional development</span>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[#121936] rounded-2xl shadow-lg p-8 border border-indigo-700/30">
          <h2 className="text-2xl font-bold mb-6">Job Application</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Position Information */}
            <div>
              <label className="block text-sm font-medium mb-2">Position Applied For *</label>
              <select 
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
              >
                <option value="">Select a position</option>
                <option value="senior-fullstack">Senior Full Stack Developer</option>
                <option value="software-intern">Software Development Intern</option>
                <option value="devops-engineer">DevOps Engineer</option>
                <option value="content-creator">Content Creator</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Cover Letter *</label>
              <textarea 
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              ></textarea>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium mb-2">Years of Experience</label>
              <select 
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">2-3 years</option>
                <option value="4-5">4-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills & Technologies</label>
              <textarea 
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
                placeholder="List your key skills, programming languages, frameworks, and tools..."
              ></textarea>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">Resume/CV *</label>
              <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-indigo-500 transition-colors">
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                  id="resume-upload"
                  onChange={handleFileChange}
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <div className="text-4xl mb-2">📄</div>
                  <p className="formData.resume ? 'text-indigo-400' : ''}">
                    {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                  </p>
                  <p className="text-sm opacity-70 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                </label>
              </div>
            </div>

            {/* Portfolio/Links */}
            <div>
              <label className="block text-sm font-medium mb-2">Portfolio/Links</label>
              <input 
                type="url" 
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none"
                placeholder="GitHub, LinkedIn, portfolio website, etc."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-[#121936] border border-green-500/30 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">Application Sent!</h3>
                <p className="text-[#dfe7ff] mb-6">Your job application has been submitted successfully. We'll review it and get back to you within 3-5 business days.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-[#121936] border border-red-500/30 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
                <div className="text-6xl mb-4">❌</div>
                <h3 className="text-2xl font-bold text-red-400 mb-3">Submission Failed</h3>
                <p className="text-[#dfe7ff] mb-6">There was an error submitting your application. Please try again or contact us if the problem persists.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-semibold transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm opacity-70">
            <p>We'll review your application and get back to you within 3-5 business days.</p>
            <p className="mt-2">Questions? <a href="/#contact" className="text-indigo-400 hover:underline">Contact us</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Nextboolean. All rights reserved.</p>
          <p className="mt-2">
            <a href="/" className="text-indigo-400 hover:underline">← Back to Home</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
