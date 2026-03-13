function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">A showcase of my recent professional work.</p>
      </div>

      <div className="projects-grid">
        {/* Project 1 */}
        <article className="project-card">
          <div className="project-image-wrapper">
             {/* Using a sleek placeholder image for presentation */}
            <div className="project-image placeholder-image-1"></div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Tourism Experience Platform</h3>
            <p className="project-description">
              A comprehensive tourism website featuring interactive hotel information,
              dynamic galleries, and seamless user navigation to enhance the booking experience.
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">Bootstrap</span>
            </div>
            <a href="#" className="project-link">View Project <span>&rarr;</span></a>
          </div>
        </article>

        {/* Project 2 */}
        <article className="project-card">
          <div className="project-image-wrapper">
            <div className="project-image placeholder-image-2"></div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Enterprise Hotel Management System</h3>
            <p className="project-description">
              A robust web application designed for hotel staff to efficiently manage
              reservations, room availability, and guest information in real-time.
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">Architecture</span>
            </div>
             <a href="#" className="project-link">View Project <span>&rarr;</span></a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects