function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category glass-card">
            <h3 className="skill-category-title">Frontend</h3>
            <div className="skill-pills">
              <span className="skill-pill">HTML</span>
              <span className="skill-pill">CSS</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill highlight">React</span>
              <span className="skill-pill">Bootstrap</span>
               <span className="skill-pill">Tailwind</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category glass-card">
            <h3 className="skill-category-title">Backend</h3>
            <div className="skill-pills">
              <span className="skill-pill">PHP</span>
              <span className="skill-pill">Java</span>
              <span className="skill-pill highlight">Laravel</span>
            </div>
          </div>

          {/* Database */}
          <div className="skill-category glass-card">
            <h3 className="skill-category-title">Database</h3>
            <div className="skill-pills">
              <span className="skill-pill">MySQL</span>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category glass-card">
            <h3 className="skill-category-title">Tools & Others</h3>
            <div className="skill-pills">
              <span className="skill-pill">Git</span>
              <span className="skill-pill">WordPress</span>
              <span className="skill-pill">Eclipse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills