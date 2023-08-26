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
        hey! im john bejar, an aspiring programmer interested in software
        engineering and web developement.
      </p>
      <p className="about-text">
        i am currently studying at the university of north carolina - wilmington
        majoring in computer science with a concentration in software
        engineering.
      </p>

      <div className="tech">
        <span className="tech-title">
          list of tech that i have worked with:
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
              src="static/images/devicons/express.svg"
              alt="dev icon"
              title="Express"
            />
            <figcaption className="fig-caption">Express</figcaption>
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
              src="static/images/devicons/rust.svg"
              alt="dev icon"
              title="Rust"
            />
            <figcaption className="fig-caption">Rust</figcaption>
          </figure>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
