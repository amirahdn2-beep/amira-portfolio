import { useEffect, useRef } from "react"

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle("visible", e.isIntersecting),
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-inner">

          {/* ── Left: Photo block ── */}
          <div className="about-photo-block">
            {/* Colored blob behind photo */}
            <div className="photo-blob" />

            {/* Round photo */}
            <div className="about-photo-wrap">
              <img src="/code.png" alt="Amira" className="about-photo" />
            </div>

            {/* Floating skill tags */}
            <span className="float-tag tag-1">React</span>
            <span className="float-tag tag-2">Laravel</span>
            <span className="float-tag tag-3">PHP</span>
            <span className="float-tag tag-4">MySQL</span>
          </div>

          {/* ── Right: Text block ── */}
          <div className="about-text-block">
            <p className="about-label">— About Me</p>

            <h2 className="about-name">
              Who is <span className="gradient-text">Amira</span>?
            </h2>

            <p className="about-paragraph">
                I am a passionate web developer with experience in frontend and backend development.
              I enjoy building modern web applications, learning new technologies, and constantly exploring 
              the boundaries of what's possible on the web.
            </p>

            {/* Stats row */}
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number"></span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number"></span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>

            {/* Signature */}
            <div className="about-signature">
              <svg viewBox="0 0 160 50" className="signature-svg" fill="none">
                <path d="M10,35 C20,10 35,40 50,25 C65,10 70,38 85,28 C100,18 110,35 130,20 C140,14 148,28 155,22"
                  stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" fill="none"
                  strokeDasharray="300" strokeDashoffset="300"
                  style={{animation: "signatureDraw 2s ease forwards 0.5s"}} />
              </svg>
              <span className="signature-name">Amira ✦</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About