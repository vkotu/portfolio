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
              href="https://drive.google.com/file/d/10oQJzBujSxMy23K1a5oUJgLjECFCfTdD/view?usp=sharing"
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
              <h4>PayPal's Project</h4>
              <h3>Merchant Funds Management</h3>
              <p className="blackbox">
                Did a complete redesign and built the merchant's money
                dashboard/ money transfers experiences from scratch that was
                built previously using legacy libraries and practices. You can
                see the experience by signing up for a{" "}
                <a href="https://www.paypal.com/us/webapps/mpp/account-selection">
                  business
                </a>{" "}
                and accessing this{" "}
                <a href="https://www.paypal.com/businesswallet/money">page</a>.
                There are ~2 million active users per month using this dashboard
                and performing various actions.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Graphql</li>
                <li>Webpack</li>
              </ul>
            </div>
            <img
              src="/5.png"
              alt="Screenshot of the paypal merchant money dashboard."
            />
          </article>
          <article className="reverse">
            <div className="text">
              <h4>PayPal's Project</h4>
              <h3>Merchant's Home Page</h3>
              <p className="blackbox">
                Built micro front end components hosted on internal micro front
                end framework. All the components in the page are independent
                and can be built with any tech stack. You can see the experience
                by signing up for a{" "}
                <a href="https://www.paypal.com/us/webapps/mpp/account-selection">
                  business
                </a>{" "}
                and accessing this{" "}
                <a href="https://www.paypal.com/mep/dashboard">page</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Graphql</li>
                <li>Webpack</li>
              </ul>
            </div>
            <img src="1.png" alt="Screen shot of paypal merchant home page." />
          </article>
          <article>
            <div className="text">
              <h4>PayPal's Project</h4>
              <h3>Merchant's Tenancy Level Experience</h3>
              <p className="blackbox">
                This project is developed to address pain points of large
                merchants like ebay, Amazon etc. Architected, designed, and co
                implemented this project by collaborating with various cross
                functional teams across PayPal to achieve this.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Graphql</li>
                <li>Webpack</li>
              </ul>
            </div>
            <img
              src="3.png"
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
          <article className="reverse">
            <div className="text">
              <h4>Master's Course Project</h4>
              <h3>Smart Plate!</h3>
              <p className="blackbox">
                Project is about providing the nutritional facts for a food
                product through RFID scanning. . You can watch the working demo
                in my youtube channel{" "}
                <a href="https://www.youtube.com/watch?v=a3w_cn20VNg">click</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>Node.js</li>
                <li>Socket.io</li>
                <li>MySQL</li>
              </ul>
            </div>
            <img src="6.png" alt="Screen shot of smart plate project." />
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
        <h2>Venkat Kotu - Senior Software Engineer</h2>
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
