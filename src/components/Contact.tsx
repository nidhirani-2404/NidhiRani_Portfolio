import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { socialsData } from '../data/socials';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#070707] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background ambient pulse effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-[10px] font-mono uppercase tracking-wider">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Contact Me
          </h2>
          <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-lg mx-auto">
            Have some project inquiries or software developer role openings? Reach out directly through the channels below and I will get back to you promptly.
          </p>
        </div>

        {/* Section Responsive Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <a 
            href={`mailto:${socialsData.email}`} 
            id="contact-email-link"
            className="p-6 bg-[#0C0C0D] border border-[#1e1e1f] hover:border-[#333333] hover:bg-[#121214] rounded-2xl flex flex-col items-center text-center gap-4 transition-all group animate-[fadeIn_0.3s_ease-out]"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-[#3B82F6] group-hover:scale-105 transition-transform shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-mono block uppercase tracking-wider mb-1">Email Address</span>
              <span className="text-xs text-white group-hover:text-[#3B82F6] font-semibold transition-colors break-all">{socialsData.email}</span>
            </div>
          </a>

          <a 
            href={`tel:${socialsData.phone}`} 
            id="contact-phone-link"
            className="p-6 bg-[#0C0C0D] border border-[#1e1e1f] hover:border-[#333333] hover:bg-[#121214] rounded-2xl flex flex-col items-center text-center gap-4 transition-all group animate-[fadeIn_0.4s_ease-out]"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-mono block uppercase tracking-wider mb-1">Phone Contact</span>
              <span className="text-xs text-white group-hover:text-emerald-400 font-semibold transition-colors">{socialsData.phone}</span>
            </div>
          </a>

          <a 
            href={socialsData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin-link"
            className="p-6 bg-[#0C0C0D] border border-[#1e1e1f] hover:border-[#333333] hover:bg-[#121214] rounded-2xl flex flex-col items-center text-center gap-4 transition-all group animate-[fadeIn_0.5s_ease-out]"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform shrink-0">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-mono block uppercase tracking-wider mb-1">LinkedIn Profile</span>
              <span className="text-xs text-white group-hover:text-sky-400 font-semibold transition-colors">Nidhi Rani</span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
