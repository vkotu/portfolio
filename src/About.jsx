import { NavHashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h1>
              <NavHashLink to="/">
                <span className="fa-solid fa-code" area-hidden="true"></span>
                <span>Venkat Kotu</span>
              </NavHashLink>
            </h1>
          </li>
          <li>
            <NavHashLink to="/#projects">Projects</NavHashLink>
          </li>
          <li>
            <NavHashLink to="/about">About</NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#contact">Contact</NavHashLink>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/venkatasaireddy/"
              target="_blank"
            >
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>{" "}
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/vkotu" target="_blank">
              <span className="fa-brands fa-github" aria-hidden="true"></span>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/17ZtCNdYFylCuAvIPpiaqB4_4fdfhW5el/view?usp=sharing"
              className="button"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="gradient"></div>
      <div className="section-blue">
        <section id="projects">
          <h2>About Me!</h2>
          <article>
            <div className="text">
              <h3>Hi! I'm Venkat Kotu</h3>
              <p className="blackbox">
                <p>
                  I build JavaScript applications, I'm equipped with the right
                  tools, and can absolutely function independently of them to
                  deliver fast, resilient optimized solutions. Security,
                  performance, and accessibility are top priorities on my radar.
                  I've built products for big enterprises like PayPal, Yahoo,
                  and Broadcom ranging from micro components to complex
                  monolithic products with focus on fast, elegant and accessible
                  user experiences
                </p>
                <p>
                  Currently, I work at Paypal as a member of technical staff and
                  accessibility advocate crafting thoughtful and inclusive
                  experiences that adhere to web standards for millions of
                  merchants across the world. Before now, I was a Full Stack
                  Software Engineer III at Yahoo, where I worked on Yahoo
                  add-platform UI running their campaign and reporting.
                </p>
              </p>
              <h4>Hobbies</h4>
              <ul>
                <li>Solving Problems</li>
                <li>Learn new things</li>
                <li>Board games</li>
                <li>Skiing</li>
              </ul>
            </div>
            <img src="9.png" alt="Screenshot of profile pic." />
          </article>
        </section>
      </div>
      <div className="gradient"></div>
      <footer>
        <h2>Venkat Kotu - Sr Software Engineer</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/venkatasaireddy/">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>{" "}
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/vkotu">
              <span className="fa-brands fa-github" aria-hidden="true"></span>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a href="mailto:vkotu24@gmail.com">
              <span className="fa-solid fa-envelope" aria-hidden="true"></span>
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>

        <p>
          <small>&copy; 2022 Venkat kotu. All rights reserved.</small>
        </p>
      </footer>
    </div>
  );
};

export default About;
