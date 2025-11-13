"use client";
import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Calendar, Download, Trophy, Dumbbell, Users, TrendingUp, Code, Github } from "lucide-react";
import { downloadResumeAsPdf, loadPdfLibrary } from "@/utils/pdfDownload";

const Resume = () => {
   useEffect(() => {
    loadPdfLibrary();
  }, []);

  const handleDownloadPDF = () => {
    downloadResumeAsPdf();
  };

  return (
    <div className="font-sans">
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen py-8">
        <div className="w-full max-w-6xl mb-6 mt-20 md:mt-0">
          <button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-xl font-semibold flex items-center gap-3 transition-all shadow-lg hover:shadow-xl ml-auto transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        <div id="resume-content" className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                GAN-ERDENE GANBAT
              </h1>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-blue-200">
                Middle Full-Stack Developer
              </h2>
              <p className="text-blue-300 mt-3 text-base max-w-2xl mx-auto">
                Experienced developer with 2+ years building enterprise-grade, scalable applications
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-gradient-to-b from-gray-50 to-blue-50 p-6 sm:p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">CONTACT</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600 w-5 h-5" />
                    </div>
                    <span className="text-sm break-all">ganaa.12396@yahoo.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-600 w-5 h-5" />
                    </div>
                    <span className="text-sm">90162332</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-600 w-5 h-5" />
                    </div>
                    <span className="text-sm">Ulaanbaatar, Mongolia</span>
                  </div>
                  <a className="flex items-center gap-3 text-blue-600" target="_blank" href="https://github.com/horror0110">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium underline">github.com/horror0110</span>
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">PROFESSIONAL SUMMARY</h3>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Middle full-stack developer with 2+ years of hands-on experience in building scalable, enterprise-grade web applications. Proven expertise in modern JavaScript frameworks, cloud infrastructure, and DevOps practices. Successfully delivered 10+ production applications serving 10,000+ users with focus on performance optimization, clean architecture, and agile development methodologies.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">EDUCATION</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 text-base">University of the Humanities</h4>
                    <p className="text-sm text-gray-600 mt-1">Bachelor's Degree - Graduated</p>
                    <p className="text-xs text-gray-500 mt-1">Relevant Coursework: Data Structures, Web Development, Database Management</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-indigo-500">
                    <h4 className="font-bold text-gray-800 text-base">Mongeni Complex School</h4>
                    <p className="text-sm text-gray-600 mt-1">High School - Graduated</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">TECHNICAL SKILLS</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Languages</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: "JavaScript", level: "Advanced" },
                        { name: "TypeScript", level: "Advanced" },
                        { name: "Python", level: "Intermediate" },
                        { name: "Dart", level: "Intermediate" },
                      ].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium block">{skill.name}</span>
                          <span className="text-xs text-gray-500">{skill.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Frontend</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["React.js", "Next.js", "TailwindCSS", "HTML5/CSS3"].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Backend</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Node.js", "Express.js", "Django", "GraphQL"].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Database & Tools</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["MongoDB", "PostgreSQL", "Prisma", "Git"].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">DevOps & Cloud</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: "Docker", level: "Beginner" },
                        { name: "AWS", level: "Beginner" },
                        { name: "GCP", level: "Beginner" },
                        { name: "CI/CD", level: "Beginner" },
                      ].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium block">{skill.name}</span>
                          <span className="text-xs text-gray-500">{skill.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">INTERESTS</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-xl shadow-md border-l-4 border-yellow-500">
                    <div className="flex items-start gap-3">
                      <Trophy className="text-yellow-600 w-5 h-5 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Chess Master</h4>
                        <p className="text-xs text-gray-700">Strategic thinking & problem-solving</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl shadow-md border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <Dumbbell className="text-green-600 w-5 h-5 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Fitness Enthusiast</h4>
                        <p className="text-xs text-gray-700">5+ years of dedicated training</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">WORK EXPERIENCE</h3>
                </div>

                <div className="mb-6">
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">Frontend Developer</h4>
                        <h5 className="text-lg text-blue-600 font-bold">Nandin Brothers Group LLC</h5>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-3 sm:mt-0 bg-white px-4 py-2 rounded-lg shadow-sm">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-semibold">Feb 2025 - Nov 2025</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Improved performance:</strong> Optimized React applications resulting in 40% faster load times and 25% reduction in bundle size
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Team collaboration:</strong> Working with 5-member development team using Agile methodology and Git workflow
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Code className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Tech stack:</strong> Next.js 14, TypeScript, Flutter, TailwindCSS, Docker, AWS/GCP, GitHub Actions
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/50 p-4 rounded-lg">
                      <h6 className="font-semibold text-gray-800 mb-2 text-sm">Key Responsibilities:</h6>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Develop and maintain responsive web applications using React.js and Next.js</li>
                        <li>• Implement pixel-perfect UI designs with focus on UX best practices</li>
                        <li>• Collaborate with backend team to integrate RESTful APIs and microservices</li>
                        <li>• Deploy and manage applications on AWS/GCP cloud platforms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Internships & Previous Experience</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Completed 3+ internships at technology companies</p>
                    <p>• Built 10+ projects including ERP systems and mobile applications</p>
                    <p>• Experience with containerization, cloud deployment, and automated testing</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">FEATURED PROJECTS</h3>
                </div>

                <div className="grid gap-5">
                  {[
                    {
                      title: "Learning Management System",
                      description: "Full-featured educational platform with course management, student tracking, and real-time collaboration.",
                      tech: "Next.js, Django, PostgreSQL, Socket.io, Docker",
                      stats: "10,000+ active users",
                      impact: "Reduced admin workload by 60%",
                    },
                    {
                      title: "Enterprise ERP System",
                      description: "Comprehensive business management platform with 9 integrated modules including HR, Finance, and Asset Management.",
                      tech: "Next.js, Django, PostgreSQL, Redis, Docker, AWS",
                      stats: "500+ daily users",
                      impact: "Streamlined operations",
                    },
                    {
                      title: "District Information Portal",
                      description: "Public-facing government services website with real-time news updates. Deployed on GCP with CI/CD pipeline.",
                      tech: "Next.js, TypeScript, Django, TailwindCSS, GCP",
                      stats: "5,000+ monthly visitors",
                      impact: "50% engagement increase",
                    },
                    {
                      title: "HR Mobile App (Flutter)",
                      description: "Cross-platform mobile application for HR management with employee profiles and attendance tracking.",
                      tech: "Flutter, Dart, REST API, Docker",
                      stats: "1,000+ downloads",
                      impact: "50% faster HR processing",
                    },
                  ].map((project, index) => (
                    <div key={index} className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                      <h5 className="font-bold text-gray-800 mb-2 text-lg">{project.title}</h5>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <p className="text-xs text-gray-500 mb-2"><strong>Tech:</strong> {project.tech}</p>
                      <div className="flex gap-2">
                        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{project.stats}</span>
                        <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">{project.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;