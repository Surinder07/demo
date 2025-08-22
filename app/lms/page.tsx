'use client';
import { useState } from 'react';

interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  joinDate: string;
  progress: number;
  lastActive: string;
}

interface ClassSchedule {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  instructor: string;
  topic: string;
  status: 'upcoming' | 'live' | 'completed';
}

interface CourseTopic {
  id: string;
  title: string;
  description: string;
  week: number;
  day: number;
  duration: string;
  materials: string[];
  status: 'upcoming' | 'in-progress' | 'completed';
}

interface Recording {
  id: string;
  title: string;
  date: string;
  duration: string;
  instructor: string;
  topic: string;
  thumbnail: string;
  views: number;
}

export default function LMSPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'students' | 'recordings' | 'calendar' | 'topics'>('dashboard');
  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
      course: 'Java Full Stack',
      joinDate: '2024-01-15',
      progress: 75,
      lastActive: '2024-01-20'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      course: 'React Development',
      joinDate: '2024-01-10',
      progress: 60,
      lastActive: '2024-01-19'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      course: 'AWS Cloud',
      joinDate: '2024-01-05',
      progress: 45,
      lastActive: '2024-01-18'
    }
  ]);

  const [classSchedule] = useState<ClassSchedule[]>([
    {
      id: '1',
      title: 'Java Spring Boot Basics',
      date: '2024-01-22',
      time: '10:00 AM',
      duration: '2 hours',
      instructor: 'David Johnson',
      topic: 'Spring Boot Introduction & Setup',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'React Hooks Deep Dive',
      date: '2024-01-23',
      time: '2:00 PM',
      duration: '2 hours',
      instructor: 'Sarah Wilson',
      topic: 'useState, useEffect, Custom Hooks',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'AWS EC2 & S3 Fundamentals',
      date: '2024-01-24',
      time: '11:00 AM',
      duration: '2 hours',
      instructor: 'Michael Chen',
      topic: 'EC2 Instances & S3 Storage',
      status: 'upcoming'
    }
  ]);

  const [courseTopics] = useState<CourseTopic[]>([
    {
      id: '1',
      title: 'Spring Boot Fundamentals',
      description: 'Introduction to Spring Boot framework, project setup, and basic configuration',
      week: 1,
      day: 1,
      duration: '2 hours',
      materials: ['Spring Boot Documentation', 'Sample Project Code', 'Practice Exercises'],
      status: 'completed'
    },
    {
      id: '2',
      title: 'JPA & Database Integration',
      description: 'Working with JPA entities, repositories, and database operations',
      week: 1,
      day: 2,
      duration: '2 hours',
      materials: ['JPA Documentation', 'Database Schema', 'CRUD Examples'],
      status: 'completed'
    },
    {
      id: '3',
      title: 'RESTful API Development',
      description: 'Building REST APIs with Spring Boot, controllers, and request handling',
      week: 2,
      day: 1,
      duration: '2 hours',
      materials: ['REST Guidelines', 'API Testing Tools', 'Postman Collections'],
      status: 'in-progress'
    },
    {
      id: '4',
      title: 'Microservices Architecture',
      description: 'Introduction to microservices, service communication, and deployment',
      week: 2,
      day: 2,
      duration: '2 hours',
      materials: ['Microservices Patterns', 'Docker Basics', 'Service Discovery'],
      status: 'upcoming'
    }
  ]);

  const [recordings] = useState<Recording[]>([
    {
      id: '1',
      title: 'Java Basics - Variables & Data Types',
      date: '2024-01-15',
      duration: '1:45:30',
      instructor: 'David Johnson',
      topic: 'Java Fundamentals',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
      views: 45
    },
    {
      id: '2',
      title: 'React Components & Props',
      date: '2024-01-16',
      duration: '1:32:15',
      instructor: 'Sarah Wilson',
      topic: 'React Basics',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
      views: 38
    },
    {
      id: '3',
      title: 'AWS Cloud Computing Introduction',
      date: '2024-01-17',
      duration: '1:58:42',
      instructor: 'Michael Chen',
      topic: 'AWS Fundamentals',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop',
      views: 52
    }
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    course: '',
    phone: ''
  });

  const [showAddStudent, setShowAddStudent] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Use admin/admin');
    }
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    const student: Student = {
      id: Date.now().toString(),
      name: newStudent.name,
      email: newStudent.email,
      course: newStudent.course,
      joinDate: new Date().toISOString().split('T')[0],
      progress: 0,
      lastActive: new Date().toISOString().split('T')[0]
    };

    setStudents([...students, student]);
    setNewStudent({ name: '', email: '', course: '', phone: '' });
    setShowAddStudent(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center">
        <div className="bg-slate-800 border border-cyan-500/30 rounded-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-2xl">🎓</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">NextBoolean LMS</h1>
            <p className="text-gray-300">Learning Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input
                type="text"
                name="username"
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                placeholder="Enter username"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-200"
            >
              Login to LMS
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Demo Credentials: <br />
              <span className="text-cyan-300">Username: admin</span> | <span className="text-cyan-300">Password: admin</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur bg-black/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-xl">🎓</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">NextBoolean LMS</h1>
              <p className="text-sm text-gray-300">Learning Management System</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">Welcome, Admin</span>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-white/10 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'students', label: 'Students', icon: '👥' },
              { id: 'recordings', label: 'Recordings', icon: '🎥' },
              { id: 'calendar', label: 'Calendar', icon: '📅' },
              { id: 'topics', label: 'Course Topics', icon: '📚' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-cyan-300 border-b-2 border-cyan-300'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">LMS Dashboard</h2>
            
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Students</p>
                    <p className="text-3xl font-bold text-white">{students.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-300 text-xl">👥</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Courses</p>
                    <p className="text-3xl font-bold text-white">3</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-300 text-xl">📚</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Recordings</p>
                    <p className="text-3xl font-bold text-white">{recordings.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-pink-300 text-xl">🎥</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Upcoming Classes</p>
                    <p className="text-3xl font-bold text-white">{classSchedule.filter(c => c.status === 'upcoming').length}</p>
                  </div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-300 text-xl">📅</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Student Activity</h3>
                <div className="space-y-3">
                  {students.slice(0, 3).map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{student.name}</p>
                        <p className="text-sm text-gray-400">{student.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-cyan-300">{student.progress}% Complete</p>
                        <p className="text-xs text-gray-500">Last active: {student.lastActive}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Upcoming Classes</h3>
                <div className="space-y-3">
                  {classSchedule.slice(0, 3).map((classItem) => (
                    <div key={classItem.id} className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{classItem.title}</h4>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                          {classItem.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{classItem.date} at {classItem.time}</p>
                      <p className="text-sm text-cyan-300">{classItem.topic}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Student Management</h2>
              <button
                onClick={() => setShowAddStudent(true)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-200"
              >
                + Add New Student
              </button>
            </div>

            {/* Students Table */}
            <div className="bg-slate-800 border border-cyan-500/20 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Progress</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Active</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-slate-700/30">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-white">{student.name}</div>
                            <div className="text-sm text-gray-400">{student.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.course}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.joinDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-slate-600 rounded-full h-2 mr-2">
                              <div 
                                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" 
                                style={{ width: `${student.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-300">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.lastActive}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-cyan-300 hover:text-cyan-200 mr-3">Edit</button>
                          <button className="text-red-300 hover:text-red-200">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Recordings Tab */}
        {activeTab === 'recordings' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Course Recordings</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recordings.map((recording) => (
                <div key={recording.id} className="bg-slate-800 border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <div className="aspect-video relative">
                    <img 
                      src={recording.thumbnail} 
                      alt={recording.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">▶️</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{recording.title}</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p><span className="text-cyan-300">📅</span> {recording.date}</p>
                      <p><span className="text-cyan-300">⏱️</span> {recording.duration}</p>
                      <p><span className="text-cyan-300">👨‍🏫</span> {recording.instructor}</p>
                      <p><span className="text-cyan-300">📚</span> {recording.topic}</p>
                      <p><span className="text-cyan-300">👁️</span> {recording.views} views</p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors">
                        Watch
                      </button>
                      <button className="px-4 py-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 text-sm rounded-lg transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Class Schedule Calendar</h2>
            
            <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
              <div className="grid gap-4">
                {classSchedule.map((classItem) => (
                  <div key={classItem.id} className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-cyan-500">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{classItem.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        classItem.status === 'upcoming' ? 'bg-cyan-500/20 text-cyan-300' :
                        classItem.status === 'live' ? 'bg-green-500/20 text-green-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {classItem.status}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Date & Time</p>
                        <p className="text-white">{classItem.date} at {classItem.time}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Duration</p>
                        <p className="text-white">{classItem.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Instructor</p>
                        <p className="text-white">{classItem.instructor}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Topic</p>
                        <p className="text-white">{classItem.topic}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors">
                        Join Class
                      </button>
                      <button className="px-4 py-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 text-sm rounded-lg transition-colors">
                        View Materials
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Course Topics Tab */}
        {activeTab === 'topics' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Course Topics & Curriculum</h2>
            
            <div className="grid gap-6">
              {courseTopics.map((topic) => (
                <div key={topic.id} className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          topic.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                          topic.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-cyan-500/20 text-cyan-300'
                        }`}>
                          {topic.status}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{topic.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span>Week {topic.week}, Day {topic.day}</span>
                        <span>Duration: {topic.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Learning Materials:</h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.materials.map((material, index) => (
                        <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-lg">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors">
                      Start Learning
                    </button>
                    <button className="px-4 py-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 text-sm rounded-lg transition-colors">
                      Download Materials
                    </button>
                    <button className="px-4 py-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 text-sm rounded-lg transition-colors">
                      Take Quiz
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Add Student Modal */}
      {showAddStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-cyan-500/30 rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Add New Student</h3>
              <button
                onClick={() => setShowAddStudent(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                  placeholder="Enter full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={newStudent.email}
                  onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Course</label>
                <select
                  value={newStudent.course}
                  onChange={(e) => setNewStudent({...newStudent, course: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                >
                  <option value="">Select a course</option>
                  <option value="Java Full Stack">Java Full Stack</option>
                  <option value="React Development">React Development</option>
                  <option value="AWS Cloud">AWS Cloud</option>
                  <option value="GCP Data Engineering">GCP Data Engineering</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={newStudent.phone}
                  onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                  placeholder="Enter phone number (optional)"
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-200"
                >
                  Add Student
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddStudent(false)}
                  className="px-6 py-3 border border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-300 rounded-xl transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
