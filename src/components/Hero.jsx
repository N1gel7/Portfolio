import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting fade-in-up">
              <span className="wave">👋</span> Hello, I'm
            </div>
            
            <h1 className="hero-name gradient-text fade-in-up">
              Nigel Nortey
            </h1>
            
            <h2 className="hero-title fade-in-up">
              Backend Developer | Problem Solver
            </h2>
            
            <p className="hero-description fade-in-up">
              💡 "Turning complex problems into simple backend solutions."
            </p>
            
            <div className="hero-buttons fade-in-up">
              <a 
                href="/Nigel_Nortey_CV.pdf" 
                download 
                className="btn btn-primary btn-hover"
              >
                <FaDownload /> Download CV
              </a>
              
              <a 
                href="#contact" 
                className="btn btn-secondary btn-hover"
                onClick={(e) => {
                  e.preventDefault()
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get In Touch
              </a>
            </div>
            
            <div className="hero-social fade-in-up">
              <a href="https://github.com/N1gel7" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nigel-nortey-74501b212k" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:nigelnortey123@gmail.com" className="social-link">
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container float">
              <img 
                src="/Nigel_Pic.jpg" 
                alt="Nigel Nortey" 
                className="profile-image glow"
              />
              <div className="image-bg"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <button onClick={scrollToNext} className="scroll-btn">
            <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
