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
                Fullstack Developer
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar - Enhanced */}
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
                      GitHub Profile
                    </span>
                  </Link>
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
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "HTML5/CSS3",
                    "TailwindCSS",
                    "JavaScript",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "Express.js",
                    "MongoDB",
                    "Mongoose",
                    "Prisma",
                    "Authentication",
                    "Payment Integration",
                    "GraphQL",
                    "Flutter",
                    "Django",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white p-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="text-sm text-gray-700 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    ACHIEVEMENTS
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-xl shadow-md border-l-4 border-yellow-500 print:bg-yellow-50 print:shadow-none print:border print:border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaTrophy className="text-yellow-600 text-lg" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-base mb-1">
                          Chess Master
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Advanced level chess player with strategic thinking
                          and problem-solving expertise
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl shadow-md border-l-4 border-green-500 print:bg-green-50 print:shadow-none print:border print:border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaDumbbell className="text-green-600 text-lg" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-base mb-1">
                          Fitness Enthusiast
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          5 years of dedicated fitness training, demonstrating
                          discipline and commitment to personal growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced */}
            <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10">
              {/* Work Experience Section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    WORK EXPERIENCE
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100 print:bg-blue-50 print:shadow-none">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                          Frontend Developer
                        </h4>
                        <h5 className="text-lg sm:text-xl text-blue-600 font-bold">
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
                    <p className="text-gray-700 leading-relaxed text-base">
                      Developing modern, responsive web applications using
                      React.js, Next.js, and cutting-edge technologies. Building
                      scalable solutions with focus on performance, user
                      experience, and clean code architecture.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200 print:border print:border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Previous Experience
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Completed multiple internships at various technology
                    companies, gaining hands-on experience in full-stack web
                    development, agile methodologies, and professional software
                    engineering practices.
                  </p>
                </div>
              </div>

              {/* Projects Section */}
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
                        "Comprehensive educational platform with course management, student tracking, and real-time collaboration. Currently deployed and actively used by multiple universities for online education programs.",
                      color: "from-blue-500 to-indigo-500",
                    },
                    {
                      title: "District Information Portal",
                      description:
                        "Public information website providing essential government services, real-time news updates, and community resources for district residents.",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      title: "Enterprise ERP System",
                      description:
                        "Actively developing a comprehensive internal ERP solution for enterprise resource planning, business process automation, and data analytics.",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      title: "HR Mobile Application (Flutter)",
                      description:
                        "Cross-platform mobile app for human resources management including employee profiles, leave requests, attendance tracking, and payroll management.",
                      color: "from-orange-500 to-red-500",
                    },
                    {
                      title: "HR Management System",
                      description:
                        "Full-stack web application for HR operations with employee management, performance tracking, recruitment workflows, and analytics dashboard.",
                      color: "from-cyan-500 to-blue-500",
                    },
                    {
                      title: "Asset Management System",
                      description:
                        "Enterprise solution for tracking and managing company assets, inventory control, equipment maintenance scheduling, and depreciation tracking.",
                      color: "from-violet-500 to-purple-500",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="group bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 print:shadow-none print:hover:shadow-none print:border print:border-gray-200"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${project.color} rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform`}
                        ></div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-800 mb-2 text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h5>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {project.description}
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

      {/* Enhanced Print Styles */}
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

          .print\\:bg-blue-50 {
            background-color: #eff6ff !important;
          }

          .print\\:bg-green-50 {
            background-color: #f0fdf4 !important;
          }

          .print\\:bg-yellow-50 {
            background-color: #fefce8 !important;
          }

          .print\\:border {
            border: 1px solid #e5e7eb !important;
          }

          .print\\:border-gray-200 {
            border-color: #e5e7eb !important;
          }

          .print\\:text-blue-600 {
            color: #2563eb !important;
          }

          .print\\:hover\\:shadow-none:hover {
            box-shadow: none !important;
          }

          @page {
            margin: 0.4in 0.5in;
            size: A4;
          }

          .group:hover {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
