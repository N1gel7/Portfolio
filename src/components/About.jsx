import React from 'react'
import { FaCode, FaRocket, FaLightbulb, FaCog } from 'react-icons/fa'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable and scalable backend solutions"
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Solving complex problems with creative solutions"
    },
    {
      icon: <FaCog />,
      title: "Automation",
      description: "Building systems that streamline business operations"
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">Passionate about building software that makes a difference</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card glass fade-in-up">
              <h3>My Journey</h3>
              <p>
                I am a backend developer passionate about building software that addresses challenges across industries. 
                I enjoy solving complex backend problems, designing reliable APIs, and creating systems that improve everyday life.
              </p>
              <p>
                Currently, I'm focused on developing scalable applications and experimenting with systems that automate 
                workflows and streamline business operations.
              </p>
            </div>

            <div className="current-work glass fade-in-up">
              <h3>🚀 Currently Working On</h3>
              <ul>
                <li>
                  <span className="highlight">AI Grading System:</span> Adding AI grading to the WASSCE application 
                  (trained on WAEC mark schemes)
                </li>
                <li>
                  <span className="highlight">P2P Payments:</span> Exploring direct peer-to-peer money transfers 
                  without banks
                </li>
              </ul>
            </div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card glass fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
