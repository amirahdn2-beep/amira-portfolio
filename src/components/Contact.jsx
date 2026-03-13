import { FaEnvelope, FaGithub } from "react-icons/fa"
function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Let's Connect</h2>
          <div className="title-underline mx-auto"></div>
          <p className="contact-subtitle">I'm currently available for new opportunities.</p>
        </div>

        <div className="contact-cards-container">
          <p>
           <FaEnvelope />
          <a href="mailto:amira.hdn2@email.com"className="c" >
          my email
          </a>
          </p>

          <p>
             <FaGithub />
          <a href="https://github.com/amirahdn2-beep" target="_blank" className="c">
           my GitHub Profile
          </a>
           </p>
            
          
        </div>
      </div>
    </section>
  )
}

export default Contact