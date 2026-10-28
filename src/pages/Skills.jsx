const skills = [
  { name: "Web Development", level: 85, icon: "🌐" },
  { name: "Web Development using Laravel", level: 50, icon: "🎨" },
  { name: "UI/UX Design", level: 70, icon: "⚡" },
  { name: "Application Development-Flutter", level: 65, icon: "⚛️" },
  { name: "Full Stack Web Development", level: 60, icon: "🟢" },
  // { name: "", level: 45, icon: "🍃" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <p className="skills-tag">MY TECHNICAL ABILITIES</p>
        <h2>My <span>Skills</span></h2>
        <p>Technologies I am learning and using in my projects.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-top">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <span className="skill-level">{skill.level}%</span>
            </div>

            <div
              className="skill-progress"
              role="progressbar"
              aria-label={skill.name}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="skill-progress-fill"
                style={{ "--skill-level": `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
