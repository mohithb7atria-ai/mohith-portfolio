import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal-deep border-t border-white/5 overflow-hidden">
      
      {/* Background Watermark Text */}
      <div className="section-watermark">EXPERIENCE</div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-display text-xs md:text-sm uppercase tracking-widest text-mint font-semibold mb-3">
            CAREER & INDUSTRY WORK
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-softWhite mb-4">
            Professional <span className="text-mint">Experience.</span>
          </h2>
          <div className="w-16 h-1 bg-mint/50 rounded-full mb-4"></div>
          <p className="max-w-xl text-cream/70 text-sm md:text-base text-center">
            Hands-on software development internships and real-world system architecture engineering.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-charcoal-card rounded-3xl border border-white/10 hover:border-mint/50 p-8 sm:p-10 card-hover-effect relative overflow-hidden shadow-2xl"
            >
              {/* Subtle accent corner badge */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint/5 rounded-bl-full pointer-events-none -z-0" />

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-mint/15 border border-mint/30 flex items-center justify-center text-mint shrink-0 mt-1">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-mint/10 border border-mint/30 text-mint text-xs font-display font-semibold mb-2">
                        {exp.company}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-softWhite">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-cream/70 mt-1.5">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-mint" />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-mint font-medium">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-charcoal-light border border-white/10 text-xs font-display text-mutedGreen">
                    <ShieldCheck size={14} className="text-mint" />
                    <span>Verified Internship</span>
                  </div>
                </div>

                {/* Project Highlight */}
                <div className="mt-6 mb-6 p-4 rounded-xl bg-charcoal-light/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-widest text-mutedGreen">
                      Primary Project
                    </span>
                    <h4 className="text-base font-bold text-mint">
                      {exp.project}
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-charcoal-card border border-mint/30 text-xs text-cream/90 self-start sm:self-auto">
                    Full-Stack Web Application
                  </span>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3.5 mb-8">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-mint shrink-0 mt-0.5" />
                      <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-xs uppercase font-display tracking-widest text-mutedGreen mb-3 block">
                    Technologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-charcoal-light border border-mint/20 text-xs font-medium text-cream hover:text-mint transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
