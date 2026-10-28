
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message form is ready.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <p className="contact-tag">LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
        <p>Have a project idea or want to connect? Send me a message.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's talk!</h3>
          <p>
            I am always interested in learning, collaborating
            and exploring new opportunities.
          </p>

          <div className="contact-item">
            <span>✉️</span>
            <div>
              <small>Email</small>
              <p>bhoyats12@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <small>Location</small>
              <p>Gujarat, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span>💻</span>
            <div>
              <small>GitHub</small>
              <p>Explore my projects</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-submit">
            Send Message <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
