import React from 'react';
import { ExternalLink, Github, Clock, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal border-t border-white/5 overflow-hidden">
      
      {/* Background Watermark Text (Like reference site) */}
      <div className="section-watermark">PROJECTS</div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-display text-xs md:text-sm uppercase tracking-widest text-mint font-semibold mb-3">
            MY WORK
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-softWhite mb-4">
            Things I've <span className="text-mint">Built.</span>
          </h2>
          <div className="w-16 h-1 bg-mint/50 rounded-full mb-4"></div>
          <p className="max-w-2xl text-cream/70 text-sm md:text-base text-center">
            A collection of full-stack platforms, computer vision applications, and hackathon solutions engineered with modern web standards and practical problem-solving.
          </p>

          {/* Decorative Counter Bar (Directly inspired by reference website) */}
          <div className="flex items-center justify-center gap-6 mt-8 font-display text-xs tracking-widest text-cream/40">
            {projectsData.map((p, idx) => (
              <span 
                key={p.id} 
                className="hover:text-mint transition-colors cursor-default"
              >
                0{idx + 1}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column Projects Grid (As styled in reference website) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {projectsData.map((project) => {
            const hasLink = project.liveUrl || project.githubUrl;
            const primaryUrl = project.liveUrl || project.githubUrl;

            return (
              <div
                key={project.id}
                className="group bg-charcoal-card rounded-3xl border border-white/10 hover:border-mint/50 p-6 sm:p-7 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Box with Hover Zoom */}
                  <div className="w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-mint/40 bg-charcoal-deep relative mb-6">
                    {hasLink ? (
                      <a
                        href={primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative cursor-pointer"
                        aria-label={`Open ${project.title}`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                            e.target.parentElement.innerHTML = `<span class="font-display text-3xl font-bold text-mint">${project.title}</span>`;
                          }}
                        />
                        <div className="absolute inset-0 bg-charcoal-darkest/10 group-hover:bg-transparent transition-colors duration-300" />
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal-deep/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                          <ExternalLink size={18} />
                        </div>
                      </a>
                    ) : (
                      <div className="w-full h-full relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                            e.target.parentElement.innerHTML = `<span class="font-display text-3xl font-bold text-mint">${project.title}</span>`;
                          }}
                        />
                        <div className="absolute inset-0 bg-charcoal-darkest/25" />
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-charcoal-deep/90 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-[11px] font-display text-mutedGreen">
                          <Clock size={12} />
                          <span>Archived / In Progress</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Top Meta: Number & Category */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-display text-xs font-semibold text-mint tracking-wider">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-display uppercase tracking-wider text-mutedGreen px-2.5 py-0.5 rounded-full bg-charcoal-light border border-white/5">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-2xl font-bold text-softWhite mb-3 group-hover:text-mint transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-cream/75 text-sm sm:text-base leading-relaxed mb-6 font-inter">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-charcoal-light/70 border border-mint/20 text-xs font-medium text-cream/90 group-hover:border-mint/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mint text-charcoal-darkest font-display text-xs uppercase tracking-wider font-bold shadow-md hover:bg-white hover:shadow-mint-glow hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span>{project.buttonText || "View Live Project"}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal-light border border-mint/40 text-cream hover:text-mint hover:border-mint font-display text-xs uppercase tracking-wider font-bold shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Github size={15} />
                      <span>{project.buttonText || "View Source Code"}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-charcoal-light/60 border border-white/10 text-mutedGreen font-display text-xs uppercase tracking-wider font-semibold cursor-default">
                      <Clock size={14} className="text-mutedGreen" />
                      <span>Details Coming Soon</span>
                    </div>
                  )}

                  <span className="text-xs text-cream/40 font-display">
                    {project.category.split('|')[0].trim()}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
