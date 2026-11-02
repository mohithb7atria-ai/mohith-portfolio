import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'mailto-launched' | 'config-note'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Launch mailto directly with populated fields
    const subjectLine = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Hello Mohith,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;
    
    setStatus('sent');
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal border-t border-white/5 overflow-hidden">
      
      {/* Background Watermark Text */}
      <div className="section-watermark">CONTACT</div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-display text-xs md:text-sm uppercase tracking-widest text-mint font-semibold mb-3">
            GET IN TOUCH
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-softWhite mb-4">
            Let's Build <span className="text-mint">Something Together.</span>
          </h2>
          <div className="w-16 h-1 bg-mint/50 rounded-full mb-4"></div>
          <p className="max-w-2xl text-cream/80 text-base md:text-lg text-center leading-relaxed">
            I'm always interested in connecting with developers, exploring new technologies, and working on meaningful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-8 rounded-3xl bg-charcoal-card border border-white/10 shadow-2xl">
              <h3 className="font-display text-xl font-bold text-softWhite mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-charcoal-light/60 border border-white/5 hover:border-mint/50 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-mint/15 text-mint flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-widest text-mutedGreen">
                      Email
                    </span>
                    <p className="text-sm font-semibold text-softWhite group-hover:text-mint transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-charcoal-light/60 border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-mint/15 text-mint flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-widest text-mutedGreen">
                      Location
                    </span>
                    <p className="text-sm font-semibold text-softWhite">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href="tel:+919483242797"
                  className="flex items-start gap-4 p-3 rounded-2xl bg-charcoal-light/60 border border-white/5 hover:border-mint/50 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-mint/15 text-mint flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-widest text-mutedGreen">
                      Phone
                    </span>
                    <p className="text-sm font-semibold text-softWhite group-hover:text-mint transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs uppercase font-display tracking-widest text-mutedGreen block mb-3">
                  Online Profiles:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-charcoal-light border border-white/10 hover:border-mint text-center flex items-center justify-center gap-2 text-xs font-display text-cream hover:text-mint transition-all"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-charcoal-light border border-white/10 hover:border-mint text-center flex items-center justify-center gap-2 text-xs font-display text-cream hover:text-mint transition-all"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-card border border-white/10 shadow-2xl relative">
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-softWhite mb-2">
                Send a Message
              </h3>
              <p className="text-cream/70 text-xs sm:text-sm mb-6">
                Fill in the details below to initiate direct communication with me.
              </p>

              {/* Backend configuration notice (strictly complying with requirement) */}
              <div className="mb-6 p-4 rounded-xl bg-charcoal-light/80 border border-mint/30 flex items-start gap-3 text-xs text-cream/80">
                <AlertCircle size={17} className="text-mint shrink-0 mt-0.5" />
                <div>
                  <strong className="text-mint block mb-0.5">Note on Form Delivery:</strong>
                  Submitting this form launches your email client pre-filled with your message to <span className="text-mint underline">{personalInfo.email}</span>. A serverless API (e.g. Formspree/Resend) can be connected for silent background dispatch if desired.
                </div>
              </div>

              {status === 'sent' && (
                <div className="mb-6 p-4 rounded-xl bg-mint/15 border border-mint flex items-center gap-3 text-xs text-mint">
                  <CheckCircle2 size={18} />
                  <span>Your email client was triggered. Looking forward to speaking with you!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-mutedGreen mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-deep border border-white/10 focus:border-mint focus:outline-none text-softWhite text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-mutedGreen mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-deep border border-white/10 focus:border-mint focus:outline-none text-softWhite text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-mutedGreen mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Full-stack collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-deep border border-white/10 focus:border-mint focus:outline-none text-softWhite text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-mutedGreen mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role, or idea..."
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-deep border border-white/10 focus:border-mint focus:outline-none text-softWhite text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-mint text-charcoal-darkest font-display text-xs uppercase tracking-wider font-bold shadow-lg hover:bg-white hover:shadow-mint-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
