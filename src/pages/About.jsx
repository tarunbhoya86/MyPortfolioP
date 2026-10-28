
function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-heading">
        <p className="about-tag">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p className="about-subtitle">
          A little introduction about myself and my journey.
        </p>
      </div>

      <div className="about-container">
        <div className="about-card">
          <div className="about-icon">🎓</div>
          <h3>My Education</h3>
          <p>
            I am an MCA student interested in web development
            and modern technologies. I enjoy learning new
            concepts and improving my programming skills.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">💻</div>
          <h3>What I Do</h3>
          <p>
            I create responsive and user-friendly websites
            using HTML, CSS, JavaScript and React.
            I am continuously building my practical skills.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🚀</div>
          <h3>My Goal</h3>
          <p>
            My goal is to become a skilled software developer,
            work on real-world projects and keep learning
            new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
