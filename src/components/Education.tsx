import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 border-b border-[#222222] bg-[#0A0A0A] relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            Academic History
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-2 font-sans">
            Education Timeline
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] mt-3 max-w-xl mx-auto font-sans leading-relaxed">
            A comprehensive look at my educational milestones and achievements.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="relative border-l border-[#222222] pl-8 ml-4 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#0A0A0A] border-2 border-[#3B82F6] flex items-center justify-center">
                <GraduationCap className="w-2 h-2 text-[#3B82F6]" />
              </div>

              {/* Box Details Card */}
              <div className="bg-[#111111] border border-[#222222] hover:border-[#333333] transition-all rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-[#A1A1AA] mt-1">
                      {edu.degree} {edu.branch ? `• ${edu.branch}` : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-[#1F1F1F] border border-[#2A2A2A] px-3 py-1 rounded-md text-xs font-mono text-[#A1A1AA] self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                    {edu.period}
                  </div>
                </div>

                {/* Score badge / visual element */}
                <div className="flex items-center gap-3.5 mt-5">
                  <div className="px-3.5 py-1.5 bg-[#1F1F1F] text-white border border-[#2A2A2A] text-xs font-mono rounded-lg flex items-center gap-1.5 font-bold">
                    <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
                    {edu.scoreLabel}: <span className="text-[#3B82F6]">{edu.score}</span>
                  </div>
                </div>

                {/* Short bio / study field scope */}
                <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed mt-4 pt-4 border-t border-[#222222]">
                  {edu.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
