import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <p className="about-content">
        hey! im john bejar, an aspiring programmer interested in software
        engineering and web developement.
      </p>
      <p className="about-content">
        i am currently studying at the university of north carolina - wilmington
        majoring in computer science with a concentration in software
        engineering.
      </p>

      <div className="tech">
        <span className="tech-title">
          list of tech that i have worked with:
        </span>
        <div className="icons">
          <img
            className="dev-icons"
            src="src/assets/devicons/typescript.svg"
            alt="dev icon"
            title="Typescript"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/python.svg"
            alt="dev icon"
            title="Python"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/java.svg"
            alt="dev icon"
            title="Java"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/react.svg"
            alt="dev icon"
            title="React"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/html.svg"
            alt="dev icon"
            title="HTML"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/css.svg"
            alt="dev icon"
            title="CSS"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/php.svg"
            alt="dev icon"
            title="PHP"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/dart.svg"
            alt="dev icon"
            title="Dart"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/mysql.svg"
            alt="dev icon"
            title="MySQL"
          />
          <img
            className="dev-icons"
            src="src/assets/devicons/rust.svg"
            alt="dev icon"
            title="Rust"
          />
        </div>
      </div>
    </div>
  );
}

export default About;