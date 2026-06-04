import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-[#222222] bg-[#0A0A0A] relative">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            Career Path
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-2 font-sans">
            Professional Experience
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] mt-3 max-w-xl mx-auto font-sans leading-relaxed">
            Hands-on software development internship solving real-world engineering challenges.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#222222] pl-8 ml-4 space-y-12">
          {experienceData.map((exp, expIdx) => (
            <motion.div
              key={expIdx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: expIdx * 0.1 }}
              className="relative"
            >
              {/* Timeline bubble bullet */}
              <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#0A0A0A] border-2 border-[#3B82F6] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
              </div>

              {/* Card Container */}
              <div className="bg-[#111111] border border-[#222222] hover:border-[#333333] transition-all rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-[#3B82F6] mt-1.5">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-[#A1A1AA] font-mono">
                    <span className="flex items-center gap-1.5 bg-[#1F1F1F] border border-[#2A2A2A] px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#1F1F1F] border border-[#2A2A2A] px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights list */}
                <h5 className="text-xs uppercase font-mono tracking-widest text-[#A1A1AA] mb-4 font-bold border-b border-[#222222] pb-2">
                  Key Accomplishments
                </h5>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                      <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
