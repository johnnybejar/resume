import { motion } from "framer-motion";
import Project from "./Project";
import projects from "../data/projects.json";
import "../styles/Projects.css";

function Projects() {
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
    </motion.div>
  );
}

export default Projects;
