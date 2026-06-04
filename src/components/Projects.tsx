import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Globe, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-[#222222] bg-[#0A0A0A] relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            Creations
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-2 font-sans font-sans">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] mt-3 max-w-xl font-sans leading-relaxed">
            Beautifully designed full-stack web applications with clean architecture and responsive presentation.
          </p>
        </div>

        {/* Projects Layout with beautiful descriptions and parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pb-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111111] border border-[#222222] hover:border-[#333333] transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between group p-8 space-y-6"
            >
              {/* Description & specs */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#3B82F6] font-bold uppercase tracking-wider">
                    {project.tagline}
                  </span>
                  <div className="p-2 bg-[#1A1A1A] border border-[#262626] rounded-xl text-[#3B82F6] group-hover:scale-110 transition-transform duration-300">
                    <LayoutGrid className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed mt-2.5 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#1F1F1F] border border-[#2A2A2A] text-[10px] text-[#A1A1AA] font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Modular Feature list */}
                <div className="space-y-2 border-t border-[#222222] pt-4">
                  <h4 className="text-xs font-bold text-white uppercase font-mono tracking-widest mb-3">
                    Integrated Features & Benchmarks
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-2 font-sans items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons CTA */}
                <div className="flex flex-col sm:flex-row gap-3 border-t border-[#222222] pt-6 font-sans">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-[#3B82F6] hover:bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-white" />
                    Clone GitHub Repository
                  </a>
                  <div
                    className="py-2.5 px-4 bg-[#141416] border border-[#222222] text-[#71717A] text-[10px] font-mono rounded-xl flex items-center justify-center gap-1.5 select-none"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400/60 rounded-full animate-pulse"></span>
                    No Live Demo Hosted
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
