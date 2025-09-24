import React from 'react'
import { FaCode, FaUsers, FaClock, FaTrophy, FaDollarSign, FaShieldAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "WASSCE Past Questions Web App",
      description: "Full-stack practice platform for West African Senior School Certificate Examination preparation",
      features: [
        { icon: <FaCode />, text: "Practice & timed exam modes" },
        { icon: <FaTrophy />, text: "Marking scheme feedback" },
        { icon: <FaClock />, text: "Progress tracking & daily streaks" }
      ],
      impact: "Helped students prepare effectively with analytics & instant feedback",
      tech: ["React", "Node.js", "SQL", "Analytics"],
      video: "/video/Wassce.mp4",
      category: "Education"
    },
    {
      title: "Employee Management & Payroll System",
      description: "Comprehensive HR solution for managing employees and automating payroll processes",
      features: [
        { icon: <FaUsers />, text: "Attendance tracking" },
        { icon: <FaShieldAlt />, text: "Leave management & role-based access" },
        { icon: <FaDollarSign />, text: "Automated payroll with tax & NHIS deductions" }
      ],
      impact: "Reduced payroll errors and simplified HR processes",
      tech: ["React", "Node.js", "SQL", "Automation"],
      video: "/video/Employee Video.mp4",
      category: "Business"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">Real-world solutions that showcase my backend expertise</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-video">
                <div 
                  className="video-container"
                  ref={el => videoRefs.current[index] = el}
                  data-video-index={index}
                >
                  {!isIntersecting[index] ? (
                    <div className="video-placeholder">
                      <div className="loading-spinner">
                        <FaSpinner className="spinner" />
                      </div>
                      <p>Loading video...</p>
                    </div>
                  ) : (
                    <>
                      <video
                        id={`video-${index}`}
                        className="project-video-element"
                        preload="none"
                        controls
                        controlsList="nodownload"
                        data-src={project.video}
                        onLoadedData={() => handleVideoLoad(index)}
                        onError={() => handleVideoError(index)}
                        poster={`${project.video.replace(/\.[^/.]+$/, '')}_poster.jpg`}
                      >
                        <source type={project.video.endsWith('.MOV') ? 'video/quicktime' : 'video/mp4'} />
                        Your browser does not support the video tag.
                      </video>
                      
                      {videoStates[index] === 'loading' && (
                        <div className="video-loading">
                          <FaSpinner className="spinner" />
                          <span>Loading video...</span>
                        </div>
                      )}
                      
                      {videoStates[index] === 'error' && (
                        <div className="video-error">
                          <FaPlay />
                          <span>Video failed to load</span>
                          <button onClick={() => {
                            const video = document.getElementById(`video-${index}`)
                            if (video) video.load()
                          }}>Retry</button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <div className="features-grid">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-icon">{feature.icon}</div>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-impact">
                <h4>💡 Impact:</h4>
                <p>{project.impact}</p>
              </div>

              <div className="project-tech">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="projects-note">
          <div className="note-card glass">
            <h4>🚀 More Projects Coming Soon</h4>
            <p>
              I'm constantly working on new projects and improving existing ones. 
              Follow me on GitHub to stay updated with my latest work!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
