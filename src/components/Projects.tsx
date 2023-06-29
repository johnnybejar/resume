import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="project">
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
            src="src/assets/devicons/react.svg"
            title="React"
          />
          <img
            className="project-tech-logo"
            src="src/assets/devicons/firebase.svg"
            title="Firebase"
          />
          <img
            className="project-tech-logo"
            src="src/assets/devicons/node.svg"
            title="NodeJS"
          />
        </div>
        <div className="horizontal-rule"></div>
      </div>
      <div className="project">
        <h3 className="project-header">albums4you</h3>
        <p className="project-description">
          public forum website where users can share albums
        </p>
        <div className="project-tech">
          <img
            className="project-tech-logo"
            src="src/assets/devicons/php.svg"
            title="PHP"
          />
          <img
            className="project-tech-logo"
            src="src/assets/devicons/mysql.svg"
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
            src="src/assets/devicons/flutter.svg"
            title="Flutter"
          />
          <img
            className="project-tech-logo"
            src="src/assets/devicons/dart.svg"
            title="Dart"
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
            src="src/assets/devicons/java.svg"
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
            src="src/assets/devicons/react.svg"
            title="React"
          />
          <img
            className="project-tech-logo"
            src="src/assets/devicons/typescript.svg"
            title="Typescript"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
