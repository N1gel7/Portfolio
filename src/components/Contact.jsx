import React, { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaDownload } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission disabled - contact via email instead
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Hi Nigel,\n\n${formData.message}\n\nBest regards,\n${formData.name}`)
    window.open(`mailto:nigelnortey123@gmail.com?subject=${subject}&body=${body}`)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "nigelnortey123@gmail.com",
      link: "mailto:nigelnortey123@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Nigel Nortey",
      link: "https://www.linkedin.com/in/nigel-nortey-74501b212k"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "N1gel7",
      link: "https://github.com/N1gel7"
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">Ready to work together? Let's discuss your next project!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro glass fade-in-up">
              <h3>Let's Build Something Amazing Together</h3>
              <p>
                I'm always excited to work on new projects and collaborate with fellow developers. 
                Whether you need a backend solution, want to discuss technology, or just want to say hello, 
                I'd love to hear from you!
              </p>
              
              <div className="contact-cta">
                <a 
                  href="/Nigel_Nortey_CV.pdf" 
                  download 
                  className="btn btn-primary btn-hover"
                >
                  <FaDownload /> Download My Resume
                </a>
              </div>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={info.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="contact-item glass fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.label}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form glass fade-in-up" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-hover form-submit">
                <FaEnvelope /> Open Email
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content glass">
            <p>Built with ❤️ by Nigel Nortey</p>
            <p>© 2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
