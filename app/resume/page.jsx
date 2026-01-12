"use client";
import { downloadResumeAsPdf, loadPdfLibrary } from "@/utils/pdfDownload";
import { Download, Github, Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
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
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div
        id="resume-content"
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-16 md:p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">GAN-ERDENE GANBAT</h1>
              <p className="text-xl text-slate-300">Full-Stack Developer</p>
              <p className="text-sm text-slate-400 mt-2">
                6 years coding experience • 2 years professional
              </p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 p-8">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-6">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-slate-900 pb-1">
                CONTACT
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4" />
                  <span>ganaa.12396@yahoo.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4" />
                  <span>90162332</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4" />
                  <span>Ulaanbaatar, Mongolia</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Github className="w-4 h-4" />
                  <span>github.com/horror0110</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-slate-900 pb-1">
                TECH STACK
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    Backend
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["Node.js", "Django", "Grails", "Express"].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-slate-100 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    Frontend
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Next.js", "Vue.js", "TypeScript"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-slate-100 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    Mobile
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["Flutter", "React Native"].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-slate-100 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    Database & DevOps
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["PostgreSQL", "MongoDB", "Docker", "CI/CD"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-slate-100 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-slate-900 pb-1">
                EDUCATION
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    High School
                  </p>
                  <p className="text-xs text-slate-600">
                    Mongeni Complex School
                  </p>
                  <p className="text-xs text-slate-500">Graduated 2020</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    Bachelor of Software Engineering
                  </p>
                  <p className="text-xs text-slate-600">
                    University of the Humanities
                  </p>
                  <p className="text-xs text-slate-500">Graduated 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Summary */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-slate-900 pb-1">
                PROFESSIONAL SUMMARY
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Full-stack developer with proven track record building scalable
                enterprise applications serving 10,000+ users. Specialized in
                modern web technologies (Next.js, React, Vue.js) and backend
                systems (Node.js, Django, Grails). Delivered complete ERP
                systems, government portals, and educational platforms with
                focus on clean architecture, performance optimization, and
                production-ready code.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-slate-900 pb-1">
                WORK EXPERIENCE
              </h3>

              <div className="space-y-5">
                {/* Current Job */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Full-Stack Developer
                      </h4>
                      <p className="text-sm text-slate-600">Smart Batax LLC</p>
                    </div>
                    <span className="text-xs text-slate-500">
                      Dec 2025 - Jan 2026
                    </span>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                    <li>
                      Building enterprise applications with Grails/Groovy
                      backend and Vue.js frontend
                    </li>
                    <li>
                      Developing full-stack solutions using Quasar Framework and
                      Webix UI
                    </li>
                    <li>
                      Working with PostgreSQL and legacy system integration
                    </li>
                  </ul>
                </div>

                {/* Previous Job */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Frontend Developer
                      </h4>
                      <p className="text-sm text-slate-600">
                        Nandin Brothers Group LLC
                      </p>
                    </div>
                    <span className="text-xs text-slate-500">
                      Feb 2025 - Nov 2025
                    </span>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                    <li>
                      Led frontend development of 9-module ERP system using
                      Next.js 14 and TypeScript with Flutter
                    </li>
                    <li>Implemented CI/CD pipelines with GitHub Actions</li>
                    <li>
                      Built responsive interfaces with strong focus on
                      performance optimization
                    </li>
                  </ul>
                </div>

                {/* Freelance */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Freelance Full-Stack Developer
                      </h4>
                      <p className="text-sm text-slate-600">
                        Independent Projects
                      </p>
                    </div>
                    <span className="text-xs text-slate-500">
                      Jun 2024 - Jan 2025
                    </span>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                    <li>
                      Delivered educational management system serving 10,000+
                      users across multiple universities
                    </li>
                    <li>
                      Built government district portal with 5,000+ expected
                      monthly visitors
                    </li>
                    <li>
                      Developed enterprise applications independently with full
                      deployment to production
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-slate-900 pb-1">
                KEY PROJECTS
              </h3>

              <div className="grid gap-3">
                <div className="border border-slate-200 rounded p-3">
                  <h5 className="font-semibold text-slate-900 text-sm mb-1">
                    Educational Management System
                  </h5>
                  <p className="text-xs text-slate-600 mb-2">
                    Next.js • Typescript • Django • PostgreSQL • Docker •
                    Flutter
                  </p>
                  <p className="text-xs text-slate-700">
                    Platform for students, teachers and parents deployed at
                    universities. 10,000+ active users.
                  </p>
                </div>

                <div className="border border-slate-200 rounded p-3">
                  <h5 className="font-semibold text-slate-900 text-sm mb-1">
                    Enterprise ERP System
                  </h5>
                  <p className="text-xs text-slate-600 mb-2">
                    Next.js • Typescript • Django • PostgreSQL • Docker •
                    Flutter
                  </p>
                  <p className="text-xs text-slate-700">
                    9-module business management platform. 500+ daily users
                    across all departments.
                  </p>
                </div>

                <div className="border border-slate-200 rounded p-3">
                  <h5 className="font-semibold text-slate-900 text-sm mb-1">
                    District Government Portal
                  </h5>
                  <p className="text-xs text-slate-600 mb-2">
                    Next.js • Typescript • Django • PostgreSQL • Docker •
                    Flutter
                  </p>
                  <p className="text-xs text-slate-700">
                    Public services website with news and citizen engagement.
                    5,000+ expected monthly visitors.
                  </p>
                </div>

                <div className="border border-slate-200 rounded p-3">
                  <h5 className="font-semibold text-slate-900 text-sm mb-1">
                    Pos System
                  </h5>
                  <p className="text-xs text-slate-600 mb-2">
                    Grails • Groovy • Vue.js • Quasar • CI/CD
                  </p>
                  <p className="text-xs text-slate-700">
                    Enterprise point-of-sale system with inventory management,
                    sales tracking, and real-time reporting for retail
                    businesses.
                  </p>
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
