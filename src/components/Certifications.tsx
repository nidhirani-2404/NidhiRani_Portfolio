import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-b border-[#222222] bg-[#0A0A0A] relative">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-2 font-sans">
            Certifications
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] mt-3 max-w-xl font-sans leading-relaxed">
            Verified expertise, courses, and certifications in backend architecture, relational logic, and cloud services.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, certIdx) => (
            <motion.div
              key={certIdx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: certIdx * 0.05 }}
              className="bg-[#111111] border border-[#222222] hover:border-[#333333] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#A1A1AA] bg-[#161616] border border-[#262626] px-2.5 py-1 rounded">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] font-sans mt-1">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <div className="mt-4 inline-flex items-center gap-1.5 py-1 px-2.5 bg-[#161616] rounded border border-[#262626] text-[10px] font-mono text-[#A1A1AA]">
                    <CheckCircle className="w-3 h-3 text-[#3B82F6]" />
                    ID: <span className="text-white font-bold">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {cert.verificationUrl && (
                <div className="mt-6 border-t border-[#222222] pt-4 font-sans">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-[#1A1A1A] hover:bg-[#202022] text-white text-xs font-bold border border-[#262626] rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify Credential
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
