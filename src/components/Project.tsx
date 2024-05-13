type Project = {
  name: string;
  description: string;
  link: string;
  icons: string[];
};

function Project(project: Project) {
  return (
    <>
      <a className="project-link" href={project.link} target="_blank">
        <h3 className="project-header">{project.name}</h3>
      </a>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.icons.map((icon) => {
          return (
            <img
              className="project-tech-logo"
              src={`static/images/devicons/${icon}.svg`}
              alt={icon}
              title={icon.charAt(0).toUpperCase() + icon.slice(1)}
            />
          );
        })}
      </div>
      <div className="horizontal-rule"></div>
    </>
  );
}

export default Project;
