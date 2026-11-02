import React from 'react';
import { GraduationCap, Code2, Cpu, Trophy, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutCards } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Code: Code2,
  Cpu: Cpu,
  Trophy: Trophy,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal-deep border-t border-white/5 overflow-hidden">
      
      {/* Background Watermark Text */}
      <div className="section-watermark">ABOUT</div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-display text-xs md:text-sm uppercase tracking-widest text-mint font-semibold mb-3">
            GET TO KNOW ME
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-softWhite mb-4">
            A Little <span className="text-mint">About Me.</span>
          </h2>
          <div className="w-16 h-1 bg-mint/50 rounded-full mb-6"></div>
          
          <div className="max-w-3xl text-cream/80 text-base md:text-lg leading-relaxed bg-charcoal/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-card-soft">
            <p className="mb-4">
              {personalInfo.aboutText}
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-white/10 text-xs sm:text-sm font-medium text-cream/90">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-mint" />
                Bengaluru, India
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-mint" />
                Atria Institute of Tech (CGPA 8.83)
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-mint" />
                SIH 2026 Dual Track
              </span>
            </div>
          </div>
        </div>

        {/* 4 Small Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Code2;
            return (
              <div
                key={card.title}
                className="group relative bg-charcoal-card p-6 rounded-2xl border border-white/10 hover:border-mint/60 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-charcoal-light border border-mint/30 flex items-center justify-center text-mint mb-5 group-hover:scale-110 group-hover:bg-mint group-hover:text-charcoal-darkest transition-all duration-300">
                    <IconComponent size={22} />
                  </div>
                  
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-mint/10 border border-mint/20 text-[10px] font-display uppercase tracking-wider text-mint mb-3">
                    {card.highlight}
                  </div>

                  <h3 className="font-display text-base font-bold text-softWhite mb-2 group-hover:text-mint transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-mutedGreen font-display">
                  <span>FOCUS 0{idx + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform text-mint">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
