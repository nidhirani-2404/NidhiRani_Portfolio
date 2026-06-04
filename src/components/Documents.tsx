import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Eye, ExternalLink } from 'lucide-react';
import { documentsData } from '../data/documents';

// Custom dynamic high-fidelity CSS replica thumbnails representing the actual PDF first pages
const DocumentThumbnail = ({ id }: { id: string }) => {
  if (id === 'resume') {
    return (
      <div className="w-full h-40 bg-[#161616] border border-[#222222] rounded-xl overflow-hidden relative p-4 flex flex-col justify-between font-sans shadow-inner select-none opacity-85 hover:opacity-100 transition-opacity">
        {/* Top Header Mockup */}
        <div className="border-b border-[#2A2A2A] pb-1.5">
          <div className="h-3 w-20 bg-blue-500/35 rounded mb-1"></div>
          <div className="h-1.5 w-36 bg-[#444]/60 rounded"></div>
        </div>
        {/* Content Lines Mockup */}
        <div className="space-y-2 py-1 flex-1 mt-2">
          <div>
            <div className="h-1.5 w-16 bg-blue-500/20 rounded mb-1"></div>
            <div className="h-1 w-full bg-[#2A2A2A] rounded"></div>
            <div className="h-1 w-[85%] bg-[#2A2A2A] rounded mt-0.5"></div>
          </div>
          <div>
            <div className="h-1.5 w-16 bg-blue-500/20 rounded mb-1"></div>
            <div className="h-1 w-[90%] bg-[#2A2A2A] rounded"></div>
          </div>
        </div>
        {/* Absolute branding watermark */}
        <span className="absolute bottom-2 right-3 font-mono text-[7px] text-[#444] uppercase tracking-wider">A4 FORMAT • 1 PAGE</span>
      </div>
    );
  }
  if (id === 'iitism-gradesheet') {
    return (
      <div className="w-full h-40 bg-[#161616] border border-[#222222] rounded-xl overflow-hidden relative p-4 flex flex-col justify-between font-sans shadow-inner select-none opacity-85 hover:opacity-100 transition-opacity">
        {/* Blue band banner header */}
        <div className="border border-blue-500/20 bg-blue-500/5 p-1 rounded flex flex-col items-center">
          <span className="text-[7px] font-bold text-[#3B82F6] uppercase tracking-tight text-center">INDIAN INSTITUTE OF TECHNOLOGY</span>
          <span className="text-[5px] text-[#777] uppercase tracking-tighter text-center mt-0.5">Dhanbad - Provisional Grade Sheet</span>
        </div>
        
        {/* Table representation mockup */}
        <div className="space-y-1 py-1.5">
          <div className="grid grid-cols-5 gap-1 border-b border-[#2A2A2A] pb-0.5 text-[5px] font-mono font-bold text-[#888]">
            <span className="col-span-2">COURSE</span>
            <span>CREDIT</span>
            <span>GRADE</span>
            <span>CGPA</span>
          </div>
          <div className="grid grid-cols-5 gap-1 text-[5px] font-mono text-[#555] opacity-60">
            <span className="col-span-2 text-[#999]">CSE201 (DSA)</span>
            <span>9.0</span>
            <span className="text-emerald-400 font-bold">B+</span>
            <span>7.93</span>
          </div>
          <div className="grid grid-cols-5 gap-1 text-[5px] font-mono text-[#555] opacity-60">
            <span className="col-span-2 text-[#999]">ECC303 (VLSI)</span>
            <span>9.0</span>
            <span className="text-emerald-400 font-bold">A+</span>
            <span>7.93</span>
          </div>
          <div className="grid grid-cols-5 gap-1 text-[5px] font-mono text-[#555] opacity-60">
            <span className="col-span-2 text-[#999]">ECC206 (Analog)</span>
            <span>11.0</span>
            <span className="text-emerald-400 font-bold">A</span>
            <span>7.93</span>
          </div>
        </div>

        {/* Total stats */}
        <div className="border-t border-[#2A2A2A] pt-1 flex justify-between items-center text-[6px] font-mono text-emerald-400 font-bold">
          <span>7 SEMESTERS COMPLETED</span>
          <span>CGPA: 7.93 / 10.0</span>
        </div>
      </div>
    );
  }
  if (id === 'cbse-xii-certificate' || id === 'cbse-x-marksheet') {
    const isX = id === 'cbse-x-marksheet';
    return (
      <div className="w-full h-40 bg-[#161616] border border-[#222222] rounded-xl overflow-hidden relative p-4 flex flex-col justify-between font-sans shadow-inner select-none opacity-85 hover:opacity-100 transition-opacity">
        {/* Ornamental Frame border */}
        <div className="absolute inset-1 border border-amber-500/10 rounded-lg pointer-events-none"></div>
        
        {/* Header Board Title */}
        <div className="flex flex-col items-center border-b border-amber-500/10 pb-1.5 z-10">
          <span className="text-[7px] font-extrabold text-amber-500 uppercase tracking-tight text-center">CBSE TRANSCRIPT</span>
          <span className="text-[4.5px] text-[#888] uppercase tracking-widest text-center mt-0.5 font-bold">
            {isX ? 'SECONDARY SCHOOL CERTIFICATE (X) 2019' : 'SENIOR SCHOOL TRANSCRIPT (XII) 2021'}
          </span>
        </div>

        {/* Content list */}
        <div className="space-y-0.5 py-1 z-10 font-mono text-[5px] text-[#555]">
          <div className="flex justify-between border-b border-[#2A2A2A]/40 pb-0.5">
            <span className="text-[#888]">{isX ? '101 ENGLISH COMM.' : '301 ENGLISH CORE'}</span>
            <span className="text-emerald-400 font-bold">{isX ? '94 (A1)' : '95 (A1)'}</span>
          </div>
          <div className="flex justify-between border-b border-[#2A2A2A]/40 pb-0.5">
            <span className="text-[#888]">{isX ? '041 MATHEMATICS' : '041 MATHEMATICS'}</span>
            <span className="text-emerald-400 font-bold">{isX ? '99 (A1)' : '92 (A1)'}</span>
          </div>
          <div className="flex justify-between border-b border-[#2A2A2A]/40 pb-0.5">
            <span className="text-[#888]">{isX ? '086 SCIENCE' : '042 PHYSICS'}</span>
            <span className="text-emerald-400 font-bold">{isX ? '97 (A1)' : '88 (A2)'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#888]">{isX ? '087 SOCIAL SCIENCE' : '043 CHEMISTRY'}</span>
            <span className="text-emerald-400 font-bold">{isX ? '82 (B1)' : '85 (A2)'}</span>
          </div>
        </div>

        {/* Total Badge */}
        <div className="flex justify-between items-center text-[6px] font-bold text-[#888] border-t border-[#2A2A2A] pt-1 z-10">
          <span className="text-emerald-400">STATUS: PASS</span>
          <span className="text-[#3B82F6]">AGGREGATE: {isX ? '93.0%' : '89.6%'}</span>
        </div>
      </div>
    );
  }
  if (id === 'hackerrank-sql-cert') {
    return (
      <div className="w-full h-40 bg-[#161616] border border-[#222222] rounded-xl overflow-hidden relative p-4 flex flex-col justify-between font-sans shadow-inner select-none opacity-85 hover:opacity-100 transition-opacity">
        {/* Landscape Frame border */}
        <div className="absolute inset-1 border border-emerald-500/10 rounded-lg pointer-events-none"></div>

        {/* Top HackerRank black banner */}
        <div className="flex justify-center z-10">
          <div className="bg-[#121212] px-1.5 py-0.5 border border-emerald-500/20 rounded flex items-center gap-0.5">
            <span className="text-emerald-400 font-bold font-mono text-[6px]">H</span>
            <span className="text-[4.5px] text-white font-bold tracking-widest font-sans uppercase">HackerRank verified</span>
          </div>
        </div>

        {/* Certification details center mockup */}
        <div className="flex flex-col items-center justify-center space-y-0.5 py-1 z-10">
          <span className="text-[4px] text-[#888] uppercase tracking-widest">Certificate of Accomplishment</span>
          <span className="text-[9px] font-black text-[#3B82F6] font-sans tracking-tight">SQL (ADVANCED)</span>
          <span className="text-[4px] text-[#555] font-mono">VERIFIABLE CREDENTIAL</span>
        </div>

        {/* Footer date/signatures info */}
        <div className="flex justify-between items-end text-[4.5px] font-semibold text-[#888] border-t border-[#2A2A2A] pt-1 z-10">
          <div className="flex flex-col">
            <span>EARNED DATE</span>
            <span className="text-white font-mono">MAY 20, 2026</span>
          </div>
          <div className="flex flex-col text-right">
            <span>VERIFICATION ID</span>
            <span className="text-emerald-400 font-mono">CD249100571A</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function Documents() {
  // Hide cards automatically if url is empty or set to placeholder/absent
  const activeDocuments = documentsData.filter(doc => doc && doc.downloadUrl && doc.downloadUrl !== '#');

  return (
    <section id="documents" className="py-24 border-b border-[#222222] bg-[#0A0A0A] relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            Credentials & Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-2 font-sans">
            Verified Documents
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] mt-3 max-w-xl font-sans leading-relaxed">
            Consolidated offline and online library verifying certificates, academic records, and CV. Open directly or download the secure pdf.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeDocuments.map((doc, docIdx) => (
            <motion.a
              key={doc.id}
              href={doc.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: docIdx * 0.05 }}
              className="group bg-[#111111] border border-[#222222] hover:border-[#3B82F6]/40 hover:shadow-lg hover:shadow-blue-500/5 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            >
              <div className="space-y-4">
                {/* Dynamic live PDF first-page thumbnail layout */}
                <DocumentThumbnail id={doc.id} />

                {/* Meta details header line */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#3B82F6] bg-[#161616] border border-[#262626] px-2.5 py-1 rounded">
                    {doc.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#A1A1AA]">
                    {doc.fileSize} / {doc.fileType}
                  </span>
                </div>

                {/* Technical description */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#1F1F1F] border border-[#2D2D30] rounded-xl text-[#3B82F6] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] mt-1.5 font-sans leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>

                {/* Show actual downloadable file name indicator */}
                <div className="mt-4 bg-[#161616] border border-[#262626] group-hover:border-[#3B82F6]/20 rounded-xl px-3 py-2 flex items-center justify-between font-mono text-[9px] text-[#A1A1AA] transition-all">
                  <span className="truncate max-w-[170px] text-white">
                    {doc.downloadUrl.startsWith('http') ? 'drive.google.com/...' : doc.downloadUrl.split('/').pop()}
                  </span>
                  <span className="shrink-0 text-[#3B82F6] font-[700] uppercase tracking-wider text-[8px] flex items-center gap-1">
                    {doc.downloadUrl.startsWith('http') ? 'OPEN DRIVE' : 'VIEW PDF'}
                    <ExternalLink className="w-3 h-3 text-[#3B82F6]" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
