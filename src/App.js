import { useEffect } from "react";
import profile from "./profile.jpeg";
import "./App.css";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate, .animate-left, .animate-right",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const skills = [
    ["Java", "java"],
    ["HTML", "html5"],
    ["CSS", "css3"],
    ["JavaScript", "javascript"],
    ["React", "react"],
    ["Node.js", "nodejs"],
    ["Express", "express"],
    ["MongoDB", "mongodb"],
  ];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">GK</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="/resume1.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-left animate-left">
          <img src={profile} alt="Gopika" />
        </div>
        <div className="hero-right animate-right">
          <h1>Gopika K</h1>
          <h2 className="typing">Software Engineer</h2>
          <p>
            I have strong interest in web development and have built multiple
            full-stack projects. I possess good problem-solving skills and enjoy
            creating modern, efficient and user-friendly applications.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section animate">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map(([name, tech]) => (
            <div className="skill-card" key={tech}>
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                alt={`${name} icon`}
              />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="timeline">
        <h2 className="timeline-title">Projects</h2>
        <div className="timeline-container">
          {[
            [
              "AI Personal Assistant for Farmers",
              "An AI-powered assistant that helps farmers with crop suggestions, weather updates, and farming guidance using modern web technologies.",
              "left",
            ],
            [
              "Food Donation Web App",
              "A platform that connects food donors with NGOs and needy people to reduce food waste and help communities.",
              "right",
            ],
            [
              "Movie Search Web App",
              "A responsive web app that allows users to search movies using an API and view detailed movie information.",
              "left",
            ],
            [
              "To-Do List Application",
              "A task management app that allows users to add, delete, and track their daily tasks with a clean UI.",
              "right",
            ],
            [
              "Portfolio Website",
              "A personal portfolio built using React showcasing my skills, projects, and professional profile with modern animations.",
              "left",
            ],
          ].map(([title, desc, side], i) => (
            <div className={`timeline-item ${side} animate-${side}`} key={i}>
              <div className="timeline-content">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-title">
            <h2>Contact</h2>
            <p>Let’s connect and build something great</p>
          </div>
          <div className="contact-links">
            <a
              href="https://github.com/Gopika0263"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a href="mailto:gopikakandhan63@gmail.com">
              <i className="fa-solid fa-envelope"></i> Gmail
            </a>
            <a
              href="https://linkedin.com/in/gopika-k-1067642b9/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>copyright © 2026 Gopika</footer>
    </div>
  );
}

export default App;
