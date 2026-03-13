function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, I'm <span className="gradient-text">Amira</span>
        </h1>
        <h3 className="hero-subtitle">Full Stack Web Developer</h3>
        
        <p className="hero-description">
         I build modern web applications using React, PHP, and Laravel.
         I bring ideas to life through clean code and creative design.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      {/* Decorative blurred blobs for background */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  )
}

export default Hero