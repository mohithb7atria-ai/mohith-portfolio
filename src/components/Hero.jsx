import React from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowDown, FileText, Sparkles, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-16 md:py-24 px-6 md:px-12 overflow-hidden bg-grid-pattern">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-mint/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-charcoal-light border border-mint/30 shadow-sm mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-mint animate-ping" />
            <span className="font-display text-[11px] uppercase tracking-widest text-mint font-semibold">
              ✦ AVAILABLE FOR COLLABORATION & ROLES ✦
            </span>
          </div>

          {/* Hello I'm */}
          <p className="font-display text-sm md:text-base uppercase tracking-widest text-mutedGreen font-semibold mb-2 flex items-center gap-2">
            <span>Hello, I'm</span>
            <span className="w-10 h-[1px] bg-mutedGreen/60"></span>
          </p>

          {/* Main Name Heading */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-softWhite mb-4 leading-none">
            MOHITH <span className="text-mint">B</span>
          </h1>

          {/* Role / Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-mint/90 mb-4 tracking-wide font-inter">
            {personalInfo.shortRole}
          </h2>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-cream/75 text-xs font-medium mb-6">
            <MapPin size={15} className="text-mint" />
            <span>{personalInfo.location}</span>
            <span className="text-mutedGreen">•</span>
            <span className="text-mint/80 font-medium">Atria Institute of Technology</span>
          </div>

          {/* Introduction */}
          <p className="text-cream/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-inter">
            {personalInfo.introduction}
          </p>

          {/* Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
            <button
              onClick={scrollToProjects}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-mint text-charcoal-darkest font-display text-xs uppercase tracking-wider font-bold shadow-lg shadow-mint/20 hover:bg-white hover:shadow-mint-hover hover:-translate-y-1 transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ArrowDown size={16} />
            </button>

            <a
              href={personalInfo.resumePath}
              download="Mohith_B_Resume.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-charcoal-light border border-mint/40 text-cream hover:text-mint hover:border-mint font-display text-xs uppercase tracking-wider font-bold shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <FileText size={16} className="text-mint" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Icons & Email */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
            <span className="text-xs uppercase font-display tracking-widest text-mutedGreen">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-charcoal-card border border-white/10 hover:border-mint hover:bg-charcoal-light flex items-center justify-center text-cream hover:text-mint transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-charcoal-card border border-white/10 hover:border-mint hover:bg-charcoal-light flex items-center justify-center text-cream hover:text-mint transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-charcoal-card border border-white/10 hover:border-mint hover:bg-charcoal-light flex items-center justify-center text-cream hover:text-mint transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <Mail size={18} />
              </a>
            </div>
            <span className="text-xs text-cream/50 hidden sm:inline ml-2">
              {personalInfo.email}
            </span>
          </div>

        </div>

        {/* Right Column: Visual Element / Portrait Showcase (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Subtle Ambient Rings */}
          <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-mint/15 animate-spin" style={{ animationDuration: '30s' }} />
          <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-dashed border-mutedGreen/20 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

          {/* Card Container */}
          <div className="relative group">
            
            {/* Background Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-mint to-mutedGreen rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>

            {/* Profile Frame */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] bg-charcoal-card border-2 border-mint/40 rounded-3xl overflow-hidden shadow-2xl p-3">
              
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-charcoal-deep">
                <img
                  src={personalInfo.profileImage}
                  alt="Mohith B"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-darkest via-charcoal-darkest/20 to-transparent opacity-80" />

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-charcoal-deep/85 backdrop-blur-md border border-mint/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-xs font-bold text-softWhite">MOHITH B</p>
                      <p className="text-[11px] text-mint">B.E. Computer Science</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-mint/20 border border-mint/40 text-[10px] font-display font-semibold text-mint">
                      CGPA 8.83
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Feature Badges */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-charcoal-lighter border border-mint/50 shadow-lg flex items-center gap-1.5 text-xs font-display text-mint">
                <Sparkles size={13} className="text-mint" />
                <span>AI & Vibe Coding</span>
              </div>

              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-charcoal-lighter border border-white/20 shadow-lg flex items-center gap-1.5 text-xs font-display text-cream">
                <Code2 size={13} className="text-mint" />
                <span>Full-Stack Dev</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
