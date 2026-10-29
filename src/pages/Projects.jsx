
const projects = [
  {
    number: "01",
    title: "Online Learning Platform",
    subtitle: "Learn Without Limits",
    description:
      "A modern online learning platform where users can explore courses and access educational content with a responsive user interface.",
    technologies: ["React", "JavaScript", "CSS", "AI Tools"],
    github: "https://github.com/tarunbhoya86/Online-Learning",
    demo: "https://online-learning-bay.vercel.app/",
    icon: "🎓",
    category: "WEB DEVELOPMENT",
    gradient: "linear-gradient(135deg, #8b5cf6, #4f46e5)",
  },
  {
    number: "02",
    title: "Flutter Quiz App",
    subtitle: "Challenge Your Knowledge",
    description:
      "An interactive mobile quiz application featuring multiple-choice questions, answer selection, and score tracking.",
    technologies: ["Flutter", "Dart", "Android Studio"],
    github: "https://github.com/tarunbhoya86/Quize.git",
    demo: "",
    icon: "🧠",
    category: "MOBILE APP DEVELOPMENT",
    gradient: "linear-gradient(135deg, #06b6d4, #2563eb)",
  },
];

const css = `
.projects-section {
  position: relative;
  overflow: hidden;
  padding: 50px 7% 55px;
  background: #080811;
  color: #f8fafc;
  font-family: Arial, sans-serif;
}

.projects-section::before {
  content: "";
  position: absolute;
  width: 350px;
  height: 350px;
  top: 80px;
  left: -180px;
  background: #7c3aed;
  opacity: 0.14;
  filter: blur(110px);
  pointer-events: none;
}

.projects-section::after {
  content: "";
  position: absolute;
  width: 350px;
  height: 350px;
  right: -180px;
  bottom: 20px;
  background: #2563eb;
  opacity: 0.13;
  filter: blur(110px);
  pointer-events: none;
}

.projects-heading {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 32px;
}

.projects-tag {
  display: inline-block;
  color: #c4b5fd;
  background: #8b5cf61c;
  border: 1px solid #8b5cf64d;
  padding: 9px 17px;
  border-radius: 30px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
}

.projects-heading h2 {
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.2;
  letter-spacing: -1.5px;
  margin: 22px 0 15px;
}

.projects-heading h2 span {
  background: linear-gradient(90deg, #c4b5fd, #818cf8, #67e8f9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.projects-heading > p:last-child {
  color: #9898ad;
  font-size: 15px;
  line-height: 1.8;
}

.projects-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  max-width: 1120px;
  margin: auto;
}

.project-card {
  position: relative;
  min-width: 0;
  background: linear-gradient(145deg, #171725, #10101b);
  border: 1px solid #ffffff14;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.35s ease, border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.project-card:hover {
  transform: translateY(-9px);
  border-color: #a78bfa70;
  box-shadow: 0 20px 60px #0006, 0 0 30px #8b5cf615;
}

.project-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 26px 18px;
}

.project-number {
  color: #aaa9c0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.project-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #ffffff17;
  background: #ffffff08;
  border-radius: 15px;
  font-size: 25px;
}

.project-visual {
  margin: 0 22px;
  padding: 25px;
  border-radius: 17px;
  min-height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.visual-window {
  width: 100%;
  max-width: 330px;
  background: #10101bd9;
  border: 1px solid #ffffff24;
  border-radius: 13px;
  padding: 15px;
  box-shadow: 0 12px 35px #0004;
  transition: transform 0.35s ease;
}

.project-card:hover .visual-window {
  transform: scale(1.035);
}

.window-dots {
  display: flex;
  gap: 6px;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #ffffff14;
}

.window-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #a78bfa;
}

.window-dots span:nth-child(2) {
  background: #67e8f9;
}

.window-dots span:nth-child(3) {
  background: #f9a8d4;
}

.visual-code {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 20px 0;
  font-size: 43px;
}

.visual-code span {
  color: #c4b5fd;
  font-size: 25px;
  font-weight: 800;
}

.visual-lines {
  display: grid;
  gap: 8px;
}

.visual-lines i {
  display: block;
  width: 90%;
  height: 6px;
  border-radius: 10px;
  background: #ffffff19;
}

.visual-lines i:nth-child(2) {
  width: 65%;
}

.visual-lines i:nth-child(3) {
  width: 78%;
}

.project-card-content {
  padding: 27px 27px 29px;
}

.project-category {
  color: #b9a5ff;
  font-size: 10px;
  letter-spacing: 1.7px;
  font-weight: 800;
}

.project-card-content h3 {
  font-size: clamp(21px, 2.3vw, 27px);
  line-height: 1.35;
  letter-spacing: -0.5px;
  margin: 12px 0 5px;
}

.project-subtitle {
  color: #8c8ca4;
  font-size: 12px;
  margin-bottom: 15px;
}

.project-description {
  color: #a7a7ba;
  font-size: 14px;
  line-height: 1.85;
  margin: 15px 0 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 22px 0 25px;
}

.project-tech span {
  padding: 7px 11px;
  border: 1px solid #ffffff12;
  background: #ffffff07;
  color: #d4d4e4;
  border-radius: 8px;
  font-size: 11px;
  transition: 0.25s ease;
}

.project-card:hover .project-tech span {
  border-color: #a78bfa45;
}

.project-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid #ffffff12;
}

.project-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #ffffff20;
  border-radius: 10px;
  color: #e8e7f5;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  transition: 0.25s ease;
}

.project-links a:hover {
  background: #ffffff12;
  border-color: #c4b5fd;
  transform: translateY(-2px);
}

.project-links .project-demo {
  border: none;
  color: #fff;
  background: linear-gradient(110deg, #7c3aed, #6366f1);
}

.project-links .project-demo:hover {
  box-shadow: 0 5px 20px #7c3aed55;
}

@media (max-width: 800px) {
  .projects-section {
    padding: 35px 20px 40px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 540px;
  }

  .project-visual {
    min-height: 190px;
  }
}

@media (max-width: 420px) {
  .projects-section {
    padding: 30px 16px 35px;
  }

  .project-card-top {
    padding: 20px 19px 15px;
  }

  .project-visual {
    margin: 0 15px;
    padding: 18px;
  }

  .project-card-content {
    padding: 23px 19px;
  }

  .project-links a {
    padding: 0 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .visual-window,
  .project-links a {
    transition: none;
  }
}
`;

function Projects() {
  return (
    <>
      <style>{css}</style>

      <section id="projects" className="projects-section">
        <div className="projects-heading">
          <p className="projects-tag">✦ MY PORTFOLIO</p>
          <h2>
            Featured <span>Projects.</span>
          </h2>
          <p>
            A selection of projects showcasing my creativity,
            development skills, and passion for building digital
            experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">
                  PROJECT / {project.number}
                </span>
                <span className="project-icon">{project.icon}</span>
              </div>

              <div
                className="project-visual"
                style={{ background: project.gradient }}
              >
                <div className="visual-window">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="visual-code">
                    {project.icon}
                    <span>{"</>"}</span>
                  </div>

                  <div className="visual-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>

              <div className="project-card-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-demo"
                    >
                      Live Preview ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
