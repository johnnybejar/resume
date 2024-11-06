import { motion } from "framer-motion";
import "../styles/About.css";
import Icon from "./Icon";

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
          <Icon {...{name: "Typescript", alphaname: "typescript"}} />
          <Icon {...{name: "Python", alphaname: "python"}} />
          <Icon {...{name: "Java", alphaname: "java"}} />
          <Icon {...{name: "React", alphaname: "react"}} />
          <Icon {...{name: "Node.js", alphaname: "nodejs"}} />
          <Icon {...{name: "HTML", alphaname: "html"}} />
          <Icon {...{name: "CSS", alphaname: "css"}} />
          <Icon {...{name: "PHP", alphaname: "php"}} />
          <Icon {...{name: "Dart", alphaname: "dart"}} />
          <Icon {...{name: "MySQL", alphaname: "mysql"}} />
          <Icon {...{name: "Typescript", alphaname: "typescript"}} />
          <Icon {...{name: "Go", alphaname: "go"}} />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
