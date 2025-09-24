import React from 'react'
import { FaPython, FaJs, FaDatabase, FaReact, FaNode, FaDocker, FaGitAlt, FaFire, FaServer, FaCog, FaRocket, FaCode } from 'react-icons/fa'
import { SiFastapi, SiPostgresql, SiMysql, SiFirebase, SiSupabase } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "Python", icon: <FaPython />, level: 90, color: "#3776ab" },
        { name: "JavaScript", icon: <FaJs />, level: 85, color: "#f7df1e" },
        { name: "SQL", icon: <FaDatabase />, level: 80, color: "#336791" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaReact />,
      skills: [
        { name: "FastAPI", icon: <SiFastapi />, level: 90, color: "#009688" },
        { name: "Node.js", icon: <FaNode />, level: 85, color: "#339933" },
        { name: "React", icon: <FaReact />, level: 80, color: "#61dafb" }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 85, color: "#336791" },
        { name: "MySQL", icon: <SiMysql />, level: 80, color: "#4479a1" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <FaCog />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 90, color: "#f05032" },
        { name: "Docker", icon: <FaDocker />, level: 75, color: "#2496ed" },
        { name: "Firebase", icon: <FaFire />, level: 80, color: "#ffca28" },
        { name: "Supabase", icon: <SiSupabase />, level: 75, color: "#3ecf8e" }
      ]
    }
  ]

  const focusAreas = [
    {
      icon: <FaServer />,
      title: "Backend APIs",
      description: "Designing and building robust, scalable REST APIs"
    },
    {
      icon: <FaRocket />,
      title: "Scalable Architecture",
      description: "Creating systems that grow with your business needs"
    },
    {
      icon: <FaCog />,
      title: "System Automation",
      description: "Streamlining processes through intelligent automation"
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with to build amazing solutions</p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category glass fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="focus-areas">
            <h3 className="focus-title">🎯 Focus Areas</h3>
            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <div key={index} className="focus-card glass fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="focus-icon">{area.icon}</div>
                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="learning-section">
          <div className="learning-card glass">
            <h3>🚀 Always Learning</h3>
            <p>
              I'm passionate about staying up-to-date with the latest technologies and best practices. 
              Currently exploring AI integration, microservices architecture, and cloud-native solutions 
              to deliver even better backend experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
