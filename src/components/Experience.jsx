import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "Internship – IT Consortium",
      duration: "June 2025 – July 2025",
      location: "Remote",
      type: "Internship",
      description: "Automated Debit Scheduler",
      details: [
        "Built a debit scheduling platform with React, FastAPI, and PostgreSQL",
        "Implemented recurring debits, transaction history, and real-time notifications",
        "Developed admin panel for user tracking and system-wide metrics"
      ],
      impact: "Streamlined financial operations by automating manual debit processes",
      tech: ["React", "FastAPI", "PostgreSQL", "Real-time Notifications"]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Experience</h2>
          <p className="section-subtitle">Building solutions that make a real impact</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item glass fade-in-up">
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="experience-duration">
                      <FaCalendarAlt /> {exp.duration}
                    </span>
                    <span className="experience-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                  <div className="experience-type">{exp.type}</div>
                </div>
              </div>

              <div className="experience-content">
                <h4 className="project-title">{exp.description}</h4>
                
                <div className="experience-details">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-impact">
                  <h5>💡 Impact:</h5>
                  <p>{exp.impact}</p>
                </div>

                <div className="experience-tech">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-note">
          <div className="note-card glass">
            <h4>🚀 Looking Forward</h4>
            <p>
              I'm actively seeking new opportunities to apply my backend development skills 
              in challenging environments where I can continue to grow and make meaningful contributions 
              to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
