import { Link } from "react-router-dom";

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
              href="https://docs.google.com/document/d/1-eDoloAiz6YbF_QpQVXu-XFNLuxnDNOLo1nIjqVOOSA/edit#"
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

        <h2>Passionate Javascript Developer</h2>

        <p>
          Currently, I'm working as a memeber of techinical staff at{" "}
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
        <section id="projects">
          <h2>Projects I'm proud of</h2>
          <article>
            <div className="text">
              <h4>Latest Project</h4>
              <h3>Wall of Wonder</h3>
              <p className="blackbox">
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. A link looks like{" "}
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/">
                  this
                </a>
                , and multiple links look <a href="#">like this</a> and{" "}
                <a href="#">like this</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
              alt="Screenshot of the Wall of Wonder."
            />
          </article>
          <article className="reverse">
            <div className="text">
              <h4>Bootcamp Project</h4>
              <h3>Feed-A-Star-Mole Game</h3>
              <p className="blackbox">
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. A link looks like
                <a href="https://frontendmasters.github.io/bootcamp/mole">
                  this
                </a>
                , and multiple links look <a href="#">like this</a> and
                <a href="#">like this</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-5.png"
              alt="Screenshot of the Frontend Masters Bootcamp."
            />
          </article>
          <article>
            <div className="text">
              <h4>Photography Project</h4>
              <h3>Wall of Wonder Collection</h3>
              <p className="blackbox">
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. A link looks like
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/grid-figure-figcaption">
                  this
                </a>
                , and multiple links look <a href="#">like this</a> and
                <a href="#">like this</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS Grid</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-4.png"
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </section>
      </div>
      <div className="gradient"></div>
      <div className="section-plum">
        <section id="contact">
          <h2>Contact me</h2>

          <p>
            I'm always interested in exploring more JavaScript, solve new
            challenges.
          </p>

          <p>
            <a href="mailto:vkotu24@gmail.com" className="button">
              Email me
            </a>
          </p>
        </section>
      </div>
      <div className="gradient"></div>
      <footer>
        <h2>Venkat Kotu &middot; Sr Software Engineer</h2>
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

export default Home;
