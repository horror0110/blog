"use client";
import React, { useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Download,
  Trophy,
  Dumbbell,
  Users,
  TrendingUp,
  Code,
  Github,
  Layers,
  Zap,
} from "lucide-react";
import { downloadResumeAsPdf, loadPdfLibrary } from "@/utils/pdfDownload";
import toast from "react-hot-toast";

const Resume = () => {
  useEffect(() => {
    loadPdfLibrary();
  }, []);

  const handleDownloadPDF = () => {
    downloadResumeAsPdf();
    toast.success("CV амжилттай татагдлаа");
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

        <div
          id="resume-content"
          className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden"
        >
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
                Full-Stack Developer
              </h2>
              {/* <p className="text-blue-300 mt-3 text-base max-w-2xl mx-auto">
                Passionate developer with 6 years of coding experience and 1.5
                years of professional work, specializing in full-stack
                development
              </p> */}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-gradient-to-b from-gray-50 to-blue-50 p-6 sm:p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    CONTACT
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600 w-5 h-5" />
                    </div>
                    <span className="text-sm break-all">
                      ganaa.12396@yahoo.com
                    </span>
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
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-blue-600 w-5 h-5" />
                    </div>
                    <span className="text-sm">Age: 23</span>
                  </div>
                  {/* <a
                    className="flex items-center gap-3 text-blue-600"
                    target="_blank"
                    href="https://github.com/horror0110"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium underline">
                      github.com/horror0110
                    </span>
                  </a> */}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    PROFESSIONAL SUMMARY
                  </h3>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Full-stack developer with 6 years of coding experience and 2
                    years of professional work building scalable,
                    production-ready applications. Strong expertise in backend
                    architecture (Node.js/Express, Django, Grails/Groovy),
                    frontend development (Next.js, React, Vue.js), and mobile
                    development (Flutter, React Native). Successfully delivered
                    enterprise systems serving 10,000+ users including
                    university management platforms and government portals with
                    focus on performance optimization, clean architecture, and
                    modern DevOps practices.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    EDUCATION
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 text-base">
                      University of the Humanities
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Bachelor's Degree - Software Engineering
                    </p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      Graduated: June 2024
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Relevant Coursework: Data Structures, Web Development,
                      Database Management, Software Architecture
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-indigo-500">
                    <h4 className="font-bold text-gray-800 text-base">
                      Mongeni Complex School
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      High School - Graduated
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    SOFTWARE SKILLS
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      Languages
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: "JavaScript", level: "Advanced" },
                        { name: "TypeScript", level: "Advanced" },
                        { name: "Python", level: "Intermediate" },
                        { name: "Groovy", level: "Intermediate" },
                        { name: "Dart", level: "Intermediate" },
                      ].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium block">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      Backend & Architecture
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Node.js",
                        "Express.js",
                        "Django",
                        "Grails",
                        "Groovy",
                        "TypeScript",
                      ].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      Frontend & UI/UX
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "Vue.js",
                        "Quasar",
                        "Webix",
                        "TypeScript",
                      ].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      Mobile Development
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Flutter", "React Native"].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      Database & Tools
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["MongoDB", "PostgreSQL", "Git"].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      DevOps & Deployment
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Docker", "CI/CD"].map((skill, index) => (
                        <div key={index} className="bg-white p-2.5 rounded-lg">
                          <span className="text-sm text-gray-700 font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" />
                      Backend Expertise
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Security & Validation</li>
                      <li>• Caching & Optimization</li>
                      <li>• Logging & Monitoring</li>
                      <li>• Testing & CI/CD</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    INTERESTS
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-xl shadow-md border-l-4 border-yellow-500">
                    <div className="flex items-start gap-3">
                      <Trophy className="text-yellow-600 w-5 h-5 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">
                          Chess Master
                        </h4>
                        <p className="text-xs text-gray-700">
                          Strategic thinking & problem-solving
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl shadow-md border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <Dumbbell className="text-green-600 w-5 h-5 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">
                          Fitness Enthusiast
                        </h4>
                        <p className="text-xs text-gray-700">
                          5+ years of dedicated training
                        </p>
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    WORK EXPERIENCE
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-emerald-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                          Full-Stack Developer
                        </h4>
                        <h5 className="text-lg text-emerald-600 font-bold">
                          Smart Batax LLC
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-3 sm:mt-0 bg-white px-4 py-2 rounded-lg shadow-sm">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-semibold">
                          Dec 2025 - Present
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-emerald-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Enterprise Application Development:</strong>{" "}
                          Building robust backend systems using Grails/Groovy
                          framework with modern frontend interfaces
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="text-emerald-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Full-stack responsibility:</strong> Developing
                          both backend APIs with Grails and frontend interfaces
                          using Vue.js, Quasar, and Webix
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Code className="text-emerald-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Tech stack:</strong> Grails, Groovy, Vue.js,
                          Quasar Framework, Webix UI, PostgreSQL, Git
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="text-emerald-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Integration:</strong> Working with legacy
                          systems and modern frameworks to deliver scalable
                          enterprise solutions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                          Frontend Developer
                        </h4>
                        <h5 className="text-lg text-blue-600 font-bold">
                          Nandin Brothers Group LLC
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-3 sm:mt-0 bg-white px-4 py-2 rounded-lg shadow-sm">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-semibold">
                          Feb 2025 - Nov 2025
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>ERP System Development:</strong> Led frontend
                          development of comprehensive 9-module enterprise
                          resource planning system for business management
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Team collaboration:</strong> Worked with
                          cross-functional teams using Agile methodology, Git
                          workflow, and modern CI/CD practices
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Code className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Tech stack:</strong> Next.js 14, TypeScript,
                          Flutter, GitHub Actions
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Performance:</strong> Optimized application
                          performance, implemented responsive designs with
                          strong UI/UX sensibility
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg border border-purple-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">
                          Freelance Full-Stack Developer
                        </h4>
                        <h5 className="text-base text-purple-600 font-semibold">
                          Independent Projects
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-3 sm:mt-0 bg-white px-4 py-2 rounded-lg shadow-sm">
                        <Calendar className="w-4 h-4 text-purple-500" />
                        <span className="text-sm font-semibold">
                          Jun 2024 - Jan 2025
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h6 className="font-semibold text-gray-800 mb-2 text-sm">
                          Major Projects Delivered:
                        </h6>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>
                            • Enterprise management system serving 10,000+ users
                          </li>
                          <li>
                            • Large-scale web portal with 5,000+ expected
                            monthly visitors
                          </li>
                          <li>
                            • Multiple enterprise-level applications delivered
                            independently
                          </li>
                          <li>
                            • Full-stack development with modern technologies
                            and cloud deployment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    FEATURED PROJECTS
                  </h3>
                </div>

                <div className="grid gap-5">
                  {[
                    {
                      title: "Educational Management System",
                      description:
                        "Comprehensive platform for students, teachers, and parents deployed at multiple universities across Ulaanbaatar, featuring academic tracking, course management, and communication tools.",
                      tech: "Next.js, TypeScript, Django, PostgreSQL, Docker, Shadcn UI",
                      stats: "10,000+ active users",
                      impact: "Live in production",
                      color: "blue",
                    },
                    {
                      title: "Enterprise ERP System (9 Modules)",
                      description:
                        "Complete business management platform used internally by the company, including Asset Management, Archive, Human Resources, Document Management, Project Management, Chat, Production, and Financial modules.",
                      tech: "Next.js 14, TypeScript, Django, PostgreSQL, Docker, AWS",
                      stats: "500+ daily users",
                      impact: "Streamlined operations",
                      color: "indigo",
                    },
                    {
                      title: "District Government Portal",
                      description:
                        "Public services website with real-time news and citizen engagement features. Multiple districts are planning to adopt the system soon.",
                      tech: "Next.js, TypeScript, Django, TailwindCSS, Docker, GCP",
                      stats: "5,000+ expected visitors",
                      impact: "Enhanced public access",
                      color: "purple",
                    },
                    {
                      title: "HR Mobile Application",
                      description:
                        "Cross-platform mobile app for HR management with employee profiles, attendance tracking, and leave management.",
                      tech: "Flutter, Dart, REST API, Docker",
                      stats: "1,000+ downloads",
                      impact: "50% faster processing",
                      color: "green",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-${project.color}-50 to-${project.color}-100 p-5 rounded-xl shadow-md border border-${project.color}-200`}
                    >
                      <h5 className="font-bold text-gray-800 mb-2 text-lg">
                        {project.title}
                      </h5>
                      <p className="text-sm text-gray-700 mb-3">
                        {project.description}
                      </p>
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
