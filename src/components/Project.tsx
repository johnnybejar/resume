type Project = {
  name: string;
  description: string;
  link: string;
  deploy_link: string;
  icons: string[];
};

function Project(project: Project) {
  return (
    <>
      <h3 className="project-header">{project.name}</h3>
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
        <div className="project-links">
          <a href={project.link} className="project-link" target="_blank">Repository</a>
          {project.deploy_link ? <a className="project-link" href={project.deploy_link} target="_blank">Deployment</a> : <></>}
        </div>
    </>
  );
}

export default Project;
