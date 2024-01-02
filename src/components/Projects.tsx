import { motion } from "framer-motion";
import Project from "./Project";
import projects from "../data/projects.json";
import "../styles/Projects.css";

function Projects() {
  console.log(projects);
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {projects.map((project) => {
        return (
          <div className="project">
            <Project {...project}></Project>
          </div>
        );
      })}
      {/* <div className="project">
        <a
          className="project-link"
          href="https://github.com/damoninc/Hawkfinder"
          target="_blank"
        >
          <h3 className="project-header">hawkfinder</h3>
        </a>
        <p className="project-description">
          social media web application built in react with a firebase backend
        </p>
        <div className="project-tech">
          <img
            className="project-tech-logo"
            src="static/images/devicons/react.svg"
            title="React"
          />
          <img
            className="project-tech-logo"
            src="static/images/devicons/firebase.svg"
            title="Firebase"
          />
          <img
            className="project-tech-logo"
            src="static/images/devicons/node.svg"
            title="NodeJS"
          />
        </div>
        <div className="horizontal-rule"></div>
      </div>
      <div className="project">
        <a
          className="project-link"
          href="https://github.com/johnnybejar/albums4you"
          target="_blank"
        >
          <h3 className="project-header">albums4you</h3>
        </a>
        <p className="project-description">
          public forum website where users can share albums
        </p>
        <div className="project-tech">
          <img
            className="project-tech-logo"
            src="static/images/devicons/php.svg"
            title="PHP"
          />
          <img
            className="project-tech-logo"
            src="static/images/devicons/mysql.svg"
            title="MySQL"
          />
        </div>
        <div className="horizontal-rule"></div>
      </div>
      <div className="project">
        <a
          className="project-link"
          href="https://github.com/johnnybejar/ratemyclass"
          target="_blank"
        >
          <h3 className="project-header">rate my class</h3>
        </a>
        <p className="project-description">
          mobile application where uncw students can leave reviews on classes
          available
        </p>
        <div className="project-tech">
          <img
            className="project-tech-logo"
            src="static/images/devicons/flutter.svg"
            title="Flutter"
          />
          <img
            className="project-tech-logo"
            src="static/images/devicons/dart.svg"
            title="Dart"
          />
        </div>
        <div className="horizontal-rule"></div>
      </div>
      <div className="project">
        <a
          className="project-link"
          href="https://github.com/johnnybejar/resume"
          target="_blank"
        >
          <h3 className="project-header">resume website</h3>
        </a>
        <p className="project-description">react application</p>
        <div className="project-tech">
          <img
            className="project-tech-logo"
            src="static/images/devicons/react.svg"
            title="React"
          />
          <img
            className="project-tech-logo"
            src="static/images/devicons/typescript.svg"
            title="Typescript"
          />
        </div>
        <div className="horizontal-rule"></div>
      </div>
      <div className="project">
        <a
          className="project-link"
          href="https://github.com/johnnybejar/blackjack"
          target="_blank"
        >
          <h3 className="project-header">blackjack card game</h3>
        </a>
        <p className="project-description">blackjack implemented with java</p>
        <div className="project-tech">
          <img
            className="project-tech-logo"
            src="static/images/devicons/java.svg"
            title="Java"
          />
        </div>
        <div className="horizontal-rule"></div>
      </div>
      <div className="project">
        <a
          className="project-link"
          href="https://github.com/johnnybejar/dot-clicker"
          target="_blank"
        >
          <h3 className="project-header">dot clicker</h3>
        </a>
        <p className="project-description">
          simple react project where the user can put dots on the screen
        </p>
        <div className="project-tech">
          <img
            className="project-tech-logo"
            src="static/images/devicons/react.svg"
            title="React"
          />
          <img
            className="project-tech-logo"
            src="static/images/devicons/typescript.svg"
            title="Typescript"
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Projects;
