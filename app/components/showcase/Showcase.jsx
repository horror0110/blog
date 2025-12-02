"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Showcase = () => {
  const mountRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: new THREE.Color("#8b5cf6"),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Create rotating geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xec4899,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
    ];

    const meshes = [];
    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      mesh.position.set((index - 1) * 4, Math.sin(index) * 2, -10);
      mesh.scale.set(2, 2, 2);
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 5;

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.03;

      // Rotate geometric shapes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x = elapsedTime * 0.5 + index;
        mesh.rotation.y = elapsedTime * 0.3 + index;
        mesh.position.y = Math.sin(elapsedTime + index) * 2;
      });

      // Camera follow mouse
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      {/* Three.js Canvas - Fixed Background */}
      <div ref={mountRef} className="fixed inset-0 z-0" />

      {/* Content Overlay - Scrollable */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div
          className={`max-w-5xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Floating Badge */}
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-4 animate-float">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/70 text-sm font-medium">
              Available for Projects
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Gan-Erdene
              </span>
              <span className="block bg-gradient-to-r from-cyan-300 via-purple-200 to-white bg-clip-text text-transparent animate-gradient-reverse">
                Ganbat
              </span>
            </h1>

            {/* Animated Title */}
            <div className="relative h-12 sm:h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-xl"></div>
              <h2 className="relative text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                <span className="inline-block animate-typing">
                  Full Stack Developer
                </span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Building scalable, enterprise-grade applications with modern web &
            mobile technologies. 4 years of coding experience with passion for
            clean architecture and performance optimization.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 px-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Django",
              "Flutter",
              "PostgreSQL",
              "Docker",
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 px-4 max-w-3xl mx-auto">
            {[
              { value: "4+", label: "Years Coding" },
              { value: "1.5+", label: "Years Pro" },
              { value: "10K+", label: "Users Served" },
              { value: "10+", label: "Projects" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4">
            <button
              onClick={() => router.push("/resume")}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>View Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* <button
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-full text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Contact Me</span>
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button> */}
          </div>

          {/* Contact Info at Bottom */}
          <div className="pt-12 space-y-3">
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <a
                href="mailto:ganaa.12396@yahoo.com"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                ganaa.12396@yahoo.com
              </a>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                90162332
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Ulaanbaatar, Mongolia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-20 w-3 h-3 bg-purple-400/60 rounded-full animate-float-slow pointer-events-none hidden sm:block"></div>
      <div className="fixed bottom-32 right-32 w-4 h-4 bg-cyan-400/60 rounded-full animate-float-slower pointer-events-none hidden sm:block"></div>
      <div className="fixed top-1/2 right-20 w-2 h-2 bg-pink-400/60 rounded-full animate-float pointer-events-none hidden sm:block"></div>
      <div className="fixed bottom-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-float-slow pointer-events-none hidden sm:block"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }

        @keyframes typing {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(12px);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 5s ease-in-out infinite;
        }

        .animate-typing {
          animation: typing 2s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite reverse;
        }

        .animate-scroll {
          animation: scroll 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Showcase;
