"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Showcase = () => {
  const mountRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
            Transforming ideas into immersive digital experiences with modern
            web technologies
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 px-4">
            {[
              "React",
              "Next.js",
              "Express.js",
              "TypeScript",
              "Django",
              "Flutter",
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4">
            <button
              onClick={() => (window.location.href = "/resume")}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>View My Resume</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => (window.location.href = "/blog")}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-full text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Read Blog</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
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
