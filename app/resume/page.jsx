"use client";
import React from "react";
import { Lato } from "next/font/google";
import Link from "next/link";
import { AiOutlineMail, AiFillPhone, AiFillGithub } from "react-icons/ai";
import {
  FaLocationArrow,
  FaCalendar,
  FaDownload,
  FaTrophy,
  FaDumbbell,
  FaUsers,
  FaChartLine,
  FaCode,
} from "react-icons/fa";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

const Resume = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className={lato.className}>
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen py-8">
        {/* Download Button */}
        <div className="w-full max-w-6xl mb-6 print:hidden mt-16 md:mt-0 ">
          <button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-xl font-semibold flex items-center gap-3 transition-all shadow-lg hover:shadow-xl ml-auto transform hover:scale-105"
          >
            <FaDownload className="text-base" />
            Print
          </button>
        </div>

        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
          {/* Modern Header Section */}
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white p-8 sm:p-12 print:bg-slate-900">
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
              <p className="text-blue-300 mt-3 text-base max-w-2xl mx-auto">
                Passionate developer with 2+ years building scalable web
                applications
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar */}
            <div className="lg:w-2/5 bg-gradient-to-b from-gray-50 to-blue-50 p-6 sm:p-8 print:bg-gray-50">
              {/* Contact Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    CONTACT
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AiOutlineMail className="text-blue-600 text-lg" />
                    </div>
                    <span className="text-sm break-all">
                      ganaa.12396@yahoo.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AiFillPhone className="text-blue-600 text-lg" />
                    </div>
                    <span className="text-sm">90162332</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaLocationArrow className="text-blue-600 text-lg" />
                    </div>
                    <span className="text-sm">Ulaanbaatar, Mongolia</span>
                  </div>
                  <Link
                    className="flex items-center gap-3 text-blue-600 hover:text-indigo-600 transition-colors group print:text-blue-600"
                    target="_blank"
                    href="https://github.com/horror0110"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                      <AiFillGithub className="text-lg" />
                    </div>
                    <span className="text-sm font-medium underline">
                      github.com/horror0110
                    </span>
                  </Link>
                </div>
              </div>

              {/* Summary Section - NEW */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    PROFESSIONAL SUMMARY
                  </h3>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Full-stack developer specializing in modern web technologies
                    with proven track record of building scalable applications
                    serving 10,000+ users. Experienced in leading development
                    teams and delivering complex enterprise solutions.
                  </p>
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    EDUCATION
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 print:shadow-none print:border print:border-gray-200">
                    <h4 className="font-bold text-gray-800 text-base">
                      University of the Humanities
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Bachelor's Degree - Graduated
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Relevant Coursework: Data Structures, Web Development,
                      Database Management
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500 print:shadow-none print:border print:border-gray-200">
                    <h4 className="font-bold text-gray-800 text-base">
                      Mongeni Complex School
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      High School - Graduated
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    TECHNICAL SKILLS
                  </h3>
                </div>
                <div className="space-y-4">
                  {/* Languages */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Languages
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: "JavaScript", level: "Advanced" },
                        { name: "TypeScript", level: "Advanced" },
                        { name: "Python", level: "Intermediate" },
                        { name: "Dart", level: "Intermediate" },
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-1 bg-white p-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <span className="text-sm text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Frontend */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      Frontend
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["React.js", "Next.js", "TailwindCSS", "HTML5/CSS3"].map(
                        (skill, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-white p-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                            <span className="text-sm text-gray-700 font-medium">
                              {skill}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Backend
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Node.js", "Express.js", "Django", "GraphQL"].map(
                        (skill, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-white p-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                            <span className="text-sm text-gray-700 font-medium">
                              {skill}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Database */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      Database & Tools
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["MongoDB", "PostgreSQL", "Prisma", "Git"].map(
                        (skill, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-white p-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                            <span className="text-sm text-gray-700 font-medium">
                              {skill}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
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
                      <FaTrophy className="text-yellow-600 text-lg mt-1 flex-shrink-0" />
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
                      <FaDumbbell className="text-green-600 text-lg mt-1 flex-shrink-0" />
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

            {/* Right Content */}
            <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10">
              {/* Work Experience Section - ENHANCED */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    WORK EXPERIENCE
                  </h3>
                </div>

                <div className="mb-6">
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
                        <FaCalendar className="text-sm text-blue-500" />
                        <span className="text-sm font-semibold">
                          Feb 2025 - Present
                        </span>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <FaChartLine className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Improved performance:</strong> Optimized React
                          applications resulting in 40% faster load times and
                          25% reduction in bundle size
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaUsers className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Team collaboration:</strong> Working with
                          5-member development team using Agile methodology and
                          Git workflow
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCode className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>Tech stack:</strong> Next.js 14, TypeScript,
                          Flutter, TailwindCSS, REST APIs
                        </p>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h6 className="font-semibold text-gray-800 mb-2 text-sm">
                        Key Responsibilities:
                      </h6>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>
                            Develop and maintain responsive web applications
                            using React.js and Next.js
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>
                            Implement pixel-perfect UI designs with focus on UX
                            best practices
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>
                            Collaborate with backend team to integrate RESTful
                            APIs
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>
                            Write clean, maintainable code following industry
                            best practices
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Previous Experience */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Internships & Previous Experience
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        Completed 3+ internships at technology companies
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        Gained experience in full-stack development and Agile
                        methodologies
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        Built 10+ projects including ERP systems and mobile
                        applications
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Section - ENHANCED */}
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
                      title: "Learning Management System",
                      description:
                        "Full-featured educational platform with course management, student tracking, and real-time collaboration.",
                      tech: "Next.js, Node.js, MongoDB, Socket.io",
                      stats: "10,000+ active users • 3 universities",
                      impact: "Reduced administrative workload by 60%",
                      color: "from-blue-500 to-indigo-500",
                      github: "Link available upon request",
                    },
                    {
                      title: "Enterprise ERP System",
                      description:
                        "Comprehensive business management platform with 9 integrated modules including HR, Finance, and Asset Management.",
                      tech: "React, Django, PostgreSQL, GraphQL",
                      stats: "500+ daily users • 9 modules",
                      impact: "Streamlined operations across departments",
                      color: "from-green-500 to-emerald-500",
                      github: "Private repository",
                    },
                    {
                      title: "District Information Portal",
                      description:
                        "Public-facing government services website with real-time news updates and community resources.",
                      tech: "Next.js, TypeScript, TailwindCSS",
                      stats: "5,000+ monthly visitors",
                      impact: "Improved citizen engagement by 45%",
                      color: "from-purple-500 to-pink-500",
                      github: "Live at [district-url]",
                    },
                    {
                      title: "HR Mobile App (Flutter)",
                      description:
                        "Cross-platform mobile application for HR management including employee profiles and attendance tracking.",
                      tech: "Flutter, Dart, Firebase, REST API",
                      stats: "1,000+ app downloads",
                      impact: "Reduced HR processing time by 50%",
                      color: "from-orange-500 to-red-500",
                      github: "Available on request",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="group bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${project.color} rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform`}
                        ></div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-800 mb-2 text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h5>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-500 mb-1">
                              Tech Stack:
                            </p>
                            <p className="text-xs text-gray-600">
                              {project.tech}
                            </p>
                          </div>

                          {/* Stats & Impact */}
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                              {project.stats}
                            </span>
                            <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                              {project.impact}
                            </span>
                          </div>

                          {/* GitHub Link */}
                          <p className="text-xs text-gray-500 italic mt-2">
                            {project.github}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          body {
            margin: 0;
            padding: 0;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:shadow-none {
            box-shadow: none !important;
          }

          .print\\:rounded-none {
            border-radius: 0 !important;
          }

          .print\\:bg-slate-900 {
            background-color: #0f172a !important;
          }

          .print\\:bg-gray-50 {
            background-color: #f9fafb !important;
          }

          @page {
            margin: 0.4in 0.5in;
            size: A4;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
