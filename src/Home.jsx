import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h1>
              <Link to="/">
                <span className="fa-solid fa-code" area-hidden="true"></span>
                <span>Venkat Kotu</span>
              </Link>
            </h1>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
      <section id="intro">
        <p className="name">
          Hi, my name is <span>Venkat Kotu.</span>
        </p>

        <h2>Passionate JavaScript Developer</h2>

        <p>
          Currently, I'm working as a member of technical staff at{" "}
          <a href="https://paypal.com/mep">PayPal</a>.
        </p>
        <p>
          I'm leading a team of 6 engineers doing full stack things with
          bleeding-edge JavaScript, ReactJS, Node.js, and GraphQL etc. to enable
          better products for Merchants.
        </p>
      </section>
      <div className="gradient"></div>
      <div className="section-blue">
        <Projects />
      </div>
      <div className="gradient"></div>
      <Contact />
      <div className="gradient"></div>
      <Footer />
    </div>
  );
};

export default Home;
