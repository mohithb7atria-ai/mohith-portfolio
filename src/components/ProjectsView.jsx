import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function ProjectsView() {
  return (
    <>
      {/* ================= PROJECT HERO ================= */}
      <section className="projects-hero">
        <p className="section-small">MY WORK</p>
        <h1>
          Things I've <span>Built.</span>
        </h1>
        <p className="projects-intro">
          A collection of projects, experiments and digital experiences I've created along my journey as a full-stack developer and AI engineer.
        </p>
        <div className="project-counter">
          {projectsData.map((p, idx) => (
            <span key={p.id}>0{idx + 1}</span>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="projects-section">
        <div className="projects-grid">
          {projectsData.map((project) => {
            const hasExternal = project.liveUrl || project.githubUrl;
            const linkHref = project.liveUrl || project.githubUrl;

            return (
              <div className="project-item" key={project.id}>
                {hasExternal ? (
                  <a
                    href={linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image-link"
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </a>
                ) : (
                  <div className="project-image-link">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                )}

                <div className="project-info">
                  <p className="project-number">{project.number}</p>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-btn-row">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        {project.buttonText || 'View Live Project'} ↗
                      </a>
                    ) : project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        {project.buttonText || 'View Source Code'} ↗
                      </a>
                    ) : (
                      <span className="badge-coming-soon">
                        Details Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= PROJECTS CTA ================= */}
      <section className="projects-cta">
        <div className="projects-cta-box">
          <p className="section-small">MORE COMING SOON</p>
          <h2>
            Building New Ideas <span>Every Day.</span>
          </h2>
          <p className="projects-cta-text">
            This portfolio is constantly evolving. More projects, open-source work, and research initiatives will be added soon.
          </p>
        </div>
      </section>
    </>
  );
}
