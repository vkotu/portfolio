const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects I'm proud of</h2>
      <article>
        <div className="text">
          <h4>PayPal's Project</h4>
          <h3>Merchant Funds Management</h3>
          <p className="blackbox">
            Did a complete redesign and built the merchant's money dashboard/
            money transfers experiences from scratch that was built previously
            using legacy libraries and practices. You can see the experience by
            signing up for a{" "}
            <a href="https://www.paypal.com/us/webapps/mpp/account-selection">
              business
            </a>{" "}
            and accessing this{" "}
            <a href="https://www.paypal.com/businesswallet/money">page</a>.
            There are ~2 million active users per month using this dashboard and
            performing various actions.
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
            Built micro front end components hosted on internal micro front end
            framework. All the components in the page are independent and can be
            built with any tech stack. You can see the experience by signing up
            for a{" "}
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
        <img src="/1.png" alt="Screen shot of paypal merchant home page." />
      </article>
      <article>
        <div className="text">
          <h4>PayPal's Project</h4>
          <h3>Merchant's Tenancy Level Experience</h3>
          <p className="blackbox">
            This project is developed to address pain points of large merchants
            like ebay, Amazon etc. Architected, designed, and co implemented
            this project by collaborating with various cross functional teams
            across PayPal to achieve this.
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
        <img src="/3.png" alt="Screenshot of the Wall of Wonder Collections." />
      </article>
      <article className="reverse">
        <div className="text">
          <h4>Personal learning project</h4>
          <h3>Music app like a spotify</h3>
          <p className="blackbox">
            This project was developed during a next.js workshop. I Learned a lot
            about next.js framework and how to build applications securely while working on this project.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>Next.js</li>
            <li>ReactJS</li>
            <li>ChakraUI</li>
            <li>Parcel</li>
          </ul>
        </div>
        <img
          src="/music.png"
          alt="Screenshot of the Wall of Wonder Collections."
        />
      </article>
      <article>
        <div className="text">
          <h4>Master's Course Project</h4>
          <h3>Smart Plate!</h3>
          <p className="blackbox">
            Project is about providing the nutritional facts for a food product
            through RFID scanning. . You can watch the working demo in my
            youtube channel{" "}
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
        <img src="/6.png" alt="Screen shot of smart plate project." />
      </article>
    </section>
  );
};

export default Projects;
