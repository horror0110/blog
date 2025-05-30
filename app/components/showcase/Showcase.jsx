"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Showcase = () => {

  const router = useRouter()
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading with gradient text */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
              Gan-Erdene Ganbat
            </h1>
            
            {/* Typing text with modern styling */}
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 typing-text">
                I'm a Developer!
              </h2>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion, precision, and cutting-edge technology
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button onClick={()=> router.push("/resume")} className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105">
              Get In Touch
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-cyan-400/50 rounded-full animate-ping delay-3000"></div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;