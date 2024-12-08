// src/app/page.tsx
'use client';

import React from 'react';
import { ChevronRight, Zap, Search, FileText, Brain, Mic } from 'lucide-react';

export default function HomePage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jumpstart.ai.solution@gmail.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section - Attention */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Zap className="mr-2" />
            Jumpstart
          </h1>
          <button 
            onClick={handleEmailClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
          >
            Contact Us
          </button>
        </nav>
        
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Transforming Business Through
            <span className="text-blue-500"> Intelligent Automation</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We build AI-powered solutions that solve complex business challenges in weeks, not months. From talent discovery to document processing, we make the impossible possible.
          </p>
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full flex items-center mx-auto">
            See Our Solutions
            <ChevronRight className="ml-2" />
          </button> */}
        </div>
      </header>

      {/* Solutions Section - Retention */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proven Solutions That Deliver Results
          </h3>     

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-700 p-6 rounded-lg">
              <Mic className="w-12 h-12 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">
                Meeting Summary Tool
              </h4>
              <p className="text-slate-300">
                Automatically generate comprehensive meeting summaries with action items and key insights using AI.
              </p>
            </div>     

            <div className="bg-slate-700 p-6 rounded-lg">
              <Search className="w-12 h-12 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">
                Talent Discovery Platform
              </h4>
              <p className="text-slate-300">
                AI-powered CV analysis and semantic search to find the perfect candidates instantly. Reduce hiring time by 80%.
              </p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">
                AI Solution Matcher
              </h4>
              <p className="text-slate-300">
                Match your business challenges with the perfect AI solution. Get actionable recommendations in minutes.
              </p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg">
              <FileText className="w-12 h-12 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">
                PDF Data Transformer
              </h4>
              <p className="text-slate-300">
                Automatically validate and structure PDF content. Reduce manual labor and ensure perfect accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Jumpstart?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-3">
                Rapid Delivery
              </h4>
              <p className="text-slate-300">
                We deliver fully functional AI solutions in weeks, not months. Our proprietary tools and workflows ensure quick turnaround without compromising quality.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-3">
                Proven Expertise
              </h4>
              <p className="text-slate-300">
                Specialized in solving complex AI challenges and redesigning failed implementations. We turn impossible problems into working solutions.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-3">
                Efficient & Scalable
              </h4>
              <p className="text-slate-300">
                Our AI-driven approach means lower costs and higher efficiency. We help you scale without proportional increases in spending.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-3">
                Result-Focused
              </h4>
              <p className="text-slate-300">
                We&apos;re not just consultants - we&apos;re your technology partners focused on delivering tangible business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI solutions can solve your specific challenges and drive real business results.
          </p>
          <button 
            onClick={handleEmailClick}
            className="bg-white hover:bg-slate-100 text-blue-600 text-lg px-8 py-4 rounded-full inline-flex items-center"
          >
            Schedule a Consultation
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p>&copy; 2024 Jumpstart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}