import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Layout, Server, Database, Code2, Wrench, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skills';

export default function Skills() {
  // Group skills by category dynamically
  const categories = ['Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'AI & Cloud'] as const;

  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'Frontend':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-purple-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'Tools':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      case 'AI & Cloud':
        return <Cpu className="w-5 h-5 text-rose-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-[#222222] bg-[#0A0A0A] relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-2 font-sans">
            Technical Stack
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] mt-3 max-w-xl font-sans leading-relaxed">
            A comprehensive overview of backend engineering, frontend modules, advanced languages, and cloud systems I work with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const categorySkills = skillsData.filter(s => s.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#111111] border border-[#222222] hover:border-[#333333] rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center">
                    {getIcon(category)}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category}
                  </h3>
                </div>

                {/* Badges Flow */}
                <div className="flex flex-wrap gap-2.5">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3.5 py-1.5 bg-[#161616] hover:bg-[#1A1A1A] text-xs font-medium text-white border border-[#262626] rounded-lg transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
