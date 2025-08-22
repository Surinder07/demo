'use client';
import { useEffect } from 'react';

export default function LMSPage() {
  useEffect(() => {
    // Redirect to the active LMS subdomain
    window.location.href = 'https://lms.nextboolean.com';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Header with Clickable Logo */}
      <header className="border-b border-white/10 backdrop-blur bg-black/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
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
          
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">LMS Portal</span>
            <a 
              href="/" 
              className="px-4 py-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center flex-1 py-16">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-3xl">🎓</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Redirecting to LMS Portal...</h1>
          <p className="text-gray-300 mb-6">You are being redirected to our Learning Management System</p>
          <div className="flex items-center justify-center gap-2 text-cyan-300 mb-6">
            <div className="w-4 h-4 border-2 border-cyan-300 border-t-transparent rounded-full animate-spin"></div>
            <span>Redirecting to lms.nextboolean.com</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://lms.nextboolean.com" 
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-200"
            >
              Click here if not redirected automatically
            </a>
            <a 
              href="/" 
              className="px-6 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 hover:text-cyan-200 font-medium rounded-xl transition-all duration-200"
            >
              ← Back to Home Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
