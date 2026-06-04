import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Code, Award, Target, Heart, Users } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { socialEngagementsData } from '../data/social_engagements';

export default function Achievements() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Algorithmic Mastery':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'Persistence':
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      default:
        return <Target className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  const getEngagementIcon = (role: string) => {
    if (role.toLowerCase().includes('volunteer')) {
      return <Heart className="w-5 h-5 text-rose-500" />;
    }
    return <Users className="w-5 h-5 text-emerald-500" />;
  };

  return (
    <section id="achievements" className="py-24 border-b border-[#222222] bg-[#0A0A0A] relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            Milestones & Engagement
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-2 font-sans font-sans">
            Key Achievements
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] mt-3 max-w-xl font-sans leading-relaxed">
            Major academic, programming landmarks and co-curricular engagements emphasizing impact and leadership.
          </p>
        </div>

        {/* Achievements list cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#111111] border border-[#222222] hover:border-[#333333] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center">
                    {getIcon(ach.category)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#3B82F6] bg-[#161616] border border-[#262626] px-2.5 py-1 rounded">
                    {ach.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors leading-snug">
                  {ach.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] font-sans mt-2 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Engagements sub-section */}
        <div className="border-t border-[#222222] pt-16">
          <div className="mb-10 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
              Co-curricular
            </span>
            <h3 className="text-xl md:text-3xl font-black text-white tracking-tight mt-1 font-sans">
              Social Engagements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialEngagementsData.map((engagement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#111111] border border-[#222222] hover:border-[#333333] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center">
                      {getEngagementIcon(engagement.role)}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#3B82F6] bg-[#161616] border border-[#262626] px-2.5 py-1 rounded">
                      {engagement.role}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight leading-snug">
                    {engagement.organization}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] font-sans mt-2 leading-relaxed">
                    {engagement.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
