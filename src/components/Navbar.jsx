import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="gradient-text">Nigel Nortey</span>
        </div>

        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-social">
          <a href="https://github.com/N1gel7" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nigel-nortey-74501b212k" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="mailto:nigelnortey123@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
        <div className="mobile-social">
          <a href="https://github.com/N1gel7" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nigel-nortey-74501b212k" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:nigelnortey123@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
