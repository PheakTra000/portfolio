const socialLinks = [
  {
    name: 'GitHub',
    handle: '@PheakTra000',
    url: 'https://github.com/PheakTra000/',
    icon: 'fa-github',
    type: 'github'
  },
  {
    name: 'Instagram',
    handle: '@yornpheaktra99',
    url: 'https://www.instagram.com/yornpheaktra99',
    icon: 'fa-instagram',
    type: 'instagram'
  },
  {
    name: 'TikTok',
    handle: '@pheaktrayorn3',
    url: 'https://www.tiktok.com/@pheaktrayorn3?_r=1&_t=ZS-95fJ6lA9LYC',
    icon: 'fa-tiktok',
    type: 'tiktok'
  },
  {
    name: 'Facebook',
    handle: '@pheaktra.yorn.14',
    url: 'https://web.facebook.com/pheaktra.yorn.14',
    icon: 'fa-facebook-f',
    type: 'facebook'
  }
]

const skills = ['None']

function SocialLink({ link }) {
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className={`social-link ${link.type}`}>
      <div className="social-icon">
        <i className={`fab ${link.icon}`}></i>
      </div>
      <div className="social-info">
        <div className="social-name">{link.name}</div>
        <div className="social-handle">{link.handle}</div>
      </div>
      <i className="fas fa-arrow-right social-arrow"></i>
    </a>
  )
}

function App() {
  return (
    <>
      <div className="grid-bg"></div>
      <div className="scanlines"></div>

      <div className="container">
        <header>
          <h1 className="glitch">CYBER PORTFOLIO<span className="cursor"></span></h1>
          <p className="subtitle">Digital Presence</p>
        </header>

        <section className="profile-section">
          <div className="profile-card">
            <div className="avatar-container">
              <div className="avatar-ring"></div>
              <img
                src="https://i.pinimg.com/736x/84/d1/68/84d1682bb7f3dbb22d1b5bb3c51f4e85.jpg"
                alt="Profile Avatar"
                className="avatar"
              />
            </div>
            <h2 className="profile-name">Yorn Pheaktra</h2>
            <p className="profile-title">Cyber Security Student</p>
            <p className="profile-bio">Geek everyday.</p>
          </div>
        </section>

        <section className="skills-section">
          <h3 className="section-title">Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        <section className="social-section">
          <h3 className="section-title">Connect With Me</h3>
          <div className="social-grid">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} link={link} />
            ))}
          </div>
        </section>

        <footer>
          <p className="footer-text">&lt;/&gt; with <span>♥</span> | Cyber Portfolio 2026</p>
        </footer>
      </div>
    </>
  )
}

export default App