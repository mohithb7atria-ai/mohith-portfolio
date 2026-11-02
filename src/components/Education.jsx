import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-6 md:px-12 bg-charcoal border-t border-white/5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-display text-xs md:text-sm uppercase tracking-widest text-mint font-semibold mb-3">
            ACADEMIC BACKGROUND
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-softWhite mb-4">
            Education & <span className="text-mint">Qualifications.</span>
          </h2>
          <div className="w-16 h-1 bg-mint/50 rounded-full mb-4"></div>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-charcoal-card rounded-3xl border border-white/10 hover:border-mint/50 p-8 card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-light border border-mint/30 flex items-center justify-center text-mint">
                    <GraduationCap size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-mint/15 border border-mint/30 text-xs font-display font-bold text-mint">
                    {edu.score}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-softWhite mb-1">
                  {edu.institution}
                </h3>

                <p className="text-sm font-semibold text-mint mb-3">
                  {edu.degree}
                </p>

                <div className="flex items-center gap-4 text-xs text-cream/70 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-mint" />
                    {edu.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-mutedGreen">
                    <Calendar size={13} />
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-cream/40 font-display">
                <span>ACADEMIC MILESTONE</span>
                <span className="text-mint">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
