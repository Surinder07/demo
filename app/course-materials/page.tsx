'use client';
import { useState, useEffect } from 'react';
import courseData from '../../data/courseMaterials.json';

interface Material {
  type: string;
  title: string;
  filename: string;
  size: string;
  downloadUrl: string;
  description: string;
}

interface Topic {
  id: string;
  title: string;
  description: string;
  duration: string;
  materials: Material[];
  assignments: Array<{
    title: string;
    description: string;
    dueDate: string;
  }>;
}

interface Module {
  id: string;
  title: string;
  weeks: number[];
  topics: Topic[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  schedule: {
    weekday: {
      days: string[];
      time: string;
      type: string;
    };
    weekend: {
      days: string[];
      time: string;
      type: string;
    };
  };
  zoomLinks: {
    weekday: {
      url: string;
      meetingId: string;
      passcode: string;
    };
    weekend: {
      url: string;
      meetingId: string;
      passcode: string;
    };
  };
  modules: Module[];
  totalTopics: number;
  totalHours: number;
  totalAssignments: number;
  certificate: {
    available: boolean;
    requirements: string;
    type: string;
  };
}

export default function CourseMaterialsPage() {
  const [activeModule, setActiveModule] = useState<string>('module-1');
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const course: Course = courseData.courses['java-fullstack'];

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const handleDownload = (material: Material) => {
    // In a real application, this would trigger an actual download
    // For now, we'll simulate the download
    console.log(`Downloading: ${material.filename}`);
    alert(`Download started for: ${material.title}\n\nNote: This is a demo. In production, this would download the actual file.`);
  };

  const filteredModules = course.modules.filter(module => {
    if (searchTerm === '') return true;
    return module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           module.topics.some(topic => 
             topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             topic.description.toLowerCase().includes(searchTerm.toLowerCase())
           );
  });

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'code': return '💻';
      case 'video': return '🎥';
      case 'presentation': return '📊';
      default: return '📁';
    }
  };

  const getMaterialColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'from-red-500 to-pink-500';
      case 'code': return 'from-green-500 to-teal-500';
      case 'video': return 'from-blue-500 to-purple-500';
      case 'presentation': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur bg-black/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
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
          
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">Course Materials</span>
            <a 
              href="/" 
              className="px-4 py-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Course Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">{course.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{course.title}</h1>
              <p className="text-xl text-gray-300">{course.description}</p>
            </div>
          </div>
          
          {/* Course Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-4">
              <div className="text-2xl font-bold text-cyan-300">{course.duration}</div>
              <div className="text-sm text-gray-400">Duration</div>
            </div>
            <div className="bg-slate-800 border border-purple-500/20 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-300">{course.totalTopics}</div>
              <div className="text-sm text-gray-400">Total Topics</div>
            </div>
            <div className="bg-slate-800 border border-pink-500/20 rounded-xl p-4">
              <div className="text-2xl font-bold text-pink-300">{course.totalHours}</div>
              <div className="text-sm text-gray-400">Total Hours</div>
            </div>
            <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-4">
              <div className="text-2xl font-bold text-cyan-300">{course.totalAssignments}</div>
              <div className="text-sm text-gray-400">Assignments</div>
            </div>
          </div>
        </div>

        {/* Schedule Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Weekday Schedule */}
          <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>📅</span> Weekday Classes
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Days:</span>
                <span className="text-white font-medium">{course.schedule.weekday.days.join(', ')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Time:</span>
                <span className="text-cyan-300 font-medium">{course.schedule.weekday.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Type:</span>
                <span className="text-white font-medium">{course.schedule.weekday.type}</span>
              </div>
              <div className="mt-4">
                <a 
                  href={course.zoomLinks.weekday.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg transition-colors"
                >
                  🚀 Join Weekday Class
                </a>
              </div>
            </div>
          </div>

          {/* Weekend Schedule */}
          <div className="bg-slate-800 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>🌅</span> Weekend Classes
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Days:</span>
                <span className="text-white font-medium">{course.schedule.weekend.days.join(', ')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Time:</span>
                <span className="text-purple-300 font-medium">{course.schedule.weekend.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Type:</span>
                <span className="text-white font-medium">{course.schedule.weekend.type}</span>
              </div>
              <div className="mt-4">
                <a 
                  href={course.zoomLinks.weekend.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-lg transition-colors"
                >
                  🚀 Join Weekend Class
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search topics, materials, or assignments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-400"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
          >
            <option value="all">All Materials</option>
            <option value="pdf">PDF Documents</option>
            <option value="code">Code Examples</option>
            <option value="video">Video Tutorials</option>
            <option value="presentation">Presentations</option>
          </select>
        </div>

        {/* Module Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {course.modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeModule === module.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {module.title}
            </button>
          ))}
        </div>

        {/* Course Content */}
        <div className="space-y-6">
          {filteredModules.map((module) => (
            <div key={module.id} className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">{module.title}</h2>
                <span className="text-cyan-300 text-sm">Weeks {module.weeks.join('-')}</span>
              </div>
              
              <div className="space-y-4">
                {module.topics.map((topic) => (
                  <div key={topic.id} className="border border-slate-700 rounded-lg overflow-hidden">
                    {/* Topic Header */}
                    <div 
                      className="p-4 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 transition-colors"
                      onClick={() => toggleTopic(topic.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-cyan-300 text-lg">📚</span>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                            <p className="text-gray-300 text-sm">{topic.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-cyan-300 text-sm">{topic.duration}</span>
                          <span className="text-gray-400">
                            {expandedTopics.has(topic.id) ? '▼' : '▶'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Topic Content */}
                    {expandedTopics.has(topic.id) && (
                      <div className="p-4 space-y-4">
                        {/* Materials */}
                        <div>
                          <h4 className="text-md font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                            <span>📁</span> Learning Materials
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {topic.materials
                              .filter(material => filterType === 'all' || material.type === filterType)
                              .map((material, index) => (
                                <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                                  <div className="flex items-start gap-3">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getMaterialColor(material.type)} flex items-center justify-center text-white text-xl`}>
                                      {getMaterialIcon(material.type)}
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-medium text-white mb-1">{material.title}</h5>
                                      <p className="text-sm text-gray-400 mb-2">{material.description}</p>
                                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span>{material.filename}</span>
                                        <span>{material.size}</span>
                                      </div>
                                      <button
                                        onClick={() => handleDownload(material)}
                                        className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-sm rounded-lg transition-all duration-200"
                                      >
                                        📥 Download {material.type.toUpperCase()}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>

                        {/* Assignments */}
                        <div>
                          <h4 className="text-md font-semibold text-purple-300 mb-3 flex items-center gap-2">
                            <span>📝</span> Assignments
                          </h4>
                          <div className="space-y-3">
                            {topic.assignments.map((assignment, index) => (
                              <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h5 className="font-medium text-white mb-1">{assignment.title}</h5>
                                    <p className="text-sm text-gray-400">{assignment.description}</p>
                                  </div>
                                  <span className="text-purple-300 text-sm font-medium">{assignment.dueDate}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Information */}
        <div className="mt-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-500/30">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">{course.certificate.type}</h3>
            <p className="text-gray-300 mb-4">{course.certificate.requirements}</p>
            <div className="text-cyan-300 text-sm">
              Complete all {course.totalAssignments} assignments and final project to earn your certificate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
