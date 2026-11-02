import React from 'react';
import { Trophy, Award, Radio, Mic, Users, Sparkles, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const typeIcons = {
  trophy: Trophy,
  hardware: Radio,
  software: Mic,
  community: Users,
  event: Sparkles
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal-deep border-t border-white/5 overflow-hidden">
      
      {/* Background Watermark Text */}
      <div className="section-watermark">AWARDS</div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-display text-xs md:text-sm uppercase tracking-widest text-mint font-semibold mb-3">
            HONORS & RECOGNITIONS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-softWhite mb-4">
            Achievements & <span className="text-mint">Hackathons.</span>
          </h2>
          <div className="w-16 h-1 bg-mint/50 rounded-full mb-4"></div>
          <p className="max-w-2xl text-cream/70 text-sm md:text-base text-center">
            Competitive national hackathons, technical leadership roles, and recognition for impactful digital solutions.
          </p>
        </div>

        {/* Featured Smart India Hackathon Highlight Banner */}
        <div className="mb-12 p-8 rounded-3xl bg-charcoal-card border-2 border-mint/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mint/5 rounded-bl-full pointer-events-none -z-0" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-mint animate-pulse" />
              <span className="font-display text-xs uppercase tracking-widest text-mint font-bold">
                SMART INDIA HACKATHON 2026 • DUAL TRACK SELECTION
              </span>
            </div>
            
            <h3 className="font-display text-xl sm:text-2xl font-bold text-softWhite mb-4">
              Top 10 Selection in Both Hardware & Software Tracks
            </h3>
            
            <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed mb-6">
              Selected among top teams in the Atria Institute of Technology Internal College-Level SIH 2026 evaluations for two distinctive national problem statements, demonstrating cross-domain capability in IoT hardware systems and AI voice software architectures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-charcoal-deep border border-mint/20">
                <div className="flex items-center gap-2 text-xs font-display text-mint font-semibold mb-1">
                  <Radio size={15} />
                  <span>Hardware Track (SIH26039)</span>
                </div>
                <h4 className="text-sm font-bold text-softWhite mb-1">
                  AI-Powered Underground Mine Safety, Monitoring and Rescue System
                </h4>
                <p className="text-xs text-cream/70">
                  Worker safety telemetry, toxic gas detection, and emergency rescue guidance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-charcoal-deep border border-mint/20">
                <div className="flex items-center gap-2 text-xs font-display text-mint font-semibold mb-1">
                  <Mic size={15} />
                  <span>Software Track (SIH26097)</span>
                </div>
                <h4 className="text-sm font-bold text-softWhite mb-1">
                  AI-Driven Voice Assistant for Livelihood Mapping & NSQF Skilling
                </h4>
                <p className="text-xs text-cream/70">
                  Multilingual conversational agent aligning skills with national qualification standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => {
            const Icon = typeIcons[item.type] || Award;
            return (
              <div
                key={idx}
                className="group bg-charcoal-card rounded-2xl border border-white/10 hover:border-mint/50 p-6 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-charcoal-light border border-mint/30 flex items-center justify-center text-mint group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-mint/10 border border-mint/30 text-[10px] font-display uppercase tracking-wider text-mint font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-softWhite mb-1 group-hover:text-mint transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-display text-mutedGreen mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-cream/40 font-display">
                  <span>VERIFIED RECORD</span>
                  <Star size={13} className="text-mint opacity-50" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
