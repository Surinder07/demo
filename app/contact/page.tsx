'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "📱",
      title: "Call Us",
      details: "+1 (437) 463-8537",
      action: "tel:+14374638537",
      description: "Speak directly with our team"
    },
    {
      icon: "📧",
      title: "Email Us",
      details: "info@nextboolean.com",
      action: "mailto:info@nextboolean.com",
      description: "Send us a detailed message"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Mississauga, ON, Canada",
      action: "#",
      description: "Schedule an in-person meeting"
    },
    {
      icon: "⏰",
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      action: "#",
      description: "We're here when you need us"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
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
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Touch</span>
        </h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
          Have questions about our courses? Want to discuss enrollment? Need technical support? 
          We're here to help you succeed in your tech journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-300 font-semibold">📞 24/7 Support</span>
          </div>
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-300 font-semibold">💬 Quick Response</span>
          </div>
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-300 font-semibold">🎯 Expert Guidance</span>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ways to Reach Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20 text-center hover:border-emerald-400/40 transition-all duration-300">
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
              <p className="text-sm opacity-80 mb-3">{method.description}</p>
              {method.action !== "#" ? (
                <a 
                  href={method.action}
                  className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 rounded-lg transition-all duration-200"
                >
                  {method.details}
                </a>
              ) : (
                <p className="text-emerald-300 font-medium">{method.details}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors w-full"
                required
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                rows={5}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors w-full"
                required
              ></textarea>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                <div className="text-2xl mb-2">🎉</div>
                <h4 className="text-green-400 font-semibold mb-2">Message Sent!</h4>
                <p className="text-green-200 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-center">
                <div className="text-2xl mb-2">❌</div>
                <h4 className="text-red-400 font-semibold mb-2">Message Failed</h4>
                <p className="text-red-200 text-sm">Please try again or call us directly.</p>
              </div>
            )}
          </div>

          {/* Office Hours & Location */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Office Hours & Location</h2>
            
            {/* Office Hours */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-300">🕒 Business Hours</h3>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700 last:border-b-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-emerald-300">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20">
              <h3 className="text-xl font-semibold mb-4 text-emerald-300">📍 Our Location</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-lg">🏢</span>
                  <div>
                    <p className="font-medium">Next Boolean</p>
                    <p className="text-sm opacity-80">Mississauga, Ontario, Canada</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-lg">🌍</span>
                  <div>
                    <p className="font-medium">Timezone</p>
                    <p className="text-sm opacity-80">Eastern Standard Time (EST)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-lg">🚇</span>
                  <div>
                    <p className="font-medium">Accessibility</p>
                    <p className="text-sm opacity-80">Near public transit, accessible parking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20">
            <h3 className="text-lg font-semibold mb-3 text-emerald-300">How quickly do you respond?</h3>
            <p className="text-sm opacity-80">We typically respond to all inquiries within 24 hours during business days.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20">
            <h3 className="text-lg font-semibold mb-3 text-emerald-300">Can I schedule a consultation?</h3>
            <p className="text-sm opacity-80">Absolutely! Call us or use the contact form to schedule a free consultation.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20">
            <h3 className="text-lg font-semibold mb-3 text-emerald-300">Do you offer remote support?</h3>
            <p className="text-sm opacity-80">Yes, we provide both in-person and remote consultation options.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20">
            <h3 className="text-lg font-semibold mb-3 text-emerald-300">What information should I include?</h3>
            <p className="text-sm opacity-80">Please include your name, contact details, and specific questions about our courses.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-80 mb-4">
            Ready to start your tech journey? We're here to help you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="px-6 py-3 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 rounded-xl transition-all duration-200">
              ← Back to Home
            </a>
            <a href="/careers" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl transition-all duration-200">
              View Careers
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
