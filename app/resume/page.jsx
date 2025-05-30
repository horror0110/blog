"use client";
import React from "react";

import { Lato } from "next/font/google";
import Link from "next/link";
import { AiOutlineMail, AiFillPhone, AiFillGithub } from "react-icons/ai";
import { FaLocationArrow, FaCalendar, FaDownload } from "react-icons/fa";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

const Resume = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className={lato.className}>
      <div className="flex flex-col items-center mx-5 bg-gray-50 min-h-screen py-8">
        {/* Download Button - only visible on screen */}
        <div className="w-full max-w-4xl mb-4 print:hidden">
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl ml-auto"
          >
            <FaDownload className="text-sm" />
            Download Resume as PDF
          </button>
        </div>

        <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 print:bg-slate-800">
            <div className="text-center">
              <h1 className="text-5xl font-light mb-3 tracking-wide">
                GAN-ERDENE GANBAT
              </h1>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
              <h2 className="text-2xl font-light tracking-wider">
                FRONTEND DEVELOPER
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar */}
            <div className="lg:w-1/3 bg-gray-100 p-8 print:bg-gray-50">
              {/* Contact Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-400">
                  CONTACT
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <AiOutlineMail className="text-blue-500 text-lg flex-shrink-0" />
                    <span className="text-sm">ganaa.12396@yahoo.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <AiFillPhone className="text-blue-500 text-lg flex-shrink-0" />
                    <span className="text-sm">90162332</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaLocationArrow className="text-blue-500 text-lg flex-shrink-0" />
                    <span className="text-sm">Ulaanbaatar, Mongolia</span>
                  </div>
                  <Link
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors print:text-blue-600"
                    target="_blank"
                    href="https://github.com/horror0110"
                  >
                    <AiFillGithub className="text-lg flex-shrink-0" />
                    <span className="text-sm underline">GitHub Profile</span>
                  </Link>
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-400">
                  EDUCATION
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm print:shadow-none print:border print:border-gray-200">
                    <h4 className="font-semibold text-gray-800">
                      University of the Humanities
                    </h4>
                    <p className="text-sm text-gray-600">Graduated</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm print:shadow-none print:border print:border-gray-200">
                    <h4 className="font-semibold text-gray-800">
                      Mongeni Complex School
                    </h4>
                    <p className="text-sm text-gray-600">Graduated</p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-400">
                  TECHNICAL SKILLS
                </h3>
                <div className="space-y-2">
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
                    "Authentication (Clerk, NextAuth)",
                    "Stripe Payment Integration",
                    "GraphQL (Learning)",
                    "Flutter (Learning)",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/3 p-8">
              {/* Work Experience Section */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-400">
                  WORK EXPERIENCE
                </h3>

                <div className="mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-400 print:bg-blue-50 print:shadow-none">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">
                          Frontend Developer
                        </h4>
                        <h5 className="text-lg text-blue-600 font-semibold">
                          Nandin Brothers Group LLC
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
                        <FaCalendar className="text-sm" />
                        <span className="text-sm font-medium">
                          Feb 2025 - Present
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Currently working as a Frontend Developer, developing
                      modern web applications using React.js, Next.js, and other
                      cutting-edge technologies to deliver exceptional user
                      experiences.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg print:border print:border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Previous Experience
                  </h4>
                  <p className="text-gray-700">
                    Completed multiple internships at various companies during
                    my studies, gaining valuable hands-on experience in web
                    development and software engineering practices.
                  </p>
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-400">
                  FEATURED PROJECTS
                </h3>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">
                    Full Stack Next.js Applications
                  </h4>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      title: "Learning Management System",
                      description:
                        "Bachelor's graduation project - comprehensive educational platform with course management and student tracking",
                    },
                    {
                      title: "Human Resources Management System",
                      description:
                        "ERP System for HR operations including employee management, payroll, and attendance tracking",
                    },
                    {
                      title: "Company Asset Management System",
                      description:
                        "ERP System for tracking and managing company assets, inventory, and equipment",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow print:shadow-none print:hover:shadow-none"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1">
                            {project.title}
                          </h5>
                          <p className="text-sm text-gray-600">
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

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
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

          .print\\:bg-slate-800 {
            background-color: #1e293b !important;
          }

          .print\\:bg-gray-50 {
            background-color: #f9fafb !important;
          }

          .print\\:bg-blue-50 {
            background-color: #eff6ff !important;
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
            margin: 0.5in;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
