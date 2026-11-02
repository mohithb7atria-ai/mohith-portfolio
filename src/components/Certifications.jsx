import React from 'react';
import { Award, CheckCircle, ShieldCheck, Sparkles, Cloud, Code, Brain } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal-deep border-t border-white/5 overflow-hidden">
      
      {/* Background Watermark Text */}
      <div className="section-watermark">CERTS</div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-display text-xs md:text-sm uppercase tracking-widest text-mint font-semibold mb-3">
            CONTINUOUS LEARNING
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-softWhite mb-4">
            Licenses & <span className="text-mint">Certifications.</span>
          </h2>
          <div className="w-16 h-1 bg-mint/50 rounded-full mb-4"></div>
          <p className="max-w-2xl text-cream/70 text-sm md:text-base text-center">
            Industry credentials and technical certifications completed through leading cloud providers, technical academies, and global organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="group bg-charcoal-card rounded-2xl border border-white/10 hover:border-mint/50 p-6 card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-light border border-mint/30 flex items-center justify-center text-mint group-hover:scale-105 transition-transform">
                    <Award size={18} />
                  </div>
                  <span className="text-xs font-display text-mint font-bold px-2 py-0.5 rounded-full bg-mint/10 border border-mint/20">
                    {cert.year}
                  </span>
                </div>

                <div className="text-[11px] font-display uppercase tracking-wider text-mutedGreen mb-2">
                  {cert.category}
                </div>

                <h3 className="font-display text-sm sm:text-base font-bold text-softWhite mb-2 group-hover:text-mint transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-cream/70 font-medium">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-cream/40 font-display">
                <span className="flex items-center gap-1.5 text-mutedGreen">
                  <ShieldCheck size={13} className="text-mint" />
                  Verified Course
                </span>
                <span>#{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
