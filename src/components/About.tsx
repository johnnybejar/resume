import { motion } from "framer-motion";
import "../styles/About.css";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="about-text">
        Thank you for visiting my page!
      </p>
      <p className="about-text">
        My name is John Bejar, I am a programmer 
        concentrated in software engineering and web development.
      </p>
      <p className="about-text">
        I graduated from the University of North Carolina - Wilmington in Spring 2024. 
        I received my Bachelors of Science, with a major in Computer Science and a 
        concentration in Software Engineering.
      </p>
      <p className="about-text">
        I am currently looking to begin working in the technology field. Please 
        refer to my contact information to get in touch and thank you for your time!
      </p>
      <div className="tech">
        <span className="tech-title">
          Below is a list of technology I have experience working with:
        </span>
        <div className="dev-icons">
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/typescript.svg"
              alt="dev icon"
              title="Typescript"
            />
            <figcaption>Typescript</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/python.svg"
              alt="dev icon"
              title="Python"
            />
            <figcaption className="fig-caption">Python</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/java.svg"
              alt="dev icon"
              title="Java"
            />
            <figcaption className="fig-caption">Java</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/react.svg"
              alt="dev icon"
              title="React"
            />
            <figcaption className="fig-caption">React</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/node.svg"
              alt="dev icon"
              title="Node.js"
            />
            <figcaption className="fig-caption">Node.js</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/html.svg"
              alt="dev icon"
              title="HTML"
            />
            <figcaption className="fig-caption">HTML</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/css.svg"
              alt="dev icon"
              title="CSS"
            />
            <figcaption className="fig-caption">CSS</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/php.svg"
              alt="dev icon"
              title="PHP"
            />
            <figcaption className="fig-caption">PHP</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/dart.svg"
              alt="dev icon"
              title="Dart"
            />
            <figcaption className="fig-caption">Dart</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/mysql.svg"
              alt="dev icon"
              title="MySQL"
            />
            <figcaption className="fig-caption">MySQL</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/mongodb.svg"
              alt="dev icon"
              title="MongoDB"
            />
            <figcaption className="fig-caption">MongoDB</figcaption>
          </figure>
          <figure className="dev-figure">
            <img
              className="dev-icon"
              src="static/images/devicons/go.svg"
              alt="dev icon"
              title="Go"
            />
            <figcaption className="fig-caption">Go</figcaption>
          </figure>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
