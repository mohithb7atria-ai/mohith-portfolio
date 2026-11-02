import React from 'react';
import { 
  Code, 
  BrainCircuit, 
  Database, 
  Check, 
  Terminal, 
  Layers, 
  Cpu, 
  Sparkles,
  GitBranch,
  Cloud
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = [Code, BrainCircuit, Database];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal border-t border-white/5 overflow-hidden">
      
      {/* Background Watermark Text */}
      <div className="section-watermark">SKILLS</div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-display text-xs md:text-sm uppercase tracking-widest text-mint font-semibold mb-3">
            MY TECH STACK
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-softWhite mb-4">
            Technologies I <span className="text-mint">Work With.</span>
          </h2>
          <div className="w-16 h-1 bg-mint/50 rounded-full mb-4"></div>
          <p className="max-w-2xl text-cream/70 text-sm md:text-base text-center">
            Modern tools, languages, and AI frameworks I leverage to engineer functional digital systems from prototype to production.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Layers;
            return (
              <div
                key={cat.category}
                className="group bg-charcoal-card rounded-2xl border border-white/10 hover:border-mint/50 p-7 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-charcoal-light border border-mint/30 flex items-center justify-center text-mint group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="font-display text-xs text-mutedGreen tracking-widest uppercase">
                      CAT 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-softWhite mb-2 group-hover:text-mint transition-colors">
                    {cat.category}
                  </h3>

                  <p className="text-cream/65 text-xs sm:text-sm mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-light/80 border border-white/10 group-hover:border-mint/30 hover:border-mint text-xs font-medium text-cream hover:text-mint hover:bg-charcoal-lighter transition-all duration-200 cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-mint/70"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-cream/50">
                  <span>{cat.skills.length} verified technologies</span>
                  <Sparkles size={14} className="text-mint opacity-60" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Vibe Coding / AI-Assisted Development Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-charcoal-deep border border-mint/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3.5 rounded-xl bg-mint/15 text-mint border border-mint/30 shrink-0">
              <Cpu size={28} />
            </div>
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold text-softWhite mb-1">
                AI-Assisted Development & Vibe Coding Specialization
              </h4>
              <p className="text-cream/70 text-xs sm:text-sm max-w-3xl">
                Experienced in rapid application synthesis using modern AI toolchains, rapid prototyping, code refactoring, intelligent API integration, and continuous deployment workflows.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-block px-4 py-2 rounded-xl bg-mint text-charcoal-darkest font-display text-xs font-bold uppercase tracking-wider shadow-sm">
              Modern Workflow
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
