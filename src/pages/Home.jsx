
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-bg-circle"></div>

      <div className="home-content">
        <div className="welcome-badge">
          <span className="online-dot"></span>
          Welcome to my portfolio
        </div>

        <p className="home-greeting">HELLO, I'M</p>

        <h1 className="home-name">
          Tarun <span>Bhoya</span>
        </h1>

        <h2 className="home-role">
          MCA Student <span>|</span> React Developer
        </h2>

        <p className="home-description">
          I build modern, responsive and user-friendly
          websites using React, JavaScript and CSS.
          I love learning new technologies and turning
          ideas into digital experiences.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">
            Explore My Work <span>↗</span>
          </a>

          <a href="/resume.pdf" download className="btn btn-outline">
            Download Resume ↓
          </a>
        </div>

        <div className="home-socials">
          <a href="https://github.com/tarunbhoya86" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href="https://www.linkedin.com/in/tarun-bhoya-48a92b285" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="profile-area">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="profile-glow"></div>

        <div className="profile-circle">
          <div className="profile-initials">TB</div>
          <div className="profile-caption">REACT DEVELOPER</div>
        </div>

        <div className="floating-card card-react">
          <span>⚛️</span>
          <div>
            <strong>React</strong>
            <small>Frontend</small>
          </div>
        </div>

        <div className="floating-card card-code">
          <span>💻</span>
          <div>
            <strong>Developer</strong>
            <small>Always Learning</small>
          </div>
        </div>

        <div className="floating-tech tech-js">JS</div>
        <div className="floating-tech tech-css">CSS</div>
      </div>
    </section>
  );
}

export default Home;
